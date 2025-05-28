<script setup>
import { ref } from "vue";

const form = {
  name: ref(""),
  brand: ref(""),
  mail: ref(""),
  line: ref(""),
  desc: ref(""),
  startDate: ref(""),
  endDate: ref(""),
  budget: ref(""),
  agree: ref(false),
};

const errors = ref({});

function validate() {
  errors.value = {};
  if (!form.name.value) errors.value.name = "姓名為必填";
  if (!form.mail.value || !form.mail.value.includes("@"))
    errors.value.mail = "請輸入有效的電子信箱";
  if (!form.desc.value) errors.value.desc = "請填寫需求說明";
  if (!form.budget.value) errors.value.budget = "請填寫預算";
  if (!form.agree.value) errors.value.agree = "請同意條款與隱私政策";

  return Object.keys(errors.value).length === 0;
}

function onSubmit() {
  if (!validate()) return;
  alert("表單已提交！");
}
</script>

<template>
  <div class="space-y-6">
    <!-- 姓名 -->
    <div class="flex flex-col space-y-2">
      <label for="name" class="text-[#5B5B5B] text-[18px] mb-2"
        >聯絡人姓名※</label
      >
      <input
        v-model="form.name.value"
        id="name"
        type="text"
        placeholder="請輸入您的稱呼"
        class="bg-white px-6 py-3 rounded-lg placeholder:text-[#A2A2A2] focus-visible:outline-none"
      />
      <p v-if="errors.name" class="text-red-500 text-sm px-2">
        {{ errors.name }}
      </p>
    </div>

    <!-- 公司品牌 -->
    <div class="flex flex-col space-y-2">
      <label for="brand" class="text-[#5B5B5B] text-[18px] mb-2"
        >公司/品牌名稱</label
      >
      <input
        v-model="form.brand.value"
        id="brand"
        type="text"
        placeholder="請輸入您的公司/品牌名稱"
        class="bg-white px-6 py-3 rounded-lg placeholder:text-[#A2A2A2] focus-visible:outline-none"
      />
    </div>

    <!-- 信箱 -->
    <div class="flex flex-col space-y-2">
      <label for="mail" class="text-[#5B5B5B] text-[18px] mb-2"
        >電子信箱※</label
      >
      <input
        v-model="form.mail.value"
        id="mail"
        type="email"
        placeholder="請輸入電子信箱"
        class="bg-white px-6 py-3 rounded-lg placeholder:text-[#A2A2A2] focus-visible:outline-none"
      />
      <p v-if="errors.mail" class="text-red-500 text-sm px-2">
        {{ errors.mail }}
      </p>
    </div>

    <!-- LINE ID -->
    <div class="flex flex-col space-y-2">
      <label for="line" class="text-[#5B5B5B] text-[18px] mb-2">LINE ID※</label>
      <input
        v-model="form.line.value"
        id="line"
        type="text"
        placeholder="請提供您的 LINE 確保我們可以與您聯繫"
        class="bg-white px-6 py-3 rounded-lg placeholder:text-[#A2A2A2] focus-visible:outline-none"
      />
      <p v-if="errors.line" class="text-red-500 text-sm px-2">
        {{ errors.line }}
      </p>
    </div>

    <!-- 需求說明 -->
    <div class="flex flex-col space-y-2">
      <label for="desc" class="text-[#5B5B5B] text-[18px] mb-2"
        >需求說明※</label
      >
      <textarea
        v-model="form.desc.value"
        id="desc"
        rows="4"
        placeholder="請提供需求項目、功能等說明..."
        class="bg-white px-6 py-3 rounded-lg placeholder:text-[#A2A2A2] focus-visible:outline-none"
      ></textarea>
      <p v-if="errors.desc" class="text-red-500 text-sm px-2">
        {{ errors.desc }}
      </p>
    </div>

    <!-- 日期 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex flex-col space-y-2">
        <label for="startDate" class="text-[#5B5B5B] text-[18px] mb-2"
          >預計開案日</label
        >
        <input
          v-model="form.startDate.value"
          id="startDate"
          type="date"
          class="bg-white px-6 py-3 rounded-lg text-[#5B5B5B] focus-visible:outline-none"
        />
      </div>

      <div class="flex flex-col space-y-2">
        <label for="endDate" class="text-[#5B5B5B] text-[18px] mb-2"
          >預計結案日</label
        >
        <input
          v-model="form.endDate.value"
          id="endDate"
          type="date"
          class="bg-white px-6 py-3 rounded-lg text-[#5B5B5B] focus-visible:outline-none"
        />
      </div>
    </div>

    <!-- 預算 -->
    <div class="flex flex-col space-y-2">
      <label for="budget" class="text-[#5B5B5B] text-[18px] mb-2"
        >預算範圍※</label
      >
      <input
        v-model="form.budget.value"
        id="budget"
        type="text"
        placeholder="$120,000"
        class="bg-white px-6 py-3 rounded-lg placeholder:text-[#A2A2A2] focus-visible:outline-none"
      />
      <p v-if="errors.budget" class="text-red-500 text-sm px-2">
        {{ errors.budget }}
      </p>
    </div>

    <!-- 條款同意 -->
    <div class="mt-10 mb-14 flex flex-col">
      <div class="space-x-2 flex items-center mb-2">
        <input
          v-model="form.agree.value"
          id="agree"
          type="checkbox"
          class="w-5 h-5 border-2 border-[#8782FF] text-[#8782FF] focus:ring-0"
        />
        <label for="agree" class="text-[#5B5B5B] text-[16px]">
          我同意
          <a
            href="/terms"
            target="_blank"
            class="text-[#8782FF] underline hover:text-[#6f6bff]"
          >
            條款與隱私政策
          </a>
        </label>
      </div>
      <p v-if="errors.agree" class="text-red-500 text-sm px-2">
        {{ errors.agree }}
      </p>
    </div>

    <!-- 送出按鈕 -->
    <button
      @click="onSubmit"
      class="w-full py-4 text-[#8782FF] border border-[#8782FF] rounded-xl cursor-pointer flex items-center justify-center hover:bg-[#8782FF] hover:text-white transition-colors duration-300"
    >
      送出表單
    </button>
  </div>
</template>
