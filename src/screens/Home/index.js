import React, {useEffect} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Post from "../../components/Post";
import posts from "../../data/posts";
import {API, graphqlOperation} from "aws-amplify";
import {listPosts} from "../../graphql/queries";



const Home = () => {

    useEffect(() => {
        const fetchPost = async () => {
            // fetc h all the posts
            try {
                const response = await API.graphql(graphqlOperation(listPosts));
                console.log(response);
            } catch (e) {
                console.log(e);
            }
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
