const {TwitterApi} = require('twitter-api-v2')


const twitterClient = new TwitterApi({
    appKey: 'cvSBn39fnZhcUVxHWqLAGJRHN',
    appSecret: 'YSqppe7vbB0TmDB1Zo38IW7vXIiyG2pYEG4d7o5XWs33VvgF9z',
    accessToken:'935627956960952320-QOvRR1QTQOmPlbWNfdzbZptYTgx1GJ7',
    accessSecret:'y1rppEivsLZIefG92dXO9OwoxslCdsnEt6ImdXgHwZCqO',

}); 


const rwClient = twitterClient.readWrite;


module.exports = rwClient;
