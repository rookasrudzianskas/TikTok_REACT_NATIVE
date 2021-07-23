import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from "./src/screens/Home";
import "react-native-gesture-handler";
import RootNavigation from "./src/navigation";

export default function App() {


  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style="auto" />
        <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
