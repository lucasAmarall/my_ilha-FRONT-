import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Image } from '../../../components/Image/Image';
import { Spacer } from '../../../components/Spacer/Spacer';
import { TouchFeedback } from '../../../components/TouchFeedback/TouchFeedback';
import { Paths } from '../../../constants/Paths';
import { useStyles } from '../../../hooks/theme/styles';

const ChatItem = ({ item }: { item: any }) => {
  const { navigate } = useNavigation();
  const { styles } = useStyles();

  return (
    <TouchFeedback onPress={() => navigate(Paths.chat)}>
      <View style={[styles.width('100%')]}>
        <View style={[styles.row()]}>
          <Image
            style={[
              styles.width(70),
              styles.height(70),
              styles.borderRadius(60),
            ]}
            source={{
              uri: `https://xsgames.co/randomusers/avatar.php?g=female&0=${item}`,
            }}
          />
          <View
            style={[
              styles.flex(),
              styles.height('100%'),
              styles.marginLeft(6),
              styles.borderBottomWidth(1),
              styles.borderColor('lighter_gray'),
            ]}
          >
            <Text style={[styles.text4(), styles.fontColor('primary')]}>
              Fulana
            </Text>
            <Spacer space={8} />
            <Text style={[styles.text2(), styles.fontColor('gray')]}>❤️</Text>
            <Spacer space={12} />
          </View>
        </View>
        <Spacer space={12} />
      </View>
    </TouchFeedback>
  );
};

export { ChatItem };
