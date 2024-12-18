<script lang="ts">
import SumComponent from './components/Sum.vue'
import StringComponent from './components/String.vue'
export default {
  name: 'App',
  components: {
    SumComponent,
    StringComponent,
  },
  data() {},
  methods: {},
}
</script>

<template>
  <div class="container">
    <h1 data-testid="heading" class="font-bold text-3xl">Vue.js-Playwright testing tutorial</h1>
    <StringComponent />
    <SumComponent />
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
}
</style>
