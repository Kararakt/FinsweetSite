<script lang="ts" setup>
const photos = [
  {
    id: 1,
    src: "/src/assets/Features_icon1.png",
    title: "Uses Client First",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 2,
    src: "/src/assets/Features_icon2.png",
    title: "Two Free Revision Round",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 3,
    src: "/src/assets/Features_icon3.png",
    title: "Template Customization",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 4,
    src: "/src/assets/Features_icon4.png",
    title: "24/7 Support",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 5,
    src: "/src/assets/Features_icon5.png",
    title: "Quick Delivery",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
  {
    id: 6,
    src: "/src/assets/Features_icon6.png",
    title: "Hands-on approach",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
  },
];
</script>
<template>
  <div class="background-second">
    <div class="container mx-auto pt-36 pb-36 main-div--FeaturesSection">
      <div class="flex flex-col gap-6 justify-center items-center text-center">
        <p>Features</p>
        <div class="text-5xl text--FeaturesSection">
          Design that solves <br />
          problems, one product at<br />
          a time
        </div>
      </div>
      <div
        class="grid grid-cols-3 gap-10 justify-center pt-12 card--FeaturesSection"
      >
        <div
          v-for="photo in photos"
          :key="photo.id"
          class="bg-white card--Features"
        >
          <el-image :src="photo.src" />
          <h1 class="text-2xl pt-6">{{ photo.title }}</h1>
          <p class="pt-6 second-p--HomePage">{{ photo.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
