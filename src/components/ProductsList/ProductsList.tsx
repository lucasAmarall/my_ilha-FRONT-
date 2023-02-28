import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useStyles } from '../../hooks/theme/styles';
import { Spacer } from '../Spacer/Spacer';
import { WideProductItem } from '../WideProductItem/WideProductItem';

const ProductsList: React.FC<IProductsGridProps> = ({
  title,
  onSeeAll,
  products,
}) => {
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
      {[...products].splice(0, 8).map((_, i) => (
        <WideProductItem key={i} />
      ))}
    </View>
  );
};

export { ProductsList };
