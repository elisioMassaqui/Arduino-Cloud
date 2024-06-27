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

        console.log('Thing deleted:', thingIdToDelete, response.data);
    } catch (error) {
        console.error('Failed to delete thing:', error.response.data);
    }
}

// ID do Thing a ser deletado (substitua pelo ID correto)
const thingIdToDelete = '19a50d57-f303-4bd8-bc19-ef860032c8eb';

// Chamar a função para deletar o Thing
deleteThing(thingIdToDelete);