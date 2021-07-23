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
                <Stack.Screen name="Home" component={HomeBottomTabNavigator} />
                <Stack.Screen options={{headerShown: true}} name="Post" component={CreatePost} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigation;
