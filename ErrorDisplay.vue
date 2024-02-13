<!-- ErrorDisplay.vue -->
<template>
  <div v-if="errors.length > 0">
    <h2>Error</h2>
    <ul>
      <li v-for="error in errors" :key="error.id">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['errors']
};
</script>
