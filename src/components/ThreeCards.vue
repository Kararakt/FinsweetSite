<script lang="ts" setup>
const photos = [
  {
    id: 1,
    src: "/src/assets/Features_icon6.png",
    title: "Customize with ease",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
  {
    id: 2,
    src: "/src/assets/Features_icon3.png",
    title: "Perfectly Responsive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
  {
    id: 3,
    src: "/src/assets/Features_icon1.png",
    title: "Friendly Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
];
</script>
<template>
  <div class="grid grid-cols-3 gap-8 three-cards--ThreeCards">
    <div
      v-for="photo in photos"
      :key="photo.id"
      class="background-second card--Features"
    >
      <el-image :src="photo.src" />
      <h1 class="text-2xl pt-6">{{ photo.title }}</h1>
      <div class="pt-6 text-[#80828d]">{{ photo.description }}</div>
    </div>
  </div>
</template>
