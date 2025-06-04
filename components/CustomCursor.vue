<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: "black", // 預設顏色
  },
});

const dot = ref<HTMLDivElement | null>(null);
const circle = ref<HTMLDivElement | null>(null);

let mouseX = 0;
let mouseY = 0;

let circleX = 0;
let circleY = 0;

const move = (e: MouseEvent) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

const animate = () => {
  if (dot.value) {
    dot.value.style.top = `${mouseY}px`;
    dot.value.style.left = `${mouseX}px`;
  }

  if (circle.value) {
    // 緩慢逼近滑鼠座標
    circleX += (mouseX - circleX) * 0.1;
    circleY += (mouseY - circleY) * 0.1;

    circle.value.style.top = `${circleY}px`;
    circle.value.style.left = `${circleX}px`;
  }

  requestAnimationFrame(animate);
};

onMounted(() => {
  window.addEventListener("mousemove", move);
  animate(); // 啟動動畫循環
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", move);
});
</script>

<template>
  <div>
    <!-- 大圈圈 -->
    <div
      ref="circle"
      :style="{ borderColor: props.color }"
      class="cursor-circle"
    ></div>
    <!-- 小點 -->
    <div
      ref="dot"
      :style="{ backgroundColor: props.color }"
      class="cursor-dot"
    ></div>
  </div>
</template>

<style scoped>
.cursor-dot {
  position: fixed;
  width: 0.625rem;
  height: 0.625rem;
  background: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
}

.cursor-circle {
  position: fixed;
  width: 3rem;
  height: 3rem;
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(20%, -100%);
  pointer-events: none;
  z-index: 9998;
}
</style>
