import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components/Button/Button';
import { ExpanderSection } from '../../components/ExpanderSection/ExpanderSection';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { Screen } from '../../components/Screen/Screen';
import { Spacer } from '../../components/Spacer/Spacer';
import { Toast } from '../../components/Toast/Toast';
import { useStyles } from '../../hooks/theme/styles';
import { useSignUpAnimations } from './SignUp.animations';
import { useSignUpContainer } from './SignUp.container';

const SignUp = ({ onClose, toast }: { onClose: () => void; toast: any }) => {
  const { styles } = useStyles();
  const { form, errors, updateFormValue, submit, isLoading, isDisabled } =
    useSignUpContainer({ toast, onClose });

  const animations = useSignUpAnimations({
    form: {
      email: errors.email,
      password: errors.email,
    },
  });

  const onSubmit = () => {
    submit();
  };

  return (
    <Screen toast={<Toast {...toast} />}>
      <View style={[styles.flex(1), styles.alignItems('center')]}>
        <Spacer space={72} />
        <Text
          style={[
            styles.text1(),
            styles.fontColor('gray'),
            styles.fontAlign('center'),
            styles.paddingHorizontal(28),
          ]}
        >
          Por agora iremos precisar apenas do seu email favorito e de uma senha.
        </Text>
        <Spacer space={60} />
        <Form onSubmit={onSubmit} loading={isLoading} disabled={isDisabled}>
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
      </View>
      <View style={[styles.alignItems('center')]}>
        <Button onPress={onClose}>Voltar</Button>
      </View>
    </Screen>
  );
};

export { SignUp };
