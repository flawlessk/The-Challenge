import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import Rame from '../../../images/bottomTabs/Home.svg';

const TopBar = () => {
    const navigation = useNavigation();

    const OpenDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    }
    return (
        <TouchableOpacity onPress={OpenDrawer}>
            <Text>topbaria agi</Text>
            <Rame />
        </TouchableOpacity>
    );
};

export default TopBar;