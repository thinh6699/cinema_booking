<template>
  
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
