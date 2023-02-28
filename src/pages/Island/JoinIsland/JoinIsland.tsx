import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '../../../components/Button/Button';
import { Image } from '../../../components/Image/Image';
import { Screen } from '../../../components/Screen/Screen';
import { Spacer } from '../../../components/Spacer/Spacer';
import { TouchFeedback } from '../../../components/TouchFeedback/TouchFeedback';
import { assets } from '../../../hooks/theme/assets';
import { useStyles } from '../../../hooks/theme/styles';
import { addSpotToList } from '../../../store/ducks/SpotsListReducer/SpotsListReducer';
import { ReaderModal } from '../ReaderModal/ReaderModal';

const JoinIsland = () => {
  const dispatch = useDispatch();
  const { styles } = useStyles();
  const [isReading, setIsReading] = useState(false);
  const [loading, setLoading] = useState(false);
  const openReading = () => {
    setLoading(true);
    setIsReading(true);
  };

  const onCloseReading = () => {
    setLoading(false);
    setIsReading(false);
  };

  const joinIsland = (url: string) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(
        addSpotToList({
          spot: {
            id: url,
            name: url,
          },
        }),
      );
      setLoading(false);
    }, 500);
  };

  return (
    <Screen>
      <View style={[styles.flex(), styles.alignItems('center')]}>
        <TouchFeedback>
          <Image
            source={assets.qrcode_icon}
            style={[styles.width(280), styles.height(280)]}
          />
        </TouchFeedback>
        <Spacer space={60} />
        <Text
          style={[
            styles.flex(),
            styles.text3(),
            styles.fontColor('primary'),
            styles.fontAlign('center'),
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          obcaecati inventore quos sed modi ratione, hic a magnam provident
          reiciendis alias illum cum molestiae incidunt veniam natus numquam!
          Sunt, ea!
        </Text>
        <Button variant="button" loading={loading} onPress={openReading}>
          Ler Ilha
        </Button>
        <ReaderModal
          isOpen={isReading}
          onClose={onCloseReading}
          onSuccess={joinIsland}
        />
      </View>
      <Spacer space={100} />
    </Screen>
  );
};

export { JoinIsland };
