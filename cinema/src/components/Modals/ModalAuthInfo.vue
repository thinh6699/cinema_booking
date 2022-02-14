<template>
  <b-modal id="modal-info" :title="title" hide-footer centered>
    <span class="my-4 text-dark">
      {{ message }}
    </span>
    <slot />
    <router-link class="text-success" :to="{ name: 'sign-in' }"
      >Click here to login.</router-link
    >
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class ModalAuthInfo extends Vue {
  @Prop() public message!: string
  @Prop() public title!: string
}
</script>
