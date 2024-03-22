<template>
  <div>
    <!-- Title -->
    <div class="text-uppercase text-center mb-7">
      <p class="text-success fs-18 mb-2">{{ $t('signup.welcome_to') }}</p>
      <h2 class="text-white fs-30 mb-0 fwb">thinh6699 cinema</h2>
    </div>

    <!-- SignUp form -->
    <ValidationObserver ref="observer" tag="div">
      <div class="sign-up-form">
        <div class="mb-5">
          <div class="form-group mb-5">
            <label class="text-uppercase w-100 mb-3" for="full_name">
              {{ $t('common.full_name') }}
              <span class="position-relative end--1 text-danger fs-18">*</span>
            </label>
            <ValidationProvider
              v-slot="{ errors, touched }"
              :rules="{ required: true, maxLength: 255 }"
              name="full_name"
            >
              <input
                v-model="formValues.full_name"
                name="full_name"
                id="full_name"
                class="auth-input outline-0"
                :class="
                  (errors[0] && touched) || errors[0] ? 'border-danger' : ''
                "
                :placeholder="$t('common.your_full_name')"
              />
              <span
                v-if="(errors[0] && touched) || errors[0]"
                class="text-danger"
              >
                {{ errors[0] }}
              </span>
            </ValidationProvider>
          </div>

          <div class="form-group mb-5">
            <label class="text-uppercase w-100 mb-3" for="email">
              {{ $t('common.enter_your_email') }}
              <span class="position-relative end--1 text-danger fs-18">*</span>
            </label>
            <ValidationProvider
              v-slot="{ errors, touched }"
              :rules="{ required: true, maxLength: 255, email: true }"
              name="email"
            >
              <input
                v-model="formValues.email"
                name="email"
                id="email"
                class="auth-input outline-0"
                :class="
                  (errors[0] && touched) || errors[0] ? 'border-danger' : ''
                "
                :placeholder="$t('common.email')"
              />
              <span
                v-if="(errors[0] && touched) || errors[0]"
                class="text-danger"
              >
                {{ errors[0] }}
              </span>
            </ValidationProvider>
          </div>

          <div class="form-group mb-5">
            <label class="text-uppercase w-100 mb-3" for="password">
              {{ $t('common.password') }}
              <span class="position-relative end--1 text-danger fs-18">*</span>
            </label>
            <ValidationProvider
              v-slot="{ errors, touched }"
              :rules="{ required: true, max: 64, password: true }"
              name="password"
            >
              <input
                v-model="formValues.password"
                name="password"
                id="password"
                class="auth-input outline-0"
                :class="
                  (errors[0] && touched) || errors[0] ? 'border-danger' : ''
                "
                type="password"
                :placeholder="$t('common.password')"
              />
              <span
                v-if="(errors[0] && touched) || errors[0]"
                class="text-danger"
              >
                {{ errors[0] }}
              </span>
            </ValidationProvider>
          </div>

          <div class="form-group mb-5">
            <label class="text-uppercase w-100 mb-3" for="confirm_password">
              {{ $t('common.confirm_password') }}
              <span class="position-relative end--1 text-danger fs-18">*</span>
            </label>
            <ValidationProvider
              v-slot="{ errors, touched }"
              :rules="{
                required: true,
                max: 64,
                password: true,
                confirm_password: formValues.password
              }"
              name="confirm_password"
            >
              <input
                v-model="formValues.confirm_password"
                name="confirm_password"
                id="confirm_password"
                class="auth-input outline-0"
                type="password"
                :placeholder="$t('common.confirm_password')"
                :class="
                  (errors[0] && touched) || errors[0] ? 'border-danger' : ''
                "
              />
              <span
                v-if="(errors[0] && touched) || errors[0]"
                class="text-danger"
              >
                {{ errors[0] }}
              </span>
            </ValidationProvider>
          </div>

          <div class="form-group mb-5">
            <label class="text-uppercase w-100 mb-3" for="address">
              {{ $t('common.address') }}
              <span class="position-relative end--1 text-danger fs-18">*</span>
            </label>
            <ValidationProvider
              v-slot="{ errors, touched }"
              :rules="{
                required: true,
                max: 1000
              }"
              name="address"
            >
              <input
                v-model="formValues.address"
                name="address"
                id="address"
                class="auth-input outline-0"
                :placeholder="$t('common.address')"
                :class="
                  (errors[0] && touched) || errors[0] ? 'border-danger' : ''
                "
              />
              <span
                v-if="(errors[0] && touched) || errors[0]"
                class="text-danger"
              >
                {{ errors[0] }}
              </span>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <label class="text-uppercase w-100 mb-3" for="phone_number">
              {{ $t('common.phone_number') }}
              <span class="position-relative end--1 text-danger fs-18">*</span>
            </label>
            <ValidationProvider
              v-slot="{ errors, touched }"
              :rules="{
                required: true,
                max: 15
              }"
              name="phone_number"
            >
              <input
                v-model="formValues.phone_number"
                name="phone_number"
                id="phone_number"
                class="auth-input outline-0"
                :placeholder="$t('common.phone_number')"
                :class="
                  (errors[0] && touched) || errors[0] ? 'border-danger' : ''
                "
              />
              <span
                v-if="(errors[0] && touched) || errors[0]"
                class="text-danger"
              >
                {{ errors[0] }}
              </span>
            </ValidationProvider>
          </div>
        </div>

        <div class="d-flex align-items-center justify-content-start mb-7">
          <ValidationProvider
            v-slot="{ errors, touched }"
            :rules="{
              accept_term: true
            }"
            name="accept_term"
          >
            <div class="d-flex align-items-center">
              <input
                v-model="formValues.accept_term"
                name="accept_term"
                class="form-check-input cursor-pointer w--4 h--4 me-2 mt-0 flex-fixed"
                type="checkbox"
              />
              <label
                >{{ $t('signup.agree_to') }}
                <span class="text-success cursor-pointer">{{
                  $t('signup.term_and_privacy')
                }}</span></label
              >
            </div>
            <span
              v-if="(errors[0] && touched) || errors[0]"
              class="text-danger"
            >
              {{ errors[0] }}
            </span>
          </ValidationProvider>
        </div>

        <div class="mw--45 mx-auto mb-5">
          <button @click="signUp" class="btn btn-gradient">
            {{ $t('common.btn.signup') }}
          </button>
        </div>

        <div class="text-center mb-7">
          {{ $t('signup.already_have_acc') }}
          <router-link :to="{ name: 'sign-in' }" class="text-success">{{
            $t('signup.login')
          }}</router-link>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { SignUpForm } from '@/models'
import { ValidationProvider } from 'vee-validate'
import { Component, Vue } from 'vue-property-decorator'
import { register } from '@/services/AuthService'

@Component
export default class SignUp extends Vue {
  public formValues: SignUpForm = {
    full_name: '',
    email: '',
    password: '',
    confirm_password: '',
    address: '',
    phone_number: '',
    accept_term: false
  }

  async signUp() {
    const observer = this.$refs.observer as any
    const valid = await observer.validate()
    const { full_name, email, password, address, phone_number } =
      this.formValues || {}
    const payload: SignUpForm = {
      full_name,
      email,
      password,
      address,
      phone_number
    }
    if (valid) {
      try {
        await register(payload)
        this.$toast.success(this.$t('common.message.registerd_acc_successfull'))
        this.$router.push('/sign-in')
      } catch {
        this.$toast.error(this.$t('common.message.fail_to_action'))
      }
    }
  }
}
</script>
