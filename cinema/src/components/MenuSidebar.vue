<template>
  <div class="w--60 flex-fixed bg-dark-shade min-h-screen-header">
    <ul class="list-unstyled mb-0 fs-16 text-white cursor-pointer">
      <li class="py-3 p-4 sidebar-active">
        <i class="fas fa-home me-3"></i>
        <span>HOME</span>
      </li>
      <li class="py-3 p-4 sidebar-active">
        <i class="fas fa-folder-open me-3"></i>
        <span>各種マスタ</span>
      </li>
      <li class="py-3 p-4 sidebar-active">
        <i class="fas fa-cloud-upload-alt me-3"></i><span>EAIデータ変換</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class MenuSidebar extends Vue {}
</script>
