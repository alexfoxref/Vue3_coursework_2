export const findById = (arr, id) => {
  return arr.find(({ id: i }) => i === id)
}

export const findIndexById = (arr, id) => {
  return arr.findIndex(({ id: i }) => i === id)
}
