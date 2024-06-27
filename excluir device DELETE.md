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

// Função para excluir um dispositivo
async function deleteDevice(deviceId) {
    try {
        const accessToken = await getToken();

        const response = await axios.delete(`https://api2.arduino.cc/iot/v2/devices/${deviceId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        console.log('Deleted device:', response.data);
    } catch (error) {
        console.error('Failed to delete device:', error.message);
    }
}

// Exemplo de chamada para excluir um dispositivo
deleteDevice('bee9f8cf-bbf4-4fe9-b079-0fae27965315');
