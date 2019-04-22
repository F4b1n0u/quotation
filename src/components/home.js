import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import posed from 'react-native-pose'

import { IMAGES } from '#utils/assets'

class Home extends PureComponent {
  render() {
    const {
      style,
      children,
      isShowingContent,
    } = this.props

    return (
      <Container style={style}>
        <StyledAnimatedLogo
          key="logo"
        />
        
        <StyledAnimatedContent
          key="content"
        >
          {children}
        </StyledAnimatedContent>
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

// POSED
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

export default Home 