<!-- TextInput.vue -->
<template>
  <input type="text" v-model="inputValue" @input="handleInput">
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    handleInput(event) {
      this.inputValue = event.target.value;
    }
  }
};
</script>
