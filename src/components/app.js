import React, { PureComponent } from 'react'
import { AppState } from 'react-native'
import { AppLoading } from 'expo'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import posed, { Transition } from 'react-native-pose'

import Introduction from '#containers/introduction'
import TodayQuote from '#containers/today-quote'

import SlashScreen from '#components/splash'
import Home from '#components/home'

import {
  TODAY_QUOTE_WITHOUT_INTRO,
  TODAY_QUOTE_WITH_INTRO,
  HOME_APPEARING_DURATION,
  HOME_APPEARING_DELAY,
} from '#utils/timings'

class App extends PureComponent {
  state = {
    appState: AppState.currentState,
    isInForeground: true,
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  
  _handleAppStateChange = nextAppState => {
    const {
      startLoading,
    } = this.props

    const {
      appState,
    } = this.state

    const isInForeground = appState.match(/inactive|background/) && nextAppState === 'active'
    
    if (isInForeground) {
      startLoading()
    }

    this.setState({
      appState: nextAppState,
      isInForeground,
    })
  }

  componentWillMount() {
    const {
      startLoading,
    } = this.props
    
    startLoading()
  }

  componentWillUpdate({
    isIntroduced: wasIntroduced
  }) {
    const { isIntroduced } = this.props

    this.wasAlreadyIntroduced = wasIntroduced && isIntroduced
  }

  render() {
    const {
      style,
      isLoaded,
      isIntroduced,
    } = this.props

    const {
      isInForeground,
    } = this.state

    return isLoaded
      ? (
        <Container>
            {isInForeground && (
              <>
                <Transition
                  animateOnMount={true}
                >
                  <StyledSlashScreen
                    key="splash-screen"
                  />
                  <StyledAnimatedHome
                    key="home"
                  >
                    {
                      isIntroduced
                        ? (
                          <StyledTodayQuote
                            delay={
                              this.wasAlreadyIntroduced
                                ? TODAY_QUOTE_WITHOUT_INTRO
                                : TODAY_QUOTE_WITH_INTRO
                            }
                          />
                        )
                        : (
                          <Introduction />
                        )
                    } 
                  </StyledAnimatedHome>
                </Transition>
              </>
            )}
        </Container>
      )
      : (
        <AppLoading style={style} />
      )
  }
}

App.defaultProps = {
  isLoaded: false,
  isIntroduced: false,
}

App.propTypes = {
  startLoading: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool,
  isIntroduced: PropTypes.bool,
}

// Animated
const AnimatedHome = posed(Home)({
  enter: {
    top: '0%',
    transition: {
      delay: HOME_APPEARING_DELAY,
      duration: HOME_APPEARING_DURATION,
      type: 'tween',
    },
  },
  exit: {
    top: '120%',
  },
})

// Styled components
const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme: { background } }) => background};
`

const StyledSlashScreen = styled(SlashScreen)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const StyledAnimatedHome = styled(AnimatedHome)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const StyledTodayQuote = styled(TodayQuote)`
  flex: 1;
` 

export default App 