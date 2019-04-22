import moment from 'moment'

const today = moment().startOf('day')
const todayQuoteDate = today.format('YYYY-MM-DD')

const FALLBACK_QUOTES = [
  {
    date: todayQuoteDate,
    author: 'Anthony Robbins',
    details: 'fallback',
  },
  {
    date: todayQuoteDate,
    author: 'Viktor FranklRobbins',
    details: 'fallback',
  },
  {
    date: todayQuoteDate,
    author: 'Anthony Robbins',
    details: 'fallback',
  },
  {
    date: todayQuoteDate,
    author: 'Mae AzangoRobbins',
    details: 'fallback',
  },
  {
    date: todayQuoteDate,
    author: 'Aleksandr Solzhenitsyn Robbins',
    details: 'fallback',
  },
  {
    date: todayQuoteDate,
    author: 'Les BrownRobbins',
    details: 'fallback',
  },
  {
    date: todayQuoteDate,
    author: 'The BeatlesRobbins',
    details: 'fallback',
  },
  {
    date: todayQuoteDate,
    author: 'Lots of peopleRobbins',
    details: 'fallback',
  },
  {
    date: todayQuoteDate,
    author: 'Anthony Robbins',
    details: 'fallback',
  }
]

export const getRandom = () => {
  const randomIndex = Math.floor(Math.random() * FALLBACK_QUOTES.length)

  return FALLBACK_QUOTES[randomIndex]
}

export default FALLBACK_QUOTES