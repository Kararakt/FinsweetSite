<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";

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

const validateSubject = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please fill in the field "));
  } else {
    callback();
  }
};

const SubmitMessage = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("Submit!");
    } else {
      console.log("Error Submit!", fields);
    }
  });
};

const validateSecondSubject = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please choose your problem"));
  }
};

const validateTextArea = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please describe your problem"));
  }
};

const ruleForm = reactive({
  Email: "",
  Name: "",
  Subject: "",
  SecondSubject: "",
  TextArea: "",
});

const rules = reactive({
  Email: [{ validator: validateEmail, trigger: "blur" }],
  Name: [{ validator: validateName, trigger: "blur" }],
  Subject: [
    { validator: validateSubject, trigger: "blur" },
    { min: 5, max: 40, message: "Length should be 5 to 40", trigger: "blur " },
  ],
  SecondSubject: [{ validator: validateSecondSubject, trigger: "blur" }],
  TextArea: [{ validator: validateTextArea, trigger: "blur" }],
});

const ruleFormRef = ref<FormInstance>();
</script>
<template>
  <div class="container mx-auto px-20 py-36 main-div--ContactUs">
    <div class="flex flex-col items-center gap-6 div-h1--ContactUs">
      <h1 class="text-5xl font-semibold whitespace-nowrap text--ContactUs">
        Contact Us
      </h1>
      <div class="text-[#80828d] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
        eiusmod tempor incididunt ut labore.
      </div>
    </div>
    <div class="mx-20 mt-20 bg-[#F4F6FC] div-form--ContactUs">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="grid gap-8"
        label-position="top"
      >
        <div class="my-16 mx-20 flex flex-col gap-8 second-div--ContactUs">
          <div class="grid grid-cols-2 gap-8 form--ContactUs">
            <el-form-item prop="Name">
              <template #label
                ><div class="text-black font-bold">Name</div>
              </template>
              <el-input
                v-model="ruleForm.Name"
                placeholder="Enter your Name"
                type="text"
                class="pb-3"
              />
            </el-form-item>
            <el-form-item prop="Email"
              ><template #label
                ><div class="text-black font-bold">Email</div> </template
              ><el-input
                v-model="ruleForm.Email"
                placeholder="Enter your Email"
                class="pb-3"
                type="email"
            /></el-form-item>
            <el-form-item prop="Subject">
              <template #label
                ><div class="text-black font-bold">Subject</div> </template
              ><el-input
                v-model="ruleForm.Subject"
                placeholder="Provide context"
                class="pb-3"
                type="text"
            /></el-form-item>
            <el-form-item prop="SecondSubject"
              ><template #label
                ><div class="text-black font-bold">Subject</div> </template
              ><el-select
                placeholder="Select Subject"
                class="pb-3"
                v-model="ruleForm.SecondSubject"
                ><el-option value="FirstSubject"
                  ><span>FirstSubject</span></el-option
                ><el-option value="SecondSubject"
                  ><span>SecondSubject</span></el-option
                ><el-option value="ThirdSubject"
                  ><span>ThirdSubject</span></el-option
                ><el-option value="FourthSubject"
                  ><span>FourthSubject</span></el-option
                ></el-select
              >
            </el-form-item>
          </div>
          <div class="second-form--ContactUs flex flex-col gap-8">
            <el-form-item prop="TextArea"
              ><template #label
                ><div class="text-black font-bold">Message</div></template
              >
              <el-input
                placeholder="Write your question here"
                resize="none"
                type="textarea"
                class="pb-3"
                rows="5"
                maxlength="150"
                show-word-limit
                v-model="ruleForm.TextArea"
            /></el-form-item>
            <el-form-item class="button-ContactUs"
              ><el-button @click="SubmitMessage(ruleFormRef)"
                >Send Message</el-button
              ></el-form-item
            >
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
