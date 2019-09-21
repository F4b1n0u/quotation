import moment from 'moment'
import axios from 'axios'

export const getQuote = id => axios
  .get(`${URI}/quotes/${id}.json`)
  .then(({ data }) => data)
  .catch(error => console.log(error))

export const getTodayQuote = async () => {
  const today = moment().startOf('day')
  const todayQuoteId = today.unix()

  return await getQuote(todayQuoteId)
}
