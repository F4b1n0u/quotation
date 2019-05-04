import React, { PureComponent } from 'react'
import { MaskedViewIOS } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import posed from 'react-native-pose'
import { LinearGradient } from 'expo'

class Curtain extends PureComponent {
  render() {
    const {
      delay,
      children,
    } = this.props
  
    const CurtainBody = StyledAnimatedCurtainBody(delay)
    const CurtainBorder = StyledAnimatedCurtainBorder(delay)

    return (
      <MaskedViewIOS
        maskElement={(
          <CurtainWrapper>
            <CurtainBody />
            <CurtainBorder />
          </CurtainWrapper>
        )}
      >
        {children}
      </MaskedViewIOS>
    )
  }
}

Curtain.defaultProps = {
  delay: 0
}

Curtain.propTypes = {
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
}

// animated
const AnimatedCurtainBody = delay => posed.View({
  enter: {
    width: 500,
    transition: {
      delay,
      duration: 5000,
    },
  },
  exit: {
    width: 0,
  }
})

const AnimatedCurtainBorder = delay => posed(LinearGradient)({
  enter: {
    width: 100,
    transition: {
      delay: delay - 300,
      duration: 300,
    },
  },
  exit: {
    width: 0,
  }
})

// styled
const CurtainWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`

const StyledAnimatedCurtainBody = delay => styled(AnimatedCurtainBody(delay))`
  background-color: #000000ff;
`

const StyledAnimatedCurtainBorder = delay => styled(AnimatedCurtainBorder(delay)).attrs(() => ({
  colors: ['#000000ff', '#00000000'],
  start: [0, 0],
  end: [1, 0],
}))`
`


export default Curtain 