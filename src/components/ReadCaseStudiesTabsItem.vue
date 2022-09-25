<script lang="ts" setup>
import { func } from "../Function/helperfunction";
</script>
<template>
  <div class="flex flex-col gap-10 items-center text-center py-36">
    <h1 class="text-5xl font-semibold text-ReadCaseStudiesTabsItem">
      Let's build something great<br />
      together
    </h1>
    <div class="text-[#80828d]">
      Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies<br />
      nec dolor sit amet, scelerisque cursus purus.
    </div>
    <button
      class="button--HomePage"
      @click="$router.push('/ContactUs'), func()"
    >
      Contact Us
    </button>
  </div>
</template>
