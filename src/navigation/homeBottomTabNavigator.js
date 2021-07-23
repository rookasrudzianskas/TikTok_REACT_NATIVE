import React from 'react';
import {View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Home"} component={Home} />
            <Tab.Screen name={"Search"} component={Home} />
            <Tab.Screen name={"Upload"} component={Home} />
            <Tab.Screen name={"Messages"} component={Home} />
            <Tab.Screen name={"Inbox"} component={Home} />
            <Tab.Screen name={"Profile"} component={Home} />
        </Tab.Navigator>
    );
};

export default HomeBottomTabNavigator;
