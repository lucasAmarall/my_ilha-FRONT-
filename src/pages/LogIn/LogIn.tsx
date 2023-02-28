import React from 'react';
import { Modal, View } from 'react-native';
import { Image } from '../../components/Image/Image';
import { useStyles } from '../../hooks/theme/styles';
import { Input } from '../../components/Input/Input';
import { Spacer } from '../../components/Spacer/Spacer';
import { Form } from '../../components/Form/Form';
import { ExpanderSection } from '../../components/ExpanderSection/ExpanderSection';
import { assets } from '../../hooks/theme/assets';
import { Button } from '../../components/Button/Button';
import { useLoginContainer } from './LogIn.container';
import { useLogInAnimations } from './LogIn.animations';
import { Screen } from '../../components/Screen/Screen';
import { useNavigation } from '@react-navigation/native';
import { Paths } from '../../constants/Paths';
import { SignUp } from '../SignUp/SignUp';
import { TouchFeedback } from '../../components/TouchFeedback/TouchFeedback';
import { Toast } from '../../components/Toast/Toast';

const LogIn = () => {
  const { navigate } = useNavigation();
  const { styles } = useStyles();
  const {
    form,
    errors,
    updateFormValue,
    submit,
    isLoading,
    isDisabled,
    onSignUp,
    setOnSignUp,
    toast,
  } = useLoginContainer();

  const animations = useLogInAnimations({
    form: {
      email: errors.email,
      password: errors.email,
    },
  });

  return (
    <Screen toast={<Toast {...toast} />}>
      <View style={[styles.flex(1), styles.alignItems('center')]}>
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
        <Spacer space={72} />
        <Form onSubmit={submit} loading={isLoading} disabled={isDisabled}>
          <Input
            message="Email inválido"
            label="Email"
            value={form.email}
            onChange={email => updateFormValue({ email })}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            error={errors.email}
            bordersRadius={{
              bottomRight: animations.email.borderRadiusInput,
              bottomLeft: animations.email.borderRadiusInput,
            }}
          />
          <View style={styles.maxHeight(57)}>
            <ExpanderSection height={87} open={animations.password.showSection}>
              <View
                style={[
                  styles.width('100%'),
                  styles.borderTopWidth(1),
                  styles.borderColor('primary'),
                ]}
              />
              <Input
                error={errors.password}
                secureTextEntry
                label="Senha"
                message="Insira ao menos uma letra maiúscula"
                value={form.password}
                onChange={password => updateFormValue({ password })}
                autoCapitalize="none"
                bordersRadius={{
                  topLeft: 0,
                  topRight: 0,
                }}
                showMessage
              />
            </ExpanderSection>
          </View>
        </Form>
        <Spacer space={24} />
        <Button onPress={() => navigate(Paths.forgot_password)}>
          Esqueceu a senha?
        </Button>
      </View>
      <View style={[styles.alignItems('center')]}>
        <Button
          onPress={() => {
            setOnSignUp(true);
          }}
        >
          Criar conta
        </Button>
      </View>
      <Modal
        presentationStyle="formSheet"
        animationType="slide"
        visible={onSignUp}
        onRequestClose={() => setOnSignUp(false)}
      >
        <SignUp onClose={() => setOnSignUp(false)} toast={toast} />
      </Modal>
    </Screen>
  );
};

export { LogIn };
