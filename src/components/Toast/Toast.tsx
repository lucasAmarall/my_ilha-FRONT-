import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { Animated, Easing, SafeAreaView, Text, View } from 'react-native';
import { useStyles } from '../../hooks/theme/styles';
import { Spacer } from '../Spacer/Spacer';
import { TouchFeedback } from '../TouchFeedback/TouchFeedback';
import { ToastStyles } from './styles';

interface IToastMessageBoxProps {
  onRead: (id: string | number) => void;
}

const PERSIST_TIME = 5000;

const ToastMessageBox: React.FC<IToastMessageBoxProps & IToastMessage> = ({
  message,
  id,
  read,
  type,
  onRead,
}) => {
  const { styles } = useStyles();
  const BOX_MESSAGE_HEIGHT = styles.normalizeSize(90);
  const TOP_OFFSET = styles.normalizeSize(60);
  const progress = useRef(new Animated.Value(0)).current;

  const opacity = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [-TOP_OFFSET, 0],
  });

  useLayoutEffect(() => {
    Animated.timing(progress, {
      toValue: read ? 0 : 1,
      useNativeDriver: false,
      duration: 500,
      easing: Easing.inOut(Easing.linear),
    }).start();
  }, [progress, read]);

  useEffect(() => {
    const autoCloseId = setTimeout(() => {
      onRead(id);
    }, PERSIST_TIME);

    return () => {
      clearTimeout(autoCloseId);
    };
  }, [id, onRead]);

  const getMessageTypeStyle = () => {
    if (type === 'error') {
      return ToastStyles.message_box_error;
    }
    if (type === 'success') {
      return ToastStyles.message_box_success;
    }
    if (type === 'inform') {
      return ToastStyles.message_box_inform;
    }
  };

  return (
    <TouchFeedback onlyHaptic onPress={() => onRead(id)} activeOpacity={0.8}>
      <Animated.View
        pointerEvents={read ? 'none' : 'auto'}
        style={[
          styles.width('100%'),
          styles.justifyContent('center'),
          styles.alignItems('center'),
          getMessageTypeStyle(),
          {
            opacity,
            transform: [{ translateY }],
            height: BOX_MESSAGE_HEIGHT,
          },
        ]}
      >
        <SafeAreaView
          style={[
            styles.flex(),
            styles.width('100%'),
            styles.justifyContent('center'),
            styles.alignContent('center'),
          ]}
        >
          <Spacer space={12} />
          <Text
            style={[
              styles.text4(),
              styles.fontColor('white'),
              styles.fontAlign('center'),
            ]}
          >
            {message}
          </Text>
          <Spacer space={12} />
        </SafeAreaView>
      </Animated.View>
    </TouchFeedback>
  );
};

interface IToastProps {
  messages: IToastMessage[];
  onRead: (id: string) => void;
}

const Toast: React.FC<IToastProps> = ({ messages = [], onRead }) => {
  const { styles } = useStyles();
  const renderItem = useRef(
    useCallback(
      (message: IToastMessage) => {
        return (
          <ToastMessageBox key={message.id} {...message} onRead={onRead} />
        );
      },
      [onRead],
    ),
  ).current;

  return (
    <View
      style={[
        styles.absolute(),
        styles.left(0),
        styles.height(0),
        styles.screenWidth(),
        styles.zIndex(9),
      ]}
    >
      {messages.map(renderItem)}
    </View>
  );
};

export { Toast };
