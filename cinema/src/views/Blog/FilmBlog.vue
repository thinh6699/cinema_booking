<template>
  <div>
    <div>FilmBlog</div>
    <router-link :to="{ name: 'blog-detail', params: { blogId: 1 } }"
      >Xem chi tiết</router-link
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class FilmBlog extends Vue {}
</script>
