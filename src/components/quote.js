import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Linking, TouchableOpacity } from 'react-native'
import { EvilIcons, AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'
import RF from 'react-native-responsive-fontsize'
import posed from 'react-native-pose'

import Curtain from '#components/curtain'

import { SHARE_LINKS } from '../../env'

class Quote extends PureComponent {
  _handlePressSocialLink = async (to) => {
    const {
      app: appLink,
      web: webLink,
    } = SHARE_LINKS[to]

    Linking.openURL(appLink)
      .catch(() => {
        Linking.openURL(webLink)
      })
  }

  componentDidMount() {
    const {
      save,
    } = this.props

    save()
  }

  render() {
    const {
      style,
      quote: {
        details,
        author,
        format,
      },
      delay
    } = this.props

    const delayDetails = delay
    const timeToRead = details.length * 30
    const timeToReadAuthor = 750

    const FadeInAnimationAuthor = FadeInAnimation(delayDetails + timeToRead)
    const SocialLinks = StyledAnimatedSocialLinks(delayDetails + timeToRead + timeToReadAuthor)

    return (
      <Container style={style}>
        <Curtain
          delay={delayDetails}
        >
          <Details
            format={format}
          >
            {details}
          </Details>
        </Curtain>

        <FadeInAnimationAuthor>
          <StyledAuthor
            format={format}
          >
            {author}
          </StyledAuthor>
        </FadeInAnimationAuthor>

        <SocialLinks
          animateOnMount={true}
          key='social-links'
        >
          <TouchableOpacity
            onPress={this._handlePressSocialLink.bind(this, 'facebook')}
          >
            <FaceBookLink>
              <FacebookIcon />
            </FaceBookLink>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._handlePressSocialLink.bind(this, 'instagram')}
          >
            <InstagramLink>
              <InstagramIcon />
            </InstagramLink>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._handlePressSocialLink.bind(this, 'twitter')}
          >
            <TweeterLink>
              <TwitterIcon />
            </TweeterLink>
          </TouchableOpacity>
        </SocialLinks>
      </Container>
    )
  }
}

Quote.defaultProps = {
  delay: 0,
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  save: PropTypes.func.isRequired,
  delay: PropTypes.number,
}

// animated
const FadeInAnimation = delay => posed.View({
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

const AnimatedSocialLinks = delay => posed.View({
  enter: {
    staggerChildren: 100,
    delayChildren: delay,
  },
  exit: {}
})

const AnimatedLink = posed.View({
  enter: {
    bottom: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    }
  },
  exit: {
    bottom: -200,
  }
})

// styled
const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledText = styled.Text`
  color: ${({ theme: { text } }) => text};
  text-align: center;
`

const Details = styled(StyledText)`
  font-size: ${({ format }) => RF(5 * (format && format.scale || 1))};
  margin-left: 20;
  margin-right: 20;
  font-family: 'amatic';
  letter-spacing: ${({ format }) => (format && format.letterSpacing || 5)};
`

const StyledAuthor = styled.Text`
  margin-top: 40;
  font-size: ${({ format }) => RF(3.5 * (format && format.scale || 1))};
  font-family: 'chivo';
  height: ${({ format }) => RF(3.5 * (format && format.scale || 1)) * 1.5};
`

const StyledAnimatedSocialLinks = delay => styled(AnimatedSocialLinks(delay))`
  position: absolute;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  bottom: 20;
`

const Link = styled(AnimatedLink)`
  width: 60;
  aspect-ratio: 1;
  background-color: ${({ theme: { link } }) => link};
  border-radius: 60;
  justify-content: center;
  align-items: center;
`

const FaceBookLink = styled(Link)``

const InstagramLink = styled(Link)``

const TweeterLink = styled(Link)``

const FacebookIcon = styled(EvilIcons).attrs(() => ({
  name: 'sc-facebook',
  size: 40,
}))`
  color: ${({ theme: { background } }) => background};
`

const InstagramIcon = styled(AntDesign).attrs(() => ({
  name: 'instagram',
  size: 30,
}))`
  color: ${({ theme: { background } }) => background};
`

const TwitterIcon = styled(AntDesign).attrs(() => ({
  name: 'twitter',
  size: 30,
}))`
  color: ${({ theme: { background } }) => background};
`

export default Quote 