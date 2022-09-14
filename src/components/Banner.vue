<template>
  <div
    class="banner"
    :class="[
      isDetailBanner ? 'padding-bottom-2' : '',
      isSeatBanner ? 'seat-banner' : ''
    ]"
  >
    <div
      :style="{ backgroundImage: 'url(' + bg_url + ')' }"
      class="bg-banner"
    ></div>
    <div class="container">
      <div class="text-center position-relative z-3">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class Banner extends Vue {
  @Prop() public bg_url!: any
  @Prop({ default: false }) public isDetailBanner!: boolean
  @Prop({ default: false }) public isSeatBanner!: boolean
}
</script>
