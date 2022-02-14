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

  comboCart: any[] = [
  ]

  foodDrinksCart: any = []

  comboPrice: number = 0
  foodDrinkPrice: number = 0

  @Mutation
  handleTicketTime(ticketTime: any) {
    this.ticketTime = ticketTime
  }

  @Mutation
  handleTicketAmount(ticketAmount: any) {
    this.ticketAmount = ticketAmount
  }

  @Mutation
  handleComboCart(comboCart: any) {
    this.comboCart = comboCart
  }

  @Mutation
  handleFoodDrinkCart(foodDrinksCart: any) {
    this.foodDrinksCart = foodDrinksCart
  }

  @Mutation
  handleComboPrice(comboPrice: any) {
    this.comboPrice = comboPrice
  }

  @Mutation
  handleFoodDrinkPrice(foodDrinkPrice: any) {
    this.foodDrinkPrice = foodDrinkPrice
  }

  @Action({ rawError: true })
  HANDLE_TICKET_TIME(ticketTime: any) {
    this.context.commit('handleTicketTime', ticketTime)
  }

  @Action({ rawError: true })
  HANDLE_TICKET_AMOUNT(ticketAmount: any) {
    this.context.commit('handleTicketAmount', ticketAmount)
  }

  @Action({ rawError: true })
  HANDLE_COMBO_CART(comboCart: any) {
    this.context.commit('handleComboCart', comboCart)
  }

  @Action({ rawError: true })
  HANDLE_FOODDRINK_CART(foodDrinksCart: any) {
    this.context.commit('handleFoodDrinkCart', foodDrinksCart)
  }

  @Action({ rawError: true })
  HANDLE_COMBO_PRICE(comboPrice: any) {
    this.context.commit('handleComboPrice', comboPrice)
  }

  @Action({ rawError: true })
  HANDLE_FOODDRINK_PRICE(foodDrinksPrice: any) {
    this.context.commit('handleFoodDrinkPrice', foodDrinksPrice)
  }
}

export default Ticket
