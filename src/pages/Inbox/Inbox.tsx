import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Screen } from '../../components/Screen/Screen';
import { Spacer } from '../../components/Spacer/Spacer';
import { useStyles } from '../../hooks/theme/styles';
import { useFirebase } from '../../useFirebase';
import { ChatItem } from './ChatItem/ChatItem';
import { MatchItem } from './MatchItem/MatchItem';

const Inbox = () => {
  const { styles } = useStyles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const { navigate } = useNavigation();
  const [chats, setChats] = useState([...new Array(20)].map((_, i) => i));

  const firebase = useFirebase();

  // useEffect(async () => {
  //   const k = await child(firebase.chatsDataBaseRef, 'LKASJDLJAS');
  //   console.log(k);
  // }, []);

  const headerComponent = useCallback(() => {
    return (
      <View style={[styles.containerPadding()]}>
        <Text style={[styles.text6(), styles.fontColor('primary')]}>
          Matches
        </Text>
        <Spacer space={16} />
        <View style={[styles.overflowHidden(), styles.borderRadius(12)]}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={chats}
            renderItem={({ item }) => <MatchItem i={item + chats.length} />}
          />
        </View>
        <Spacer space={24} />
        <Text style={[styles.text6(), styles.fontColor('primary')]}>
          Mensagens
        </Text>
        <Spacer space={16} />
      </View>
    );
  }, [chats, styles]);

  const renderItem = useCallback(({ item }: { item: any }) => {
    return <ChatItem item={item} />;
  }, []);

  return (
    <Screen>
      <View style={[styles.antiContainer(), styles.flex()]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={chats}
          ListHeaderComponent={headerComponent}
          renderItem={renderItem}
          ListFooterComponent={<Spacer space={130} />}
        />
      </View>
    </Screen>
  );
};

export { Inbox };
