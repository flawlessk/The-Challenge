import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
import BurgerMenu from "../assets/burgerMenu.svg";
import styles from "./Screen.styles";

const Screen = ({ drawerAnimation, style }) => {
  return (
    <Animated.View style={[styles.container, style]}>
      <SafeAreaView style={styles.Wrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            drawerAnimation.value = +!drawerAnimation.value;
          }}
        >
          <BurgerMenu width={30} height={33} />
        </TouchableOpacity>
        <Text style={styles.text}>START</Text>
      </SafeAreaView>
    </Animated.View>
  );
};

export default Screen;
