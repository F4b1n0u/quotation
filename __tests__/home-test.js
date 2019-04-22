import React from 'react'
import Home from '#components/home'
import renderer from 'react-test-renderer'

import { ThemeProvider } from 'styled-components/native'

const theme = {
  background: '#EAEAEA',
  box: '#FFFFFF',
  highlight: '#19A5B0',
}

test('renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <Home
        onGoToInsight={() => {}}
        onGoToCheckIn={() => {}}
      />
    </ThemeProvider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})