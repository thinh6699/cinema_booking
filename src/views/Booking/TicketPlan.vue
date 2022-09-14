<template>
  <div class="ticket-plan">
    <Banner :bg_url="$store.state.movie.movieDetail.background">
      <div>
        <p class="fs-30 fs-lg-40 text-white text-uppercase fwb mb-6">
          {{ $store.state.movie.movieDetail.name }}
        </p>
      </div>
    </Banner>

    <!-- Change condition -->
    <div class="py-15 bg-dark-tint-1 mb-20">
      <div class="container">
        <div class="d-xl-flex align-items-center justify-content-around">
          <!-- Date choose -->
          <div
            class="d-flex flex-column flex-column-md-unset align-items-center justify-content-center mb-md-9 mb-xl-0"
          >
            <div class="d-flex align-items-center mb-9 mb-md-0 mx-md-4">
              <img
                src="@/assets/images/date-condition.png"
                alt="date-condition"
                class="me-3"
              />
              <span class="text-success text-uppercase me-3">{{
                $t('home.date')
              }}</span>
              <b-dropdown
                right
                no-caret
                variant="light rounded-pill border "
                menu-class="w-100 minw-unset bg-dark-shade border mt-1 text-center"
              >
                <template #button-content>
                  <div class="flex-center w--30 minh--5 position-relative px-2">
                    <span class="pe-5 text-white">{{ dateChoose }}</span>
                    <i
                      class="fas fa-chevron-down fs-14 position-absolute top-50 end--0 translate-middle-y px-2 text-white"
                    />
                  </div>
                </template>
                <b-dropdown-item
                  v-for="(date, index) in listDate"
                  :key="index"
                  class="fs-15"
                  @click="changeDate(date)"
                >
                  <span class="d-inline-block text-white py-1">{{ date }}</span>
                </b-dropdown-item>
              </b-dropdown>
            </div>

            <!-- Experience choose -->
            <div class="d-flex align-items-center mb-9 mb-md-0 mx-md-4">
              <img
                src="@/assets/images/exp.png"
                alt="date-condition"
                class="me-3"
              />
              <span class="text-success text-uppercase me-3">{{
                $t('all_movies.experience')
              }}</span>
              <b-dropdown
                right
                no-caret
                variant="light rounded-pill border "
                menu-class="w-100 minw-unset bg-dark-shade border mt-1 text-center"
              >
                <template #button-content>
                  <div class="flex-center w--20 minh--5 position-relative px-2">
                    <span class="pe-5 text-white">{{ experienceChoose }}</span>
                    <i
                      class="fas fa-chevron-down fs-14 position-absolute top-50 end--0 translate-middle-y px-2 text-white"
                    />
                  </div>
                </template>
                <b-dropdown-item
                  v-for="(experience, index) in listExperience"
                  :key="index"
                  class="fs-15"
                  @click="changeExperience(experience)"
                >
                  <span class="d-inline-block text-white py-1">{{
                    experience
                  }}</span>
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </div>

          <!-- Search button -->
          <div class="flex-center">
            <div
              class="btn-gradient h--14 w--45 flex-center rounded-pill cursor-pointer"
            >
              {{ $t('common.btn.search') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ticket plan detail -->
    <div class="container">
      <div class="bg-dark-tint-2 mb-20">
        <div class="d-md-flex border-bottom border-light-shade">
          <div
            class="cinema-name w-md--70 p-6 flex-center fs-20 border-md-end border-light-shade text-white"
          >
            {{ cinema }}
          </div>
          <div class="timeline flex-1 pb-6 px-6 pt-md-6">
            <div class="row mb-n6">
              <div
                v-for="i in 8"
                :key="i"
                class="col-4 col-custom-3 col-md-3 col-lg-2 mb-6 w-xl-unset text-center"
              >
                <span
                  @click="goToSeatPlan(time)"
                  class="text-white movie-ticket d-inline-block py-3 px-6 mx-n6 mx-xl-0 cursor-pointer"
                  >{{ time }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import moment from 'moment'
import { getModule } from 'vuex-module-decorators'
import TicketTime from '@/store/modules/Ticket'
import store from '@/store'

const TicketModule = getModule(TicketTime, store)

@Component({})
export default class TicketPlan extends Vue {
  private currentDay: number = moment.now()
  private dateChoose: string = moment(this.currentDay).format('DD/MM/YYYY')
  private experienceChoose: string = '2D'
  private time: string = '23:59'
  private cinema: string = 'CGV Bắc Từ Liêm'
  private listDate: string[] = []
  private listExperience: string[] = []

  created(): void {
    for (let i = 0; i < 7; i++) {
      let item = moment(this.currentDay).add(i, 'days').format('DD/MM/YYYY')
      this.listDate.push(item)
    }
    this.$store.state.movie.movieDetail.format.forEach((format: string) => {
      this.listExperience.push(format)
    })
  }

  changeDate(date: string): void {
    this.dateChoose = date
  }

  changeExperience(experience: string): void {
    this.experienceChoose = experience
  }

  goToSeatPlan(time: string): void {
    let ticketTime = {
      date: this.dateChoose,
      time: time,
      experience: this.experienceChoose,
      cinema: this.cinema
    }
    TicketModule.HANDLE_TICKET_TIME(ticketTime)
    this.$router.push({ name: 'seat-plan' })
  }
}
</script>
