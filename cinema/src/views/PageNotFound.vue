<template>
  <div class="page-not-found">
    <div class="container">
      <div class="p-5">
        <p>404 Page Not Found!</p>
        <router-link :to="{ name: 'home' }" class="text-success">
          Back to Home</router-link
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
