<template>
  <div class="banner">
    <div
      :style="{ backgroundImage: 'url(' + bg_url + ')' }"
      class="bg-banner"
    ></div>
    <div class="container">
      <div class="text-center text-white position-relative z-3 mw--210 mx-auto">
        <slot />
        <p class="fs-20 fs-lg-28 fwb-500 mb-0">
          Safe, secure, reliable ticketing.Your ticket to live entertainment!
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class Banner extends Vue {
  @Prop() public bg_url!: any
}
</script>
