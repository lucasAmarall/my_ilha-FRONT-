import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from '../../hooks/theme/styles';
import { Image } from '../Image/Image';
import { Spacer } from '../Spacer/Spacer';

const MediumProductItem = ({ product }: { product: TProduct }) => {
  const { styles } = useStyles();

  return (
    <View
      style={[
        styles.width(255),
        styles.marginRight(12),
        styles.relative(),
        styles.borderRadius(12),
        styles.overflowHidden(),
      ]}
    >
      <Image
        resizeMode="cover"
        style={[styles.width(255), styles.height(144), styles.borderRadius(12)]}
        source={{ uri: product.image }}
      />
      <View
        style={[
          styles.flex(),
          styles.absolute(),
          styles.top(0),
          styles.left(0),
          styles.bgColor('black'),
          styles.opacity(0.3),
          styles.width('100%'),
          styles.height('100%'),
        ]}
      />
      <View
        style={[
          styles.flex(),
          styles.absolute(),
          styles.top(0),
          styles.paddingBottom(12),
          styles.left(12),
          styles.width('100%'),
          styles.height('100%'),
          styles.justifyContent('flex-end'),
        ]}
      >
        <Text style={[styles.text7(), styles.fontColor('white')]}>
          {product.name}
        </Text>
        <Spacer space={6} />
        <View style={[styles.row()]}>
          <View
            style={[
              styles.bgColor('purple'),
              styles.borderRadius(20),
              styles.paddingHorizontal(8),
            ]}
          >
            <Text style={[styles.text4(), styles.fontColor('white')]}>
              ${product.price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export { MediumProductItem };
