import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Source } from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import { Paths } from '../../constants/Paths';
import { assets } from '../../hooks/theme/assets';
import { useStyles } from '../../hooks/theme/styles';
import { SpotSelection } from '../../pages/Island/SpotSelection/SpotSelection';
import { ApplicationState } from '../../store/store';
import { Image } from '../Image/Image';
import { Spacer } from '../Spacer/Spacer';
import { TouchFeedback } from '../TouchFeedback/TouchFeedback';

const Item = ({
  label,
  icon,
  path,
  active,
  onPress,
}: {
  label: string;
  icon: Source;
  path: Paths;
  active?: boolean;
  onPress: (path: Paths) => void;
}) => {
  const { styles } = useStyles();
  return (
    <TouchFeedback onPress={() => onPress(path)}>
      <View
        style={[
          styles.boxShadow('secondary'),
          styles.justifyContent('center'),
          styles.alignItems('center'),
          styles.borderRadius(8),
          styles.paddingHorizontal(4),
          styles.paddingVertical(4),
          styles.boxShadow('secondary'),
        ]}
      >
        <Image
          style={[styles.height(20), styles.width(20)]}
          source={icon}
          resizeMode="contain"
        />
        <Spacer space={4} />
        {/* <Text
          style={[styles.text2(), styles.fontWeight(active ? '700' : '500')]}
        >
          {label}
        </Text> */}
      </View>
    </TouchFeedback>
  );
};
const BottomNavigation: React.FC<BottomTabBarProps> = props => {
  const { active_id } = useSelector(
    (state: ApplicationState) => state.spotsListReducer,
  );
  const { styles } = useStyles();
  const [activeRouteName, setActiveRouteName] = useState(Paths.discovery);
  const navigation = useNavigation();
  const [isSpotSelectionOpen, setIsSpotSelectionOpen] = useState(false);

  const navigateTo = (path: Paths) => {
    navigation.navigate(path);
    setActiveRouteName(path);
  };

  const last = Object.keys(props.descriptors)[
    Object.keys(props.descriptors).length - 1
  ];
  const options = props.descriptors[last];

  return (
    <View
      style={[
        { display: options?.options?.tabBarStyle?.display },
        styles.absolute(),
        styles.width('100%'),
        styles.alignItems('center'),
        styles.justifyContent('center'),
        styles.bottom(40),
        styles.left(styles.containerPadding().paddingHorizontal),
        styles.right(styles.containerPadding().paddingHorizontal),
        styles.boxShadow('secondary'),
      ]}
    >
      <View
        style={[
          styles.width('60%'),
          styles.borderRadius(32),
          styles.paddingVertical(16),
          styles.paddingHorizontal(16),
          styles.bgColor('light_gray'),
          styles.boxShadow('primary'),
          styles.row(),
          styles.justifyContent('space-around'),
          styles.alignItems('center'),
        ]}
      >
        <Item
          label="Match"
          onPress={navigateTo}
          icon={assets.play_icon}
          active={activeRouteName === Paths.discovery}
          path={Paths.discovery}
        />
        <Item
          label="Inbox"
          onPress={() => {
            setActiveRouteName(Paths.inbox_stack);
            navigation.navigate(Paths.inbox_stack, { screen: Paths.inbox });
          }}
          icon={assets.sent_icon}
          active={activeRouteName === Paths.inbox_stack}
          path={Paths.inbox_stack}
        />
        <Item
          label="Spot"
          onPress={() => setIsSpotSelectionOpen(true)}
          icon={assets.configure_icon}
          path={Paths.new}
        />
        {!!active_id && (
          <Item
            label="Carrinho"
            onPress={navigateTo}
            icon={assets.cart_icon}
            active={activeRouteName === Paths.menu}
            path={Paths.menu}
          />
        )}
        <Item
          label="Perfil"
          onPress={navigateTo}
          icon={assets.perfil_icon}
          active={activeRouteName === Paths.profile}
          path={Paths.profile}
        />
      </View>
      <SpotSelection
        isOpen={isSpotSelectionOpen}
        onClose={() => setIsSpotSelectionOpen(false)}
      />
    </View>
  );
};

export { BottomNavigation };
