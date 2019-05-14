import React, { PureComponent } from 'react'
import { MaskedViewIOS, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import posed from 'react-native-pose'
import { LinearGradient } from 'expo'

const { width: WINDOW_WIDTH } = Dimensions.get('window')

const BORDER_RATIO = 1 / 4

const CURTAIN_WIDTH = WINDOW_WIDTH
const BORDER_WIDTH = WINDOW_WIDTH * BORDER_RATIO
const BODY_WIDTH = CURTAIN_WIDTH - BORDER_WIDTH

const CURTAIN_DURATION = 2000
const BORDER_DURATION = CURTAIN_DURATION * BORDER_RATIO
const BODY_DURATION = CURTAIN_DURATION - BORDER_DURATION

class Curtain extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isBorderOpen: false,
      isBodyOpen: false,
    }
  }

  _open = () => {
    this.setState({ isBorderOpen: true }, () => {
      this._openBodyTimeout = setTimeout(
        () => this.setState({ isBodyOpen: true }),
        BORDER_DURATION
      )
    })
  }

  componentDidUpdate({ isOpen: wasOpen }) {
    const { isOpen } = this.props

    if (!wasOpen && isOpen) {
      this._open()
    }
  }

  componentWillUnmount() {
    clearTimeout(this._openBodyTimeout)
  }

  render() {
    const {
      children,
    } = this.props

    const {
      isBorderOpen,
      isBodyOpen,
    } = this.state

    const borderPose = isBorderOpen ? 'open' : 'close'
    const bodyPose = isBodyOpen ? 'open' : 'close'

    return (
      <MaskedViewIOS
        maskElement={(
          <CurtainWrapper>
            <StyledAnimatedCurtainBody
              pose={bodyPose}
            />
            <StyledAnimatedCurtainBorder
              pose={borderPose}
            />
          </CurtainWrapper>
        )}
      >
        {children}
      </MaskedViewIOS>
    )
  }
}

Curtain.defaultProps = {
  isOpen: false,
}

Curtain.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

// animated
const AnimatedCurtainBorder = posed(LinearGradient)({
  open: {
    width: BORDER_WIDTH,
    transition: {
      duration: BORDER_DURATION,
      ease: 'easeIn',
    },
  },
  close: {
    width: 0,
  }
})

const AnimatedCurtainBody = posed.View({
  open: {
    width: BODY_WIDTH * 1.1,
    transition: {
      duration: BODY_DURATION,
      ease: 'easeOut',
    },
  },
  close: {
    width: 0,
  }
})

// styled
const CurtainWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`

const StyledAnimatedCurtainBody = styled(AnimatedCurtainBody)`
  background-color: #000000ff;
`

const StyledAnimatedCurtainBorder = styled(AnimatedCurtainBorder).attrs(() => ({
  colors: ['#000000ff', '#00000000'],
  start: [0, 0],
  end: [1, 0],
}))`
`


export default Curtain 