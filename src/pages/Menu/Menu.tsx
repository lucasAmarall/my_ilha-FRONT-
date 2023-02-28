import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';
import { HorizontalProductsList } from '../../components/HorizontalProductsList/HorizontalProductsList';
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Spacer } from '../../components/Spacer/Spacer';
import { useStyles } from '../../hooks/theme/styles';
import { ApplicationState } from '../../store/store';
import { Header } from './Header/Header';

const Menu = () => {
  const { store } = useSelector(
    (state: ApplicationState) => state.currentSpotReducer,
  );

  const { styles } = useStyles();

  const renderItem = useCallback(({ item }: ListRenderItem<TSection>) => {
    const type = item.type;
    // A = HORIZONTAL
    // B = HORIZONTAL
    if (type === 'a') {
      return (
        <HorizontalProductsList
          title={item.title}
          products={item.products}
          size="large"
          onSeeAll={() => alert('details')}
        />
      );
    }
    if (type === 'b') {
      return (
        <HorizontalProductsList
          title={item.title}
          products={item.products}
          onSeeAll={() => alert('details')}
        />
      );
    }
    if (type === 'c') {
      return (
        <HorizontalProductsList
          title={item.title}
          products={item.products}
          onSeeAll={() => alert('details')}
          size="medium"
        />
      );
    }
    if (type === 'd') {
      return (
        <ProductsGrid
          title={item.title}
          products={item.products}
          onSeeAll={() => alert('details')}
        />
      );
    }
    if (type === 'e') {
      return (
        <ProductsList
          title={item.title}
          products={item.products}
          onSeeAll={() => alert('details')}
        />
      );
    }

    throw new Error('item type not supported');
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <>
        <Header cover={store.cover} images={store.header_carrousel} />
        <Spacer space={32} />
      </>
    );
  }, [store?.cover, store?.header_carrousel]);

  if (!store) {
    return null;
  }
  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={store.sections}
      style={[styles.container()]}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <Spacer space={32} />}
      renderItem={renderItem}
      ListFooterComponent={<Spacer space={130} />}
    />
  );
};

export { Menu };
