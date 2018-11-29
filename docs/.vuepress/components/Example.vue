<template>
  <div>
      <h2>Example</h2>
      <form id="tlh-form">
        <form-first-name v-model="submit.firstName"/>
        <form-email v-model="submit.email"/>
      </form>

      <span><strong>First Name: </strong></span>
      <span v-text="submit.firstName"></span>
  </div>
</template>

<script>

export default {
  data: () => ({
    submit: {
      firstName: '',
      lastName: '',
      email: ''
    }
  })
}
</script>

<style scoped>
</style>