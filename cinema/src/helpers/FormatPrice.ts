class FormatPrice {
  handlePrice(price: number) {
    return price.toLocaleString()
  }
}

export default new FormatPrice()