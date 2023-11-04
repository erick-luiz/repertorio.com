from reportlab.pdfgen import canvas
from model.Repertory import Repertory

chars_per_line = 80

def GeneratePDF(repertory: Repertory):

    nome_pdf = repertory.name
    pdf = canvas.Canvas(f'../data/pdf/{nome_pdf}.pdf')
    
    x = 720

    for block in repertory.blocks:
        musics = []

        if block.id % 24 == 0:
            x = 720
            pdf.showPage()
        for music in block.musics:
            if(len(musics) == 0 or len(musics[len(musics)-1]) + len(music.title) >= chars_per_line):
                musics.append(music.title)
            else:
                musics[len(musics)-1] += f" - {music.title}"
        
        first = True 
        for music in musics:
            y = 20 if first else 30
            idx = f"{block.id} - " if first else "" 
            pdf.drawString(y, x, f"{idx}{music}")
            x -= 20
            first = False

    pdf.setTitle(nome_pdf)
    pdf.setFont("Helvetica-Oblique", 14)
    pdf.save()
    print(f'{nome_pdf}.pdf criado com sucesso!')