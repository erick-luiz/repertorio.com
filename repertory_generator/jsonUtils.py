import json

def readJsonFile(file_path):
    try:
        with open(file_path, encoding='utf-8') as my_json:
            object = json.load(my_json)
        return object
    except (FileNotFoundError): 
        print(f"ERROR: Não foi possivel ler o arquivo {file_path}")
        exit(1)

def writeJsonFile(object, file_path): 
    try:
        json_object = json.dumps(object, indent = 4, ensure_ascii=False) 
        with open(file_path,  encoding='utf-8', mode="w") as outfile: 
            outfile.write(json_object) 
    except (FileNotFoundError):
        print(f"ERROR: Não foi possivel ler o arquivo {file_path}")
        exit(1)

def writeJsonFile2(object, file_path): 
    try:
        json_object = json.dumps(object, indent = 4, ensure_ascii=False) 
        with open(file_path,  encoding='utf-8', mode="w") as outfile: 
            outfile.write(json_object) 
    except (FileNotFoundError):
        print(f"ERROR: Não foi possivel ler o arquivo {file_path}")