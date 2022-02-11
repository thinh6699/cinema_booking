import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'ticket' })
class Ticket extends VuexModule {
  ticketTime: any = {
    date: '',
    time: '',
    experience: '',
    cinema: ''
  }

  ticketAmount: any = {
    quantity: 0,
    name: '',
    price: 0
  }

  @Mutation
  handleTicketTime(ticketTime: any) {
    this.ticketTime = ticketTime
  }

  @Mutation
  handleTicketAmount(ticketAmount: any) {
    this.ticketAmount = ticketAmount
  }

  @Action({ rawError: true })
  HANDLE_TICKET_TIME(ticketTime: any) {
    this.context.commit('handleTicketTime', ticketTime)
  }

  @Action({ rawError: true })
  HANDLE_TICKET_AMOUNT(ticketAmount: any) {
    this.context.commit('handleTicketAmount', ticketAmount)
  }
}

export default Ticket
