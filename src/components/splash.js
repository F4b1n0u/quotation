
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import { IMAGES } from '#utils/assets'

class Splash extends PureComponent {
  render() {
    const {
      style,
    } = this.props

    return (
      <Container
        style={style}
      >
        <SplashImage
          source={IMAGES.splash}
        />
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