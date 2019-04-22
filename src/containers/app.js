import { connect } from 'react-redux'
import { Asset, Font } from 'expo'

import {
  startLoad,
  endLoad,
  isLoaded,
} from '#modules/app'

import {
  isIntroduced,
  verifyIntroduction,
} from '#modules/user'

import {
  retrieve as retrieveTodayQuote,
} from '#modules/today-quote'

import {
  IMAGES,
  FONTS,
} from '#utils/assets'

import App from '#components/app'

const mapStateToProps = state => ({
  isLoaded: isLoaded(state),
  isIntroduced: isIntroduced(state),
})

const mapDispatchToProps = dispatch => ({
  startLoading: async () => {
    await dispatch(startLoad())
    await Promise.all([
      Asset.loadAsync([,
        IMAGES.logo,
      ]),
      Font.loadAsync({
        'chivo': FONTS.chivo,
        'amatic': FONTS.amatic,
      })
    ])
    await dispatch(verifyIntroduction())
    await dispatch(retrieveTodayQuote())
    await dispatch(endLoad())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
