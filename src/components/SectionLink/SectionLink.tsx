import React from 'react';
import { Text, View } from 'react-native';
import { assets } from '../../hooks/theme/assets';
import { useStyles } from '../../hooks/theme/styles';
import { themeColor } from '../../hooks/theme/theme';
import { Image } from '../Image/Image';
import { Spacer } from '../Spacer/Spacer';
import { TouchFeedback } from '../TouchFeedback/TouchFeedback';

const SectionLink = ({
  bgColor = 'primary',
  onPress,
  value,
  icon,
  label,
  actionIcon,
}: {
  icon?: keyof typeof assets;
  actionIcon?: keyof typeof assets;
  bgColor?: keyof typeof themeColor.light.backgrounds;
  onPress?: () => void;
  label: string;
  value: string;
}) => {
  const { styles } = useStyles();

  return (
    <TouchFeedback onlyHaptic onPress={onPress} activeOpacity={0.96}>
      <View
        style={[
          styles.row(),
          styles.width('100%'),
          styles.bgColor(bgColor),
          styles.padding(12),
          styles.overflowHidden(),
        ]}
      >
        <View
          style={[
            styles.flex(9),
            styles.justifyContent('space-between'),
            styles.row(),
          ]}
        >
          <View style={[styles.row(), styles.alignItems('center')]}>
            {icon && (
              <>
                <Image
                  source={assets[icon]}
                  style={[styles.width(24), styles.height(24)]}
                  resizeMode="contain"
                />
                <Spacer space={6} vertical />
              </>
            )}

            <Text style={[styles.text2(), styles.fontColor('purple')]}>
              {label}
            </Text>
          </View>
          <View style={[styles.row(), styles.alignItems('center')]}>
            <Text style={[styles.text2(), styles.fontColor('purple')]}>
              {value}
            </Text>
            <Spacer space={6} vertical />
            <Image
              source={assets[actionIcon || 'forward_icon']}
              style={[styles.width(24), styles.height(24)]}
              resizeMode="contain"
            />
          </View>
        </View>
        <View
          style={[
            styles.absolute(),
            styles.bottom(0),
            styles.left(icon ? 43 : 12),
            styles.width('100%'),
            styles.height(0),
            styles.borderColor('light_gray'),
            styles.borderBottomWidth(1),
          ]}
        />
      </View>
    </TouchFeedback>
  );
};

export { SectionLink };
