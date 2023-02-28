import React from 'react';
import {
  FlatList,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Image } from '../../../components/Image/Image';
import { Spacer } from '../../../components/Spacer/Spacer';
import { assets } from '../../../hooks/theme/assets';
import { useStyles } from '../../../hooks/theme/styles';
import { useFlatListPagination } from '../../../hooks/useFlatlistPagination/useFlatlistPagination';
const images = new Array(9).fill(
  'https://media.gettyimages.com/id/1402518299/pt/foto/khaby-lame-walks-the-media-line-during-capital-fms-summertime-ball-at-wembley-stadium-on-june.jpg?s=612x612&w=gi&k=20&c=70IVkval3aizSS065wZlwmSAKVfZK2k5XpPCoOT6y9w=',
);

const DetailsModal: React.FC<IDetailsModalProps> = ({ visible, onClose }) => {
  const { styles } = useStyles();
  const { ref, next, previous } = useFlatListPagination({
    itemsLength: images.length,
  });
  return (
    <Modal
      visible={visible}
      presentationStyle="pageSheet"
      animationType="slide"
      onRequestClose={onClose}
      style={[styles.bgColor('primary')]}
    >
      <View
        style={[
          styles.flex(),
          styles.absolute(),
          styles.left(0),
          styles.bottom(0),
          styles.top(0),
          styles.width('100%'),
          styles.height('100%'),
          styles.bgColor('primary'),
        ]}
      />
      <ScrollView style={[styles.flex()]} showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.screenWidth(),
            styles.relative(),
            {
              height: styles.aspect3_4(styles.screenWidth().width),
            },
          ]}
        >
          <FlatList
            ref={ref}
            data={images}
            style={[styles.flex(), styles.width('100%')]}
            horizontal
            renderItem={({ item }) => {
              return (
                <Image
                  source={{ uri: item }}
                  style={[
                    styles.screenWidth(),
                    {
                      height: styles.aspect3_4(styles.screenWidth().width),
                    },
                  ]}
                />
              );
            }}
          />
          <TouchableOpacity
            style={[
              styles.absolute(),
              styles.top(0),
              styles.left(0),
              styles.bottom(0),
              styles.zIndex(2),
              styles.width('50%'),
            ]}
            onPress={previous}
          />
          <TouchableOpacity
            style={[
              styles.absolute(),
              styles.top(0),
              styles.right(0),
              styles.bottom(0),
              styles.zIndex(2),
              styles.width('50%'),
            ]}
            onPress={next}
          />
        </View>
        <TouchableOpacity
          onPress={onClose}
          activeOpacity={0.8}
          style={[
            styles.absolute(),
            styles.right(styles.containerPadding().paddingHorizontal),
            styles.top(styles.aspect3_4(styles.screenWidth().width) - 35),
            styles.zIndex(2),
            styles.width(50),
            styles.height(50),
            styles.borderRadius(100),
            styles.justifyContent('center'),
            styles.alignItems('center'),
            styles.borderWidth(1),
            styles.borderColor('white'),
            styles.bgColor('white'),
          ]}
        >
          <Image
            source={assets.close_icon}
            style={[styles.width(25), styles.height(25)]}
          />
        </TouchableOpacity>

        <View style={[styles.container()]}>
          <Spacer space={16} />
          <View
            style={[
              styles.row(),
              styles.alignItems('center'),
              styles.alignContent('center'),
            ]}
          >
            <Text style={[styles.text5(), styles.fontColor('primary')]}>
              Lucas Amaral
            </Text>
            <View
              style={[
                styles.borderRadius(30),
                styles.width(30),
                styles.height(30),
                styles.marginLeft(12),
                styles.justifyContent('center'),
                styles.alignItems('center'),
                styles.bgColor('secondary'),
              ]}
            >
              <Text
                style={[
                  styles.fontWeight('500'),
                  styles.fontColor('secondary'),
                ]}
              >
                21
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export { DetailsModal };
