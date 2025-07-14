import sys
from pytube import YouTube

if len(sys.argv) < 2:
    print("Uso: python baixar_youtube.py <URL do vídeo>")
    sys.exit(1)

url = sys.argv[1]
yt = YouTube(url)
stream = yt.streams.get_highest_resolution()
print(f"Baixando: {yt.title}")
stream.download()
print("Download concluído!")