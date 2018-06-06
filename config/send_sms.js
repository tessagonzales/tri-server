let accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
let authToken = process.env.TWILIO_AUTH_TOKEN// Your Auth Token from www.twilio.com/console
let twilioNum = process.env.TWILIO_NUMBER

let twilio = require('twilio');
let client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'You suck',
    to: '+16025001434',  // Text this number
    from: twilioNum // From a valid Twilio number
})
    .then((message) => console.log(message.sid));