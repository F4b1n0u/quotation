import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Linking, TouchableOpacity, MaskedViewIOS } from 'react-native'
import { EvilIcons, AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'
import RF from 'react-native-responsive-fontsize'
import posed, { Transition } from 'react-native-pose'
import { LinearGradient } from 'expo';

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
    } = this.props

    const DetailCurtain = StyledAnimatedCurtain(4000)
    const DetailCurtainBorder = StyledAnimatedCurtain(4000)

    const AuthorCurtain = StyledAnimatedCurtain(6000)
    const AuthorCurtainBorder = StyledAnimatedCurtain(6000)

    return (
      <Container style={style}>
        <MaskedViewIOS
          maskElement={(
            <CurtainWrapper>
              <DetailCurtain />
              <DetailCurtainBorder />
            </CurtainWrapper>
          )}
        >
          <QuoteWrapper>
            <Details
              format={format}
            >
              {details}
            </Details>
          </QuoteWrapper>
        </MaskedViewIOS>

        <MaskedViewIOS
          maskElement={(
            <CurtainWrapper>
              <AuthorCurtain />
              <AuthorCurtainBorder />
            </CurtainWrapper>
          )}
        >
          <QuoteWrapper>
            <StyledAuthor
              format={format}
            >
              {author}
            </StyledAuthor>  
          </QuoteWrapper>
        </MaskedViewIOS>


        <Transition
          animateOnMount={true}
        >
          <StyledAnimatedSocialLinks
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
          </StyledAnimatedSocialLinks>
        </Transition>
      </Container>
    )
  }
}

Quote.defaultProps = {
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  save: PropTypes.func.isRequired,
}

// animated

const AnimatedCurtain = delay => posed.View({
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
    width: 30,
    transition: {
      delay: delay - 100,
      duration: 100,
    },
  },
  exit: {
    width: 0,
  }
})

const AnimatedSocialLinks = posed.View({
  enter: {
    staggerChildren: 100,
    delayChildren: 7000,
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
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const QuoteWrapper = styled.View`
  margin-bottom: 20%;
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
`

const CurtainWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`

const StyledAnimatedCurtain = delay => styled(AnimatedCurtain(delay))`
  background-color: #000000ff;
`

const StyledAnimatedCurtainBorder = delay => styled(AnimatedCurtainBorder(delay)).attrs(() => ({
  colors: ['#000000ff', '#00000000'],
  start: [0, 0],
  end: [1, 0],
}))`
`

const StyledAnimatedSocialLinks = styled(AnimatedSocialLinks)`
  position: absolute;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  bottom: 0;
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