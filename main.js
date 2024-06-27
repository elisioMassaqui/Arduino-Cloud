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

// Função para criar um novo Sketch
async function createSketch() {
    try {
        const accessToken = await getToken();

        const sketchData = {
            name: 'MeuSketch',
            // Inclua quaisquer outros dados necessários para o Sketch
        };

        const response = await axios.post('https://api2.arduino.cc/iot/v2/sketches', sketchData, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        console.log('Sketch created:', response.data);
    } catch (error) {
        console.error('Failed to create sketch:', error.response.data);
    }
}

// Chamar a função para criar o Sketch
createSketch();
