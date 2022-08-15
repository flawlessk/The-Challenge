import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigator from "./RootNavigator";
import { View } from "react-native";

const Stack = createNativeStackNavigator();


const StackNavigator = () => {
    const DefaultNavigatoin = (
            <Stack.Screen name="RootNavigator" component={RootNavigator} options={{ headerShown: false }} />
    );

    return (
        <NavigationContainer>
            <Stack.Navigator>{DefaultNavigatoin}</Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;