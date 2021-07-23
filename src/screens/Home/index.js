import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Post from "../../components/Post";
import {API, graphqlOperation} from "aws-amplify";
import {listPosts} from "../../graphql/queries";



const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            // fetc h all the posts
            try {
                const response = await API.graphql(graphqlOperation(listPosts));
                setPosts(response.data.listPosts.items);
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
