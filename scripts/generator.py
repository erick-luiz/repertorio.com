import scripts.utils.jsonUtils as jsonUtils
import sys
import logging as log
log.basicConfig(encoding='utf-8', level=log.INFO)


log.info(" Verificando o nome de repertório informado")
if(len(sys.argv) < 2):
    log.error(" O nome de repertório não foi identificado na lista de parametros")
    exit(1)


repertoryName = sys.argv[1]
repertoryPath = f"in/{repertoryName}.json"
log.info(f" Lendo o Arquivo {repertoryPath} ")
repertoryObjt = jsonUtils.readJsonFile(repertoryPath)

log.info(f" Gerando o repertório {repertoryObjt["name"]} ")
repertory = { "name":repertoryObjt["name"], "id": repertoryObjt["id"], "musics": [] }

# Criando os blocos e musicas dos blocos para o repertorio informado 
blockId = 1
musicId = 1
for block in repertoryObjt["blocks"]:
    for musicPath in block['musics']:
        music = jsonUtils.readJsonFile("musics/" + musicPath + ".json")
        music["block"] = blockId
        music["id"] = musicId
        musicId = musicId + 1
        repertory["musics"].append(music)
    blockId = blockId + 1

log.info(f" Objeto final gerado com um total de {blockId - 1} blocos e {musicId - 1} musicas")

outputFilePath = f"../data/repertories/{repertoryName}.json"
log.info(f" Gerando o arquivo final como {outputFilePath}")
jsonUtils.writeJsonFile(repertory, outputFilePath)

log.info(" Arquivo gerado com sucesso!")

