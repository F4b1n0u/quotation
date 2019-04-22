
import React, { PureComponent } from 'react'
import { LayoutAnimation } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import { IMAGES } from '#utils/assets'

class Splash extends PureComponent {
  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  render() {
    const {
      style,
      isOpen,
    } = this.props

    return (
      <Container
        style={style}
      >
        <SplashImage />
      </Container>
    )
  }
}

Splash.defaultProps = {
  isIntroduced: false,
  isOpen: false,
}

Splash.propTypes = {
  isIntroduced: PropTypes.bool,
  isOpen: PropTypes.bool,
}

const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const SplashImage = styled.Image.attrs(() => ({
  source: IMAGES.splash,
  resizeMode: 'contain',
}))`
  width: 100%;
`

export default Splash