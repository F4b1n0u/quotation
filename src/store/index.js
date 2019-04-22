import devStoreConfigure from '#store/store-configure.dev'
import prodStoreConfigure from '#store/store-configure.prod'

export default (initialState) => {
  const store = (process.env.NODE_ENV === 'production')
    ? prodStoreConfigure(initialState)
    : devStoreConfigure(initialState)

  return {
    store, 
  }
}
