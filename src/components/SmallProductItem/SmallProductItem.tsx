import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from '../../hooks/theme/styles';
import { Image } from '../Image/Image';
import { Spacer } from '../Spacer/Spacer';

const SmallProductItem = ({ product }: { product: TProduct }) => {
  const { styles } = useStyles();

  return (
    <View style={[styles.width(124), styles.paddingHorizontal(2)]}>
      <Image
        resizeMode="cover"
        style={[
          styles.width('100%'),
          styles.height(styles.aspect9_16(122)),
          styles.borderRadius(12),
          styles.overflowHidden(),
        ]}
        source={{
          uri: product.image,
        }}
      />
      <Spacer space={6} />
      <Text style={[styles.text7(), styles.fontColor('primary')]}>
        {product.name}
      </Text>
      <Spacer space={6} />
      <View style={[styles.row()]}>
        <Text style={[styles.text3(), styles.fontColor('primary')]}>
          ${product.price}
        </Text>
      </View>
    </View>
  );
};

export { SmallProductItem };
