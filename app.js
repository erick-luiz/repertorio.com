const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

mongoose.Promise = global.Promise

app = express() 
// Configurando a aplicação 
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

// Rotas e Modelos 
const Music = require('./routes/Music.routes')

// Banco de dados
if(process.env.isPrd) {
    require('./config/db.config')
}else{
    require('./config/db.config.local')
}
let dev_db_url = "mongodb://" + dbuser + ":" + dbpassword + "@" + dbhost+"/" + dbname
let mongodb = process.env.MONGODB_URI || dev_db_url
mongoose.connect(mongodb)
mongoose.Promise = global.Promise

let db = mongoose.connection
db.on('error', console.error.bind(console, 'Mongo Connect error:'))
app.use('/musics', Music)

let port = process.env.PORT || 8080
app.listen(port, () => {console.log('Listen port:', port)})