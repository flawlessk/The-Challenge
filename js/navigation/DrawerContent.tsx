import React from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";
import DrawerSingleItem from "../components/DrawerSingleItem";
import styles from './DrawerContent.styles';

const drawerChildren = [
  { title: "Start", id: 1 },
  { title: "Your Cart", id: 2 },
  { title: "Favourites", id: 3 },
  { title: "Your Orders", id: 4 },
];

const DrawerContent = ({ style, onPress }) => (
  <Animated.View style={[styles.mainContainer, style]}>
    <Text style={styles.titleStyle}>Davit</Text>
    {drawerChildren.map(({ id, title }) => (
      <DrawerSingleItem
        key={id}
        onPress={onPress}
        title={title}
        active={id === 1}
      />
    ))}
    <View style={styles.separator} />
    <DrawerSingleItem active={false} onPress={() => {}} title={"Sign Out"} />
  </Animated.View>
);

export default DrawerContent;
