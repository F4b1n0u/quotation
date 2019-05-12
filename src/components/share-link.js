import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Linking, TouchableOpacity } from 'react-native'
import { EvilIcons, AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'

import { SHARE_LINKS } from '../../env'

class ShareLink extends PureComponent {
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

  render() {
    const {
      media,
      style,
    } = this.props

    const Link = links[media]
    const Icon = icons[media]

    return (
      <TouchableOpacity
        style={style}
        onPress={this._handlePressSocialLink.bind(this, media)}
      >
        <Link>
          <Icon />
        </Link>
      </TouchableOpacity>
    )
  }
}

ShareLink.defaultProps = {
}

ShareLink.propTypes = {
  media: PropTypes.oneOf([
    'facebook',
    'instagram',
    'twitter',
  ]).isRequired,
}

// styled
const Link = styled.View`
  width: 60;
  aspect-ratio: 1;
  background-color: ${({ theme: { link } }) => link};
  border-radius: 60;
  justify-content: center;
  align-items: center;
`
const links = {
  'facebook': styled(Link)``,
  'instagram': styled(Link)``,
  'twitter': styled(Link)``,
}

const icons = {
  'facebook': styled(EvilIcons)
    .attrs(() => ({
      name: 'sc-facebook',
      size: 40,
    }))`
      color: ${({ theme: { background } }) => background};
    `,
  'instagram': styled(AntDesign)
    .attrs(() => ({
      name: 'instagram',
      size: 30,
    }))`
      color: ${({ theme: { background } }) => background};
    `,
  'twitter': styled(AntDesign)
    .attrs(() => ({
      name: 'twitter',
      size: 30,
    }))`
      color: ${({ theme: { background } }) => background};
    `,
}

export default ShareLink 