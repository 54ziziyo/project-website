<script lang="ts" setup>
const { t, tm, rt } = useI18n()
const basicAddons = computed(() => tm('svc.basicAddons') as { name: string; description: string }[])
const advancedAddons = computed(
  () => tm('svc.advancedAddons') as { name: string; description: string; compatible: string }[],
)
</script>
<template>
  <div class="relative px-4 flex justify-center flex-col items-center text-center mb-12">
    <div class="max-w-6xl mx-auto w-full pt-16 mt-16 px-6 md:px-12 space-y-32 lg:space-y-36">
      <div>
        <div class="text-[24px] md:text-[28px] font-bold leading-none mb-2">{{ t('svc.basicTitle') }}</div>
        <div class="text-[#8782FF] text-[16px] md:text-[20px] font-bold mb-3">{{ t('svc.basicSub') }}</div>
        <p class="text-gray-500 text-sm md:text-base mb-10">{{ t('svc.basicNote') }}</p>

        <div class="overflow-x-auto shadow-md rounded-md border">
          <table class="w-full min-w-[500px]">
            <thead class="border-b bg-[#F1F0FF]">
              <tr>
                <th
                  class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                >
                  {{ t('svc.colItem') }}
                </th>
                <th
                  class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                >
                  {{ t('svc.colDesc') }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 text-sm md:text-base">
              <tr v-for="(item, index) in basicAddons" :key="'basic-' + index" class="hover:bg-[#F1F0FF]/30">
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap min-w-[150px]">
                  {{ rt(item.name) }}
                </td>
                <td class="px-6 py-4 text-gray-600 text-left min-w-[300px]">
                  {{ rt(item.description) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div class="text-[24px] md:text-[28px] font-bold leading-none mb-2">{{ t('svc.advTitle') }}</div>
        <div class="text-[#8782FF] text-[16px] md:text-[20px] font-bold mb-3">{{ t('svc.advSub') }}</div>
        <p class="text-gray-500 text-sm md:text-base mb-10">{{ t('svc.advNote') }}</p>
        <div class="overflow-x-auto shadow-md rounded-md border">
          <table class="w-full min-w-[600px]">
            <thead class="border-b bg-[#F1F0FF]">
              <tr>
                <th
                  class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                >
                  {{ t('svc.colItem') }}
                </th>
                <th
                  class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                >
                  {{ t('svc.colDesc') }}
                </th>
                <th
                  class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                >
                  {{ t('svc.colCompat') }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(item, index) in advancedAddons" :key="'advanced-' + index" class="hover:bg-[#F1F0FF]/30">
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{{ rt(item.name) }}</td>
                <td class="px-6 py-4 text-gray-600 text-left min-w-[300px]">{{ rt(item.description) }}</td>
                <td class="px-6 py-4 text-gray-600 whitespace-nowrap">{{ rt(item.compatible) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
