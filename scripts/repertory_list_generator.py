from os import walk
from scripts.utils.jsonUtils import readJsonFile, writeJsonFile

PATH = "https://raw.githubusercontent.com/erick-luiz/repertorio.com/main/data/repertories/"

repertoriesPath = "../data/repertories"
filenames = next(walk(repertoriesPath), (None, None, []))[2]  # [] if no file

print(filenames)

output = []
for repertoryName in filenames:
    repertory = readJsonFile(f"../data/repertories/{repertoryName}")
    rOutput = {
        "name": repertory["name"],
        "id": repertory["id"],
        "link": f"{PATH}{repertoryName}"
    }
    output.append(rOutput)


def getId(repertory):
  return repertory["id"]

output.sort(key=getId)

writeJsonFile(output, "../data/repertories.json")


