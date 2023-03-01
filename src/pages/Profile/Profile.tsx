import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Image } from '../../components/Image/Image';
import { Screen } from '../../components/Screen/Screen';
import { SectionLink } from '../../components/SectionLink/SectionLink';
import { Spacer } from '../../components/Spacer/Spacer';
import { TouchFeedback } from '../../components/TouchFeedback/TouchFeedback';
import { Paths } from '../../constants/Paths';
import { useStyles } from '../../hooks/theme/styles';

const Profile = () => {
  const { styles } = useStyles();
  const navigation = useNavigation();
  return (
    <Screen>
      <ScrollView
        style={[styles.flex(), { overflow: 'visible' }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.text6(), styles.fontColor('primary')]}>
          Perfil
        </Text>
        <Spacer space={32} />
        <TouchFeedback onPress={() => navigate(Paths.chat)}>
          <View
            style={[
              styles.width('100%'),
              styles.paddingLeft(styles.containerPadding().paddingHorizontal),
            ]}
          >
            <View style={[styles.row()]}>
              <Image
                style={[
                  styles.width(70),
                  styles.height(70),
                  styles.borderRadius(60),
                ]}
                source={{
                  uri: 'https://xsgames.co/randomusers/avatar.php?g=female&0=998',
                }}
              />
              <Spacer space={12} vertical />
              <View
                style={[
                  styles.flex(),
                  styles.height('100%'),
                  styles.marginLeft(6),
                ]}
              >
                <Text style={[styles.text4(), styles.fontColor('primary')]}>
                  Lucas Amaral
                </Text>
                <Spacer space={6} />
                <Text style={[styles.text4(), styles.fontColor('gray')]}>
                  #SBT_TV
                </Text>
                <Spacer space={12} />
              </View>
            </View>
            <Spacer space={12} />
          </View>
        </TouchFeedback>
        <Spacer space={24} />

        <View style={[styles.width('100%'), styles.row()]}>
          <View
            style={[
              styles.flex(),
              styles.borderRadius(12),
              styles.padding(12),
              styles.bgColor('purple'),
            ]}
          >
            <Text
              style={[
                styles.text4(),
                styles.fontColor('white'),
                styles.marginBottom(12),
              ]}
            >
              Eventos
            </Text>
            <Text style={[styles.text6(), styles.fontColor('white')]}>
              1.989.344
            </Text>
          </View>
          <Spacer space={16} vertical />
          <View
            style={[
              styles.flex(),
              styles.borderRadius(12),
              styles.padding(12),
              styles.bgColor('pink'),
            ]}
          >
            <Text
              style={[
                styles.text7(),
                styles.fontColor('white'),
                styles.marginBottom(12),
              ]}
            >
              Taxa de match
            </Text>
            <Text style={[styles.text6(), styles.fontColor('white')]}>60%</Text>
          </View>
        </View>
        <Spacer space={16} />
        <View style={[styles.boxShadow('primary')]}>
          <Text style={[styles.text4()]}>Informações Pessoais</Text>
          <Spacer space={12} />
          <View style={[styles.borderRadius(12), styles.overflowHidden()]}>
            <SectionLink
              onPress={() =>
                navigation.navigate(Paths.update_text_field, {
                  key: Math.random(),
                })
              }
              bgColor="tertiary"
              label="User"
              value="SBT_TV"
            />
            <SectionLink
              onPress={() =>
                navigation.navigate(Paths.update_text_field, {
                  key: Math.random(),
                })
              }
              bgColor="tertiary"
              label="Nome"
              value="Lucas Fickel do Amaral"
            />
            <SectionLink
              onPress={() =>
                navigation.navigate(Paths.update_text_field, {
                  key: Math.random(),
                })
              }
              bgColor="tertiary"
              label="Biografia"
              value="Lorem ipsumd dolor at..."
            />
            <SectionLink
              onPress={() =>
                navigation.navigate(Paths.update_text_field, {
                  key: Math.random(),
                })
              }
              bgColor="tertiary"
              label="Idade"
              value="21"
            />
            <SectionLink
              onPress={() =>
                navigation.navigate(Paths.update_text_field, {
                  key: Math.random(),
                })
              }
              bgColor="tertiary"
              label="Telefone"
              value="55 (53) 98433-5217"
            />
            <SectionLink
              onPress={() =>
                navigation.navigate(Paths.update_text_field, {
                  key: Math.random(),
                })
              }
              bgColor="tertiary"
              label="Galeria"
              value="Editar"
            />
          </View>
        </View>
        <Spacer space={24} />
        <View style={[styles.boxShadow('primary')]}>
          <Text style={[styles.text4()]}>Informações Sociais</Text>
          <Spacer space={12} />
          <View style={[styles.borderRadius(12), styles.overflowHidden()]}>
            <SectionLink
              onPress={() =>
                navigation.navigate(Paths.update_text_field, {
                  key: Math.random(),
                })
              }
              bgColor="tertiary"
              label="Instagram"
              value="@lucas.js"
            />
            <SectionLink
              onPress={() =>
                navigation.navigate(Paths.update_text_field, {
                  key: Math.random(),
                })
              }
              bgColor="tertiary"
              label="Twitter"
              value="@SBT_TV"
            />
            <SectionLink
              onPress={() =>
                navigation.navigate(Paths.update_text_field, {
                  key: Math.random(),
                })
              }
              bgColor="tertiary"
              label="Tiktok"
              value="@SBT_TV"
            />
            <SectionLink
              onPress={() =>
                navigation.navigate(Paths.update_text_field, {
                  key: Math.random(),
                })
              }
              bgColor="tertiary"
              label="Website"
              value="@SBT_TV"
            />
          </View>
        </View>
        <Spacer space={24} />
        <View style={[styles.boxShadow('primary')]}>
          <Text style={[styles.text4()]}>Informações Da Conta</Text>
          <Spacer space={12} />
          <View style={[styles.borderRadius(12), styles.overflowHidden()]}>
            <SectionLink
              onPress={() =>
                navigation.navigate(Paths.update_text_field, {
                  key: Math.random(),
                })
              }
              bgColor="tertiary"
              label="Password"
              value="***********"
            />
          </View>
        </View>
        <Spacer space={100} />
      </ScrollView>
    </Screen>
  );
};

export { Profile };
