import { useNavigation } from '@react-navigation/native';

const useGoBack = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };
  return { goBack };
};

export { useGoBack };
