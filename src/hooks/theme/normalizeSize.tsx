import { Dimensions, PixelRatio } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

const iPhone13ProMaxPerimeter = 2 * (375 + 812);
const currentPerimeter = 2 * (SCREEN_WIDTH + SCREEN_HEIGHT);

const scale = Math.round(currentPerimeter / iPhone13ProMaxPerimeter);

const useNormalizeSize = () => {
  const normalizeSize = (size: number) => {
    const newSize = size;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };
  return { normalizeSize };
};
export { useNormalizeSize };
