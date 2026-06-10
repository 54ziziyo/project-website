import MarkdownIt from 'markdown-it'
import anchor from 'markdown-it-anchor'

// 課程內容渲染器：把「JSON 設定 + Markdown 內容」填回共用外殼 _course-shell.html，
// 產出與原本 ai-personal-brand.html 視覺/互動完全一致的頁面。
// 新商品只要提供一份 .md（含設定 frontmatter）即可，不用再寫整頁 HTML。

export interface CourseConfig {
  pageTitle: string
  brandTitle: string
  brandSub: string
  footer: string
  cover: { title: string; sub: string; chips: { icon: string; color: string; text: string }[] }
  industries?: { summary: string; intro: string; items: { h: string; p: string }[] }
  parts: { id: string; icon: string; color: string; bg: string; label: string; sub?: string }[]
  stats?: { groupTitle: string; rows: { k: string; v: string }[] }
  quickjumps?: { href: string; icon: string; label: string; sub: string }[]
}

// [填入…] 之類占位字串 → <span class="v">（與原本同樣的高亮）
function highlightVars(s: string): string {
  return s.replace(/\[[^\]\n]{1,60}\]/g, (m) => `<span class="v">${m}</span>`)
}

let mdCache: MarkdownIt | null = null
function getMd(idMap: Map<string, string>): MarkdownIt {
  // idMap 會在每次 render 前更新，所以共用實例即可
  if (mdCache) return mdCache
  const md = new MarkdownIt({ html: false, linkify: true, breaks: false })
  md.use(anchor, {
    slugify: (s: string) => idMap.get(s.trim()) || 'h-' + s.trim().replace(/\s+/g, '-'),
  })
  mdCache = md
  return md
}

// 把可展開卡片清單（::: ideas）轉成原本的 day-grid accordion
function buildIdeas(inner: string): string {
  const cards = inner
    .split(/^---[ \t]*$/m)
    .map((c) => c.trim())
    .filter(Boolean)
  const cardHtml = cards
    .map((card) => {
      const nl = card.indexOf('\n')
      const header = nl >= 0 ? card.slice(0, nl) : card
      const prompt = nl >= 0 ? card.slice(nl + 1).trim() : ''
      const [num, theme, icon, fmt] = header.split('|').map((s) => s.trim())
      const detail = prompt
        ? `<div class="day-detail" onclick="event.stopPropagation()">` +
          `<div class="dd-bar"><span>ChatGPT 提示詞範例</span><button class="copy-btn" onclick="copyDD(this)">複製</button></div>` +
          `<div class="dd-text">${highlightVars(escapeKeepBrackets(prompt))}</div></div>`
        : ''
      return (
        `<div class="day-card" onclick="toggleDay(this)">` +
        `<div class="d-num">${esc(num)}</div>` +
        `<div class="d-theme">${esc(theme)}</div>` +
        `<div class="d-fmt"><span class="mi">${esc(icon || '')}</span> ${esc(fmt || '')}</div>` +
        (prompt ? `<div class="dd-hint">點開看範例提示詞 ▾</div>` : '') +
        detail +
        `</div>`
      )
    })
    .join('')
  return `<div class="day-grid">${cardHtml}</div>`
}

// 把每週行事曆（::: calendar id | 週標題）轉成原本的 cal-week 卡片格
function buildCalendar(info: string, inner: string): string {
  const [id, label] = info.split('|').map((s) => s.trim())
  const days = inner
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => {
      const [dayLbl, icon, focus, task] = line.split('|').map((s) => s.trim())
      return (
        `<div class="cal-day"><div class="c-lbl">${esc(dayLbl)}</div>` +
        `<div class="c-task"><span class="c-focus"><span class="mi">${esc(icon || '')}</span> ${esc(focus || '')}</span> — ${highlightVars(escapeKeepBrackets(task || ''))}</div></div>`
      )
    })
    .join('')
  return `<div class="cal-week"${id ? ` id="${id}"` : ''}><div class="cal-wlbl">${esc(label || '')}</div>${days}</div>`
}

