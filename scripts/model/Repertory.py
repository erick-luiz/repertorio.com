class Repertory: 
    
    def __init__(self, id, name, blocks):
        self.name = name 
        self.id = id
        self.blocks = blocks
    
    def name(self):
        return self.name 

    def blocks(self):
        return self.blocks
    
    def id(self):
        return self.id 