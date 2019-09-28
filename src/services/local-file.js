import moment from 'moment'
import quotes from '#utils/quotes'
import { find } from 'lodash' 

export const getQuote = date => find(
  quotes,
  { date }
)

export const getTodayQuote = async () => {
  const today = moment().startOf('day').format('YYYY-MM-DD')
  
  return await getQuote(today)
}
