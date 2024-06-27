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

// Função para criar um Sketch associado a um Thing
async function createSketch(thingId, sketchName) {
    try {
        const accessToken = await getToken();

        const response = await axios.put(`https://api2.arduino.cc/iot/v2/things/${thingId}/sketch`, {
            name: sketchName
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Sketch created:', response.data);
    } catch (error) {
        console.error('Failed to create sketch:', error.response.data);
    }
}

// Exemplo de uso:
createSketch('ca7599c9-c1b2-4d71-b28f-0a23902be085', 'MeuSketch');
