import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import posed, { Transition } from 'react-native-pose'

import RF from 'react-native-responsive-fontsize'

const Introduction = ({
  style,
  finishIntroduction,
}) => (
  <Container style={style}>
    <Welcome>
      {'Welcome to the “Quotation” App!'}
      {'\n\n'}
      {'Each day at midnight, a new inspirational quote will appear. Swipe up to see who said it and read a little more about it!'}
      {'\n\n'}
      {'Click on the target in the top left hand corner to learn more about me.'}
      {'\n\n'}
      {'Please share any quotes you like by clicking the buttons below!'}
    </Welcome>
    <TouchableOpacity
      onPress={finishIntroduction}
    >
      <Transition
        animateOnMount={true}
      >
        <StyledAnimatedButton
          key="get-started"
        >
          <ButtonLabel>
            {'Get Started'}
          </ButtonLabel>
        </StyledAnimatedButton>
      </Transition>
    </TouchableOpacity>
  </Container>
)

Introduction.defaultProps = {
}

Introduction.propTypes = {
  finishIntroduction: PropTypes.func.isRequired,
}

// animated

const AnimatedButton = posed.View({
  enter: {
    opacity: 1,
    transition: {
      delay: 7000,
    }
  },
  exit: {
    opacity: 0,
  }
})

// styled

const Container = styled.SafeAreaView`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1;
`

const Welcome = styled.Text`
  color: ${({ theme: { text } }) => text};
  font-size: ${RF(3)};
  text-align: center;
  margin-left: 20;
  margin-right: 20;

  font-family: 'chivo';
`

const StyledAnimatedButton = styled(AnimatedButton)`
  justify-content: center;
  align-items: center;
  padding-horizontal: 10;
  padding-vertical: 10;
  margin-top: 20;
  background-color: ${({ theme: { button } }) => button};
  border-radius: 5;
`

const ButtonLabel = styled.Text`
  color: ${({ theme: { background } }) => background};
  font-size: ${RF(3.5)};
`

export default Introduction 