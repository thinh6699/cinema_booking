<template>
  <b-modal
    :id="id"
    hide-footer
    centered
    @hidden="hideModal"
    header-class="modal-info-header"
    header-bg-variant="primary-tint-less"
  >
    <div class="p-5">
      <div
        class="text-dark flex-center text-pre text-center word-break pt-3 mb-10"
      >
        {{ infoMess }}
      </div>
      <div class="flex-center mb-3">
        <button @click="hideModal" class="btn btn-outline-secondary-deep w--25">
          {{ $t('common.btn.ok') }}
        </button>
      </div>
    </div>
  </b-modal>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator'

@Component
export default class ModalInfo extends Vue {
  @Prop({ default: 'modal-info' }) private id!: string
  @Prop() private infoMess!: string

  hideModal() {
    this.$bvModal.hide(this.id)
    setTimeout(() => {
      this.$emit('close')
      clearTimeout()
    }, 300)
  }
}
</script>
