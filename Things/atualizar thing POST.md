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

// Função para atualizar uma Thing existente
async function updateThing(thingId, updatedData) {
    try {
        const accessToken = await getToken();

        const response = await axios.post(`https://api2.arduino.cc/iot/v2/things/${thingId}`, updatedData, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        console.log('Thing updated:', response.data);
    } catch (error) {
        console.error('Failed to update thing:', error.response.data);
    }
}

// Chamar a função para atualizar a Thing
const thingId = 'a413ef83-5571-4fef-97e6-796c1c91537d';
const updatedData = {
    name: 'NovoNomeDaThing2',
    // Inclua outros dados a serem atualizados
};
updateThing(thingId, updatedData);

