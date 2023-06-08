import React, { useCallback } from "react";
import { StyleSheet, View, Dimensions} from "react-native";
import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Screen from "./js/navigation/Screen";
import DrawerContent from "./js/navigation/DrawerContent";

const { width, height } = Dimensions.get("window");

const config = {
  duration: 1000,
  easing: Easing.bezier(0.5, 0.01, 0, 1),
};

const App = () => {
  const drawerAnimation = useSharedValue(0);

  const onPress = useCallback(() => {
    drawerAnimation.value = 0;
  }, [drawerAnimation.value]);

  const transition = useDerivedValue(() =>
    withTiming(drawerAnimation.value, config)
  );

  const screenStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateZ: `${interpolate(transition.value, [0, 1], [0, -8])}deg` },
        { translateX: interpolate(transition.value, [0, 1], [0, width / 1.6]) },
        { translateY: interpolate(transition.value, [0, 1], [0, 100]) },
      ],
      borderRadius: interpolate(transition.value, [0, 1], [0, 40]),
    };
  });

  const drawerContentStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: interpolate(transition.value, [0, 1], [0, 50]) },
      ],
      borderTopLeftRadius: interpolate(transition.value, [0, 1], [0, 40]),
    };
  });

  return (
    <View style={styles.container}>
      <DrawerContent style={drawerContentStyle} onPress={onPress} />
      <Screen drawerAnimation={drawerAnimation} style={screenStyle} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
