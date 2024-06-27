Axios é uma biblioteca JavaScript popular para fazer requisições HTTP tanto em navegadores quanto em ambientes Node.js. Ela fornece uma interface simples e intuitiva para trabalhar com requisições assíncronas de forma eficiente. Abaixo, vou abordar os principais aspectos e funcionalidades das requisições utilizando Axios:

Instalação
Para começar a utilizar Axios em seu projeto Node.js, você pode instalá-lo via npm ou yarn:

bash
Copiar código
npm install axios
# ou
yarn add axios
Após a instalação, você pode importar Axios no seu código:

javascript
Copiar código
const axios = require('axios');
Principais Métodos HTTP
GET
O método GET é utilizado para obter dados de um recurso específico no servidor:

javascript
Copiar código
axios.get('https://api.example.com/data')
  .then(response => {
    console.log('Dados recebidos:', response.data);
  })
  .catch(error => {
    console.error('Erro ao obter dados:', error);
  });
POST
O método POST é usado para enviar dados para o servidor, geralmente para criar um novo recurso:

javascript
Copiar código
const postData = {
  name: 'John Doe',
  age: 30
};

axios.post('https://api.example.com/users', postData)
  .then(response => {
    console.log('Dados enviados com sucesso:', response.data);
  })
  .catch(error => {
    console.error('Erro ao enviar dados:', error);
  });
PUT
O método PUT é utilizado para atualizar um recurso existente no servidor:

javascript
Copiar código
const updatedData = {
  name: 'John Doe Jr.',
  age: 31
};

axios.put('https://api.example.com/users/123', updatedData)
  .then(response => {
    console.log('Dados atualizados com sucesso:', response.data);
  })
  .catch(error => {
    console.error('Erro ao atualizar dados:', error);
  });
DELETE
O método DELETE é utilizado para remover um recurso específico do servidor:

javascript
Copiar código
axios.delete('https://api.example.com/users/123')
  .then(response => {
    console.log('Recurso deletado com sucesso:', response.data);
  })
  .catch(error => {
    console.error('Erro ao deletar recurso:', error);
  });
Enviando Parâmetros e Headers
Você pode enviar parâmetros junto com suas requisições GET, POST, PUT e DELETE:

javascript
Copiar código
// Exemplo de requisição GET com parâmetros
axios.get('https://api.example.com/data', {
  params: {
    id: 1,
    category: 'books'
  }
})
.then(response => {
  console.log('Dados recebidos:', response.data);
})
.catch(error => {
  console.error('Erro ao obter dados:', error);
});

// Exemplo de requisição POST com headers
const postData = {
  name: 'John Doe',
  age: 30
};

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer my-token'
};

axios.post('https://api.example.com/users', postData, { headers })
  .then(response => {
    console.log('Dados enviados com sucesso:', response.data);
  })
  .catch(error => {
    console.error('Erro ao enviar dados:', error);
  });
Interceptor de Requisições e Respostas
Axios permite o uso de interceptores para manipular requisições antes de serem enviadas ou manipular respostas antes de serem processadas pelo .then ou .catch:

javascript
Copiar código
// Interceptor de requisições
axios.interceptors.request.use(config => {
  // Manipular a configuração da requisição antes de enviar
  console.log('Requisição enviada para:', config.url);
  return config;
}, error => {
  // Manipular erros de requisição
  console.error('Erro na requisição:', error);
  return Promise.reject(error);
});

// Interceptor de respostas
axios.interceptors.response.use(response => {
  // Manipular a resposta antes de processar no .then
  console.log('Resposta recebida:', response.data);
  return response;
}, error => {
  // Manipular erros de resposta
  console.error('Erro na resposta:', error);
  return Promise.reject(error);
});
Tratamento de Erros
Axios permite capturar erros tanto nas requisições quanto nas respostas através do método .catch:

javascript
Copiar código
axios.get('https://api.example.com/data')
  .then(response => {
    console.log('Dados recebidos:', response.data);
  })
  .catch(error => {
    console.error('Erro ao obter dados:', error);
  });
Cancelamento de Requisições
Axios suporta o cancelamento de requisições usando o CancelToken:

javascript
Copiar código
const { CancelToken } = axios;
const source = CancelToken.source();

axios.get('https://api.example.com/data', {
  cancelToken: source.token
})
.then(response => {
  console.log('Dados recebidos:', response.data);
})
.catch(error => {
  if (axios.isCancel(error)) {
    console.log('Requisição cancelada:', error.message);
  } else {
    console.error('Erro ao obter dados:', error);
  }
});

// Cancelar a requisição
source.cancel('Requisição cancelada pelo usuário.');
Configuração Global
Você pode configurar opções globais para todas as requisições Axios usando axios.defaults:

javascript
Copiar código
axios.defaults.baseURL = 'https://api.example.com/';
axios.defaults.headers.common['Authorization'] = 'Bearer my-token';
axios.defaults.headers.post['Content-Type'] = 'application/json';
Conclusão
Axios é uma ferramenta poderosa e flexível para lidar com requisições HTTP em JavaScript. Seja para consumir APIs RESTful, enviar dados para o servidor, ou manipular erros e configurações, Axios oferece uma abordagem simples e eficaz para realizar operações assíncronas na web e em ambientes Node.js.