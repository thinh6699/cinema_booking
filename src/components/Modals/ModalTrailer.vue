<template>
  <b-modal id="modal-trailer" hide-footer centered size="xl">
    <div class="padding-top-16-9 position-relative">
      <iframe
        class="w-100 h-100 position-absolute top-0"
        :src="`${trailerUrl}?autoplay=1`"
        :title="movieName"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class ModalTrailer extends Vue {
  @Prop() public trailerUrl!: string
  @Prop() public movieName!: string
}
</script>
