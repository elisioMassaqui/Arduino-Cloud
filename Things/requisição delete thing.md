Código para Deletar o Thing
javascript
Copiar código
const axios = require('axios');

const clientId = 'x0MT2AbCBu6geyugsJFAvGzx3ggdl4p2';
const clientSecret = '0jrcaQz0gM1HHObuCsxf5ZOiYSVMXjelxOsnYDRiOO6nMuOMYTCWS4c8P1Mjn3hj';

// Função para obter o token de acesso
async function getToken() {
    try {
        const response = await axios.post('https://api2.arduino.cc/iot/v1/clients/token', {
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
            audience: 'https://api2.arduino.cc/iot'
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Failed to obtain access token:', error);
        throw error;
    }
}

// Função para deletar um Thing pelo ID
async function deleteThing(thingId) {
    try {
        const accessToken = await getToken();

        // Requisição DELETE para deletar o Thing
        const response = await axios.delete(`https://api2.arduino.cc/iot/v1/things/${thingId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        console.log('Thing deleted:', response.data);
    } catch (error) {
        console.error('Failed to delete thing:', error.response.data);
    }
}

// ID do Thing a ser deletado (substitua pelo ID correto)
const thingIdToDelete = 'SEU-ID-AQUI';

// Chamar a função para deletar o Thing
deleteThing(thingIdToDelete);
Explicação:
Código para Criar um Thing: Este código faz uma requisição POST para criar um Thing com o nome "coisaThing" na Arduino Cloud. Ele utiliza as credenciais de cliente para obter um token de acesso e adiciona esse token no cabeçalho da requisição POST.

Código para Deletar o Thing: Este código faz uma requisição DELETE para deletar um Thing da Arduino Cloud com base no seu ID. Assim como no código anterior, ele também obtém um token de acesso com as credenciais de cliente e adiciona esse token no cabeçalho da requisição DELETE.

Certifique-se de substituir SEU-ID-AQUI no código de deletar pelo ID correto do Thing que você deseja remover. Isso deve permitir que você crie e delete Things na Arduino Cloud usando Node.js de maneira separada e funcional.