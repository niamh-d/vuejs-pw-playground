<script lang="ts">
import SumComponent from './components/Sum.vue'
export default {
  name: 'App',
  components: {
    SumComponent,
  },
  data() {},
  methods: {},
}
</script>

<template>
  <div class="container">
    <h1 data-testid="heading" class="font-bold text-3xl">Vue.js-Playwright testing tutorial</h1>
    <SumComponent />
    <div>
      <h2 class="font-semi-bold text-2xl">Capitalise a string</h2>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
}
</style>
