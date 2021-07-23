import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from "./src/screens/Home";
import "react-native-gesture-handler";
import RootNavigation from "./src/navigation";
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native'


Amplify.configure(config);


function App() {


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar style="light" />
        <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default withAuthenticator(App)

