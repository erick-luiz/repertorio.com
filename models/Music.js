const mongoose = require('mongoose')
const Schema = mongoose.Schema

let MusicSchema = new Schema({
    title:{type: String, require: true, max:100, unique: true}, 
    letra:{type: String, require: true}, 
    cifra: {type: String, require: true},
    singer: {type: String, require: false},
    style: {type: String, require: false},
    enabled: {type: Boolean, defaultPrevented: true},
    tom: {type: String}
})

module.exports = mongoose.model('Music', MusicSchema)