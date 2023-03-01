import React, { useEffect } from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { BottomNavigation } from '../components/BottomNavigation/BottomNavigation';
import { Paths } from '../constants/Paths';
import { Chat } from '../pages/Chat/Chat';
import { Discovery } from '../pages/Discovery/Discovery';
import { Inbox } from '../pages/Inbox/Inbox';
import { JoinIsland } from '../pages/Island/JoinIsland/JoinIsland';
import { Menu } from '../pages/Menu/Menu';
import { Profile } from '../pages/Profile/Profile';
import { UpdateTextFieldPage } from '../pages/UpdateTextFieldPage/EditTextFieldPage';
import { updateCurrentSpot } from '../store/ducks/CurrentSpotReducer/CurrentSpotReducer';
import { ApplicationState } from '../store/store';
import { useFirebase } from '../useFirebase';
const AppStack_ = createBottomTabNavigator();

const InboxStack_ = createNativeStackNavigator();
const ProfileStack_ = createNativeStackNavigator();

const InboxStack = () => (
  <InboxStack_.Navigator screenOptions={{ headerShown: false }}>
    <InboxStack_.Screen component={Inbox} name={Paths.inbox} />
    <InboxStack_.Screen component={Chat} name={Paths.chat} />
  </InboxStack_.Navigator>
);

const ProfileStack = () => (
  <ProfileStack_.Navigator screenOptions={{ headerShown: false }}>
    <ProfileStack_.Screen component={Profile} name={Paths.profile} />
    <ProfileStack_.Screen
      component={UpdateTextFieldPage}
      name={Paths.update_text_field}
    />
  </ProfileStack_.Navigator>
);

const AppStack = () => {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const { active_id } = useSelector(
    (state: ApplicationState) => state.spotsListReducer,
  );

  useEffect(() => {
    if (active_id) {
      firebase.syncSpot(active_id, spot => {
        dispatch(updateCurrentSpot(spot));
      });
    }
  }, [active_id, dispatch, firebase]);

  return (
    <AppStack_.Navigator
      tabBar={(props: BottomTabBarProps) => <BottomNavigation {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack_.Screen component={ProfileStack} name={Paths.profile_stack} />
      <AppStack_.Screen component={InboxStack} name={Paths.inbox_stack} />
      <AppStack_.Screen
        component={active_id ? Discovery : JoinIsland}
        name={Paths.discovery}
      />
      <AppStack_.Screen component={Menu} name={Paths.menu} />
    </AppStack_.Navigator>
  );
};

export { AppStack };
