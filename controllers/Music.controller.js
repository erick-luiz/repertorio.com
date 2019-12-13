const Music = require('../models/Music')

if(process.env.isPrd) {
    require('../config/keys.config')
}else{
    require('../config/keys.config.local')
}


validateKey = (key) => {
    if(key != secretKey){
        res.status(500).send({
            error: 500, 
            message: "Chave de registro invalida!"
        })
        return;
    }
}

exports.create = (req, res, next) => {

    validateKey(req.body.key);
    
    const {title, letra, cifra, tom, singer, style}  = req.body.data

    let music = new Music({
        letra: letra, 
        cifra: cifra, 
        title: title,
        tom: tom, 
        singer: singer, 
        style: style
    })

    music.save((err, music)=>{
        
        if(err) res.status(500).send({
            error: 500, 
            message: "Music alray registered"
        })

       res.status(200).send(music) 
    })
}

exports.update = (req, res, next) => {

    let key = req.body.key
    if(key != secretKey){
        res.status(500).send({
            error: 500, 
            message: "Chave de registro invalida!"
        })
        return;
    }

    const id = req.params.musicId;
    const {title, letra, cifra, tom, singer, style}  = req.body.data;

    const newData = {letra: letra, title: title, cifra: cifra, tom: tom, singer: singer, style: style}

    Music.update({_id: id}, {$set: newData}, (err, music)=>{
        
        if(err) res.status(500).send({
            error: 500, 
            message: "erro ao atualizar a musica"
        })

       res.status(204).send() 
    });
}

exports.delete = (req, res, next) => {


    const id = req.params.musicId;
    const key = req.get("key");

    if(key != secretKey){
        res.status(500).send({
            error: 500, 
            message: "Chave de registro invalida!"
        })
        return;
    }


    Music.remove({_id: id}, (err, music)=>{
        
        if(err) res.status(500).send({
            error: 500, 
            message: "musica deletada com sucesso"
        })

        // music.remove();
       res.status(204).send() 
    });
}

exports.getMusics = (req, res) => {
    Music.find({}, (err, musics) => {
        res.send({"musics":musics})
    });
}

exports.getById = (req, res) => {

    const id = req.params.musicId;
    
    Music.find({_id: id}, (err, musics) => {
        res.send({"musics":musics})
    });
}



exports.teste = (req, res) => {
    res.send("Teste")
}