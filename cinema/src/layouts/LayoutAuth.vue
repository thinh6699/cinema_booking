<template>
  <div>
    <div class="bg-auth">
      <div class="container">
        <div class="py-20">
          <div class="auth-area w-100 mw--135 px-4 py-10 mx-auto">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class LayoutAuth extends Vue {}
</script>
