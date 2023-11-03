import jsonUtils
import sys
import logging as log

log.basicConfig(encoding='utf-8', level=log.INFO)



path = "../data/v1/carnaval.json"
repertoryObjt = jsonUtils.readJsonFile(path)

for music in repertoryObjt["musics"]:
    log.info(music["title"])
    try:
        music.pop("id")
    except:
        print("deu ruim...")
    
    try:
        music.pop("block")
    except:
        print("Deu ruim")
    title = music["title"].replace("\s", " ").strip().lower().replace(" ", "_")
    jsonUtils.writeJsonFile2(music, "exout/" + title + ".json")