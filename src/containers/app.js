import { connect } from 'react-redux'

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

import App from '#components/app'

import {
  manage as manageNotifications,
} from '#utils/notifications'

import {
  load as loadFonts,
} from '#utils/fonts'

import {
  IS_DEMO_MODE,
} from '../../env'

const mapStateToProps = state => ({
  isLoaded: isLoaded(state),
  isIntroduced: isIntroduced(state),
})

const mapDispatchToProps = dispatch => ({
  startLoading: async () => {
    await dispatch(startLoad())
    await loadFonts()
    if (!IS_DEMO_MODE) {
      // no await !, cancellation of previous notification is too slow !
      manageNotifications()
    }
    await dispatch(verifyIntroduction())
    await dispatch(retrieveTodayQuote())
    await dispatch(endLoad())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
