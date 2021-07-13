<template>
  <div class="min-h-screen d-flex flex-column">
    <Header />
    <main class="flex-1">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <ScrollToTop />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Header,
    ScrollToTop,
    Footer
  }
})
export default class LayoutDefault extends Vue {}
</script>
