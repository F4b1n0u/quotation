import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Linking, TouchableOpacity } from 'react-native'
import { EvilIcons, AntDesign, Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'
import RF from 'react-native-responsive-fontsize'

import { ABOUT_LINKS } from '../../env'

class About extends PureComponent {
  _handlePressSocialLink = async (to) => {
    Linking
      .openURL(ABOUT_LINKS[to].app)
      .catch(() => {
        Linking.openURL(ABOUT_LINKS[to].web)
      })
  }

  render() {
    const {
      style,
    } = this.props

    return (
      <Container style={style}>
        <Wrapper>
          <Title>
            {'About me'}
          </Title>
          <Details>
            {'Juliet is a life coach in the making, helping others to be the nest YOU can be.'}
            {'\n'}
            {'\n'}
            {'For more inspiring personal development material, contact Juliet ans subscribe to her personal development blog:'}
            {'\n'}
            {'`Let\'s get your life together`'}
            {'\n'}
            {'below.'}
          </Details>
        </Wrapper>
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

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme: { about } }) => about};
`

const Wrapper = styled.View`
  margin-horizontal: 20;
`

const Title = styled.Text`
  font-size: ${RF(4)};
  fontWeight: bold;
  text-align: center;

  font-family: 'chivo';
  margin-bottom: 20;
`

const Details = styled.Text`
  font-size: ${RF(3)};
  text-align: center;
  
  font-family: 'chivo';
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