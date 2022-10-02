<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";
import { func } from "../Function/helperfunction";

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

const sites = [
  {
    id: 1,
    src: "/src/assets/our_blog_section.pic1.png",
    date: "19 Jan 2022",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    text: "Read more",
  },
  {
    id: 2,
    src: "/src/assets/our_blog_section.pic2.png",
    date: "19 Jan 2022",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    text: "Read more",
  },
  {
    id: 3,
    src: "/src/assets/our_blog_section.pic3.png",
    date: "19 Jan 2022",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    text: "Read more",
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
const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the email"));
  } else if (value.indexOf("@") == -1) {
    callback(new Error("Please input correct address"));
  } else if (value.indexOf(".") == -1) {
    callback(new Error("Please input correct address"));
  } else {
    callback();
  }
};

const validateName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the Name"));
  } else {
    callback();
  }
};

const validateUrl = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the url"));
  } else if (isValidURL(value) === false) {
    callback(new Error("Please input the correct url"));
  } else {
    callback();
  }
};

const SendMessage = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("Submit!");
    } else {
      console.log("Error Submit!", fields);
    }
  });
};

const ruleForm = reactive({
  Email: "",
  Name: "",
  Url: "",
});

const rules = reactive({
  Email: [{ validator: validateEmail, trigger: "blur" }],
  Name: [{ validator: validateName, trigger: "blur" }],
  Url: [{ validator: validateUrl, trigger: "blur" }],
});

const ruleFormRef = ref<FormInstance>();

function isValidURL(string: any) {
  var res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
}
</script>
<template>
  <div class="background-first">
    <div
      class="container mx-auto py-36 flex gap-20 div-collapse--AskQuestionSection"
    >
      <div class="flex flex-col gap-4 collapse-text--AskQuestionSection">
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
      <div
        class="grow main-div-collapse--AskQuestionSection"
        @click="AddClass()"
      >
        <div v-for="photo in photos" :key="photo.id">
          <div
            class="collapsible cursor-pointer flex justify-between items-center w-full border-none outline-none text-[1.3rem]"
          >
            <span
              class="text-[#2405F2] font-semibold pl-8 collapse-span--AskQuestionSection"
              >{{ photo.id }}</span
            >
            <div class="second-text--AskQuestionSection">{{ photo.title }}</div>
          </div>
          <div class="content flex justify-center overflow-hidden max-h-0">
            <p class="mb-12 pl-16">{{ photo.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto flex pb-36 text-photo-div--AskQuestionSection"
    >
      <div
        class="flex flex-col absolute z-10 h-[45rem] w-[48rem] text-white items-center text-bg--AskQuestionSection"
      >
        <div
          class="relative top-40 flex flex-col gap-8 third-text--AskQuestionSection"
        >
          <h1 class="text-5xl leading-tight text-title--AskQuestionSection">
            Building stellar <br />
            websites for<br />
            early startups
          </h1>
          <div class="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
            sed do eiusmod tempor incididunt ut labore et dolore<br />
            magna aliqua ut enim.
          </div>
        </div>
      </div>
      <el-image
        class="h-[45rem] w-[48rem] image--AskQuestionSection"
        src="/src/assets/bg_AskQuestionSection.png"
      />
      <div
        class="h-[45rem] w-[48rem] bg-[#1C1E53] text-white form-bg--AskQuestionSection"
      >
        <div
          class="relative top-32 mx-24 flex flex-col gap-5 main-form--AskQuestionSection"
        >
          <h1 class="text-2xl">Send inquiry</h1>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </div>
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            class="Form--AskedQuestionSection flex flex-col gap-3"
          >
            <el-form-item prop="Name"
              ><el-input
                type="text"
                class="mb-2"
                v-model="ruleForm.Name"
                placeholder="Name"
            /></el-form-item>
            <el-form-item prop="Email"
              ><el-input
                class="mb-2"
                type="email"
                v-model="ruleForm.Email"
                placeholder="Email"
            /></el-form-item>
            <el-form-item prop="Url"
              ><el-input
                type="url"
                class="mb-2"
                v-model="ruleForm.Url"
                placeholder="Paste your Figma design URL"
            /></el-form-item>
            <el-form-item class="button--AskQuestionSection"
              ><el-button @click="SendMessage(ruleFormRef)"
                >Send an inquiry</el-button
              ></el-form-item
            >
          </el-form>
          <div
            class="flex justify-center items-center gap-3 cursor-pointer hover:text-[#BBBBCB]"
            @click="$router.push('/ContactUs'), func()"
          >
            Get in touch with us<el-icon><Right /></el-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <h1 class="text-4xl font-semibold second-title--AskedQuestionSection">
        Our blog
      </h1>
      <div
        class="grid grid-cols-3 gap-10 mt-16 pb-36 three-cards--AskedQuestionSection"
      >
        <div v-for="site in sites" :key="site.id" class="flex flex-col gap-6">
          <el-image :src="site.src" />
          <div class="text-[#80828d] mt-4">{{ site.date }}</div>
          <h1 class="text-2xl">{{ site.title }}</h1>
          <div class="text-[#80828d]">{{ site.description }}</div>
          <div
            class="mt-4 flex items-center gap-3 cursor-pointer hover:text-[#1c1e5499]"
            @click="$router.push('/BlogPage'), func()"
          >
            {{ site.text }}<el-icon><Right /></el-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
