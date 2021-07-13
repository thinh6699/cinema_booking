<template>
  <b-modal id="modal-success" hide-footer centered>
    <span class="my-4 text-dark">
      {{ message }}
    </span>
    <slot />
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class ModalSuccess extends Vue {
  @Prop() public message!: string
}
</script>
