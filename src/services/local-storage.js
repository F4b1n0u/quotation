import { AsyncStorage } from "react-native"

const KEYS = {
  isIntroduced: '@quotation:is-introduced',
  lastQuote: '@quotation:is-last-quote',
}

const VALUES = {
  isIntroduced: 'true',
  lastQuote: '{}',
}

const get = async fieldName => {
  const fieldValue = await AsyncStorage.getItem(KEYS[fieldName])
  return fieldValue === VALUES[fieldName]
}

const set = async (fieldName, fieldValue) => AsyncStorage.setItem(
  KEYS[fieldName],
  fieldValue
)

export const checkIntroduction = get.bind(this, 'isIntroduced')
export const saveIntroduction = set.bind(
  this,
  'isIntroduced',
  VALUES.isIntroduced
)

export const getLastQuote = async () => {
  const lastQuote = await AsyncStorage.getItem(KEYS.lastQuote)
  
  const result = JSON.parse(lastQuote || VALUES['lastQuote'])
  return result
}

export const saveLastQuote = async quote => {
  await AsyncStorage.setItem(
    KEYS.lastQuote,
    JSON.stringify(quote)
  )
}