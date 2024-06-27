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

// Função para atualizar um dispositivo
async function updateDevice(deviceId, updateData) {
    try {
        const accessToken = await getToken();

        const response = await axios.post(`https://api2.arduino.cc/iot/v2/devices/${deviceId}`, updateData, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        console.log('Updated device:', response.data);
    } catch (error) {
        console.error('Failed to update device:', error.message);
    }
}

// Exemplo de chamada para atualizar um dispositivo
updateDevice('2f526485-e0ac-4f17-a24b-f10b7e92dff9', { name: 'NovoNome' });
