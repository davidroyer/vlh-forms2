import Vue from "vue";
import App from "./App.vue";
import VlhForms from "./lib";
import VeeValidate from "vee-validate";
// import "./assets/styles/app.scss";

Vue.use(VeeValidate);
Vue.use(VlhForms);
Vue.config.productionTip = false;
console.log(VlhForms);
console.log(VeeValidate);
new Vue({
  render: h => h(App)
}).$mount("#app");
