# Repertório.com 

Este repositório se trata de um site criado com o intuito de organizar e disponibilizar uma página com as cifras (notas) de uma música pensando em conseguir apresentar mais de uma música em uma única página, pois normalmente em apresentações as músicas são tocadas em sequencia. 

Acesse o site: https://gpc-repertorio.surge.sh/

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
