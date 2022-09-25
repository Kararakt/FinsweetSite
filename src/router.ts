import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../src/pages/HomePage.vue";
import AboutUs from "../src/pages/AboutUs.vue";
import Pricing from "../src/pages/Pricing.vue";
import Features from "../src/pages/Features.vue";
import Work from "../src/pages/Work.vue"
import ReadCaseStudies from '/src/pages/ReadCaseStudies.vue'
import BlogPage from "/src/pages/BlogPage.vue"
import ReadBlog from '/src/pages/ReadBlog.vue'
import ContactUs from "/src/pages/Contactus.vue"
import PrivacyPolicy from "/src/pages/PrivacyPolicy.vue"


const routes = [
{ path: "/", name:"Home", component: HomePage },
{ path: "/AboutUs", name:"AboutUs", component: AboutUs },
{path: "/Pricing", name:"Pricing", component: Pricing},
{path:"/Features", name:"Features", component: Features},
{path:"/OurWork", name:"OurWork", component: Work},
{path:"/ReadCaseStudies", name:"ReadCaseStudies", component: ReadCaseStudies},
{path:"/BlogPage", name:"BlogPage", component: BlogPage},
{path:"/ReadBlog", name:"ReadBlog", component: ReadBlog},
{path:"/ContactUs", name:"ContactUs", component: ContactUs},
{path:"/PrivacyPolicy", name:"PrivacyPolicy", component: PrivacyPolicy}
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
