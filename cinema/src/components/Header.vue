<template>
  <header
    :class="{
      'bg-dark-tint': scrollPosition > 0
    }"
    class="sticky-top border-bottom h--20"
  >
    <div class="container h-100">
      <div class="d-flex align-items-center justify-content-between h-100">
        <div class="h--10">
          <img class="img-contain" src="../assets/images/logo.png" alt="" />
        </div>
        <div class="toggle-mobile-sidebar">
          <i
            v-b-toggle="'mobile-menu'"
            @click="isOpen = !isOpen"
            class="fs-30 text-white cursor-pointer fal"
            :class="isOpen ? 'fa-times' : 'fa-bars'"
          ></i>
          <MobileSidebar :isOpen="isOpen" @close-sidebar="isOpen = $event" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MobileSidebar from '@/components/MobileSidebar.vue'

@Component({
  components: {
    MobileSidebar
  }
})
export default class Header extends Vue {
  public isOpen: boolean = false
  public scrollPosition: any = null

  updateScroll() {
    this.scrollPosition = window.scrollY
  }

  created() {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>
