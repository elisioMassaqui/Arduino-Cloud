const axios = require('axios');

// Dados de autenticação
const clientId = 'x0MT2AbCBu6geyugsJFAvGzx3ggdl4p2';
const clientSecret = '0jrcaQz0gM1HHObuCsxf5ZOiYSVMXjelxOsnYDRiOO6nMuOMYTCWS4c8P1Mjn3hj';

// Função para obter token de acesso
async function obterTokenDeAcesso() {
    try {
        const response = await axios.post('https://api.arduino.cc/token', {
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret
        });

        const accessToken = response.data.access_token;
        console.log('Token de acesso obtido:', accessToken);
        return accessToken;
    } catch (error) {
        console.error('Erro ao obter token de acesso:', error);
        throw error;
    }
}

// Chamada da função para obter token de acesso e imprimir o token retornado
obterTokenDeAcesso()
  .then(token => {
    console.log('Token obtido:', token);
  })
  .catch(error => {
    console.error('Erro ao obter token de acesso:', error);
  });
