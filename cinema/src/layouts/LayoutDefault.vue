<template>
  <div>
    <div>header</div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class LayoutDefault extends Vue {}
</script>
