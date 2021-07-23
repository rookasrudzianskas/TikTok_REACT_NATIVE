import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/Home";
import HomeBottomTabNavigator from "./homeBottomTabNavigator";
import CreatePost from "../screens/CreatePost";

const Stack = createStackNavigator();


const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Something Cool" component={HomeBottomTabNavigator} />
                <Stack.Screen name="CreatePost" component={CreatePost} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigation;
