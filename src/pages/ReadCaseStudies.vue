<script lang="ts" setup>
import ReadCaseStudiesTabsItem from "../components/ReadCaseStudiesTabsItem.vue";
</script>
<template>
  <div class="container mx-auto px-20 main-div--ReadCaseStudies">
    <div class="flex flex-col py-36 gap-10">
      <h4 class="text-xl second-text--ReadCaseStudies">
        Web design and development
      </h4>
      <h1 class="text-5xl font-semibold leading-tight text--ReadCaseStudies">
        Finsweet Design case<br />
        studies
      </h1>
      <div class="text-[#80828d] second-text--ReadCaseStudies">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore<br />
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut<br />
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse.
      </div>
      <el-image src="/src/assets/Work_pic1.png" />
      <div class="flex justify-between border--ReadCaseStudies">
        <div class="flex flex-col gap-2 second-text--ReadCaseStudies">
          <h4 class="text-[#282938]">Client</h4>
          <div class="text-xl font-semibold">facebook.com</div>
        </div>
        <div class="flex flex-col gap-2 second-text--ReadCaseStudies">
          <h4 class="text-[#282938]">Service</h4>
          <div class="text-xl font-semibold">Product Design</div>
        </div>
        <div class="flex flex-col gap-2 mb-10 third-text--ReadCaseStudies">
          <h4 class="text-[#282938]">Deliverable</h4>
          <div class="text-xl font-semibold">
            UI Screens, UX Flow & Prototype
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-6 px-24 pb-36 second-div--ReadCaseStudies">
      <h1 class="text-4xl font-semibold second-text--ReadCaseStudies">
        About the project
      </h1>
      <div class="text-[#80828d] second-text--ReadCaseStudies">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et<br />
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip<br />
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu<br />
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt<br />
        mollit anim id est laborum.
      </div>
      <ul
        class="list-disc flex flex-col gap-3 ml-5 text-[#80828d] ul--ReadCaseStudies"
      >
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
        <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
      </ul>
      <el-image src="/src/assets/ReadCaseStudies_pic1.png" class="my-16" />
      <h1 class="text-4xl font-semibold second-text--ReadCaseStudies">
        How we do it
      </h1>
      <div class="text-[#80828d] second-text--ReadCaseStudies">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et<br />
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip<br />
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu<br />
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt<br />
        mollit anim id est laborum.
      </div>
      <ul
        class="list-disc flex flex-col gap-3 ml-5 text-[#80828d] ul--ReadCaseStudies"
      >
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
        <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
      </ul>
    </div>
    <div class="div--ReadCaseStudies">
      <el-tabs type="border-card">
        <el-tab-pane>
          <template #label><div class="text-lg">Keywords</div></template>
          <ReadCaseStudiesTabsItem />
        </el-tab-pane>
        <el-tab-pane>
          <template #label><div class="text-lg">Design</div></template>
          <ReadCaseStudiesTabsItem />
        </el-tab-pane>
        <el-tab-pane>
          <template #label><div class="text-lg">UI/UX</div></template>
          <ReadCaseStudiesTabsItem />
        </el-tab-pane>
        <el-tab-pane>
          <template #label><div class="text-lg">Wireframing</div></template>
          <ReadCaseStudiesTabsItem />
        </el-tab-pane>
        <el-tab-pane>
          <template #label><div class="text-lg">Branding</div></template>
          <ReadCaseStudiesTabsItem />
        </el-tab-pane>
        <el-tab-pane>
          <template #label><div class="text-lg">Development</div></template>
          <ReadCaseStudiesTabsItem />
        </el-tab-pane>
        <el-tab-pane>
          <template #label><div class="text-lg">webflow</div></template>
          <ReadCaseStudiesTabsItem />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
