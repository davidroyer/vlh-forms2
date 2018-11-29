// import { registerComponents } from "./helpers";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import "./assets/styles/vlh-forms.scss";

// or with global options Vue.use(VuePromiseBtn, {})
// Register all Vue components in the `component` folder
const VlhFormComponents = require.context("./components", true, /.vue$/);

const VlhForms = {
  install: function(Vue, options) {
    VlhFormComponents.keys().forEach(fileName => {
      const componentConfig = VlhFormComponents(fileName);
      // PascalCase name without file extension

      const componentName = componentConfig.default.name
        ? componentConfig.default.name
        : upperFirst(camelCase(fileName.replace(/\.\w+$/, "")));

      // const componentName = upperFirst(
      //   camelCase(fileName.replace(/\.\w+$/, ""))
      // );
      // Globally register the component
      Vue.component(componentName, componentConfig.default || componentConfig);
    });
    // Add to Vue properties by exposing a getter for $bus
  }
};

// Install by default if using the script tag
// if (typeof window !== "undefined" && window.Vue && window.VeeValidate) {
//   window.Vue.use(VeeValidate);
//   window.Vue.use(VlhForms);
// }

// export default VlhForms;
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(VlhForms);
  if (window.VeeValidate) {
    GlobalVue.use(window.VeeValidate);
  }
}

export default VlhForms;
