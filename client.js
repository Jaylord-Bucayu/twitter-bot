const {TwitterApi} = require('twitter-api-v2')
require('dotenv').config()

const twitterClient = new TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_SECRET,
    accessToken:process.env.ACCESS_TOKEN,
    accessSecret:process.env.ACCESS_SECRET,

}); 


const rwClient = twitterClient.readWrite;


module.exports = rwClient;
