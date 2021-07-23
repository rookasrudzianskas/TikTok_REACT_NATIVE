import React from 'react';
import {View, Text, Image} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PlusIcon from "../../assets/images/plus-icon.png";

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            tabStyle: {
                backgroundColor: "#000",
            },
            activeTintColor: '#fff',
        }}>
            <Tab.Screen
                name={"Home"}
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }}
                component={Home} />
            <Tab.Screen
                name={"Search"}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name="search1" size={24} color={color} />                    )
                }}
                component={Home} />
            <Tab.Screen
                name={"Rokas"}
                options={{
                   tabBarIcon: ({color}) => (
                       <Image source={PlusIcon} style={{height: 30, resizeMode: 'contain'}} />
                   ),
                    tabBarLabel: () => null,
                }}
                component={Home} />
            <Tab.Screen
                name={"Messages"}
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="chat" size={24} color={color} />                    )
                }}
                component={Home} />


            <Tab.Screen
                name={"Profile"}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name="profile" size={24} color={color} />                    )
                }}
                component={Home} />
        </Tab.Navigator>
    );
};

export default HomeBottomTabNavigator;
