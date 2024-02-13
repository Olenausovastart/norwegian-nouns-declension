<!-- ResultsDisplay.vue -->
<template>
  <div v-if="results.length > 0">
    <h2>Results</h2>
    <ul>
      <li v-for="result in results" :key="result.id">{{ result }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['results']
};
</script>
