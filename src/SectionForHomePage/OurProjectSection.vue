<script lang="ts" setup>
import { func } from "../Function/helperfunction";
</script>
<template>
  <div class="background-first">
    <div class="container mx-auto pt-36 pb-36">
      <div class="flex items-center pb-36 div--OurProjectSection">
        <h1 class="text-5xl text-OurProjectSection">View our projects</h1>
        <div
          class="ml-auto flex items-center gap-3 cursor-pointer hover:text-[#1c1e5499] icon--OurProjectSection"
          @click="$router.push('/OurWork'), func()"
        >
          View More<el-icon size="25"><Right /></el-icon>
        </div>
      </div>
      <div class="flex gap-10 second-div--OurProjectSection">
        <div
          class="flex flex-col gap-8 justify-end absolute z-10 image-text--OurProjectSection text-white"
        >
          <h1 class="text-3xl font-semibold text--OurProjectSection">
            Workhub office Webflow<br />
            Webflow Design
          </h1>
          <p class="text-left text-xl second-text--OurProjectSection">
            Euismod faucibus turpis eu gravida<br />
            mi. Pellentesque et velit aliquam
          </p>
          <div
            class="flex items-center text-left text-lg pt-6 gap-3 icon-div--OurProjectSection cursor-pointer hover:text-[#FDE4A6]"
            @click="$router.push('/OurWork'), func()"
          >
            View project<el-icon size="25"><Right /></el-icon>
          </div>
        </div>
        <el-image
          src="/src/assets/HomePage_screen2.png"
          class="image--OurProject"
        />
        <div class="flex flex-col gap-10">
          <div
            class="flex flex-col gap-10 justify-end absolute z-10 second-image-text--OurProjectSection"
          >
            <h1
              class="text-3xl font-semibold text-white text--OurProjectSection"
            >
              Unisaas Website<br />
              Design
            </h1>
            <div
              class="flex items-center text-left gap-3 icon-div--OurProjectSection text-lg cursor-pointer hover:text-[#FDE4A6]"
              @click="$router.push('/OurWork'), func()"
            >
              View portfolio<el-icon size="25"><Right /></el-icon>
            </div>
          </div>
          <el-image
            src="/src/assets/HomePage_screen3.png"
            class="second-image--OurProject"
          />
          <el-image
            src="/src/assets/HomePage_screen4.png"
            class="third-image--OurProject"
          />
        </div>
      </div>
    </div>
  </div>
</template>
