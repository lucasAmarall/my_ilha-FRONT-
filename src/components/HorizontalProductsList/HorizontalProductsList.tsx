import React, { useCallback } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useStyles } from '../../hooks/theme/styles';
import { MediumProductItem } from '../MediumProductItem/MediumProductItem';
import { ProductCardItem } from '../ProductCardItem/ProductCardItem';
import { SmallProductItem } from '../SmallProductItem/SmallProductItem';
import { Spacer } from '../Spacer/Spacer';

const HorizontalProductsList: React.FC<IHorizontalProductsListProps> = ({
  title,
  onSeeAll,
  products,
  size = 'small',
}) => {
  const { styles } = useStyles();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<TProduct>) => {
      if (size === 'large') {
        return <ProductCardItem product={item} />;
      }
      if (size === 'medium') {
        return <MediumProductItem product={item} />;
      }
      return <SmallProductItem product={item} />;
    },
    [size],
  );

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
      <FlatList
        style={[styles.borderRadius(12), styles.overflowHidden()]}
        data={products}
        ItemSeparatorComponent={() => <Spacer space={32} />}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export { HorizontalProductsList };
