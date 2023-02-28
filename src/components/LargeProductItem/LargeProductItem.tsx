import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from '../../hooks/theme/styles';
import { Image } from '../Image/Image';
import { Spacer } from '../Spacer/Spacer';

const LargeProductItem = () => {
  const { styles } = useStyles();

  const width = styles.screenWidth().width / 2.5;

  return (
    <View style={[{ width }]}>
      <Image
        resizeMode="contain"
        style={[
          styles.height(styles.aspect3_4(width)),
          styles.width(width),
          styles.borderRadius(12),
          styles.overflowHidden(),
          styles.bgColor('secondary'),
        ]}
        source={{
          uri: 'https://www.imigrantesbebidas.com.br/bebida/images/products/full/88313-energetico-monster-energy-juice-khaos-lata-473ml.jpg',
        }}
      />
      <Spacer space={6} />
      <Text style={[styles.text7(), styles.fontColor('primary')]}>Monster</Text>
      <Spacer space={6} />
      <View style={[styles.row()]}>
        <Text style={[styles.text3(), styles.fontColor('primary')]}>200$</Text>
      </View>
    </View>
  );
};

export { LargeProductItem };
