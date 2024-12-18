<script lang="ts">
import { ref } from 'vue'
import { capitalize } from '../../utils/String.utils'

export default {
  name: 'StringComponent',
  data() {
    return {
      string: ref(''),
      result: ref(''),
    }
  },
  methods: {
    onClick() {
      this.result = capitalize(this.string)
    },
  },
}
</script>

<template>
  <div class="p-10">
    <h2 class="font-semi-bold text-2xl mb-3">Capitalize a string</h2>
    <div class="flex gap-4 items-center">
      <input name="string" class="input" type="text" v-model="string" />
      <button type="button" class="flex-center btn-primary" @click="onClick()">Capitalize</button>
    </div>
    <p data-testid="string-result" class="mt-2 text-xl">Result: {{ result }}</p>
  </div>
</template>
