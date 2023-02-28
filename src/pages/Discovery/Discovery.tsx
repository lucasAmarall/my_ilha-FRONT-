import React, { useState } from 'react';
import Swiper from 'react-native-deck-swiper';
import { Screen } from '../../components/Screen/Screen';
import { useStyles } from '../../hooks/theme/styles';
import { Card } from './Card/Card';
import { DetailsModal } from './DetailsModal/DetailsModal';

const Discovery = () => {
  const [details, setDetails] = useState({
    isOpen: false,
  });
  const { styles } = useStyles();

  const like = () => {
    console.log('like');
  };

  const dislike = () => {
    console.log('dislike');
  };
  const openDetailsModal = () => setDetails(e => ({ ...e, isOpen: true }));
  const closeDetailsModal = () => setDetails(e => ({ ...e, isOpen: false }));

  const onDetails = (c: any) => {
    openDetailsModal();
  };

  return (
    <Screen>
      <Swiper
        backgroundColor={styles.bgColor('primary').backgroundColor}
        cardHorizontalMargin={styles.containerPadding().paddingHorizontal}
        infinite
        cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
        renderCard={i => <Card card={i} onDetails={onDetails} />}
        onSwipedLeft={dislike}
        onSwipedRight={like}
        stackSize={3}
      />
      <DetailsModal onClose={closeDetailsModal} visible={details.isOpen} />
    </Screen>
  );
};

export { Discovery };
