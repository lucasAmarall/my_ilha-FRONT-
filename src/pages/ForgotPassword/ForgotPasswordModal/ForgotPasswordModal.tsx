import React from 'react';
import { Modal, Text, View } from 'react-native';
import { Button } from '../../../components/Button/Button';
import { Form } from '../../../components/Form/Form';
import { Image } from '../../../components/Image/Image';
import { Input } from '../../../components/Input/Input';
import { Screen } from '../../../components/Screen/Screen';
import { Spacer } from '../../../components/Spacer/Spacer';
import { TouchFeedback } from '../../../components/TouchFeedback/TouchFeedback';
import { assets } from '../../../hooks/theme/assets';
import { useStyles } from '../../../hooks/theme/styles';
import { useGoBack } from '../../../hooks/useGoBack/useGoBack';
import { useForgotPasswordModalContainer } from './ForgotPasswordModal.container';

const ForgotPasswordModal = () => {
  const { styles } = useStyles();
  const { goBack } = useGoBack();
  const {
    email,
    setEmail,
    hasError,
    disabled,
    errorMessage,
    loading,
    submit,
    isVisible,
  } = useForgotPasswordModalContainer();

  return (
    <Modal
      visible={isVisible}
      presentationStyle="formSheet"
      animationType="slide"
    >
      <Screen>
        <View style={[styles.flex(1), styles.alignItems('center')]}>
          <Spacer space={72} />
          <View style={[styles.boxShadow('primary')]}>
            <TouchFeedback>
              <Image
                source={assets.logo}
                style={[
                  styles.width(130),
                  styles.height(130),
                  styles.borderColor('primary'),
                  styles.borderRadius(32),
                  styles.boxShadow('primary'),
                ]}
              />
            </TouchFeedback>
          </View>
          <Spacer space={32} />
          <Text
            style={[
              styles.text1(),
              styles.fontColor('gray'),
              styles.fontAlign('center'),
              styles.paddingHorizontal(28),
            ]}
          >
            Informe o email da conta que deseja recuperar
          </Text>
          <Spacer space={32} />
          <Form disabled={disabled} loading={loading} onSubmit={submit}>
            <Input
              message={errorMessage}
              label="Email"
              value={email}
              onChange={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              error={hasError}
            />
          </Form>
        </View>
        <View style={[styles.alignItems('center')]}>
          <Button onPress={goBack}>Voltar</Button>
        </View>
      </Screen>
    </Modal>
  );
};

export { ForgotPasswordModal };
