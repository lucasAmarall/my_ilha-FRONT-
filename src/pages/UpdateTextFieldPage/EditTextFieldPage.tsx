import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button/Button';
import { Image } from '../../components/Image/Image';
import { Input } from '../../components/Input/Input';
import { Screen } from '../../components/Screen/Screen';
import { Spacer } from '../../components/Spacer/Spacer';
import { TouchFeedback } from '../../components/TouchFeedback/TouchFeedback';
import { assets } from '../../hooks/theme/assets';
import { useStyles } from '../../hooks/theme/styles';

const UpdateTextFieldPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { styles } = useStyles();
  const route = useRoute();
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  const submit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      goBack();
    }, 300);
  };
  return (
    <Screen>
      <View>
        <TouchFeedback onPress={goBack}>
          <View
            style={[
              styles.padding(20),
              styles.marginTop(-20),
              styles.marginLeft(-20),
            ]}
          >
            <Image
              resizeMode="contain"
              source={assets.forward_icon}
              style={[
                styles.width(30),
                styles.height(30),
                styles.borderColor('primary'),
                { transform: [{ rotate: '180deg' }] },
              ]}
            />
          </View>
        </TouchFeedback>
      </View>
      <Input label="User" value="#SBT_TV" onBlur={goBack} autoFocus />
      <Spacer space={24} />
      <Button variant="button" onPress={submit} loading={isLoading}>
        Save
      </Button>
      <Spacer space={32} />
    </Screen>
  );
};

export { UpdateTextFieldPage };
