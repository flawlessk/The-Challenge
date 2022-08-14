import React from 'react';
import HomeActive from '../images/bottomTabs/Home.svg';
import CalendarActive from '../images/bottomTabs/CalendarActive.svg';
import MarketPlaceActive from '../images/bottomTabs/MarketplaceActive.svg';
import ConversationActive from '../images/bottomTabs/Chats.svg';
import Home from '../images/bottomTabs/HomeActive.svg';
import Calendar from '../images/bottomTabs/Calendar.svg';
import MarketPlace from '../images/bottomTabs/Marketplace.svg';
import Conversation from '../images/bottomTabs/ChatsActive.svg';
import Members from '../images/bottomTabs/Members.svg';
import MembersActive from '../images/bottomTabs/MembersActive.svg';
import Room from '../images/icons/SettingsIcon.svg';
import RoomActive from '../images/bottomTabs/SettingsIconGreen.svg';



export const screens = {
    HomeStack: 'HomeStack',
    Calendar: 'Calendar',
    Service: 'Service',
    Conversation: 'Conversation',
    Members: 'Members',
    BookRoom: 'BookRoom'
  };
  export const routes = [
    {
      name: screens.HomeStack,
      focusedRoute: screens.HomeStack,
      title: 'Home',
      showInTab: true,
      showInDrawer: false,
      icon: focused =>
        focused ? (
          <HomeActive />
        ) : (
          <Home />
        ),
    },
    {
      name: screens.Calendar,
      focusedRoute: screens.Calendar,
      title: 'Calendar',
      showInTab: true,
      showInDrawer: false,
      icon: focused =>
        focused ? (
          <CalendarActive />
        ) : (
          <Calendar />
        ),
    },
    {
      name: screens.Service,
      focusedRoute: screens.Service,
      title: 'MARKETPLACE',
      showInTab: true,
      showInDrawer: false,
      icon: focused =>
        focused ? (
          <MarketPlaceActive />
        ) : (
          <MarketPlace />
        ),
    },
    {
      name: screens.Conversation,
      focusedRoute: screens.Conversation,
      title: 'Gallery',
      showInTab: true,
      showInDrawer: false,
      icon: focused =>
        focused ? (
          <ConversationActive />
        ) : (
          <Conversation />
        ),
    },
    {
      name: screens.Members,
      focusedRoute: screens.Members,
      title: 'Members',
      showInTab: true,
      showInDrawer: false,
      icon: focused =>
        focused ? (
          <Members />
        ) : (
          <MembersActive />
        ),
    },
    {
      name: screens.BookRoom,
      focusedRoute: screens.BookRoom,
      title: 'Settings',
      showInTab: true,
      showInDrawer: false,
      icon: focused =>
        focused ? (
          <RoomActive />
        ) : (
          <Room/>
        ),
    },
  ];
  