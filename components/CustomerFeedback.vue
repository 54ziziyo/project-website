<script setup lang="ts">
import avatar1 from "../assets/images/avatar/avatar-1.png";
import avatar2 from "../assets/images/avatar/avatar-2.png";
import avatar3 from "../assets/images/avatar/avatar-3.png";
import avatar4 from "../assets/images/avatar/avatar-4.png";
import avatar5 from "../assets/images/avatar/avatar-5.png";
import avatar6 from "../assets/images/avatar/avatar-6.png";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

const testimonials = [
  {
    content:
      "简报思维工坊的专业设计是我们募资成功的关键。他们提升了简报视觉效果，还帮助我们完善了故事叙述，让投资人对我们的项目更加理解及信心。",
    author: "陈先生",
    role: "新创公司执行长",
    avatar: avatar1,
  },
  {
    content:
      "简报思维工坊的专业服务让我的简报品质达到了新的高度。他们不仅在视觉设计上有卓越的表现，还帮助我优化了内容结构，使整体表现更加出色。",
    author: "王小姐",
    role: "行销专员",
    avatar: avatar2,
  },
  {
    content:
      "简报思维工坊的专业设计是我们募资成功的关键。他们提升了简报视觉效果，还帮助我们完善了故事叙述，让投资人对我们的项目更加理解及信心。",
    author: "陈先生",
    role: "新创公司执行长",
    avatar: avatar3,
  },
  {
    content:
      "简报思维工坊的专业服务让我的简报品质达到了新的高度。他们不仅在视觉设计上有卓越的表现，还帮助我优化了内容结构，使整体表现更加出色。",
    author: "王小姐",
    role: "行销专员",
    avatar: avatar4,
  },
  {
    content:
      "简报思维工坊的专业设计是我们募资成功的关键。他们提升了简报视觉效果，还帮助我们完善了故事叙述，让投资人对我们的项目更加理解及信心。",
    author: "陈先生",
    role: "新创公司执行长",
    avatar: avatar5,
  },
  {
    content:
      "简报思维工坊的专业服务让我的简报品质达到了新的高度。他们不仅在视觉设计上有卓越的表现，还帮助我优化了内容结构，使整体表现更加出色。",
    author: "王小姐",
    role: "行销专员",
    avatar: avatar6,
  },
];
</script>
<template>
  <div class="w-full">
    <section class="gradient-p-to-y-bg py-24 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-6">
          <div class="inline-block border px-4 py-1 rounded-full text-sm">
            真實客戶評價
          </div>
          <h2 class="text-[32px] md:text-[52px] font-bold leading-none mt-3">
            讓我們看看別人怎麼說
          </h2>
        </div>

        <div class="flex justify-center items-center space-x-[-10px] mb-4">
          <img
            v-for="item in avatars"
            :key="item"
            :src="item"
            class="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>

        <div class="text-center mb-6">
          <p class="text-sm">服務體驗評分</p>
          <div
            class="flex justify-center items-center gap-1 text-yellow-400 text-xl"
          >
            <span v-for="i in 5" :key="i">★</span>
            <span class="ml-2">5.0</span>
          </div>
        </div>
      </div>

      <Carousel
        class="w-full"
        :opts="{
          align: 'center',
          slidesToScroll: 1,
          loop: true,
        }"
        :plugins="[
          Autoplay({
            delay: 2000,
          }),
        ]"
      >
        <CarouselContent class="-ml-0">
          <CarouselItem
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div class="p-4 h-full select-none">
              <div
                class="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col"
              >
                <p class="text-gray-600 italic mb-6 flex-grow">
                  "{{ testimonial.content }}"
                </p>

                <div class="flex items-center">
                  <img
                    :src="testimonial.avatar"
                    :alt="testimonial.author"
                    class="w-12 h-12 rounded-full object-cover mr-4"
                  />

                  <div>
                    <p class="font-semibold text-gray-900">
                      {{ testimonial.author }}
                    </p>
                    <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  </div>
</template>
