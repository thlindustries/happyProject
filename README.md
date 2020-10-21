<h1 align="center">
    <img src="https://i.imgur.com/iSah0Cn.png" width="400"/>
</h1>

<h4 align="center"> 
	🚧 Happy 1.0 🚀 em construção... 🚧
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/thlindustries/happyProject">
  


  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/tgmarinho/nlw1/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/thlindustries/happyProject?style=social">
  </a>
</p>


## 💻 Sobre o projeto

📝 Happy - é um projeto proposto pela equipe da **RocketSeat** durante a terceira **NLW**, onde um aplicativo para facilitar o contato entre orfanatos e visitantes foi criado e desenvolvido ao longo da semana.
Neste aplicativo é possível verificar os orfantos próximos na região, verificar as informações sobre o orfanato tais como horário de funcionamento e instruções para visita, também é possível cadasstrar um orfanato com suas respectivas informações e fotos. 

Os usuários terão acesso ao aplicativo móvel, onde poderão:
- Ver os orfanatos próximos no mapa
- Ver as informações sobre o orfanato selecionado
- Entrar em contato com o orfanato via WhatsApp
- Traçar a rota até o orfanato
- Registrar um orfanato no mapa
- Enviar imagens do orfanato 

## 🎨 Layout

O layout **mobile** da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/Ie5hjSGybQcDzgwMPPISf2/Happy-Mobile-Copy?node-id=0%3A1">
  <img alt="Made by Thlindustries" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

## Mobile 

<p align="center">
  
  <img alt="Happy" title="#Happy" src="https://i.imgur.com/j9lNHGJ.jpg" width="220px">
  <img alt="Happy" title="#Happy" src="https://i.imgur.com/T4Usybf.jpg" width="220px">
  <img alt="Happy" title="#Happy" src="https://i.imgur.com/ddbg85G.jpg" width="220px">
  <h1>Veja uma demonstração em <strong>GIF</strong> neste 
    <a href="https://i.imgur.com/fzrCM3Y.gif" target="_blank">Link</a>
  </h1>
</p>

## 🎨 Layout

O layout **web** da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/jclIkJ80SQ8Xu36Grrp7Vw/Happy-Web-Copy">
  <img alt="Made by Thlindustries" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
  
</a>

## Web 

<p align="center">
  <img alt="Happy" title="#Happy" src="https://i.imgur.com/Ndc7pQP.png" width="720px">
</p>




## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]
- [TypeScript][typescript]


## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back End (pasta backend) 
2. Mobile (pasta mobile)
3. Web (pasta web)

💡Para o correto funcionamento do app mobile é necessário que o servidor backend esteja rodando.<br/>
💡Detalhe, é necessário também que exista um banco de dados postgres nomeado como happy na porta :5432<br/>
💡Após subir um banco de dados com o nome **happy** na porta **:5432** é necessário rodar o seguinte comando para que o banco seja configurado:<br/>
  - yarn typeorm migration:run
<br/>
<br/>
# 💡>>>>>>>>>>ATENÇÃO<<<<<<<<<<
- Se precisar mudar a porta do servidor, o arquivo está em *happyProject/backend/src/shared/infra/http/server.ts /*
- Lembre-se se mudar o **IP** do servidor em sua **API** tanto da aplicação **WEB** quanto **MOBILE**

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🎲 Rodando o **Back End (servidor)**

```bash
# Clone este repositório
$ git clone https://github.com/thlindustries/happyProject

# Acesse a pasta do projeto no terminal/cmd
$ cd happyProject

# Vá para a pasta server
$ cd backend

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```

### 📱Rodando a aplicação **MOBILE** 


```bash
# Instale o Aplicativo do EXPO em seu celular (Basta procurar na sua loja de aplicativos)

# Acesse a pasta do projeto mobile
$ cd mobile

# Instale as dependências
$ yarn

# Inicie o metro bundler do expo
$ yarn start

#Escaneie o QR Code com o APP do EXPO em seu CELULAR

```

### 📱Rodando a aplicação **WEB** 


```bash
# Acesse a pasta do projeto web
$ cd web

# Instale as dependências
$ yarn 

# Inicie o servidor 
$ yarn start

# Entre em > http://localhost:3000 <

```

## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -B my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)


## 👥 Contribuidores
- Thiago Lorente Kraetzer -> 
  <img alt="Made by Thlindustries" src="https://img.shields.io/github/followers/thlindustries?style=social">


## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Thiago Lorente Kraetzer 👋🏽 [Entre em contato!](https://www.linkedin.com/in/thiago-kraetzer/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br
[socketio]: https://socket.io/