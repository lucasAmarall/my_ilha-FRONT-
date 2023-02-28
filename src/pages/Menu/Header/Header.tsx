import React from 'react';
import { FlatList, View } from 'react-native';
import { Image } from '../../../components/Image/Image';
import { Spacer } from '../../../components/Spacer/Spacer';
import { useStyles } from '../../../hooks/theme/styles';

const Header = ({ images, cover }: { images: string[]; cover: string }) => {
  const { styles } = useStyles();

  return (
    <View
      style={[styles.relative(), styles.antiContainer(), styles.width('100%')]}
    >
      <Image
        source={{ uri: cover }}
        style={[styles.screenWidth(), styles.height(180)]}
      />
      <View
        style={[
          styles.absolute(),
          styles.top(0),
          styles.left(0),
          styles.bgColor('black'),
          styles.screenWidth(),
          styles.height(180),
          styles.opacity(0.4),
        ]}
      />
      <View
        style={[
          styles.absolute(),
          styles.top(100),
          styles.left(0),
          styles.borderRadius(14),
          styles.screenWidth(),
          styles.containerPadding(),
          styles.boxShadow('secondary'),
        ]}
      >
        <FlatList
          data={images}
          pagingEnabled
          horizontal
          bounces={false}
          style={[
            styles.borderRadius(14),
            styles.overflowHidden(),
            styles.width(
              styles.screenWidth().width -
                styles.containerPadding().paddingHorizontal * 2,
            ),
          ]}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              resizeMode="cover"
              style={[
                styles.flex(),
                styles.borderRadius(14),
                styles.width(
                  styles.screenWidth().width -
                    styles.containerPadding().paddingHorizontal * 2,
                ),
                styles.height(225),
              ]}
            />
          )}
        />
      </View>
      <Spacer space={150} />
    </View>
  );
};

export { Header };
