import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Modal, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../components/Button/Button';
import { Image } from '../../../components/Image/Image';
import { Screen } from '../../../components/Screen/Screen';
import { SectionLink } from '../../../components/SectionLink/SectionLink';
import { Spacer } from '../../../components/Spacer/Spacer';
import { TouchFeedback } from '../../../components/TouchFeedback/TouchFeedback';
import { assets } from '../../../hooks/theme/assets';
import { useStyles } from '../../../hooks/theme/styles';
import {
  addSpotToList,
  setActiveSpotId,
} from '../../../store/ducks/SpotsListReducer/SpotsListReducer';
import { ApplicationState } from '../../../store/store';
import { ReaderModal } from '../ReaderModal/ReaderModal';

const SpotSelection = ({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose: () => void;
}) => {
  const dispatch = useDispatch();
  const { styles } = useStyles();
  const [isReading, setIsReading] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { spots, active_id } = useSelector(
    (state: ApplicationState) => state.spotsListReducer,
  );

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
    dispatch(
      addSpotToList({
        spot: {
          id: url,
          name: url,
        },
      }),
    );
    onClose();
    setLoading(false);
  };

  const header = () => {
    return (
      <View style={[styles.alignItems('center'), styles.containerPadding()]}>
        <View style={[styles.absolute(), styles.top(24), styles.left(24)]}>
          <TouchFeedback onPress={onClose}>
            <Text style={[styles.text1(), styles.fontColor('purple')]}>
              Fechar
            </Text>
          </TouchFeedback>
        </View>
        <View style={[styles.boxShadow('primary')]}>
          <TouchFeedback>
            <Spacer space={60} />
            <Image
              source={assets.logo}
              style={[
                styles.width(130),
                styles.height(130),
                styles.borderColor('primary'),
                styles.borderRadius(32),
                styles.boxShadow('primary'),
              ]}
            />
          </TouchFeedback>
        </View>
        <Spacer space={60} />
        <Text
          style={[
            styles.flex(),
            styles.text3(),
            styles.fontColor('primary'),
            styles.fontAlign('center'),
          ]}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
          quisquam sequi consequuntur sapiente neque, in ut expedita sit eaque
          nam animi minus deleniti, perferendis ex odit nisi inventore nobis
          rerum.
        </Text>
        <Spacer space={32} />
      </View>
    );
  };

  const changeSpot = (id: string) => {
    dispatch(setActiveSpotId(id));
  };

  return (
    <Modal
      presentationStyle="formSheet"
      visible={isOpen}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Screen>
        <View style={[styles.flex(), styles.alignItems('center')]}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={spots}
            style={[styles.antiContainer()]}
            ListHeaderComponent={header}
            renderItem={({ item }) => (
              <SectionLink
                onPress={() => changeSpot(item.id)}
                value={item.id === active_id ? '*' : ''}
                label={item.name}
                icon="location_icon"
              />
            )}
          />
          <Spacer space={12} />
          <Button variant="button" loading={loading} onPress={openReading}>
            Entrar em um novo spot
          </Button>
          <ReaderModal
            isOpen={isReading}
            onClose={onCloseReading}
            onSuccess={joinIsland}
          />
        </View>
      </Screen>
    </Modal>
  );
};

export { SpotSelection };
