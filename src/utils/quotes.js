import moment from 'moment'

const today = moment().startOf('day')
const todayQuoteDate = today.format('YYYY-MM-DD')

const FALLBACK_QUOTES = [
  {
    date: todayQuoteDate,
    author: 'Fabien Behier',
    details: 'I love you !!!',
  },
  {
    date: todayQuoteDate,
    author: 'Viktor FranklRobbins',
    details: 'The most important opinion a person will ever hold is the one that they hold about themselves',
  },
  {
    date: todayQuoteDate,
    author: 'Anthony Robbins',
    details: 'The most important opinion a person will ever hold is the one that they hold about themselves',
  },
  {
    date: todayQuoteDate,
    author: 'Mae AzangoRobbins',
    details: 'The most important opinion a person will ever hold is the one that they hold about themselves',
  },
  {
    date: todayQuoteDate,
    author: 'Aleksandr Solzhenitsyn Robbins',
    details: 'The most important opinion a person will ever hold is the one that they hold about themselves',
  },
  {
    date: todayQuoteDate,
    author: 'Les BrownRobbins',
    details: 'The most important opinion a person will ever hold is the one that they hold about themselves',
  },
  {
    date: todayQuoteDate,
    author: 'The BeatlesRobbins',
    details: 'The most important opinion a person will ever hold is the one that they hold about themselves',
  },
  {
    date: todayQuoteDate,
    author: 'Lots of peopleRobbins',
    details: 'The most important opinion a person will ever hold is the one that they hold about themselves',
  },
  {
    date: todayQuoteDate,
    author: 'Anthony Robbins',
    details: 'The most important opinion a person will ever hold is the one that they hold about themselves',
  }
]

export const getRandom = () => {
  const randomIndex = Math.floor(Math.random() * FALLBACK_QUOTES.length)

  return FALLBACK_QUOTES[randomIndex]
}

export default FALLBACK_QUOTES