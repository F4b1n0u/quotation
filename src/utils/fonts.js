import { Asset, Font } from 'expo'

import {
  IMAGES,
  FONTS,
} from '#utils/assets'

export const load = () => Promise.all([
  Asset.loadAsync(Object.values(IMAGES)),
  Font.loadAsync(FONTS)
])
