# Pull Requests Amigáveis e inteligentes com CI-CD, Actions e Qualidade de Software

![](https://i.pinimg.com/originals/2d/8e/e8/2d8ee815146390d567706f2c7b5c2916.gif)

## Sobre
Projeto feito para demonstração de Boas praticas para um Pull Request na palestra Pull Requests Amigáveis e inteligentes com CI-CD, Actions e Qualidade de Software da Octogatos Conf 2022.

Versão do NodeJs - v16.13.2

Versão do NPM - 8.10.0

## Passo a passo de como utilizar 💡


1. Para podermos utilizar precisaremos criar o arquivo .env dentro do nosso projeto, nele ficará a parte de variaveis de ambiente da nossa aplicação
2. Acesse o site https://cloud.mongodb.com/ e crie sua conta por lá
3. Acessando sua conta crie um novo projeto e deixe o nome TDC - Testes e em add membros deixe como está no caso ele vai deixar você seu usuario de cadastro como owner
4. depois de criar clique na aba Network Access e clicando nele clica em Add IP Address e seleciona ALLOW ACCESS FROM ANYWHERE e clica em confirm
5. depois de criar clique na aba clica em Add New Database User e em Password Authentication coloque um user e passwoard que desejar
6. Clica na aba de DataBase clica em Create e seleciona o banco share, e clica em confirm, ele demora um pouco para carregar mas logo ja estará criado seu banco
7. Clica em Connect e logo em seguida seleciona connect your application e nele você  receberá na parte Add your connection string into your application code a url do nosso banco, copia e cola isso dentro do seu env dessa maneira: MONGO=<suaURL>
8. no .env coloque tambem PORT=8080
9. antes de iniciar rode o npm i ou npm install
10. Para ver a API com o teste funcionando podemos rodar o comando npm run test

## Tecnologias usadas nesse projeto projeto 💻

- 🍃 [MongoDB](https://www.mongodb.com/pt-br)
- 💎 [NodeJS](https://nodejs.org/en/)
- 🤡 [Jest](https://jestjs.io/)
- 🦸🏾‍♀️ [Supertest](https://www.npmjs.com/package/supertest)
- 💌 [Postman](https://www.postman.com/)
- 🐱 [Github Actions](https://github.com/features/actions)
  
## Sobre como eu montei essa API e conceitos de Back-end 🦋

https://www.youtube.com/watch?v=mZh4Wd_Ijxk&t=1s

## Links importantes 💙

https://github.com/features/actions

https://resources.github.com/ci-cd/

https://www.morling.dev/blog/the-code-review-pyramid/

https://www.zup.com.br/blog/github-actions-ci-cd


