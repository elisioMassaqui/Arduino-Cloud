Criar sketche rerente ao id do seu thing.

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

// Função para criar uma Sketch
async function createSketch(thingId, sketchName) {
    try {
        const accessToken = await getToken();

        // Requisição PUT para criar a Sketch
        const response = await axios.options(`https://api2.arduino.cc/iot/v2/things/${thingId}/sketch`, {
            name: sketchName
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        console.log('Sketch created:', response.data);
    } catch (error) {
        console.error('Failed to create sketch:', error.response.data);
    }
}

// Chamar a função para criar a Sketch
const thingId = 'YOUR_THING_ID'; // Substitua pelo ID do Thing
const sketchName = 'coisaSketch';
createSketch(thingId, sketchName);
