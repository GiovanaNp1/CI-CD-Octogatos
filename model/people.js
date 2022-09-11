const mongoose = require('mongoose')

const PeopleSchema = mongoose.Schema({
    name:  String,
    gander: String,
    age: Number,
    eye_color: String,
    hair_color: String,
    mundo: String,
    familia: [String],
    image: String,

    // size: [{type: mongoose.Types.Decimal128}],
})

module.exports = mongoose.model('People', PeopleSchema)