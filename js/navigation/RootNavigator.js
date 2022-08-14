import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./DrawerNavigator";


const RootNavigator = () => {
    const RootStack = createNativeStackNavigator();

    return (
        <RootStack.Navigator initialRouteName={'DrawerNavigator'} screenOptions={{ headerShown: false}}>
            <RootStack.Screen name="DrawerNavigator" component={DrawerNavigator} />
            {/* <RootStack.Screen name="GlobalNavigator" component={GlobalNavigator} /> */}
        </RootStack.Navigator>
    );
};

export default RootNavigator;