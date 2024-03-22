<template>
  <b-modal
    :id="id"
    hide-footer
    centered
    @hidden="hideModal"
    header-class="modal-header"
    :header-bg-variant="getColorByType()"
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
import { MODAL_TYPE } from '@/models/enum'

@Component
export default class ModalInfo extends Vue {
  @Prop({ default: 'modal-info' }) public id!: string
  @Prop({ default: MODAL_TYPE.SUCCESS }) public type!: MODAL_TYPE
  @Prop() public infoMess!: string

  getColorByType() {
    switch (this.type) {
      case MODAL_TYPE.SUCCESS:
        return 'success'
      case MODAL_TYPE.INFO:
        return 'primary-tint-less'
    }
  }

  hideModal() {
    this.$bvModal.hide(this.id)
    setTimeout(() => {
      this.$emit('close')
    }, 300)
  }
}
</script>
