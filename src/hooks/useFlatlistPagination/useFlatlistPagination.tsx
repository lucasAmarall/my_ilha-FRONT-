import { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};

const useFlatListPagination = ({ itemsLength }: { itemsLength: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = useRef<FlatList | null>(null);

  const next = () => {
    if (currentImageIndex + 1 >= itemsLength) {
      return;
    }
    ref.current?.scrollToIndex({
      index: currentImageIndex + 1,
      animated: true,
    });
    ReactNativeHapticFeedback.trigger('keyboardPress', options);
    setCurrentImageIndex(i => i + 1);
  };

  const previous = () => {
    if (currentImageIndex - 1 < 0) {
      return;
    }
    ref.current?.scrollToIndex({
      index: currentImageIndex - 1,
      animated: true,
    });
    ReactNativeHapticFeedback.trigger('keyboardPress', options);
    setCurrentImageIndex(i => i - 1);
  };

  return {
    ref,
    next,
    previous,
  };
};

export { useFlatListPagination };
