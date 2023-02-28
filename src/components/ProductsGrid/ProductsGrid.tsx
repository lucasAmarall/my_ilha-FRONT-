import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useStyles } from '../../hooks/theme/styles';
import { LargeProductItem } from '../LargeProductItem/LargeProductItem';
import { Spacer } from '../Spacer/Spacer';

const ProductsGrid: React.FC<IProductsGridProps> = ({ title, onSeeAll }) => {
  const { styles } = useStyles();

  return (
    <View>
      <View style={[styles.row(), styles.justifyContent('space-between')]}>
        <Text style={[styles.text7(), styles.fontColor('primary')]}>
          {title}
        </Text>
        <TouchableOpacity onPress={onSeeAll}>
          <Text style={[styles.text3(), styles.fontColor('primary')]}>
            Ver tudo
          </Text>
        </TouchableOpacity>
      </View>
      <Spacer space={16} />
      <View style={[styles.row(), styles.justifyContent('space-between')]}>
        <LargeProductItem />
        <LargeProductItem />
      </View>
      <Spacer space={6} />
      <View style={[styles.row(), styles.justifyContent('space-between')]}>
        <LargeProductItem />
        <LargeProductItem />
      </View>
      <Spacer space={6} />
      <View style={[styles.row(), styles.justifyContent('space-between')]}>
        <LargeProductItem />
        <LargeProductItem />
      </View>
      <Spacer space={6} />
    </View>
  );
};

export { ProductsGrid };
