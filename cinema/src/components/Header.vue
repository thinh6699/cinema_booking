<template>
  <header class="fixed-top bg-secondary-tint px-7">
    <div class="d-flex justify-content-between align-items-center h--10">
      <div class="logo-page d-flex align-items-center">
        <router-link class="fs-20 fwb-500" :to="{ name: 'home' }"
          >EC HUB</router-link
        >
        <span v-if="isLogin" class="text-info-shade fs-14 fwb ps-10"
          >会社名</span
        >
      </div>
      <div class="d-flex align-items-center">
        <span v-if="isLogin" class="me-2">Name (88812)</span>
        <button
          class="fs-12 btn btn-info-shade rounded-pill py-1 shadow-none me-2"
        >
          ログアウト
        </button>
        <b-dropdown right no-caret menu-class="mh--100 overflow-auto">
          <template #button-content>
            <div
              class="
                flex-center
                w--20
                minh--7
                text-normal
                position-relative
                bg-white
                rounded-pill
                px-2
              "
            >
              <span class="pe-5 word-break text-line-clamp-1">JPN</span>
              <i
                class="
                  fas
                  fa-chevron-down
                  position-absolute
                  top-50
                  end--1
                  translate-middle-y
                  px-2
                "
              ></i>
            </div>
          </template>
          <b-dropdown-item
            v-for="i in 2"
            :key="i"
            variant="normal"
            class="fs-12 fs-xl-15"
          >
            <span class="word-break text-line-clamp-1">JPN</span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Header extends Vue {
  private isLogin: boolean = false
}
</script>
