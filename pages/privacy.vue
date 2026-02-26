<template>
  <main class="bg-[#F8F7FF] min-h-screen md:py-32 py-28">
    <section class="max-w-4xl mx-auto px-6 space-y-10">
      <header class="space-y-3 text-center">
        <p class="text-[#8782FF] font-semibold">隱私權政策</p>
        <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937]">保護您的個人資料與資訊安全</h1>
        <p class="text-[#4B5563] text-base md:text-lg">
          我們重視您的隱私，以下說明我們如何收集、使用、保存與保護您的個人資料。
        </p>
      </header>

      <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-[#E5E7EB] p-6 md:p-10 space-y-8">
        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-[#1F2937]">1. 資料的收集與使用</h2>
          <ul class="list-disc list-inside text-[#4B5563] space-y-2">
            <li>為回覆詢問、報價、專案溝通而收集的聯絡資訊（姓名、Email、LINE ID 及需求描述）。</li>
            <li>僅於提供服務、聯繫或必要的行政用途時使用，不會販售或租賃予第三方。</li>
          </ul>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-[#1F2937]">2. 資料的保存與安全</h2>
          <ul class="list-disc list-inside text-[#4B5563] space-y-2">
            <li>資料存放於受權限控管的環境（例如：Google 雲端、電子郵件）。</li>
            <li>僅專案相關人員可存取，並依需求保存；當資料不再需要時會刪除或匿名化。</li>
          </ul>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-[#1F2937]">3. Cookie 與第三方服務</h2>
          <ul class="list-disc list-inside text-[#4B5563] space-y-2">
            <li>本站可能使用基礎分析或反垃圾機制（如 reCAPTCHA）；此類服務可能設定 Cookie 以辨識請求安全性。</li>
            <li>您可透過瀏覽器設定管理或封鎖 Cookie；若封鎖，部分功能可能受影響。</li>
          </ul>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-[#1F2937]">4. 您的權利</h2>
          <ul class="list-disc list-inside text-[#4B5563] space-y-2">
            <li>您可隨時要求查詢、閱覽、補正或刪除您的個人資料。</li>
            <li>若您希望撤回同意或停止使用，請透過下方聯繫方式提出，我們會盡速處理。</li>
          </ul>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-[#1F2937]">5. 聯繫方式</h2>
          <p class="text-[#4B5563]">若對本政策有任何疑問，歡迎透過聯繫頁面與我聯繫，我會盡快回覆。</p>
        </section>
      </div>

      <div class="text-center">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8782FF] text-white shadow-lg hover:shadow-xl transition"
        >
          前往聯繫
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
