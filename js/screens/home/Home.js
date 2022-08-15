import React from "react";
import { Text, View } from "react-native";
import Wrapper from "../../common_components/wrapper/Wrapper";


const Home = () => {
    return (
        <View style={{
            marginHorizontal: 10, 
            backgroundColor: "#C5C5C5", 
            height: "100%", 
            marginTop: 40,
            borderTopLeftRadius: 15, 
            borderTopRightRadius: 15
            }}>
            <Wrapper />
            <View style={{
                marginVertical: 200, 
                marginHorizontal: 100
                }}>
                <Text>zdddd</Text>
            </View>
        </View>
    );
};

export default Home;