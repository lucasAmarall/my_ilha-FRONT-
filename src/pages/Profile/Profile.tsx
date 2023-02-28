import React from 'react';
import { ScrollView } from 'react-native';
import { Screen } from '../../components/Screen/Screen';
import { useStyles } from '../../hooks/theme/styles';
import { PicturesGrid } from './PicturesGrid/PicturesGrid';

const Profile = () => {
  const { styles } = useStyles();

  return (
    <Screen>
      <ScrollView style={[styles.flex()]}>
        <PicturesGrid />
      </ScrollView>
    </Screen>
  );
};

export { Profile };
