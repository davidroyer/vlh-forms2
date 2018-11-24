import Vue from "vue";
import App from "./App.vue";
import VlhForms from "./index.js";
import "./assets/styles/vlh-forms.scss";

Vue.use(VlhForms);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