// 從 body 抽出 ::: prompt / data / tip / ideas / calendar 區塊，換成佔位，之後再塞回對應 HTML（內容保持原樣、不被 markdown 破壞）
function extractBlocks(body: string): { body: string; blocks: string[] } {
  const blocks: string[] = []
  const re = /^::: (prompt|data|tip|ideas|calendar)([^\n]*)\n([\s\S]*?)\n:::[ \t]*$/gm
  const out = body.replace(re, (_m, kind: string, info: string, inner: string) => {
    let html: string
    if (kind === 'calendar') {
      html = buildCalendar(info, inner)
    } else if (kind === 'prompt') {
      const content = highlightVars(escapeKeepBrackets(inner.trim()))
      html =
        `<div class="prompt-box"><div class="p-lbl">` +
        `<span class="p-lbl-t">ChatGPT 提示詞</span>` +
        `<button class="copy-btn" onclick="copyP(this)">複製</button></div>` +
        `<div class="p-content">${content}</div></div>`
    } else if (kind === 'tip') {
      html =
        `<div class="tip"><span class="mi" style="font-size: 15px; color: #f59e0b">lightbulb</span> ` +
        `${highlightVars(escapeKeepBrackets(inner.trim().replace(/\n+/g, ' ')))}</div>`
    } else if (kind === 'ideas') {
      html = buildIdeas(inner)
    } else {
      // data：第一段「導語｜內文」，導語加粗＋verified 圖示
      const text = inner.trim().replace(/\n+/g, ' ')
      const i = text.indexOf('｜')
      const lead = i >= 0 ? text.slice(0, i) : '官方數據'
      const rest = i >= 0 ? text.slice(i) : '｜' + text
      html = `<div class="data-box"><strong><span class="mi">verified</span> ${escapeKeepBrackets(lead)}</strong>${escapeKeepBrackets(rest)}</div>`
    }
    blocks.push(html)
    return `\n\n@@BLOCK${blocks.length - 1}@@\n\n`
  })
  return { body: out, blocks }
}

// 每個 Part 底部的「上一篇／下一篇」（沿用原本 prevPart()/nextPart()）
const PNAV =
  `<div class="pnav" style="display: flex; align-items: center; justify-content: space-between; padding: 28px 0 12px; margin-top: 20px; border-top: 1px solid var(--bdr); gap: 12px;">` +
  `<button class="pnav-btn" onclick="prevPart()"><span class="mi">arrow_back_ios</span><span>上一篇</span></button>` +
  `<button class="pnav-btn primary" onclick="nextPart()"><span>下一篇</span><span class="mi">arrow_forward_ios</span></button></div>`

