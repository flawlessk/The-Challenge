import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet, View } from 'react-native';
import { routes, screens } from './routes';
import Home from '../screens/home/Home';
import Calendar from '../screens/calendar/Calendar';
import Gallery from '../screens/gallery/Gallery';
import Members from '../screens/members/Members';
import Settings from '../screens/settings/Settings';

const Tab = createBottomTabNavigator();

const tabOptions = ({ route }) => {
  const item = routes.find(routeItem => routeItem.name === route.name);

  if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,

      tabBarStyle: styles.tabContainer,
      title: item.title,
    };
  }

  return {
    tabBarIcon: ({ focused }) => item.icon(focused),
    tabBarLabel: () => <Text style={styles.tabBarLabel}>{`${item.title}` || ''}</Text>,
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
  };
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions} >
      <Tab.Screen name={screens.HomeStack} component={Home} />
      <Tab.Screen name={screens.Calendar} component={Calendar} />
      <Tab.Screen name={screens.Conversation} component={Gallery} />
      <Tab.Screen name={screens.Members} component={Members} />
      <Tab.Screen name={screens.BookRoom} component={Settings} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
  tabContainer: {
    height: 100,
    marginBottom: 0,
  },
});
