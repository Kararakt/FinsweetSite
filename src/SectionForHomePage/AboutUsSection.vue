<script lang="ts" setup>
import { ref } from "vue";
let carousel = ref();
const items = [
  {
    id: 1,
    text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
    src: "/src/assets/Features_avatar1.png",
    FIO: "Jenny Wilson",
    position: "Vice President",
  },
  {
    id: 2,
    text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
    src: "/src/assets/Features_avatar1.png",
    FIO: "Agnes West",
    position: "Project manager",
  },
  {
    id: 3,
    text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
    src: "/src/assets/Features_avatar1.png",
    FIO: "Ethel Jenkins",
    position: "President",
  },
];
</script>
<template>
  <div class="background-third">
    <div class="container mx-auto flex gap-20 pt-36 pb-20 div--AboutUsSection">
      <div class="flex flex-col gap-4">
        <h1 class="text-[2.25rem] font-bold text--AboutUsSection">
          What our clients<br />
          say about us
        </h1>
        <p class="text-[#80828d]">
          Lorem ipsum dolor sit amet, consectetur<br />
          adipiscing elit sed.
        </p>
      </div>
      <el-carousel
        ref="carousel"
        class="w-1/3 flex flex-col grow carousel--AboutUsSection"
        arrow="never"
        indicator-position="none"
      >
        <el-carousel-item v-for="item in items" :key="item.id"
          ><div
            class="flex flex-col gap-10 h-full carousel-div--AboutUsSection"
          >
            <div class="flex gap-4 items-center">
              <el-avatar :size="70" :src="item.src" />
              <div>
                <h1 class="text-[1.5rem] font-bold">{{ item.FIO }}</h1>
                <p>{{ item.position }}</p>
              </div>
            </div>
            <div class="text-[2rem] second-text--AboutUsSection">
              {{ item.text }}
            </div>
          </div>
        </el-carousel-item>
        <div class="absolute top-5 right-0">
          <el-button @click="carousel.prev()" circle size="large"
            ><el-icon :size="25"><ArrowLeft /></el-icon
          ></el-button>
          <el-button
            @click="carousel.next()"
            circle
            size="large"
            color="var(--lightblue)"
            ><el-icon :size="25" class="text-white"><ArrowRight /></el-icon
          ></el-button>
        </div>
      </el-carousel>
    </div>
  </div>
</template>
