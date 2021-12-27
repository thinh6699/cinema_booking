<template>
  <div
    @click="scrollToTop"
    class="fixed-bottom bottom--8 end--8 start-unset h--10 w--10 flex-center bg-success rounded cursor-pointer"
    :class="scrollPosition > 200 ? 'd-flex' : 'd-none'"
  >
    <i class="text-white fas fa-arrow-up"></i>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class ScrollToTop extends Vue {
  public scrollPosition: any = null

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  updateScroll() {
    this.scrollPosition = window.scrollY
  }

  created() {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>
