<script lang="ts">
import { ref } from 'vue'
import { sum } from '../utils/Math.utlis'

export default {
  name: 'App',
  data() {
    return {
      result: 0,
      a: ref(0),
      b: ref(0),
    }
  },
  methods: {
    onClick() {
      this.result = sum(this.a, this.b)
    },
  },
}
</script>

<template>
  <div class="container">
    <h1 data-testid="heading" class="font-bold text-3xl">Vue.js-Playwright testing tutorial</h1>
    <div class="p-10">
      <h2 class="font-semi-bold text-2xl">Sum two numbers</h2>
      <div class="flex gap-4">
        <input name="num_a" class="input" type="number" v-model="a" />
        <input name="num_b" class="input" type="number" v-model="b" />
        <button type="button" @click="onClick()">Calculate</button>
      </div>
      <p data-testid="sum-result" class="text-xl">Result: {{ result }}</p>
    </div>
    <div>
      <h2 class="font-semi-bold text-2xl">Capitalise a string</h2>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
}
.input {
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
