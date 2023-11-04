# Repertório.com 

Este repositório se trata de um site criado com o intuito de organizar e disponibilizar uma página com as cifras (notas) de uma música pensando em conseguir apresentar mais de uma música em uma única página, pois normalmente em apresentações as músicas são tocadas em sequencia. 

Acesse o site: https://gpc-2.surge.sh/

# Scripts 

## generator.py 

Este script permiti gerar os arquivos de repertório no formato que é lido pelo front-end. Com ele é póssivel manter as músicas em arquivos separados, o que melhora a visilibilidade e manutenabilidade do projeto, e gerar o arquivo final por linha de comando.

para rodar o script voce precisa: 
``` python .\generator.py <nome_do_repertorio>```

por exemplo: 
``` python .\generator.py gpc ```

Esse script vai procurar na pasta `scripts/in/` o arquivo `gpc.json`.
no arquivo gpc.json estará contido o nome do repertório, id, e a lista de blocos. Para cada bloco temos uma sequencia de músicas (caminho do arquivo sem adicionar o formato). 

Depois de fazer a leitura de cada bloco e musica o arquivo final será criado com base na ordem informada no `/scripts/in/gpc.json`. 

A saída do script ficará em data/repertories. 

## repertory_list_generator 

Para que o front consiga acessar a lista de repertórios antes de carregar um deles existe um arquivo `repertories.json` dentro da pasta `data`. Este script varre a pasta `data/repertories` e cria o arquivo com a lista de repertórios ordenado pelo id. 

para usálo basta: 
``` python .\repertory_list_generator.py```

## pdf_generator 

O pdf generator é um script que vai ler o arquivo final do repertório, na pasta data/repertories e, baseado nessa leitura, vai criar um pdf na pasta data/pdf com a lista de músicas do repertório seguindo a mesma ordem do arquivo lido. 

Para usa-lo basta: 
``` python .\pdf_generator.py carnaval ```




# O que ele faz hoje?

Hoje o software apenas apresentas as canções disponibilizadas em um .json público armazenado neste mesmo repositório. 

# Tecnologias
1. HTML/CSS/Javascript
1. KnockoutJs (Lib com a mesma instensão dos famosos React, VUE e Angular) 
1. ~Java~ (em uma versão anterior existia um MS rodando para cadastro de musicas) 
1. ~Mongo~ (o primeiro banco de dados utilizado para esta solução foi o Mongo DB)
1. ~Heroku~ (nuvem utilizada para subir o MS, hoje desativado) 
1. ~mLab~ (nuvem com o banco de dados utilizado)
1. Surge (servidor de aplicações estaticas onde o front-end está rodando)

# Plano para o projeto

1. Adicionar a possibilidade de registro de usuários
1. Incluir um banco de dados (inicialmente gratuito) para poder fazer o registro sistematico de novas canções 
1. Criar um micro serviço para fazer o tratamento de músicas, repertórios e blocos
1. Inserir as funcionalidade de bloco (um conjunto de musicas que serão tocadas em sequência), a funcionalidade de cadastro do usuário e funcionalidade de lista de músicas/blocos.
