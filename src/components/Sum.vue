<script lang="ts">
import { ref } from 'vue'
import { sum } from '../../utils/Math.utlis'

export default {
  name: 'SumComponent',
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
  <div class="p-10">
    <h2 class="heading-2">Sum two numbers</h2>
    <div class="flex gap-4 items-center">
      <input name="num_a" class="input" type="number" v-model="a" />
      <span class="text-xl">+</span>
      <input name="num_b" class="input" type="number" v-model="b" />
      <button type="button" class="flex-center btn-primary" @click="onClick()">Calculate</button>
    </div>
    <p data-testid="sum-result" class="mt-2 text-xl">Result: {{ result }}</p>
  </div>
</template>
