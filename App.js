import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from "./src/screens/Home";
import "react-native-gesture-handler";
import RootNavigation from "./src/navigation";
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native'
import {Auth, API, graphqlOperation} from "aws-amplify";

Amplify.configure(config);


function App() {

  useEffect(() => {
    const fetchUser = async() => {
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      // get currently authenticated user

      // check if the user exists in the database, if it does not, meaning it is newly registered user, then please create a new user in the database

    }

    fetchUser();
  }, []);


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

