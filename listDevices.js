const axios = require('axios');

const clientId = 'x0MT2AbCBu6geyugsJFAvGzx3ggdl4p2'; // Seu ID de cliente do Arduino Cloud
const clientSecret = '0jrcaQz0gM1HHObuCsxf5ZOiYSVMXjelxOsnYDRiOO6nMuOMYTCWS4c8P1Mjn3hj'; // Seu segredo de cliente do Arduino Cloud
const baseURL = 'https://api2.arduino.cc/iot/v2'; // URL base da API do Arduino Cloud

async function getConnectedDevices() {
    try {
        // Autenticação para obter o token de acesso
        const authResponse = await axios.post(`${baseURL}/oauth/token`, {
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
            audience: `${baseURL}/api`
        });

        const accessToken = authResponse.data.access_token;

        // Requisição para obter os dispositivos conectados
        const devicesResponse = await axios.get(`${baseURL}/devices`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const connectedDevices = devicesResponse.data;

        // Exemplo de como lidar com os dispositivos retornados
        console.log('Dispositivos conectados:');
        connectedDevices.forEach(device => {
            console.log(`- ${device.name}: ${device.id}`);
        });

    } catch (error) {
        console.error('Erro ao obter dispositivos:', error.message);
    }
}

// Chamada da função para obter dispositivos conectados
getConnectedDevices();
