<script lang="ts" setup>
import { func } from "../Function/helperfunction";

const urls = [
  {
    id: 1,
    src: "/src/assets/number_one_HomePage.png",
    title: "Strategy",
    text: "Euismod faucibus turpis eu gravida ",
    text2: "mi. Pellentesque et velit aliquam .",
  },
  {
    id: 2,
    src: "/src/assets/number_two_HomePage.png",
    title: "Wireframing",
    text: "Euismod faucibus turpis eu gravida",
    text2: "mi. Pellentesque et velit aliquam .",
  },
  {
    id: 3,
    src: "/src/assets/number_three_HomePage.png",
    title: "Design",
    text: "Euismod faucibus turpis eu gravida ",
    text2: "mi. Pellentesque et velit aliquam .",
  },
  {
    id: 4,
    src: "/src/assets/number_four_HomePage.png",
    title: "Development",
    text: "Euismod faucibus turpis eu gravida ",
    text2: "mi. Pellentesque et velit aliquam .",
  },
];
</script>
<template>
  <div class="background-second">
    <div class="container mx-auto py-36 flex div--HomeWeWorkSection">
      <div class="flex flex-col gap-6">
        <h1 class="text-5xl font-semibold text--HomeWeWorkSection">
          How we work
        </h1>
        <div class="text-[#80828d]">
          Lorem ipsum dolor sit amet, consectetur<br />
          adipiscing elit, sed do eiusmod tempor.
        </div>
        <div
          class="flex items-center gap-3 cursor-pointer text-[#2405F2] hover:text-[#5239fa]"
          @click="$router.push('/ContactUs'), func()"
        >
          Get in touch with us<el-icon><Right /></el-icon>
        </div>
      </div>
      <div
        class="ml-auto grid grid-cols-2 gap-14 second-div--HomeWeWorkSection"
      >
        <div v-for="url in urls" :key="url.id" class="YYYYYYY">
          <el-image :src="url.src" />
          <div class="flex flex-col gap-4 mt-4">
            <h1 class="text-3xl font-semibold">{{ url.title }}</h1>
            <div class="text-[#80828d]">{{ url.text }}</div>
          </div>
          <div class="text-[#80828d]">{{ url.text2 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
