const knex = require('../db/knex');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNum = process.env.TWILIO_NUMBER;

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

module.exports = {
    
    all: (req, res) => {

        knex.select('phone_num').from('favs')
            .then((result) => {
                console.log(result)
                // let promiseArr = []
                
                // for(let i = 0; i<result.length; i++){
                //     promiseArr.push(client.messages.create({
                //         body: `TRI-SOS USER has sent his/her location to all of their chosen contacts including your number. Immediate action required. Please contact USER as soon as possible. \n\n Last known location:\n ${req.body.addressRecieved} \n\n --From TRI-SOS. App not available for download. \n\n FYI - USER has been warned by TRI-SOS to dial emergency if situation is dangerous. \n\n\n DO NOT RESPOND TO THIS MESSAGE.`,
                //         to: result[i].phone_num,
                //         from: twilioNum 
                //     }))
                       
                // }
                // Promise.all(promiseArr).then((values)=>{
                //     res.json(values);
                // })
            })
    },

    selectedGreen: (req, res) => {
        knex.select('phone_num').from('favs').where('id', req.params.id)
            .then((result) => {
                console.log(result)
                // let promiseArr = []

                // for (let i = 0; i < result.length; i++) {
                //     promiseArr.push(client.messages.create({
                //         body: `TRI-SOS USER has sent his/her location to your number specifically. Action not required. USER is currently safe and checking in. \n\n Last known location: \n ${ req.body.addressRecieved } \n\n--From TRI-SOS. App not available for download. \n\n\n DO NOT RESPOND TO THIS MESSAGE.`,
                //         to: result[i].phone_num,
                //         from: twilioNum 
                //     }))

                // }
                // Promise.all(promiseArr).then((values) => {
                //     res.json(values);
                // })
            })
        },

    selectedYellow: (req, res) => {
        knex.select('phone_num').from('favs').where('id', req.params.id)
            .then((result) => {
                // console.log(result)
                // let promiseArr = []

                // for (let i = 0; i < result.length; i++) {
                //     promiseArr.push(client.messages.create({
                //         body: `TRI-SOS USER has sent his/her location to your number specifically. Immediate action not required, but a mild warning has been issued. USER may feel uncomfortable in a situation but does not feel threatened. USER is checking in and does not need any help until further notice. \n\n Last known location: \n ${req.body.addressRecieved} \n\n--From TRI-SOS. App not available for download. \n\n\n DO NOT RESPOND TO THIS MESSAGE.`,
                //         to: result[i].phone_num,
                //         from: twilioNum
                //     }))

                // }
                // Promise.all(promiseArr).then((values) => {
                //     res.json(values);
                // })
            })
    },

} // end export