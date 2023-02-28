import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components/Button/Button';
import { ExpanderSection } from '../../components/ExpanderSection/ExpanderSection';
import { Form } from '../../components/Form/Form';
import { Image } from '../../components/Image/Image';
import { Input } from '../../components/Input/Input';
import { Screen } from '../../components/Screen/Screen';
import { Spacer } from '../../components/Spacer/Spacer';
import { TouchFeedback } from '../../components/TouchFeedback/TouchFeedback';
import { assets } from '../../hooks/theme/assets';
import { useStyles } from '../../hooks/theme/styles';
import { useGoBack } from '../../hooks/useGoBack/useGoBack';
import { useForgotPasswordAnimations } from './ForgotPassword.animations';
import { useForgotPasswordContainer } from './ForgotPassword.container';
import { ForgotPasswordModal } from './ForgotPasswordModal/ForgotPasswordModal';

const ForgotPassword = () => {
  const { styles } = useStyles();
  const { goBack } = useGoBack();
  const { form, errors, updateFormValue, submit, isLoading, isDisabled } =
    useForgotPasswordContainer();

  const animations = useForgotPasswordAnimations({
    form: {
      code: errors.code,
      password: errors.code,
    },
  });

  const onSubmit = () => {
    submit();
  };

  return (
    <Screen>
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
        <Spacer space={32} />
        <Text
          style={[
            styles.text1(),
            styles.fontColor('gray'),
            styles.fontAlign('center'),
            styles.paddingHorizontal(28),
          ]}
        >
          Código enviado para seu email. confirme abaixo.
        </Text>
        <Spacer space={32} />
        <Form onSubmit={onSubmit} loading={isLoading} disabled={isDisabled}>
          <Input
            message="Código inválido"
            label={`Código - #${form.code.padEnd(6, '*')}`}
            value={form.code}
            onChange={code => updateFormValue({ code })}
            autoCapitalize="none"
            error={errors.code}
            bordersRadius={{
              bottomRight: animations.code.borderRadiusInput,
              bottomLeft: animations.code.borderRadiusInput,
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
                label="Nova Senha"
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
      </View>
      <View style={[styles.alignItems('center')]}>
        <Button onPress={goBack}>Voltar</Button>
      </View>
      <ForgotPasswordModal />
    </Screen>
  );
};

export { ForgotPassword };
