<template>
  <div class="min-h-screen d-flex flex-column">
    <Header />
    <Banner />
    <main class="flex-1 mt-20">
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
import Banner from '@/components/Banner.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Header,
    ScrollToTop,
    Footer,
    Banner
  }
})
export default class LayoutDefault extends Vue {}
</script>
