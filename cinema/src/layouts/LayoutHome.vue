<template>
  <div class="d-flex flex-column min-h-screen">
    <Header />
    <main class="flex-1 mt-10">
      <div class="d-flex">
        <MenuSidebar />
        <div class="container">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import MenuSidebar from '@/components/MenuSidebar.vue'

@Component({
  components: {
    Header,
    MenuSidebar
  }
})
export default class LayoutHome extends Vue {}
</script>
