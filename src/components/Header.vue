<script lang="ts" setup>
function Active() {
  document.getElementById("header")!.classList.toggle("active");
  document.getElementById("menu")!.classList.toggle("active");
}

document.onclick = function (e: any) {
  if (e.target.id !== "header" && e.target.id !== "menu") {
    document.getElementById("header")!.classList.remove("active");
    document.getElementById("menu")!.classList.remove("active");
  }
};
</script>
<template>
  <div class="background--Header">
    <div class="container mx-auto flex items-center text-white p-6">
      <h1 class="text-2xl">{finsweet</h1>
      <div id="header" @click="Active()"></div>
      <div class="ml-auto flex gap-12" id="menu" @click="Active()">
        <ul class="flex items-center gap-6 ul--Header">
          <li class="cursor-pointer"><router-link to="/">Home</router-link></li>
          <li class="whitespace-nowrap">
            <router-link to="/AboutUs">About us</router-link>
          </li>
          <li class="cursor-pointer">
            <router-link to="/Features">Features</router-link>
          </li>
          <li class="cursor-pointer">
            <router-link to="/Pricing">Pricing</router-link>
          </li>
          <li class="cursor-pointer">
            <router-link to="/PrivacyPolicy">FAQ</router-link>
          </li>
          <li class="cursor-pointer">
            <router-link to="/BlogPage">Blog</router-link>
          </li>
          <li
            class="p--Header cursor-pointer whitespace-nowrap"
            @click="$router.push('/ContactUs')"
          >
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
