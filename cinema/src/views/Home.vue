<template>
  <div>
    <div>Home</div>
    <router-link :to="{ name: 'Todo' }">go to Todo</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {}
</script>
