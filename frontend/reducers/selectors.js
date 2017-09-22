export const asArray = listings => (
  Object.keys(listings).map(key => listings[key])
)

export const citiesArray = (citiesObj) => (
  Object.keys(citiesObj).map(key => citiesObj[key])
)
