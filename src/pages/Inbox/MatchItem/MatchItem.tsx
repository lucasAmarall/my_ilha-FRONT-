import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image } from '../../../components/Image/Image';
import { TouchFeedback } from '../../../components/TouchFeedback/TouchFeedback';
import { Paths } from '../../../constants/Paths';
import { useStyles } from '../../../hooks/theme/styles';

const MatchItem = ({ i }) => {
  const { styles } = useStyles();
  const { navigate } = useNavigation();

  return (
    <TouchFeedback onPress={() => navigate(Paths.chat)}>
      <Image
        style={[
          styles.width(100),
          styles.height(styles.aspect3_4(100)),
          styles.marginRight(12),
          styles.borderRadius(12),
        ]}
        source={{
          uri: `https://xsgames.co/randomusers/avatar.php?g=female&0=${i}`,
        }}
      />
    </TouchFeedback>
  );
};

export { MatchItem };
