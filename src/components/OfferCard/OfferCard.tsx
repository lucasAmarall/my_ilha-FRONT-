import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from '../../hooks/theme/styles';
import { Image } from '../Image/Image';
import { Spacer } from '../Spacer/Spacer';

const OfferCard = () => {
  const { styles } = useStyles();

  return (
    <View style={[styles.width('100%'), styles.height(210)]}>
      <Image
        source={{
          uri: 'https://vinhocapital.files.wordpress.com/2016/03/red-citrus1.jpg',
        }}
        style={[
          styles.width('100%'),
          styles.height(160),
          styles.bgColor('primary'),
          styles.boxShadow('primary'),
          styles.borderRadius(8),
          styles.overflowHidden(),
        ]}
      />
      <View
        style={[
          styles.bgColor('purple'),
          styles.absolute(),
          styles.top(12),
          styles.right(12),
          styles.borderRadius(20),
          styles.paddingHorizontal(8),
        ]}
      >
        <Text style={[styles.text4(), styles.fontColor('white')]}>Oferta</Text>
      </View>
      <Spacer space={8} />
      <Text style={[styles.text7(), styles.fontColor('primary')]}>
        Combo de Red Label
      </Text>
      <Spacer space={6} />
      <View style={[styles.row()]}>
        <Text style={[styles.text3(), styles.fontColor('primary')]}>200$</Text>
        <Spacer space={8} vertical />
        <View
          style={[
            styles.bgColor('purple'),
            styles.borderRadius(20),
            styles.paddingHorizontal(8),
          ]}
        >
          <Text style={[styles.text4(), styles.fontColor('white')]}>150$</Text>
        </View>
      </View>
    </View>
  );
};

export { OfferCard };
