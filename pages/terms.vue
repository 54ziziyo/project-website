<template>
  <main class="bg-[#F8F7FF] min-h-screen md:py-32 py-28">
    <section class="max-w-4xl mx-auto px-6 space-y-10">
      <header class="space-y-3 text-center">
        <p class="text-[#8782FF] font-semibold">服務條款</p>
        <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937]">使用本網站與合作前須知</h1>
        <p class="text-[#4B5563] text-base md:text-lg">請閱讀以下條款，了解使用本網站及與我合作時的基本約定與責任。</p>
      </header>

      <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-[#E5E7EB] p-6 md:p-10 space-y-8">
        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-[#1F2937]">1. 服務範圍</h2>
          <p class="text-[#4B5563]">包含網站設計與開發、品牌設計、行銷物設計等，最終依專案合約或報價單為準。</p>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-[#1F2937]">2. 報價與付款</h2>
          <ul class="list-disc list-inside text-[#4B5563] space-y-2">
            <li>正式合作前會提供報價與時程，雙方確認後啟動專案。</li>
            <li>通常採取訂金＋尾款或里程碑付款，細節依合約訂立。</li>
          </ul>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-[#1F2937]">3. 交付與修正</h2>
          <ul class="list-disc list-inside text-[#4B5563] space-y-2">
            <li>交付內容以合約或需求確認單為準，包含檔案格式、設計稿或程式碼。</li>
            <li>修正次數與範圍將於專案啟動時說明，超出範圍的變更將另外報價。</li>
          </ul>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-[#1F2937]">4. 知識產權</h2>
          <ul class="list-disc list-inside text-[#4B5563] space-y-2">
            <li>最終交付的設計成品與程式碼，其使用權或著作權歸屬以合約為準。</li>
            <li>未付款完成或未經允許前，請勿使用、散布或公開部分或全部成果。</li>
          </ul>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-[#1F2937]">5. 責任限制</h2>
          <p class="text-[#4B5563]">
            對於第三方服務（如主機、網域、金物流等）造成的停機或損失不負責，但會協助排查與溝通。
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-[#1F2937]">6. 條款更新</h2>
          <p class="text-[#4B5563]">
            條款可能因服務調整而更新，更新後將於本站發布。若有重大變更，會以合適方式通知合作客戶。
          </p>
        </section>
      </div>

      <div class="text-center">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8782FF] text-white shadow-lg hover:shadow-xl transition"
        >
          需要更多說明？聯繫我
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
