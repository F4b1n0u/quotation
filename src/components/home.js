import React, { PureComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import posed, { Transition } from 'react-native-pose'

import About from '#components/about'

import { IMAGES } from '#utils/assets'

class Home extends PureComponent {
  state = {
    isShowingAbout: false,
    isGettingAttention: false,
  }

  _handleToggleAbout = () => {
    this.setState(({ isShowingAbout }) => ({
      isShowingAbout: !isShowingAbout,
    }))
  }

  componentDidMount() {
    const interval = 5000
    const attentionDuration = 1000

    this._attentionInterval = setInterval(
      () => {
        this.setState({
          isGettingAttention: true,
        })
        this._attentionStop = setTimeout(() => {
          this.setState({
            isGettingAttention: false,
          })
        }, attentionDuration);
      },
      interval,
    )
  }

  componentWillUnmount() {
    clearInterval(this._attentionInterval)
    clearTimeout(this._attentionStop)
  }

  render() {
    const {
      style,
      children,
    } = this.props

    const {
      isShowingAbout,
      isGettingAttention,
    } = this.state

    return (
      <Container style={style}>
        <TouchableOpacity
          onPress={this._handleToggleAbout}
        >
          <StyledAnimatedLogo
            key="logo"
            pose={
              isGettingAttention
                ? 'attention'
                : 'normal'
            }
          />
        </TouchableOpacity>

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
const AnimatedLogo = posed.Image({
  attention: {
    scale: 1.1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 1,
    },
  },
  normal: {
    scale: 1,
    transition: {
      type: 'spring',
    }
  }
})

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
    top: 17,
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

const StyledAnimatedLogo = styled(AnimatedLogo).attrs(() => ({
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
  
  border-top-right-radius: 20;
  border-top-left-radius: 20;
`

export default Home 