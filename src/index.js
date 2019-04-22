import React from 'react'
import { registerRootComponent } from 'expo'
import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'react-native'

import storeConfigure from '#store/index'
import App from '#containers/app'
import theme from '#utils/theme'

StatusBar.setHidden(true)

const initialState = {}

const { store } = storeConfigure(initialState)

const StyledApp = styled(App)`
  flex: 1;
  flex-direction: column;
`

registerRootComponent(() => (
  <Provider
    store={store}
  >
    <ThemeProvider theme={theme}>
      <StyledApp/>
    </ThemeProvider>
  </Provider>
))