// 只跳脫 < > &，保留中括號與全形符號
function escapeKeepBrackets(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// 解析 heading 裡的 {#id} 顯式錨點，回傳 textToId map 並把 {#id} 從原始碼移除
function parseExplicitIds(body: string): { body: string; idMap: Map<string, string> } {
  const idMap = new Map<string, string>()
  const out = body.replace(/^(#{2,4} .+?)\s*\{#([\w-]+)\}\s*$/gm, (_m, head: string, id: string) => {
    const text = head.replace(/^#{2,4}\s+/, '').trim()
    idMap.set(text, id)
    return head
  })
  return { body: out, idMap }
}

export function renderCourse(shell: string, src: string): string {
  // 1) 解析 JSON frontmatter
  const fm = src.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!fm) throw new Error('course md 缺少 frontmatter')
  const cfg = JSON.parse(fm[1]) as CourseConfig
  let body = src.slice(fm[0].length)

  // 2) 顯式 id + 抽出 prompt/data 區塊
  const ids = parseExplicitIds(body)
  body = ids.body
  const extracted = extractBlocks(body)
  body = extracted.body
  const md = getMd(ids.idMap)

  // 3) 依 H2 切成各 Part，逐段渲染
  const chunks = body.split(/\n(?=## )/).filter((c) => c.trim().startsWith('## '))
  const partHtmls: string[] = []
  const sidebarNps: string[] = []

  chunks.forEach((chunk, i) => {
    const meta = cfg.parts[i]
    if (!meta) return
    let rendered = md.render(chunk)
    // 標題裡的 :icon_name: → material 圖示（在塞回 prompt 內容前做，避免動到提示詞文字）
    rendered = rendered.replace(/:([a-z_]{2,30}):/g, '<span class="mi">$1</span>')
    // 把 prompt/data/tip/ideas 佔位塞回
    rendered = rendered.replace(/<p>@@BLOCK(\d+)@@<\/p>/g, (_m, n) => extracted.blocks[+n])
    // 第一個 <p> → pt-desc（與原本同樣的副標樣式）
    rendered = rendered.replace(/<p>/, '<p class="pt-desc">')

    const n = i + 1
    const active = i === 0 ? ' active' : ''
    partHtmls.push(
      `<div class="part-page${active}" data-part="${i}" data-part-id="${meta.id}" data-part-title="${esc(meta.label)}">` +
        `<div class="pt-sec" id="${meta.id}">` +
        `<div class="pt-tag"><span class="mi">${meta.icon}</span> Part ${n}</div>` +
        rendered +
        PNAV +
        `</div></div>`,
    )

    // 側欄：本 Part 的 h3 與每週行事曆 → 子連結（依文件順序）
    const subs: string[] = []
    const subRe = /<h3 id="([^"]+)"[^>]*>(.*?)<\/h3>|<div class="cal-week" id="([^"]+)"><div class="cal-wlbl">([^<]*)<\/div>/g
    let mm: RegExpExecArray | null
    while ((mm = subRe.exec(rendered))) {
      const id = mm[1] || mm[3]
      const raw = mm[2] !== undefined ? mm[2] : mm[4]
      // 標籤去掉圖示 span（含文字）再去掉其餘標籤
      const label = stripTags(raw.replace(/<span class="mi">[^<]*<\/span>/g, ''))
      subs.push(`<a href="#${id}" class="nc">${label}</a>`)
    }
    sidebarNps.push(
      `<div class="np"><a href="#${meta.id}" class="nph">` +
        `<div class="np-icon" style="background: ${meta.bg}"><span class="mi" style="color: ${meta.color}">${meta.icon}</span></div>` +
        `<div><div class="np-title">${esc(meta.label)}</div>` +
        (meta.sub ? `<div class="np-sub">${esc(meta.sub)}</div>` : '') +
        `</div></a>` +
        (subs.length ? `<div class="nc-wrap">${subs.join('')}</div>` : '') +
        `</div>`,
    )
  })

  // 4) 側欄完整區塊
  const sidebar = `<div class="s-sec"><div class="s-sec-lbl">課程目錄</div>${sidebarNps.join('')}</div>`

  // 5) cover chips
  const chips = cfg.cover.chips
    .map((c) => `<div class="m-chip"><span class="mi" style="color: ${c.color}">${c.icon}</span> ${esc(c.text)}</div>`)
    .join('\n            ')

  // 6) ind-ref（五大產業等）
  const indref = cfg.industries
    ? `<details class="ind-ref"><summary><span class="mi">lightbulb</span> ${esc(cfg.industries.summary)}</summary>` +
      `<div class="ind-ref-body"><p class="intro">${highlightVars(esc(cfg.industries.intro))}</p>` +
      cfg.industries.items.map((it) => `<div class="ind-item"><h4>${esc(it.h)}</h4><p>${esc(it.p)}</p></div>`).join('') +
      `</div></details>`
    : ''

  // 7) 右側速查面板
  let rightpanel = ''
  if (cfg.stats || cfg.quickjumps) {
    const statBlock = cfg.stats
      ? `<div><div class="pnl-title">關鍵數字速查</div><div class="stats-w"><div class="sw-t">${esc(cfg.stats.groupTitle)}</div>` +
        cfg.stats.rows.map((r) => `<div class="s-row"><span class="s-key">${esc(r.k)}</span><span class="s-val">${esc(r.v)}</span></div>`).join('') +
        `</div></div>`
      : ''
    const jumpBlock = cfg.quickjumps
      ? `<div><div class="pnl-title">快速跳到提示詞</div><div class="qc-list">` +
        cfg.quickjumps
          .map(
            (q) =>
              `<a href="${q.href}" class="qc-item"><div class="qc-icon"><span class="mi">${q.icon}</span></div>` +
              `<div><div class="qc-lbl">${esc(q.label)}</div><div class="qc-sub">${esc(q.sub)}</div></div></a>`,
          )
          .join('') +
        `</div></div>`
      : ''
    rightpanel = statBlock + jumpBlock
  }

  // 8) 填回外殼
  return shell
    .replace('<!--PAGE_TITLE-->', esc(cfg.pageTitle))
    .replace(/<!--BRAND_TITLE-->/g, esc(cfg.brandTitle))
    .replace('<!--BRAND_SUB-->', esc(cfg.brandSub))
    .replace('<!--COVER_TITLE-->', `<h1>${cfg.cover.title}</h1>`)
    .replace('<!--COVER_SUB-->', `<p>${cfg.cover.sub}</p>`)
    .replace('<!--COVER_CHIPS-->', chips)
    .replace('<!--INDREF-->', indref)
    .replace('<!--SIDEBAR-->', sidebar)
    .replace('<!--PARTS-->', partHtmls.join('\n'))
    .replace('<!--RIGHTPANEL-->', rightpanel)
    .replace('<!--FOOTER-->', esc(cfg.footer))
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
function stripTags(s: string): string {
  return s.replace(/<[^>]*>/g, '').trim()
}
