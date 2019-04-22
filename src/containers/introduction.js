import { connect } from 'react-redux'

import {
  finishIntroduction,
} from '#modules/user'

import Introduction from '#components/introduction'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  finishIntroduction: () => dispatch(finishIntroduction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Introduction)
