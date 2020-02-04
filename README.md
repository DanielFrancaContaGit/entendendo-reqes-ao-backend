# entendendo reqesções ao back-end


Criei esse repositorio com a inteção de entender um pouco mais sobre como o fornt-end se comunica com o back-end, para isso criei uma aplicação simples que faz reguisições com os metodos get e post.

 #### Para instalar as dependencias do projeto entre na pasta client e no terminal use o comando:

```
 npm i 
```

Depois entre na pasta server e tambem use o mesmo comando a cima.

#### Para rodar o back-end entre na pasta server e você vai ter duas opções se você ainda não tiver o nodemon instalado globalment você pode usar o seguinte comando para instalalo globalmente:

```
npm i -g nodemon 
```
E depis use o seguinte comando para inicialisar o server(back-end):

```
nodemon index.js
```

Pronto o back-end ja esta funcionando mas se voce não quiser instalar o nodemon na sua maquina tambem é posivel inicialisar o server com o seguinte comando:

```
node index.js
```
Esse comando tem uma desvantagem que é ele não atualisa as modificações realiasados no server por causa disso usar o nodemon é mais comodo.


#### Para iniciar o client basta apenas entrar na pasta client e usar o comando:

```
npm start
```
### Show agora que o projeto ja esta rodando podemos expicar como a magica acontece 

1. É preciso entender que o front-end e o back-end se comunicão atraves de um protocolo de comunicação que é conhecido como protocolo http esse protocolo é o que dita as regras de como a comunicação entre back e front acontece 

- [click aqui para saber um pouco mais sobre os metodos http](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)
- [click aqui para saber um pouco mais sobre o protocolo http](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)

2. A segunda coisa que é preciso entender é as bibliotecas ```axios```, ```cors```, ```express``` são essas bibliotecas que permitem usarmos os metodos http em um projeto node e react com mais facilidade 

- A bibliote [axios](https://github.com/axios/axios) usamos ela no front-end para faser requisisoes a alguma api.

```
import axios from 'axios';

const usandoGet = async () =>{
    const res = await axios.get('http://localhost:3001/');
    alert(res.data);
  }
```
- A biblioteca [express](https://github.com/expressjs/express) é usada no back-end pra iformar o que ele deve faser quando receber alguma requisição http.

```
const express = require('express');
const app = express();

app.get('/', ( req, res ) => {
  res.send('você usou um get');
});

app.post('/',(req,res) => {
  res.send('você usou um post');
});

app.listen(3001);
```
- E o [cors](https://github.com/expressjs/cors) é usado pra que a sua api seja usada por algum endereço expecifico ou não.


```
const cors = require('cors');

app.use(cors());

```

### links para as bibliotecas:

- [axios](https://github.com/axios/axios)
- [express](https://github.com/expressjs/express)
- [cors](https://github.com/expressjs/cors)
