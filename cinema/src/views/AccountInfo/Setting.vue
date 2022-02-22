<template>
  <div class="setting">
    <Banner
      :bg_url="require('@/assets/images/banner-setting.jpg')"
      :isSeatBanner="true"
    >
      <div>
        <p class="fs-30 fs-lg-40 text-white text-uppercase fwb mb-1">
          {{ $t('common.setting') }}
        </p>
        <div class="flex-center fs-22 fs-lg-32">
          <span @click="backToHome" class="me-2 cursor-pointer fwb">{{
            $t('common.home')
          }}</span>
          <span class="me-2">></span>
          <span>{{ $t('common.setting') }}</span>
        </div>
      </div>
    </Banner>

    <div class="container mw--200 pt-15 mb-15">
      <div class="account-detail mb-20">
        <div
          class="fs-25 fs-lg-30 text-success text-uppercase pb-2 border-bottom mb-8"
        >
          {{ $t('setting.profile') }}
        </div>
        <!-- Name -->
        <div class="account-name mb-8">
          <label class="d-block text-white mb-2" for="name">{{
            $t('setting.full_name')
          }}</label>
          <input
            id="name"
            class="w-100 h--8 bg-transparent border-0 border-bottom outline-0 text-light-shade mb-2"
            type="text"
            :placeholder="$t('setting.add_full_name')"
          />
          <p class="mb-0 fs-15">
            {{ $t('setting.name_message') }}
          </p>
        </div>

        <!-- Email -->
        <div class="account-email mb-8">
          <label class="d-block text-white mb-2" for="email">
            {{ $t('setting.email') }}</label
          >
          <input
            id="email"
            class="w-100 h--8 bg-transparent border-0 border-bottom outline-0 text-light-shade"
            type="text"
            :placeholder="$t('setting.add_email')"
          />
        </div>

        <!-- Phone Number -->
        <div class="account-phone mb-8">
          <label class="d-block text-white mb-2" for="phone">
            {{ $t('setting.phone_number') }}</label
          >
          <input
            id="phone"
            class="w-100 h--8 bg-transparent border-0 border-bottom outline-0 text-light-shade mb-2"
            type="number"
            min="0"
            oninput="validity.valid||(value='')"
            :placeholder="$t('setting.add_phone')"
          />
          <p class="mb-0 fs-15">{{ $t('setting.phone_message') }}</p>
        </div>

        <!-- Address -->
        <div class="account-adress mb-8">
          <label class="d-block text-white mb-2" for="address">{{
            $t('setting.address')
          }}</label>
          <input
            id="address"
            class="w-100 h--8 bg-transparent border-0 border-bottom outline-0 text-light-shade"
            type="text"
            :placeholder="$t('setting.add_address')"
          />
        </div>

        <!-- Avatar -->
        <div class="account-avatar mb-8">
          <span class="d-block text-white">{{ $t('setting.avatar') }}</span>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-block">
              <p class="me-3 mb-2">
                {{ $t('setting.avatar_message') }}
              </p>
              <p v-if="errorTypeAndSize" class="fs-14 text-danger">
                {{ $t('setting.wrong_format') }}
              </p>
            </div>
            <input
              id="file"
              ref="fileInput"
              type="file"
              class="h--0 w--0 overflow-hidden"
              accept=".jpg,.png,.gif"
              @click="resetValue"
              @change="onAvatarChange"
            />

            <div class="d-flex align-items-center">
              <div class="w--15 h--15 rounded-circle flex-fixed me-3">
                <img
                  class="img-cover rounded-circle"
                  :src="avatarPath ? avatarPath : noAvatar"
                  alt="Avatar"
                />
              </div>
              <label
                for="file"
                class="px-4 py-2 rounded-3 border flex-center cursor-pointer"
              >
                {{ $t('common.btn.upload') }}
              </label>
            </div>
          </div>
        </div>

        <div class="flex-center">
          <button class="btn-gradient w--40">
            {{ $t('common.btn.save') }}
          </button>
        </div>
      </div>

      <div class="change-password">
        <div
          class="fs-25 fs-lg-30 text-success text-uppercase pb-2 border-bottom mb-8"
        >
          {{ $t('setting.change_password') }}
        </div>
        <!-- Current password -->
        <div class="account-name mb-8">
          <label class="d-block text-white mb-2" for="current-password">
            {{ $t('setting.current_password') }}</label
          >
          <input
            id="current-password"
            class="w-100 h--8 bg-transparent border-0 border-bottom outline-0 text-light-shade"
            type="password"
            :placeholder="$t('setting.current_password')"
          />
        </div>

        <!-- New password -->
        <div class="account-name mb-8">
          <label class="d-block text-white mb-2" for="new-password">
            {{ $t('setting.new_password') }}</label
          >
          <input
            id="new-password"
            class="w-100 h--8 bg-transparent border-0 border-bottom outline-0 text-light-shade"
            type="password"
            :placeholder="$t('setting.new_password')"
          />
        </div>

        <!-- Confirm new password -->
        <div class="account-name mb-8">
          <label class="d-block text-white mb-2" for="confirm-password">
            {{ $t('setting.confirm_password') }}</label
          >
          <input
            id="confirm-password"
            class="w-100 h--8 bg-transparent border-0 border-bottom outline-0 text-light-shade"
            type="password"
            :placeholder="$t('setting.confirm_password')"
          />
        </div>

        <div class="flex-center">
          <button class="btn-gradient w--40">
            {{ $t('common.btn.change') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Setting extends Vue {
  private noAvatar = require('@/assets/images/avatar_default.png')
  private avatarPath: string = ''
  private errorTypeAndSize: boolean = false

  resetValue(): void {
    const fileInput = this.$refs.fileInput as any
    fileInput.value = null
    this.errorTypeAndSize = false
  }

  onAvatarChange(event: any) {
    let imageType = ['image/png', 'image/gif', 'image/jpg']
    let files = event.target.files || event.dataTransfer.files
    if (event.target.files.length !== 1) return
    const blob = new Blob([files[0]])
    if (files[0].size > 15728640 || !imageType.includes(files[0].type)) {
      this.errorTypeAndSize = true
    } else {
      this.avatarPath = URL.createObjectURL(blob)
    }
  }

  backToHome(): void {
    this.$router.push({ name: 'home' })
  }
}
</script>
