
import React,{useState} from 'react';
import './TweetBox.css';
import {Avatar, Button} from '@material-ui/core';
import db from './firebase';
function TweetBox() {

    const[tweetMessage,setTweetMessage] = useState("");
    const[tweetImage, setTweetImage]= useState("");
    const sendTweet = (e) =>{
        e.preventDefault(); /*it will prevent refresh of page*/

        db.collection('posts').add({
            displayName:'Rahul',
            username: 'Dravid',
            verified: true,
            text: tweetMessage,
            image:tweetImage,
            avatar:"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"

        });
        setTweetMessage("");
        setTweetImage("");
    };


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>
                    <input onChange={(e)=>setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What is happening?" type="text"/>
                    
                </div>
                <input onChange={(e)=>setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__imageInput" placeholder="Enter image URL" type="text"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;