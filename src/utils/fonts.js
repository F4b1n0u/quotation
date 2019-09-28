import { Asset } from 'expo-asset'
import * as Font from 'expo-font'

import {
  IMAGES,
  FONTS,
} from '#utils/assets'

export const load = () => Promise.all([
  Asset.loadAsync(Object.values(IMAGES)),
  Font.loadAsync(FONTS)
])
