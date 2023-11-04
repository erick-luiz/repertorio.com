import model.Music as Music

class Block():

    def __init__(self, id, name):
        self.id = id
        self.name = name
        self.musics = []

    def addMusic(self, music: Music):
        self.musics.append(music)
    
    def musics(self):
        return self.musics
    
    def id(self):
        return self.id