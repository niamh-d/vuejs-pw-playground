<script lang="ts">
import { ref } from 'vue'
import { capitalize } from '../../utils/String.utils'

export default {
  name: 'StringComponent',
  data() {
    return {
      string: ref(''),
      result: ref(''),
      isVisible: false,
    }
  },
  methods: {
    unHide() {
      const resultA = this.$refs['string-result-A'] as HTMLElement
      const resultC = this.$refs['string-result-C'] as HTMLElement
      resultA.classList.remove('invisible')
      resultC.classList.remove('hidden')
    },
    onClick() {
      if (this.string) {
        this.result = capitalize(this.string)
        this.isVisible = true
        this.unHide()
      } else return
    },
  },
}
</script>

<template>
  <div class="p-10">
    <h2 class="heading-2">Capitalize a string</h2>
    <div class="flex gap-4 items-center">
      <input name="string" class="input" type="text" v-model="string" />
      <button type="button" class="flex-center btn-primary" @click="onClick()">Capitalize</button>
    </div>
    <p ref="string-result-A" data-testid="string-result-A" class="mt-2 text-xl invisible">
      Result: {{ result }}
    </p>
    <p data-testid="string-result-B" class="mt-2 text-xl" v-if="isVisible">Result: {{ result }}</p>
    <p ref="string-result-C" data-testid="string-result-C" class="mt-2 text-xl hidden">
      Result: {{ result }}
    </p>
  </div>
</template>
