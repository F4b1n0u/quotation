import React, { PureComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import posed from 'react-native-pose'

import { IMAGES } from '#utils/assets'

class AboutButton extends PureComponent {
  state = {
    isGettingAttention: false,
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
      onPress,
      style,
    } = this.props

    const {
      isGettingAttention,
    } = this.state

    return (
      <Container
        style={style}
        onPress={onPress}
      >
        <StyledAnimatedLogo
          key="logo"
          pose={isGettingAttention ? 'attention' : 'normal'}
        />
      </Container>
    )    
  }
}

AboutButton.defaultProps = {}

AboutButton.propTypes = {
  onPress: PropTypes.func.isRequired,
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

// STYLED
const Container = styled(TouchableOpacity)`
  padding-top: 12.5;
`

const StyledAnimatedLogo = styled(AnimatedLogo).attrs(() => ({
  source: IMAGES.logo,
  resizeMode: 'contain',
}))`
  height: 50;
  aspect-ratio: 1;
`

export default AboutButton 