<script lang="ts" setup>
import { func } from "../Function/helperfunction";
</script>
<template>
  <div>
    <div class="bg-[#1C1E53]">
      <div class="container mx-auto text-white">
        <div class="flex gap-[8rem] pt-20 main-div--Footer">
          <div class="flex flex-col gap-10 main-text-div--Footer">
            <div class="flex flex-col gap-6">
              <h1 class="text-5xl text-margin--Footer">{finsweet</h1>
              <div class="text-[#BBBBCB] text-margin--Footer">
                We are always open to discuss your project and<br />
                improve your online presence.
              </div>
            </div>
            <div
              class="flex gap-12 bg-[#FCD980] pl-[2rem] pr-[10rem] py-5 text-black mt-10 text--Footer"
            >
              <div class="flex flex-col gap-4">
                <h1 class="text-lg">Email me at</h1>
                <h1>contact@website.com</h1>
              </div>
              <div class="flex flex-col gap-4 whitespace-nowrap">
                <h1 class="text-lg">Call us</h1>
                <h1>0927 6277 28525</h1>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-8 mt-4 second-main-text-div--Footer">
            <h1 class="text-5xl text-margin--Footer">Lets Talk!</h1>
            <div class="text-[#BBBBCB] text-margin--Footer">
              We are always open to discuss your project,<br />
              improve your online presence and help with your UX/UI design
              challenges.
            </div>
            <div class="flex gap-5 text-[1.8rem] icon--Footer">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="hover:text-[#385899]"
                ><font-awesome-icon
                  class="cursor-pointer"
                  icon="fa-brands fa-facebook"
              /></a>
              <a
                href="https://twitter.com/"
                target="_blank"
                class="hover:text-[#1d9bf0]"
                ><font-awesome-icon
                  class="cursor-pointer"
                  icon="fa-brands fa-twitter"
              /></a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="hover:text-[#ff00d4]"
              >
                <font-awesome-icon
                  class="cursor-pointer"
                  icon="fa-brands fa-instagram"
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
      </div>
    </div>
    <div
      class="container mx-auto flex py-8 text-black font-semibold div-ul--Footer"
    >
      <div class="div-text-Footer">Copyright 2022, Finsweet.com</div>
      <div class="ml-auto">
        <ul class="flex gap-6 ul--Footer">
          <li @click="$router.push('/'), func()" class="cursor-pointer">
            Home
          </li>
          <li @click="$router.push('/AboutUs'), func()" class="cursor-pointer">
            About us
          </li>
          <li @click="$router.push('/Features'), func()" class="cursor-pointer">
            Features
          </li>
          <li @click="$router.push('/Pricing'), func()" class="cursor-pointer">
            Pricing
          </li>
          <li
            @click="$router.push('/PrivacyPolicy'), func()"
            class="cursor-pointer"
          >
            FAQ
          </li>
          <li @click="$router.push('/BlogPage'), func()" class="cursor-pointer">
            Blog
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
