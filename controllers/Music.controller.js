const Music = require('../models/Music')

if(process.env.isPrd) {
    require('../config/keys.config')
}else{
    require('../config/keys.config.local')
}

exports.create = (req, res, next) => {

    let key = req.body.key
    if(key != secretKey){
        res.status(500).send({
            error: 500, 
            message: "Chave de registro invalida!"
        })
        return;
    }

    const {title, letra, cifra}  = req.body.data

    let music = new Music({
        letra: letra, 
        cifra: cifra, 
        title: title
    })

    music.save((err, music)=>{
        
        if(err) res.status(500).send({
            error: 500, 
            message: "Music alray registered"
        })

       res.status(200).send(music) 
    })
}

exports.getMusics = (req, res) => {
    Music.find({}, (err, musics) => {
        res.send({"musics":musics})
    });
}