<template>
  <div class="page-not-found">
    <div class="container">
      <div class="p-5">
        <p>{{ $t('page_not_found.message') }}</p>
        <router-link :to="{ name: 'home' }" class="text-success">
          {{ $t('common.btn.back_to_home') }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class PageNotFound extends Vue {}
</script>
