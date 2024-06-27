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

// Função para deletar um Sketch
async function deleteSketch(thingId, sketchId) {
    try {
        const accessToken = await getToken();

        const response = await axios.delete(`https://api2.arduino.cc/iot/v2/things/${thingId}/sketch`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        console.log('Sketch deleted:', response.data);
    } catch (error) {
        console.error('Failed to delete sketch:', error.response.data);
    }
}

// Exemplo de uso:
deleteSketch('ca7599c9-c1b2-4d71-b28f-0a23902be085');

