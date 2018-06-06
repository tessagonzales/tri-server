const knex = require('../db/knex')
let accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
let authToken = process.env.TWILIO_AUTH_TOKEN// Your Auth Token from www.twilio.com/console
let twilioNum = process.env.TWILIO_NUMBER

let twilio = require('twilio');
let client = new twilio(accountSid, authToken);


module.exports = {
    
    send: (req, res) => {
        knex.select('phone_num').from('favs')
            .then((result) => {
                let sent_ids=[]
                console.log(result)
                for(let i = 0; i<result.length; i++){
                    client.messages.create({
                        body: 'You suck',
                        to: result[i].phone_num,  // Text this number
                        from: twilioNum // From a valid Twilio number
                    })
                        .then((message) => sent_ids.push(message.sid));
                }
                res.send(sent_ids);
            })
    }

}