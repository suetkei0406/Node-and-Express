let mongoose = require('mongoose')

//use mongoose to initilize the schema
let mongoSchema = mongoose.Schema

//use mongoSchema to create reference for 
//offers collection in mongodb

let offersSchema = new mongoSchema({
    "discountcode":String,
    "discountpercent":String
}, {collection:'offers'})

//export the model which is created above
module.exports = mongoose.model('offers', offersSchema )


