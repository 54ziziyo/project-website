<template>
  <footer class="bg-[#F1F0FF] text-stone-600 pt-10 pb-5 text-center text-sm space-y-16">
    <div
      class="flex lg:justify-evenly flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8 mx-10 lg:mx-0"
    >
      <div class="text-left">
        <div class="font-bold font-[Hammersmith_One]">Zeona</div>
        <div>{{ t('footer.tagline') }}</div>
      </div>
      <div class="space-x-4 flex">
        <div class="space-y-2 flex flex-col items-start">
          <NuxtLink :to="localePath('/about')" :title="t('footer.about')" class="hover:text-[#8782FF] transition">{{
            t('footer.about')
          }}</NuxtLink>
          <NuxtLink :to="localePath('/faq')" :title="t('footer.faq')" class="hover:text-[#8782FF] transition">{{
            t('footer.faq')
          }}</NuxtLink>
          <NuxtLink :to="localePath('/works')" :title="t('footer.works')" class="hover:text-[#8782FF] transition">{{
            t('footer.works')
          }}</NuxtLink>
        </div>
        <div class="space-y-2 flex flex-col items-start">
          <NuxtLink :to="localePath('/privacy')" :title="t('footer.privacy')" class="hover:text-[#8782FF] transition">{{
            t('footer.privacy')
          }}</NuxtLink>
          <NuxtLink :to="localePath('/terms')" :title="t('footer.terms')" class="hover:text-[#8782FF] transition">{{
            t('footer.terms')
          }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')" :title="t('footer.contact')" class="hover:text-[#8782FF] transition">{{
            t('footer.contact')
          }}</NuxtLink>
        </div>
        <div class="space-y-2 flex flex-col items-start">
          <NuxtLink
            :to="localePath('/services/website')"
            :title="t('footer.software')"
            class="hover:text-[#8782FF] transition"
            >{{ t('footer.software') }}</NuxtLink
          >
          <NuxtLink
            :to="localePath('/services/marketing')"
            :title="t('footer.marketing')"
            class="hover:text-[#8782FF] transition"
            >{{ t('footer.marketing') }}</NuxtLink
          >
          <NuxtLink
            :to="localePath('/services/design')"
            :title="t('footer.design')"
            class="hover:text-[#8782FF] transition"
            >{{ t('footer.design') }}</NuxtLink
          >
        </div>
        <div class="space-y-2 flex flex-col items-start">
          <NuxtLink
            :to="localePath('/services/all')"
            :title="t('footer.allServices')"
            class="hover:text-[#8782FF] transition"
            >{{ t('footer.allServices') }}</NuxtLink
          >
          <NuxtLink :to="localePath('/blog')" :title="t('footer.blog')" class="hover:text-[#8782FF] transition">{{
            t('footer.blog')
          }}</NuxtLink>
        </div>
      </div>
      <div class="space-y-2 flex flex-col">
        <div class="flex space-x-2">
          <div>{{ t('footer.hours') }}</div>
          <div>{{ t('footer.hoursVal') }}</div>
        </div>
        <div class="flex space-x-2">
          <div>{{ t('footer.email') }}</div>
          <a
            href="mailto:54ziziyo@gmail.com"
            title="54ziziyo@gmail.com"
            class="hover:text-[#8782FF] transition"
            >54ziziyo@gmail.com</a
          >
        </div>
        <div class="flex space-x-2">
          <div>{{ t('footer.lineId') }}</div>
          <a
            href="https://line.me/ti/p/@768viuqz"
            target="_blank"
            rel="noopener noreferrer"
            title="@768viuqz"
            class="hover:text-[#8782FF] transition"
            >@768viuqz</a
          >
        </div>
      </div>
    </div>
    <div class="container mx-auto font-bold">
      <p>© {{ currentYear }} Zeona. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
const currentYear = new Date().getFullYear()
</script>
