import React from 'react';
import {View, Text} from 'react-native';
import Post from "../../components/Post";


const post = {
    id: 'p1',
    videoUri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
    user: {
        id: 'u1',
        username: 'rookas',
        imageUri: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
    },
    description: 'hahahah oh boy @rookas',
    songName: 'NF - The search',
    songImage: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
    likes: 123,
    comments: 12,
    shares: 44,
}

const Home = () => {
    return (
        <View>
            <Post post={post} />
        </View>
    )
}

export default Home;
