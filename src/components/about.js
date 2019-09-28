import React, { PureComponent } from 'react'
import { Linking, TouchableOpacity } from 'react-native'
import { EvilIcons, AntDesign, Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'
import RF from 'react-native-responsive-fontsize'
import { BlurView } from 'expo-blur';

import { IMAGES } from '#utils/assets'

import {
  ABOUT_LINKS
} from '../../env'

class About extends PureComponent {
  _handlePressSocialLink = to => Linking
    .openURL(ABOUT_LINKS[to].app)
    .catch(() => {
      Linking.openURL(ABOUT_LINKS[to].web)
    })

  render() {
    const {
      style,
    } = this.props

    return (
      <Container style={style}>
        <SiteLogo />
        
        <Details>
          {'Juliet is a life coach and author of the Let’s Get Your Life Together blog, helping you to be the best YOU you can be!'}
          {'\n'}
          {'For more inspiring material to motivate you into action, visit the blog and get in touch below.'}
        </Details>

        <SocialLinks
          animateOnMount={true}
          key='social-links'
        >
          <TouchableOpacity
            onPress={this._handlePressSocialLink.bind(this, 'instagram')}
          >
            <InstagramLink>
              <InstagramIcon />
            </InstagramLink>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._handlePressSocialLink.bind(this, 'facebook')}
          >
            <FaceBookLink>
              <FacebookIcon />
            </FaceBookLink>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._handlePressSocialLink.bind(this, 'email')}
          >
            <EmailLink>
              <EmailIcon />
            </EmailLink>
          </TouchableOpacity>
        </SocialLinks>
      </Container>
    )
  }
}

About.defaultProps = {
}

About.propTypes = {
}

// animated

// styled
const Container = styled(BlurView).attrs({
   tint: 'light',
   intensity: 90
})`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme: { about } }) => about};

  justify-content: space-around;
  align-items: center;
  padding-vertical: 20;
`

const SiteLogo = styled.Image.attrs(() => ({
  source: IMAGES.letsgetyourlifetogether,
  resizeMode: 'contain',
}))`
  height: 20%;
`

const Details = styled.Text`
  font-size: ${RF(3)};
  text-align: center;
  
  font-family: 'chivo';
  margin-horizontal: 10%;
`

const StyleButton = styled.View`
  justify-content: center;
  align-items: center;
  padding-horizontal: 30;
  padding-vertical: 15;
  margin-top: 10;
  background-color: ${({ theme: { button } }) => button};
  border-radius: 5;
  flex-direction: column;
`

const SocialLinks = styled.View`
  flex-direction: row;
`

const Link = styled.View`
  width: 60;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  margin-horizontal: 20;

  background-color: ${({ theme: { background } }) => background};
  border-width: 3;
  border-radius: 60;
  border-color: ${({ theme: { text } }) => text};
`

const FaceBookLink = styled(Link)``

const InstagramLink = styled(Link)``

const EmailLink = styled(Link)``

const FacebookIcon = styled(EvilIcons).attrs(() => ({
  name: 'sc-facebook',
  size: 40,
}))`
  color: ${({ theme: { text } }) => text};
`

const InstagramIcon = styled(AntDesign).attrs(() => ({
  name: 'instagram',
  size: 30,
}))`
  color: ${({ theme: { text } }) => text};
`

const EmailIcon = styled(Entypo).attrs(() => ({
  name: 'mail',
  size: 30,
}))`
  color: ${({ theme: { text } }) => text};
`

export default About 