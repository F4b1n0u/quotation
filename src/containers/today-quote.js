import { connect } from 'react-redux'

import {
  get as getTodayQuote,
} from '#modules/today-quote'

import {
  saveLastQuote
} from '#services/local-storage'

import Quote from '#components/quote'

const mapStateToProps = state => ({
  quote: getTodayQuote(state)
})

const mapDispatchToProps = () => ({})

const mergeProps = (propsFromState, dispatchProps, ownProps) => ({
  ...propsFromState,
  ...dispatchProps,
  ...ownProps,
  save: () => saveLastQuote(propsFromState.quote)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Quote)
