import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/Home";
import HomeBottomTabNavigator from "./homeBottomTabNavigator";

const Stack = createStackNavigator();


const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Something Cool" component={HomeBottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigation;
