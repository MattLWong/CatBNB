export const asArray = obj => (
  Object.keys(obj).map(key => obj[key])
)

export const asListing = obj => (
  Object.keys(obj).map(key => obj[key])[0]
)

export const citiesArray = (citiesObj) => (
  Object.keys(citiesObj).map(key => citiesObj[key])
)
