import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import posed, { Transition } from 'react-native-pose'

import About from '#components/about'
import AboutButton from '#components/about-button'

import {
  ABOUT_IN_DURATION,
  ABOUT_OUT_DURATION,
} from '#utils/timings'

class Home extends PureComponent {
  state = {
    isShowingAbout: false,
  }

  _handleToggleAbout = () => {
    this.setState(({ isShowingAbout }) => ({
      isShowingAbout: !isShowingAbout,
    }))
  }

  componentWillUnmount() {
    clearTimeout(this._attentionStop)
  }

  render() {
    const {
      style,
      children,
    } = this.props

    const {
      isShowingAbout,
    } = this.state

    return (
      <Container style={style}>
        <AboutButton
          onPress={this._handleToggleAbout}
        />

        <StyledContent>
          {children}
        </StyledContent>

        <Transition
          animateOnMount={true}
        >
          {isShowingAbout && (
            <StyledAnimatedAbout key="about" />
          )}
        </Transition>
      </Container>
    )    
  }
}

Home.defaultProps = {
  isShowingMediaLinks: false
}

Home.propTypes = {
  isShowingMediaLinks: PropTypes.bool,
}

// animated
const AnimatedAbout = posed(About)({
  enter: {
    top: 17,
    bottom: 0,
    transition: {
      duration: ABOUT_IN_DURATION,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  exit: {
    top: '120%',
    bottom: '-120%',
    transition: {
      duration: ABOUT_OUT_DURATION,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
})

// STYLED
const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { background } }) => background};
`

const StyledContent = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledAnimatedAbout = styled(AnimatedAbout)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  border-top-right-radius: 20;
  border-top-left-radius: 20;
`

export default Home 