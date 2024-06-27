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
        console.error('Failed to obtain access token:', error.message);
        throw error;
    }
}

// Função para listar Things
async function listThings() {
    try {
        const accessToken = await getToken();

        const response = await axios.get('https://api2.arduino.cc/iot/v2/things', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        console.log('Things:', response.data);
    } catch (error) {
        console.error('Failed to list things:', error.message);
    }
}

// Chamar a função para listar as Things
listThings();

