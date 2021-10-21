<template>
  <div class="d-flex flex-column min-h-screen">
    <Header />
    <main class="flex-1 mt-10 flex-xl-center">
      <div class="container">
        <slot />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'

@Component({
  components: {
    Header
  }
})
export default class LayoutAuth extends Vue {}
</script>
