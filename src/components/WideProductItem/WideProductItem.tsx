import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from '../../hooks/theme/styles';
import { Image } from '../Image/Image';
import { Spacer } from '../Spacer/Spacer';

const WideProductItem = () => {
  const { styles } = useStyles();

  return (
    <View
      style={[
        styles.width('100%'),
        styles.borderRadius(12),
        styles.marginBottom(32),
      ]}
    >
      <View style={styles.row()}>
        <View
          style={[
            styles.flex(),
            styles.justifyContent('space-between'),
            styles.borderBottomWidth(1),
            styles.borderColor('lighter_gray'),
            styles.paddingVertical(12),
          ]}
        >
          <View>
            <Text style={[styles.text7(), styles.fontColor('white')]}>
              Monster
            </Text>
            <Spacer space={12} />
            <Text style={[styles.text8(), styles.fontColor('white')]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </Text>
          </View>
          <Text style={[styles.text7(), styles.fontColor('white')]}>R$ 12</Text>
        </View>
        <Spacer space={12} vertical />
        <Image
          resizeMode="cover"
          style={[
            styles.width(80),
            styles.height(styles.aspect9_16(80)),
            styles.borderRadius(12),
            styles.overflowHidden(),
          ]}
          source={{
            uri: 'https://www.imigrantesbebidas.com.br/bebida/images/products/full/88313-energetico-monster-energy-juice-khaos-lata-473ml.jpg',
          }}
        />
      </View>
    </View>
  );
};

export { WideProductItem };
