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
import {getUser} from "./src/graphql/queries";
import {createUser} from "./src/graphql/mutations";

Amplify.configure(config);


function App() {

  const randomImages = [
      "https://i.pinimg.com/280x280_RS/b3/e9/8a/b3e98a26c0aa5f92254b0a3c7aeaf022.jpg",
      "https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg",
      "https://pbs.twimg.com/profile_images/1128580749534347264/CgS0Ulff_400x400.jpg",
      "http://www.svietimonaujienos.lt/wp-content/uploads/2019/12/Rokas-e1575467263326.jpg",
      "https://i.vimeocdn.com/portrait/25404543_640x640",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2sB4UoYa6JpQBsyq7ltuP8P4b3eJK5o4v9w&usqp=CAU",
  ]

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }

  useEffect(() => {
    const fetchUser = async() => {
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});


      if(!userInfo) {
        return;
      }

      const getUserResponse = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));

      if(getUserResponse.data.getUser) {
        console.log("User already exists in the database 🚀");
        return;
      }

      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageUri: getRandomImage(),
      }


      // get currently authenticated user

      // check if the user exists in the database, if it does not, meaning it is newly registered user, then please create a new user in the database

      await API.graphql(graphqlOperation(createUser, {input: newUser}));
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

