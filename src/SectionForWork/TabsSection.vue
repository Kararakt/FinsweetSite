<script lang="ts" setup>
import { func } from "../Function/helperfunction";

const works = [
  {
    id: 1,
    src: "/src/assets/Work_pic1.png",
    title: "Template 1",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    textbutton: "View Portfolio",
  },
  {
    id: 2,
    src: "/src/assets/Work_pic2.png",
    title: "Template 2",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    textbutton: "View Portfolio",
  },
];
const items = [
  {
    id: 1,
    src: "/src/assets/Work_pic3.png",
    title: "Template 3",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    textbutton: "Read case study",
  },
  {
    id: 2,
    src: "/src/assets/Work_pic4.png",
    title: "Template 4",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    textbutton: "Read case study",
  },
  {
    id: 3,
    src: "/src/assets/Work_pic5.png",
    title: "Template 5",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    textbutton: "Read case study",
  },
  {
    id: 4,
    src: "/src/assets/Work_pic6.png",
    title: "Template 6",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    textbutton: "Read case study",
  },
];
const urls = [
  {
    id: 1,
    src: "/src/assets/Work_pic4.png",
    title: "Template 4",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    textbutton: "Read case study",
  },
  {
    id: 2,
    src: "/src/assets/Work_pic5.png",
    title: "Template 5",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    textbutton: "Read case study",
  },
];
const photos = [
  {
    id: 1,
    src: "/src/assets/Work_pic3.png",
    title: "Template 3",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    textbutton: "Read case study",
  },
  {
    id: 2,
    src: "/src/assets/Work_pic4.png",
    title: "Template 4",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    textbutton: "Read case study",
  },
  {
    id: 3,
    src: "/src/assets/Work_pic5.png",
    title: "Template 5",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    textbutton: "Read case study",
  },
];
</script>
<template>
  <div class="container mx-auto main-div--TabsSection">
    <el-tabs type="border-card">
      <el-tab-pane>
        <template #label><div class="text-lg">All</div></template>
        <div class="grid grid-cols-2 gap-10 first-tab--TabsSection">
          <div
            v-for="work in works"
            :key="work.id"
            class="flex flex-col gap-8 mt-5"
          >
            <el-image :src="work.src" />
            <h1 class="text-4xl font-semibold">{{ work.title }}</h1>
            <div class="text-[#80828d]">{{ work.description }}</div>
            <div
              class="flex items-center gap-3 cursor-pointer hover:text-[#1c1e5499]"
            >
              {{ work.textbutton }}<el-icon size="25"><Right /></el-icon>
            </div>
          </div>
          <div
            v-for="item in items"
            :key="item.id"
            class="flex flex-col gap-8 mt-5"
          >
            <el-image :src="item.src" />
            <h1 class="text-4xl font-semibold">{{ item.title }}</h1>
            <div class="text-[#80828d]">{{ item.description }}</div>
            <div
              class="flex items-center gap-3 cursor-pointer hover:text-[#1c1e5499]"
              @click="$router.push('/ReadCaseStudies'), func()"
            >
              {{ item.textbutton }}<el-icon size="25"><Right /></el-icon>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label><div class="text-lg">UI Design</div></template>
        <div class="grid grid-cols-2 second-div--TabsSection gap-10">
          <div v-for="work in works" class="flex flex-col gap-8 mt-5">
            <el-image :src="work.src" />
            <h1 class="text-4xl font-semibold">{{ work.title }}</h1>
            <div class="text-[#80828d]">{{ work.description }}</div>
            <div
              class="flex items-center gap-3 cursor-pointer hover:text-[#1c1e5499]"
            >
              {{ work.textbutton }}<el-icon size="25"><Right /></el-icon>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label><div class="text-lg">Webflow Design</div></template>
        <div class="grid grid-cols-2 gap-10 third-div--TabsSection">
          <div v-for="url in urls" class="flex flex-col gap-8 mt-5">
            <el-image :src="url.src" />
            <h1 class="text-4xl font-semibold">{{ url.title }}</h1>
            <div class="text-[#80828d]">{{ url.description }}</div>
            <div
              class="flex items-center gap-3 cursor-pointer hover:text-[#1c1e5499]"
              @click="$router.push('/ReadCaseStudies'), func()"
            >
              {{ url.textbutton }}<el-icon size="25"><Right /></el-icon>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label><div class="text-lg">Figma Design</div></template>
        <div class="grid grid-cols-2 gap-10 fourth-div--TabsSection">
          <div v-for="photo in photos" class="flex flex-col gap-8 mt-5">
            <el-image :src="photo.src" />
            <h1 class="text-4xl font-semibold">{{ photo.title }}</h1>
            <div class="text-[#80828d]">{{ photo.description }}</div>
            <div
              class="flex items-center gap-3 cursor-pointer hover:text-[#1c1e5499]"
              @click="$router.push('/ReadCaseStudies'), func()"
            >
              {{ photo.textbutton }}<el-icon size="25"><Right /></el-icon>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="flex flex-col gap-10 items-center text-center py-36">
      <h1 class="text-5xl font-semibold second-text--TabsSection">
        Let's build something great<br />
        together
      </h1>
      <div class="text-[#80828d]">
        Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
        ultricies<br />
        nec dolor sit amet, scelerisque cursus purus.
      </div>
      <button
        class="button--HomePage"
        @click="$router.push('/ContactUs'), func()"
      >
        Contact Us
      </button>
    </div>
  </div>
</template>
