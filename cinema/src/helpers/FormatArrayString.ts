class FormatArrayString {
  handleArray(array: string[], type: string) {
    return array.join(type)
  }
}

export default new FormatArrayString()