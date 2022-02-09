import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'ticketTime' })
class TicketTime extends VuexModule {
  ticketTime: any = {
    date: '',
    time: '',
    experience: '',
    cinema: ''
  }

  @Mutation
  handleTicketTime(ticketTime: any) {
    this.ticketTime = ticketTime
  }

  @Action({ rawError: true })
  HANDLE_TICKET_TIME(ticketTime: any) {
    this.context.commit('handleTicketTime', ticketTime)
  }


}

export default TicketTime
