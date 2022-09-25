<script lang="ts" setup>
import { func } from "../Function/helperfunction";

const pointers = [
  {
    id: 1,
    src: "/src/assets/Aboutus_pointer1.png",
    title: "All limited links",
  },
  {
    id: 2,
    src: "/src/assets/Aboutus_pointer1.png",
    title: "Own analytics platform",
  },
  {
    id: 3,
    src: "/src/assets/Aboutus_pointer1.png",
    title: "Chat support",
  },
  {
    id: 4,
    src: "/src/assets/Aboutus_pointer1.png",
    title: "Optimize hashtags",
  },
  {
    id: 5,
    src: "/src/assets/Aboutus_pointer1.png",
    title: "Unlimited users",
  },
];
const logos = [
  {
    id: 1,
    src: "/src/assets/Aboutus_pointer1.png",
    title: "All limited links",
  },
  {
    id: 2,
    src: "/src/assets/Aboutus_pointer1.png",
    title: "Own analytics platform",
  },
  {
    id: 3,
    src: "/src/assets/Aboutus_pointer1.png",
    title: "Chat support",
  },
  {
    id: 4,
    src: "/src/assets/Aboutus_pointer1.png",
    title: "Optimize hashtags",
  },
  {
    id: 5,
    src: "/src/assets/Aboutus_pointer1.png",
    title: "Unlimited users",
  },
  {
    id: 6,
    src: "/src/assets/Aboutus_pointer1.png",
    title: "Assist and Help",
  },
];
const photos = [
  {
    id: "01",
    title: "How much time does it take?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "02",
    title: "What is your class naming convention?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "03",
    title: "How do you communicate?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: "04",
    title: "I have a bigger project. Can you handle it?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "05",
    title: "What is your class naming convention?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
let coll = document.getElementsByClassName("collapsible");
let i;
function AddClass() {
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function (this: any) {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}
</script>
<template>
  <div class="container mx-auto my-36">
    <div class="flex flex-col items-center gap-6 text-Pricing">
      <h1 class="text-5xl font-semibold title--Pricing">Our Pricing Plans</h1>
      <div class="text-[#80828d] description-Pricing">
        When you’re ready to go beyond prototyping in Figma, Webflow is<br />
        ready to help you bring your designs to life — without coding them.
      </div>
    </div>
    <div class="grid grid-cols-3 gap-8 mt-16 three-cards--Pricing">
      <div class="background-second card--Pricing">
        <div class="flex flex-col gap-6 my-16 mx-16 flex-div--Pricing">
          <div class="flex gap-4 items-center">
            <h1 class="font-semibold text-4xl">$299</h1>
            <span class="text-[#2405F2]">Per Design</span>
          </div>
          <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-xl">Landing Page</h1>
            <span class="text-[#80828d]"
              >When you’re ready to go beyond<br />
              prototyping in Figma
            </span>
          </div>
          <div class="flex flex-col gap-6 mt-16">
            <div
              v-for="pointer in pointers"
              :key="pointer.id"
              class="flex gap-4 items-center text-[1.125rem]"
            >
              <el-image :src="pointer.src" />
              <h1>{{ pointer.title }}</h1>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <button
              class="mt-16 bg-[#282938] text-white button--Pricing whitespace-nowrap"
              @click="$router.push('/ContactUs'), func()"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div class="background--Header card--Pricing">
        <div class="flex flex-col gap-6 my-16 mx-16 flex-div--Pricing">
          <div class="flex gap-4 items-center">
            <h1 class="font-semibold text-4xl text-white">$399</h1>
            <span class="text-[#FCD980]">Multi Design </span>
          </div>
          <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-xl text-white">Website Page</h1>
            <span class="text-white"
              >When you’re ready to go beyond<br />
              prototyping in Figma, Webflow’s<br />
              ready to help.
            </span>
          </div>
          <div class="flex flex-col gap-6 mt-[2.45rem] text-white">
            <div
              v-for="pointer in pointers"
              :key="pointer.id"
              class="flex gap-4 items-center text-[1.125rem]"
            >
              <el-image :src="pointer.src" />
              <h1>{{ pointer.title }}</h1>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <button
              class="mt-16 bg-[#FCD980] text-black second-button--Pricing whitespace-nowrap"
              @click="$router.push('/ContactUs'), func()"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div class="background-second card--Pricing">
        <div class="flex flex-col gap-4 my-16 mx-16 flex-div--Pricing">
          <div class="flex gap-2 items-center">
            <h1 class="font-semibold text-4xl whitespace-nowrap">$499 +</h1>
            <span class="text-[#2405F2] whitespace-nowrap">Per Design</span>
          </div>
          <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-xl">Complex Project</h1>
            <span class="text-[#80828d]"
              >When you’re ready to go beyond<br />
              prototyping in Figma
            </span>
          </div>
          <div class="flex flex-col gap-6 mt-6">
            <div
              v-for="logo in logos"
              :key="logo.id"
              class="flex gap-4 items-center text-[1.125rem]"
            >
              <el-image :src="logo.src" />
              <h1>{{ logo.title }}</h1>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <button
              class="mt-16 bg-[#282938] text-white button--Pricing whitespace-nowrap"
              @click="$router.push('/ContactUs'), func()"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-20 my-36 collapse-div--Pricing">
      <div class="flex flex-col gap-4 collapse-text--Pricing">
        <h1 class="text-[2.25rem] font-bold">
          Frequently<br />
          asked questions
        </h1>
        <p
          class="text-[#2405F2] cursor-pointer hover:text-[#5239fa]"
          @click="$router.push('/ContactUs'), func()"
        >
          Contact us for more info
        </p>
      </div>
      <div class="grow main-div-collapse--Pricing">
        <div v-for="photo in photos" :key="photo.id">
          <div
            class="collapsible cursor-pointer flex justify-between items-center w-full border-none outline-none text-[1.3rem]"
            @click="AddClass()"
          >
            <span
              class="text-[#2405F2] font-semibold pl-8 collapse-span--Pricing"
              >{{ photo.id }}</span
            >
            <div class="second-text--Pricing">{{ photo.title }}</div>
          </div>
          <div
            class="content--Pricing flex justify-center overflow-hidden max-h-0"
          >
            <p class="mb-12 pl-16">{{ photo.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
