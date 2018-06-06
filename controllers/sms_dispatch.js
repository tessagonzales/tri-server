const knex = require('../db/knex');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNum = process.env.TWILIO_NUMBER;

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

module.exports = {
    
    dispatchAll: (req, res) => {

        knex.select('phone_num').from('favs')
            .then((result) => {
                console.log(result)
                let promiseArr = []
                
                for(let i = 0; i<result.length; i++){
                    promiseArr.push(client.messages.create({
                        body: `Latitude: ${req.body.region.latitude}, \n Longitude: ${req.body.region.longitude}`,
                        to: result[i].phone_num,
                        from: twilioNum 
                    }))
                       
                }
                Promise.all(promiseArr).then((values)=>{
                    res.json(values);
                })
            })
    },

    // selectedDispatch: (req, res) => {
    //     knex.select('phone_num').from('favs').where('id', req.body.id)
    //         .then((result) => {
    //             console.log(result)
    //             let promiseArr = []

    //             for (let i = 0; i < result.length; i++) {
    //                 promiseArr.push(client.messages.create({
    //                     body: `Latitude: ${req.body.region.latitude}, \n Longitude: ${req.body.region.longitude}`,
    //                     to: result[i].phone_num,
    //                     from: twilioNum 
    //                 }))

    //             }
    //             Promise.all(promiseArr).then((values) => {
    //                 res.json(values);
    //             })
    //         })
    //     }

} // end export