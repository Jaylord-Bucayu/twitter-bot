const rwClient = require('./client')
const cronJob = require('cron').CronJob;

const axios = require('axios')

let random = Math.floor(Math.random() * 10);

function tweetQuote(){
    axios.get('https://zenquotes.io/api/quotes/').then((res)=>{
      const {q} =  res.data[random];

      
     
         tweet(q);
     
     })
}  










const tweet = async(quote)=> {

    try {
        await rwClient.v2.tweet(quote);
    } catch (error) {
           console.error(error)
    }
}

const job = new cronJob('* * * * *', ()=>{
    console.log('Job is running')
    try {
       tweetQuote();
    } catch (error) {
        console.log(error)
    }
})
job.start();

   

