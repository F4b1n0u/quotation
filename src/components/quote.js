import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import RF from 'react-native-responsive-fontsize'
import posed, { Transition } from 'react-native-pose'

import Curtain from '#components/curtain'
import ShareLink from '#components/share-link'

class Quote extends PureComponent {
  state = {
    isShowingDetails: false,
    isShowingAuthor: false,
    isShowingLinks: false,
  }

  _timings = {}
  _timeouts = {}

  constructor(props) {
    super(props)

    const {
      quote: {
        details,
      },
      delay,
    } = props

    const delayDetails = delay
    const timeToRead = details.length * 25
    const timeToReadAuthor = 750

    this._timings = {
      isShowingDetails: delay,
      isShowingAuthor: delayDetails + timeToRead,
      isShowingLinks: delayDetails + timeToRead + timeToReadAuthor,
    }
  }

  componentDidMount() {
    const {
      save,
    } = this.props

    save()

    Object.keys(this._timings)
      .forEach(timing => {
        this._timeouts[timing] = setTimeout(
          () => {
            this.setState({
              [timing]: true,
            })
          },
          this._timings[timing]
        )
      })
  }

  componentWillUnmount() {
    Object.values(this._timeouts).forEach(clearTimeout)
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

    const {
      isShowingDetails,
      isShowingAuthor,
      isShowingLinks,
    } = this.state

    const authorPose = isShowingAuthor ? 'show' : 'hide'
    
    return (
      <Container style={style}>
        <Curtain
          isOpen={isShowingDetails}
        >
          <Details
            format={format}
          >
            {details}
          </Details>
        </Curtain>

        <FadeInAnimation
          pose={authorPose}
        >
          <StyledAuthor
            format={format}
          >
            {author}
          </StyledAuthor>
        </FadeInAnimation>

        <Transition
          animateOnMount={true}
        >
          {isShowingLinks && (
            <StyledAnimatedSocialLinks
              key="links"
            >
              {
                [
                  'facebook',
                  'instagram',
                  'twitter',
                ].map(media => (
                  <BounceInAnimation
                    key={media}
                  >
                    <ShareLink
                      media={media}
                    />
                  </BounceInAnimation>
                ))
              }
            </StyledAnimatedSocialLinks>
          )}
        </Transition>
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
const FadeInAnimation = posed.View({
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  }
})

const AnimatedSocialLinks = posed.View({
  enter: {
    staggerChildren: 100,
  },
  exit: {}
})

const BounceInAnimation = posed.View({
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

const StyledAnimatedSocialLinks = styled(AnimatedSocialLinks)`
  position: absolute;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  bottom: 20;
`

export default Quote 