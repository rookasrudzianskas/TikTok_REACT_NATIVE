import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from "./src/screens/Home";
import "react-native-gesture-handler";

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
