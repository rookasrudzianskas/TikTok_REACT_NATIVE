import React, {useEffect} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Post from "../../components/Post";
import posts from "../../data/posts";



const Home = () => {

    useEffect(() => {
        const fetchPost = () => {
            // fetch all the posts

        }

        fetchPost();

    }, []);

    return (
        <View>
            <FlatList showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} data={posts} renderItem={({item}) => <Post post={item} />} snapToInterval={Dimensions.get('window').height -124} snapToAlignment={"start"} decelerationRate={"fast"}/>
        </View>
    )
}

export default Home;
