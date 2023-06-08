import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './DrawerSingleItem.styles';

type DrawerItemPropsType = {
  active: boolean;
  title: string;
  onPress: () => void;
};

const DrawerSingleItem = ({ active, title, onPress }: DrawerItemPropsType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, active ? styles.activeContainer : null]}
    >
      <Text style={[styles.title, active ? styles.activeTitle : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerSingleItem;
