
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import posed, { Transition } from 'react-native-pose'

import { IMAGES } from '#utils/assets'

class Splash extends PureComponent {
  render() {
    const {
      style,
    } = this.props

    const FadeInStepTwo = FadeInAnimation(500)
    const FadeInStepThree = FadeInAnimation(1500)

    return (
      <Container
        style={style}
      >
        <SplashImage
          source={IMAGES.splash}
        />

        <Transition
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
          }}
          animateOnMount={true}
        >
          <FadeInStepTwo
            key="fade-in-step-two"
          >
            <SplashImage
              source={IMAGES['splashStepTwo']}
            />
          </FadeInStepTwo>

          <FadeInStepThree
            key="fade-in-step-three"
          >
            <SplashImage
              source={IMAGES['splashStepThree']}
            />
          </FadeInStepThree>
        </Transition>
      </Container>
    )
  }
}

Splash.defaultProps = {
  isIntroduced: false,
}

Splash.propTypes = {
  isIntroduced: PropTypes.bool,
  isOpen: PropTypes.bool,
}

// animated
const FadeInAnimation = (delay = 0) => posed.View({
  enter: {
    opacity: 1,
    transition: {
      delay,
    }
  },
  exit: {
    opacity: 0,
  }
})

// styled
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const SplashImage = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  position: absolute;
  height: 100%;
  width: 100%;
`

export default Splash