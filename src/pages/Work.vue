<script lang="ts" setup>
import TabsSection from "../SectionForWork/TabsSection.vue";
</script>
<template>
  <div class="background-second">
    <div
      class="container mx-auto flex flex-col items-center text-center gap-6 py-36"
    >
      <h4 class="text-[#80828d]">What we created</h4>
      <h1 class="text-5xl font-semibold text--OurWork">Our Work Portfolio</h1>
      <div class="text-[#80828d] second-text--OurWork">
        We help teams create great digital products by providing them with tools
        and technology<br />
        to make the design-to-code process universally accessible.
      </div>
      <div class="flex gap-6 text-[1.5rem]">
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
            icon="fa-brands fa-instagram"
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
    <TabsSection />
  </div>
</template>
