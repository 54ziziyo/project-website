<script setup>
const form = {
  name: ref(''),
  brand: ref(''),
  mail: ref(''),
  line: ref(''),
  desc: ref(''),
  startDate: ref(''),
  endDate: ref(''),
  budget: ref(''),
}

const errors = ref({})

function validate() {
  errors.value = {}
  if (!form.name.value) errors.value.name = '姓名為必填'
  if (!form.mail.value || !form.mail.value.includes('@')) errors.value.mail = '請輸入有效的電子信箱'
  if (!form.desc.value) errors.value.desc = '請填寫需求說明'
  if (!form.budget.value) errors.value.budget = '請填寫預算'

  return Object.keys(errors.value).length === 0
}

function onSubmit() {
  if (!validate()) return
  alert('表單已提交！')
}
</script>

<template>
  <div class="space-y-6">
    <!-- 姓名 -->
    <div class="flex flex-col space-y-2">
      <label for="name" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">聯絡人姓名※</label>
      <input
        id="name"
        v-model="form.name.value"
        type="text"
        placeholder="請輸入您的稱呼"
        class="bg-white px-4 py-2 md:py-3 rounded-lg placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm"
      />
      <p v-if="errors.name" class="text-red-500 text-sm px-2">
        {{ errors.name }}
      </p>
    </div>

    <!-- 公司品牌 -->
    <div class="flex flex-col space-y-2">
      <label for="brand" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">公司/品牌名稱</label>
      <input
        id="brand"
        v-model="form.brand.value"
        type="text"
        placeholder="請輸入您的公司/品牌名稱"
        class="bg-white px-4 py-2 md:py-3 rounded-lg placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm"
      />
    </div>

    <!-- 信箱 -->
    <div class="flex flex-col space-y-2">
      <label for="mail" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">電子信箱※</label>
      <input
        id="mail"
        v-model="form.mail.value"
        type="email"
        placeholder="請輸入電子信箱"
        class="bg-white px-4 py-2 md:py-3 rounded-lg placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm"
      />
      <p v-if="errors.mail" class="text-red-500 text-sm px-2">
        {{ errors.mail }}
      </p>
    </div>

    <!-- LINE ID -->
    <div class="flex flex-col space-y-2">
      <label for="line" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">LINE ID</label>
      <input
        id="line"
        v-model="form.line.value"
        type="text"
        placeholder="請提供您的 LINE 確保我可以與您聯繫"
        class="bg-white px-4 py-2 md:py-3 rounded-lg placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm"
      />
      <p v-if="errors.line" class="text-red-500 text-sm px-2">
        {{ errors.line }}
      </p>
    </div>

    <!-- 需求說明 -->
    <div class="flex flex-col space-y-2">
      <label for="desc" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">需求說明※</label>
      <textarea
        id="desc"
        v-model="form.desc.value"
        rows="4"
        placeholder="請提供需求項目、功能等說明..."
        class="bg-white px-4 py-2 md:py-3 rounded-lg placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm"
      ></textarea>
      <p v-if="errors.desc" class="text-red-500 text-sm px-2">
        {{ errors.desc }}
      </p>
    </div>

    <!-- 日期 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex flex-col space-y-2">
        <label for="startDate" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">預計開案日</label>
        <input
          id="startDate"
          v-model="form.startDate.value"
          type="date"
          class="bg-white px-4 py-2 md:py-3 rounded-lg text-[#5B5B5B] focus-visible:outline-none md:text-normal text-[14px]"
        />
      </div>

      <div class="flex flex-col space-y-2">
        <label for="endDate" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">預計結案日</label>
        <input
          id="endDate"
          v-model="form.endDate.value"
          type="date"
          class="bg-white px-4 py-2 md:py-3 rounded-lg text-[#5B5B5B] focus-visible:outline-none md:text-normal text-[14px]"
        />
      </div>
    </div>

    <!-- 預算 -->
    <div class="flex flex-col space-y-2">
      <label for="budget" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">預算範圍※</label>
      <input
        id="budget"
        v-model="form.budget.value"
        type="text"
        placeholder="$120,000"
        class="bg-white px-4 py-2 md:py-3 rounded-lg placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm"
      />
      <p v-if="errors.budget" class="text-red-500 text-sm px-2">
        {{ errors.budget }}
      </p>
    </div>

    <!-- 送出按鈕 -->
    <button
      class="mt-10 w-full py-4 text-[#8782FF] border border-[#8782FF] rounded-xl cursor-pointer flex items-center justify-center hover:bg-[#8782FF] hover:text-white transition-colors duration-300"
      @click="onSubmit"
    >
      送出表單
    </button>
  </div>
</template>
