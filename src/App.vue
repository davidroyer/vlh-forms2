<template>
  <div id="app">
    <!--
      <form-first-name
        v-model="submit.firstName"
        label="First Name"
      ></form-first-name>
    -->
    <form-legal-text></form-legal-text>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data: () => ({
    submit: {
      firstName: "",
      lastName: ""
    },
    erros: []
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
