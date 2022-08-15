import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {BottomTabNavigator} from "./BottomTabNavigator";
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import CloseX from '../images/close.png';


const Drawer = createDrawerNavigator();
const { width, height } = Dimensions.get('window');

const DrawerNavigator = () => {
    const navigation = useNavigation();

    const CloseDrawer = () => {
        navigation.dispatch(DrawerActions.closeDrawer());
    };

    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                headerShown: false,
                headerStyle: {
                    height: 150,
                    
                },
                drawerStyle: {
                    width: width
                },
            })}
            drawerContent={props => 
                <TouchableOpacity style={{
                    marginVertical: 60, 
                    marginHorizontal: 20,
                    }}  
                    {...props}
                    onPress={CloseDrawer} 
                >
                    <Image style={{position: "absolute", right: 0, width: 20}} source={CloseX} />
                </TouchableOpacity>}
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