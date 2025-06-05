<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
</script>

<template>
  <div class="w-full overflow-hidden px-4">
    <Carousel
      class="w-full"
      :opts="{
        align: 'start',
        slidesToScroll: 4,
        loop: true,
      }"
    >
      <CarouselContent class="-ml-0">
        <CarouselItem
          v-for="(_, index) in 10"
          :key="index"
          class="pl-2 basis-1/4"
        >
          <div class="p-1">
            <Card>
              <CardContent
                class="flex aspect-square items-center justify-center p-6"
              >
                <span class="text-2xl font-semibold">{{ index + 1 }}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>
