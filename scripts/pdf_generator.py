import utils.jsonUtils as jsonUtils
import sys
import logging as log
import utils.PdfGeneratorUtils as pdf
from model.Music import Music
from model.Block import Block
from model.Repertory import Repertory 

log.basicConfig(encoding='utf-8', level=log.INFO)


log.info(" Verificando o nome de repertório informado")
if(len(sys.argv) < 2):
    log.error(" O nome de repertório não foi identificado na lista de parametros")
    exit(1)

repertoryName = sys.argv[1]
repertoryPath = f"../data/repertories/{repertoryName}.json"

repertory = jsonUtils.readJsonFile(repertoryPath)

blocks = []
for music in repertory["musics"]:
    finalBlock:Block = None
    for block in blocks:
        if(block.id == int(music["block"])):
            finalBlock = block 
            break
    if finalBlock is None:
        finalBlock = Block(music["block"], "name")
        blocks.append(finalBlock)

    finalBlock.addMusic(Music(music["id"], music["title"]))


pdf.GeneratePDF(Repertory(repertory["id"], repertory["name"], blocks))