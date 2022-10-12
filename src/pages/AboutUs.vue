<script lang="ts" setup>
import ThreeCards from "../components/ThreeCards.vue";
const items = [
  {
    id: 1,
    src: "/src/assets/AboutUs_icon1.png",
    title: "Planning",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    id: 2,
    src: "/src/assets/AboutUs_icon1.png",
    title: "Conception",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    id: 3,
    src: "/src/assets/AboutUs_icon1.png",
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    id: 4,
    src: "/src/assets/AboutUs_icon1.png",
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
];

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
const screens = [
  {
    id: 1,
    src: "/src/assets/AboutUs_avatar1.png",
    FIO: "John Smith",
    position: "CEO",
  },
  {
    id: 2,
    src: "/src/assets/AboutUs_avatar2.png",
    FIO: "Simon Adams",
    position: "CTO",
  },
  {
    id: 3,
    src: "/src/assets/AboutUs_avatar3.png",
    FIO: "Paul Jones",
    position: "Design Lead",
  },
  {
    id: 4,
    src: "/src/assets/AboutUs_avatar4.png",
    FIO: "Sara Hardin",
    position: "Project Manager",
  },
];
</script>
<template>
  <div class="">
    <div class="container mx-auto main-div--AboutUs">
      <div class="grid grid-cols-2 py-36 div-AboutUs">
        <div class="flex flex-col gap-8 justify-center">
          <h4>About us</h4>
          <h1 class="text-5xl leading-tight text-AboutUs">
            Our designs solve<br />
            problems
          </h1>
          <div class="text-[#80828d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br />
            do eiusmod tempor incididunt ut labore et dolore magna<br />
            aliqua. Ut enim ad minim veniam.
          </div>
        </div>
        <el-image src="/src/assets/AboutUs_pic1.png" />
      </div>
      <div class="background-first">
        <div class="mx-20 flex flex-col gap-8 py-36 second-div--AboutUs">
          <h1 class="h1--AboutUs">Who we are</h1>
          <div class="grid grid-cols-2 two-cards--AboutUs">
            <div class="flex flex-col gap-4">
              <h1 class="text-4xl font-semibold">Goal focussed</h1>
              <div class="text-[#80828d]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do<br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut<br />
                enim ad minim veniam, quis nostrud exercitation ullamco
                laboris<br />
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <h1 class="text-4xl font-semibold">Continuous improvement</h1>
              <div class="text-[#80828d]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do<br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut<br />
                enim ad minim veniam, quis nostrud exercitation ullamco
                laboris<br />
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-image src="/src/assets/AboutUs_pic2.png" />
      <div class="py-36 third-div--AboutUs">
        <h1
          class="text-5xl flex justify-center leading-tight second-text--AboutUs"
        >
          The process we follow
        </h1>
        <div class="grid grid-cols-4 gap-10 pt-12 four-cards--AboutUs">
          <div v-for="item in items" :key="item.id" class="flex flex-col gap-6">
            <div class="flex items-center">
              <el-image :src="item.src" />
              <hr class="border--AboutUs mx-8" />
            </div>
            <h1 class="text-2xl">{{ item.title }}</h1>
            <div class="text-[#80828d]">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="background-fouth">
      <div class="container mx-auto py-36">
        <div class="grid grid-cols-2 gap-10 fourth-div--AboutUs">
          <div class="flex flex-col gap-4 justify-center">
            <h4>Our Mission</h4>
            <h1 class="text-4xl font-semibold">Inspire, Innovate, Share</h1>
            <div class="text-[#80828d]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod<br />
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim<br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea<br />
              commodo consequat.
            </div>
          </div>
          <div>
            <el-image
              class="h-full w-full"
              src="/src/assets/AboutUs_pic3.png"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-10 mt-20 fifth-div--AboutUs">
          <div>
            <el-image
              class="h-full w-full"
              src="/src/assets/AboutUs_pic4.png"
            />
          </div>
          <div
            class="flex flex-col gap-4 justify-center ml-auto margin-text--AboutUs"
          >
            <h4>Our Vision</h4>
            <h1 class="text-4xl font-semibold">Laser focus</h1>
            <div class="text-[#80828d]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod<br />
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim<br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea<br />
              commodo consequat.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex flex-col gap-10 py-36">
      <h1
        class="text-5xl font-semibold flex justify-center text-center leading-tight third-text--AboutUs"
      >
        The benefits of working<br />
        with us
      </h1>
      <ThreeCards />
      <div class="grid grid-cols-6 gap-6 mt-10 main-logos-div--AboutUs">
        <div class="flex flex-col gap-6 div-from-logos--AboutUs">
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
    </div>
    <div class="background-second">
      <div class="container mx-auto py-36 flex flex-col gap-8">
        <h1
          class="flex justify-center text-5xl font-semibold fourth-text--AboutUs"
        >
          Meet our team
        </h1>
        <div
          class="grid grid-cols-4 gap-8 text-center mt-10 four-people-cards--AboutUs"
        >
          <div
            v-for="screen in screens"
            :key="screen.id"
            class="card--Features image--Aboutus bg-white"
          >
            <div class="relative div-for--AboutUs flex justify-center">
              <el-image :src="screen.src" />
              <div
                class="overlay--AboutUs absolute bottom-0 left-0 right-0 overflow-hidden"
              >
                <div
                  class="text--AboutUs flex gap-6 text-white text-[1.5rem] absolute z-10 bottom-[10%] left-[50%]"
                >
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    class="hover:text-[#ff0000]"
                  >
                    <font-awesome-icon
                      icon="fa-brands fa-youtube"
                      class="cursor-pointer"
                  /></a>

                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    class="hover:text-[#ff0000]"
                  >
                    <font-awesome-icon
                      icon="fa-brands fa-youtube"
                      class="cursor-pointer"
                  /></a>

                  <a
                    href="https://www.invisionapp.com/"
                    target="_blank"
                    class="hover:text-[#ff0066]"
                  >
                    <font-awesome-icon
                      class="cursor-pointer"
                      icon="fa-brands fa-invision"
                  /></a>
                </div>
              </div>
            </div>
            <h1 class="pt-6 text-xl font-semibold">{{ screen.FIO }}</h1>
            <div class="pt-6 text-[#80828d]">{{ screen.position }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
