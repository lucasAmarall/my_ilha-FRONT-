import React, { useRef } from 'react';
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Image } from '../../../components/Image/Image';
import { useStyles } from '../../../hooks/theme/styles';
import { useFlatListPagination } from '../../../hooks/useFlatlistPagination/useFlatlistPagination';

const images = new Array(9).fill(
  'https://media.gettyimages.com/id/1402518299/pt/foto/khaby-lame-walks-the-media-line-during-capital-fms-summertime-ball-at-wembley-stadium-on-june.jpg?s=612x612&w=gi&k=20&c=70IVkval3aizSS065wZlwmSAKVfZK2k5XpPCoOT6y9w=',
);

interface ICardProps {
  card: any;
  onDetails: (card: any) => void;
}
const Card = ({ card, onDetails }: ICardProps) => {
  const { ref, next, previous } = useFlatListPagination({
    itemsLength: images.length,
  });
  const { styles } = useStyles();
  const cardWidth = useRef(
    Dimensions.get('screen').width -
      styles.containerPadding().paddingHorizontal * 2,
  ).current;

  return (
    <View
      style={[
        styles.height(styles.aspect9_16(cardWidth - 20)),
        styles.width(cardWidth),
        styles.bgColor('secondary'),
        styles.boxShadow('secondary'),
        styles.borderRadius(16),
      ]}
    >
      <View
        style={[
          styles.width('100%'),
          styles.flex(),
          styles.borderRadius(16),
          styles.overflowHidden(),
        ]}
      >
        <FlatList
          ref={ref}
          data={images}
          style={[styles.flex()]}
          horizontal
          renderItem={({ item }) => {
            return (
              <Image
                source={{ uri: item }}
                style={[styles.width(390), { height: styles.aspect9_16(390) }]}
              />
            );
          }}
        />

        <TouchableOpacity
          style={[
            styles.absolute(),
            styles.top(0),
            styles.left(0),
            styles.bottom(150),
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
            styles.bottom(150),
            styles.zIndex(2),
            styles.width('50%'),
          ]}
          onPress={next}
        />
        <TouchableOpacity
          style={[
            styles.absolute(),
            styles.bottom(0),
            styles.left(0),
            styles.zIndex(2),
            styles.width('100%'),
            styles.height(150),
          ]}
          onPress={() => onDetails(card)}
        >
          <View
            style={[
              styles.flex(),
              styles.containerPadding(),
              styles.justifyContent('flex-end'),
            ]}
          >
            <View
              style={[
                styles.row(),
                styles.alignItems('center'),
                styles.alignContent('center'),
              ]}
            >
              <Text style={[styles.text5(), styles.fontColor('white')]}>
                Lucas Amaral
              </Text>
              <View
                style={[
                  styles.bgColor('primary'),
                  styles.borderRadius(30),
                  styles.width(30),
                  styles.height(30),
                  styles.marginLeft(12),
                  styles.justifyContent('center'),
                  styles.alignItems('center'),
                ]}
              >
                <Text
                  style={[
                    styles.fontWeight('500'),
                    styles.fontColor('primary'),
                  ]}
                >
                  21
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { Card };
