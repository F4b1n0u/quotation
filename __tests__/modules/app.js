import appReducer, {
  START_LOAD,
  startLoad,
} from '#modules/app'

describe('actions', () => {
  it('should start to load the app', () => {
    const expectedAction = {
      type: START_LOAD
    }
    expect(startLoad()).toEqual(expectedAction)
  })
})

const initialState = {
  isLoaded: false,
  status: {
    isPending: true,
    error: null,
  }
}

describe('app reducer', () => {
  it('should return have the app in default state', () => {
    expect(appReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle START_LOAD', () => {
    expect(
      appReducer(initialState, startLoad())
    ).toEqual({
      isLoaded: false,
      status: {
        isPending: true,
        error: null,
      }
    })
  })
})
