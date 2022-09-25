<script lang="ts" setup>
import HowWeWorkSection from "../SectionForHomePage/HowWeWorkSection.vue";
import OurProjectSection from "../SectionForHomePage/OurProjectSection.vue";
import FeaturesSection from "../SectionForHomePage/FeaturesSection.vue";
import AboutUsSection from "../SectionForHomePage/AboutUsSection.vue";
import AskedQuestionSection from "../SectionForHomePage/AskedQuestionSection.vue";
import { func } from "../Function/helperfunction";
</script>
<template>
  <div>
    <div class="main-div--HomePage">
      <div class="container mx-auto flex py-36 gap-60 second-div--HomePage">
        <div class="flex flex-col gap-10">
          <div class="text-white text-5xl flex flex-col gap-6 text--HomePage">
            <p>Building stellar</p>
            <p>websites for early</p>
            <p>startups</p>
          </div>
          <p class="p--HomePage">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
            eiusmod tempor incididunt.
          </p>
          <div class="flex gap-8 items-center btn-icon--HomePage">
            <button
              class="button--HomePage whitespace-nowrap"
              @click="$router.push('/OurWork'), func()"
            >
              View our work
            </button>
            <p
              class="flex items-center text-white gap-3 cursor-pointer hover:text-[#BBBBCB] whitespace-nowrap"
              @click="$router.push('/Pricing'), func()"
            >
              View Pricing<el-icon size="25"><Right /></el-icon>
            </p>
          </div>
        </div>
        <el-image
          class="image--HomePage"
          src="/src/assets/HomePage_screen1.png"
        ></el-image>
      </div>
    </div>
    <HowWeWorkSection />
    <OurProjectSection />
    <FeaturesSection />
    <AboutUsSection />
    <AskedQuestionSection />
  </div>
</template>
