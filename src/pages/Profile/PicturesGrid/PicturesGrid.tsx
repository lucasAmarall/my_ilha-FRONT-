import React from 'react';
import { Text, View } from 'react-native';
import { Image } from '../../../components/Image/Image';
import { Spacer } from '../../../components/Spacer/Spacer';
import { TouchFeedback } from '../../../components/TouchFeedback/TouchFeedback';
import { useStyles } from '../../../hooks/theme/styles';

const image =
  'https://media.gettyimages.com/id/1402518299/pt/foto/khaby-lame-walks-the-media-line-during-capital-fms-summertime-ball-at-wembley-stadium-on-june.jpg?s=612x612&w=gi&k=20&c=70IVkval3aizSS065wZlwmSAKVfZK2k5XpPCoOT6y9w=';

const Picture = () => {
  const { styles } = useStyles();
  const width =
    (styles.screenWidth().width -
      styles.containerPadding().paddingHorizontal * 4) /
    3;

  return (
    <TouchFeedback>
      <Image
        source={{ uri: image }}
        style={[
          styles.width(width),
          styles.height(styles.aspect9_16(width)),
          styles.borderRadius(12),
        ]}
      />
    </TouchFeedback>
  );
};
const PicturesGrid = () => {
  const { styles } = useStyles();

  return (
    <View>
      <View
        style={[
          styles.bgColor('white'),
          styles.antiContainer(),
          styles.justifyContent('center'),
          { backgroundColor: 'rgba(255,255,255,.9)' },
        ]}
      >
        <Text style={[styles.text6(), styles.fontAlign('center')]}>
          Profile
        </Text>
      </View>
      <Spacer space={32} />
      <View style={[styles.row(), styles.justifyContent('space-between')]}>
        <Picture />
        <Picture />
        <Picture />
      </View>
      <Spacer space={12} />
      <View style={[styles.row(), styles.justifyContent('space-between')]}>
        <Picture />
        <Picture />
        <Picture />
      </View>
      <Spacer space={12} />
      <View style={[styles.row(), styles.justifyContent('space-between')]}>
        <Picture />
        <Picture />
        <Picture />
      </View>
      <Text>PicturesGrid</Text>
    </View>
  );
};

export { PicturesGrid };
