<script lang="ts" setup>
import { func } from "../Function/helperfunction";
const items = [
  {
    id: 1,
    src: "/src/assets/BlogPage_pic2.png",
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    buttontext: "Read More",
  },
  {
    id: 2,
    src: "/src/assets/BlogPage_pic3.png",
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    buttontext: "Read More",
  },
  {
    id: 3,
    src: "/src/assets/BlogPage_pic4.png",
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    buttontext: "Read More",
  },
  {
    id: 4,
    src: "/src/assets/BlogPage_pic5.png",
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    buttontext: "Read More",
  },
  {
    id: 5,
    src: "/src/assets/BlogPage_pic6.png",
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    buttontext: "Read More",
  },
  {
    id: 6,
    src: "/src/assets/BlogPage_pic7.png",
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    buttontext: "Read More",
  },
];
</script>
<template>
  <div class="container mx-auto py-36">
    <div class="flex flex-col gap-6 justify-center items-center">
      <h1
        class="text-5xl font-semibold text-center leading-tight text--BlogPage"
      >
        A UX Case Study on Creating a<br />
        Studious Environment for Students
      </h1>
      <span>Andrew Jonson Posted on 27th January 2021</span>
      <el-image
        src="/src/assets/BlogPage_pic1.png"
        class="w-full h-[52.5rem] image--BlogPage"
      />
      <div class="text-center text-[#80828d] third-text--BlogPage">
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead black, and the<br />
        stars had ceased to twinkle. By the same illusion which lifts the
        horizon of the sea to the level of the<br />
        spectator on a hillside.
      </div>
      <span
        class="text-[#2405F2] cursor-pointer hover:text-[#5239fa]"
        @click="$router.push('/ReadBlog'), func()"
        >Read more</span
      >
    </div>
    <div class="flex flex-col items-center pt-36">
      <h1 class="text-5xl font-semibold second-text--BlogPage">Our Blog</h1>
      <div class="grid grid-cols-3 gap-10 mt-10 three-cards--BlogPage">
        <div
          v-for="item in items"
          :key="item.id"
          class="flex flex-col gap-6 mt-6"
        >
          <el-image :src="item.src" />
          <h4 class="text-[#80828d]">{{ item.date }}</h4>
          <h1 class="text-2xl">{{ item.title }}</h1>
          <div class="text-[#80828d]">{{ item.description }}</div>
          <div
            class="flex items-center gap-3 cursor-pointer hover:text-[#1c1e5499]"
            @click="$router.push('/ReadBlog'), func()"
          >
            {{ item.buttontext }} <el-icon><Right /></el-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
