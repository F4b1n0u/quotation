import React, { PureComponent } from 'react'
import { TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import posed, { Transition } from 'react-native-pose'

import About from '#components/about'

import { IMAGES } from '#utils/assets'

class Home extends PureComponent {
  state = {
    isShowingAbout: false,
  }

  _handleToggleAbout = () => {
    this.setState(({ isShowingAbout }) => ({
      isShowingAbout: !isShowingAbout,
    }))
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
        <TouchableHighlight
          onPress={this._handleToggleAbout}
        >
          <StyledAnimatedLogo
            key="logo"
          />
        </TouchableHighlight>

        <StyledAnimatedContent
          key="content"
        >
          {children}
        </StyledAnimatedContent>

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
const AnimatedContent = posed.View({
  enter: {
    opacity: 1,
    transition: {
      delay: 3500,
    }
  },
  exit: {
    opacity: 0,
  }
})

const AnimatedAbout = posed(About)({
  enter: {
    top: 20,
    bottom: 0,
    transition: {
      duration: 1000,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  exit: {
    top: '120%',
    bottom: '-120%',
    transition: {
      duration: 500,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
})

// STYLED
const Container = styled.SafeAreaView`
  position: absolute;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { background } }) => background};
`

const StyledAnimatedLogo = styled.Image.attrs(() => ({
  source: IMAGES.logo,
  resizeMode: 'contain',
}))`
  height: 75;
  aspect-ratio: 1;
`

const StyledAnimatedContent = styled(AnimatedContent)`
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
`

export default Home 