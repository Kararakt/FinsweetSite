<script lang="ts" setup>
import ThreeCards from "../components/ThreeCards.vue";
import { func } from "../Function/helperfunction";
const logos = [
  {
    id: 1,
    src: "/src/assets/AboutUs_logo1.png",
  },
  {
    id: 2,
    src: "/src/assets/AboutUs_logo2.png",
  },
  {
    id: 3,
    src: "/src/assets/AboutUs_logo3.png",
  },
  {
    id: 4,
    src: "/src/assets/AboutUs_logo4.png",
  },
  {
    id: 5,
    src: "/src/assets/AboutUs_logo5.png",
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
  <div>
    <div class="main-div--HomePage">
      <div class="container mx-auto flex py-36 gap-60 div--Features">
        <div class="flex flex-col gap-10 justify-center third-text--Features">
          <div class="text-white text-5xl flex flex-col gap-6 text-Features">
            All the features<br />
            you need
          </div>
          <p class="p--HomePage description--Features">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="flex gap-8 items-center btn--Features">
            <button
              class="button--HomePage"
              @click="$router.push('/Pricing'), func()"
            >
              View Pricing
            </button>
          </div>
        </div>
        <el-image
          class="image--HomePage image--Features"
          src="/src/assets/Features_bg1.png"
        ></el-image>
      </div>
    </div>
    <div
      class="container mx-auto grid grid-cols-6 gap-6 my-36 second-div--Features"
    >
      <div class="flex flex-col gap-6 div-from-logos--Features">
        <h1 class="text-4xl font-semibold">100.000+</h1>
        <h4 class="text-[#80828d]">Finsweet Users</h4>
      </div>
      <div
        v-for="logo in logos"
        :key="logo.id"
        class="flex justify-center items-center gap-8"
      >
        <el-image :src="logo.src" class="h-[2.5rem]" />
      </div>
    </div>
    <div class="container mx-auto">
      <div class="flex flex-col gap-10 pb-36">
        <h1
          class="text-5xl font-semibold flex justify-center text-center text--Features"
        >
          The benefits of working<br />
          with our team
        </h1>
        <ThreeCards />
      </div>
      <div class="grid grid-cols-2 pb-36 space-div--Features">
        <div class="flex flex-col gap-4 justify-center">
          <h4>Use Client-first</h4>
          <h1 class="text-4xl font-semibold leading-tight">
            Top agencies and freelancers<br />
            around the world use<br />
            Client-first
          </h1>
          <div class="text-[#80828d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod<br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim<br />
            veniam, quis nostrud exercitation.
          </div>
        </div>
        <el-image src="/src/assets/Features_pic1.png" />
      </div>
    </div>
    <div class="background-second">
      <div
        class="container mx-auto grid grid-cols-2 py-36 second-space-div--Features"
      >
        <el-image src="/src/assets/Features_pic2.png" />
        <div class="flex flex-col gap-4 justify-center ml-auto">
          <h4>Free Revision Rounds</h4>
          <h1 class="text-4xl font-semibold leading-tight">
            Get free Revisions and one week<br />
            of free maintenance
          </h1>
          <div class="text-[#80828d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod<br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim<br />
            veniam.
          </div>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto grid grid-cols-2 py-36 second-space-div--Features"
    >
      <div class="flex flex-col justify-center gap-4">
        <h4>24/7 Support</h4>
        <h1 class="text-4xl font-semibold leading-tight">
          Working with us, you will be<br />
          getting 24/7 priority support
        </h1>
        <div class="text-[#80828d]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod<br />
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim<br />
          veniam.
        </div>
      </div>
      <el-image src="/src/assets/Features_pic3.png" />
    </div>
    <div class="background-fifth">
      <div
        class="container mx-auto grid grid-cols-2 py-36 second-space-div--Features"
      >
        <el-image src="/src/assets/AboutUs_pic4.png" />
        <div class="flex flex-col justify-center ml-auto gap-4">
          <h4>Quick Delivery</h4>
          <h1 class="text-4xl font-semibold leading-tight">
            Guranteed 1 week delivery for<br />
            standard five pager website
          </h1>
          <div class="text-[#80828d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod<br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim<br />
            veniam.
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto py-36 flex gap-20 collapse-div--Features">
      <div class="flex flex-col gap-4 collapse-text--Features">
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
      <div class="grow main-div-collapse--Features">
        <div v-for="photo in photos" :key="photo.id">
          <div
            class="collapsible cursor-pointer flex justify-between items-center w-full border-none outline-none text-[1.3rem]"
            @click="AddClass()"
          >
            <span
              class="text-[#2405F2] font-semibold pl-8 collapse-span--Features"
              >{{ photo.id }}</span
            >
            <div class="second-text--Features">{{ photo.title }}</div>
          </div>
          <div
            class="content--Features flex justify-center overflow-hidden max-h-0"
          >
            <p class="mb-12 pl-16">{{ photo.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
