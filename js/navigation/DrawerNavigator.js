import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {BottomTabNavigator} from "./BottomTabNavigator";
import { Text, View } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                headerShown: false,
                headerStyle: {
                    height: 150,
                    
                },
                drawerStyle: {
                    width: '100%'
                },
            })}
            drawerContent={props => 
                <View style={{marginVertical: 100, marginHorizontal: 20}}  {...props} >
                    <Text>awdawdwadaw</Text>
                    <Text>awdawdwadaw</Text>
                    <Text>awdawdwadaw</Text>
                    <Text>awdawdwadaw</Text>
                    <Text>awdawdwadaw</Text>
                    <Text>awdawdwadaw</Text>
                    <Text>awdawdwadaw</Text>
                </View>}
        >
            <Drawer.Screen 
                name={'TabsNavigator'}
                component={BottomTabNavigator}
                options={{
                    title: "Home"
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;