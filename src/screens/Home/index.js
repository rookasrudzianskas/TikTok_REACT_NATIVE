import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Post from "../../components/Post";
import posts from "../../data/posts";



const Home = () => {
    return (
        <View>
            <FlatList data={posts}  />
        </View>
    )
}

export default Home;
