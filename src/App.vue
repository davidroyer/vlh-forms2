<template>
  <div id="app">
    <form ref="form1" id="tlh-form" class="example basic flex-rw">
      <form-first-name
        v-model="submit.firstName"
        label="First Name"
      ></form-first-name>
      <form-email v-model="submit.email" />
      <form-legal-text></form-legal-text>
      <form-submit :disableOnErrors="true" text="Get New"></form-submit>
      <form-legal-text
        school="Alvernia University"
        fontSize="1.1em"
        textColor="blue"
      />
    </form>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data: () => ({
    submit: {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    }
  })
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
