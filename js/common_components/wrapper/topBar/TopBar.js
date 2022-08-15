import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import SidemenuIcon from '../../../images/svgs/sidemenu.svg';
import BellIcon from '../../../images/notification.png';


const TopBar = () => {
    const navigation = useNavigation();

    const OpenDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    }
    return (
        <View style={{
            marginLeft: 10,
            display: "flex", 
            flexDirection: 'row', 
            width: '100%', 
            justifyContent: 'space-between',
            alignItems: "center"
            }}>
            <TouchableOpacity onPress={OpenDrawer}>
                <SidemenuIcon />
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 15}}>
                <Image source={BellIcon} width="20" />
            </TouchableOpacity>
        </View>
    );
};

export default TopBar;