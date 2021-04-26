# Projeto NLW 5 🚀

Este projeto utiliza o nodejs para criação da aplicação, SQLite como banco de dados e o protocolo WS (websocket) para a criação de um chat de suporte.

## Requisitos

- Node v10.19.0

- NPM 6.14.4

- yarn 1.22.5

- Visual studio code

## Como funciona

O chat utiliza o protocolo WS (websocket) para que ocorra uma comunicação bidirecional por canais full-duplex, pois ele permite que haja uma comunicção de cliente -> servidor/servidor -> cliente. São utilizados duas rotas, uma clint que se comunica com uma rota admin, na qual o usuário cadastra o seu email na rota client, que é requisitado na rota admin, assim as duas rotas conseguem conversar uma com a outra, utilizando o mesmo chat.

Aquitetura do projeto:
<p align="center"><img src="/img/chat.png"></p>

## Como executar

1. Reiniciar o processo do nó de destino, compartilhando o processo de compilação do typescript entre as reinicializações.

~~~nodejs
yarn add ts-node-dev -D
~~~

2. Inicializar e rodar a aplicação, é preciso entrar na pasta (projeto_nlw) e depois rodar o comando a baixo.

~~~nodejs
yarn dev
~~~


