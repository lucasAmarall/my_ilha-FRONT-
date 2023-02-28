import React from 'react';
import { Modal, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { Spacer } from '../../../components/Spacer/Spacer';
import { TouchFeedback } from '../../../components/TouchFeedback/TouchFeedback';
import { useStyles } from '../../../hooks/theme/styles';

const ReaderModal: React.FC<IReaderModalProps> = ({
  isOpen,
  onClose,
  onSuccess: _onSuccess,
}) => {
  const { styles } = useStyles();

  const onSuccess = e => {
    onClose();
    _onSuccess(e.data);
  };

  return (
    <Modal visible={isOpen} animationType="slide" presentationStyle="pageSheet">
      <Screen>
        <View
          style={[
            styles.flex(),
            styles.alignItems('center'),
            styles.justifyContent('space-between'),
          ]}
        >
          <View style={[styles.alignItems('center')]}>
            <Spacer space={60} />
            <TouchFeedback>
              <View
                style={[
                  styles.width(280),
                  styles.height(280),
                  styles.marginBottom(70),
                  styles.borderRadius(32),
                  styles.bgColor('light_gray'),
                ]}
              >
                <QRCodeScanner
                  onRead={onSuccess}
                  fadeIn
                  cameraStyle={[
                    styles.width(260),
                    styles.height(260),
                    styles.marginHorizontal(10),
                    styles.marginVertical(10),
                    styles.borderRadius(17),
                    styles.overflowHidden(),
                  ]}
                  flashMode={RNCamera.Constants.FlashMode.off}
                />
              </View>
            </TouchFeedback>
            <Text
              style={[
                styles.text3(),
                styles.fontColor('primary'),
                styles.fontAlign('center'),
              ]}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              quisquam sequi consequuntur sapiente neque, in ut expedita sit
              eaque nam animi minus deleniti, perferendis ex odit nisi inventore
              nobis rerum.
            </Text>
          </View>
          <Button onPress={onClose} variant="button">
            Fechar
          </Button>
        </View>
      </Screen>
    </Modal>
  );
};

export { ReaderModal };
