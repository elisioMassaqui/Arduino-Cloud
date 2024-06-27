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

// Função para criar um novo dispositivo
async function createDevice() {
    try {
        const accessToken = await getToken();

        const deviceData = {
            type: 'generic_device_secretkey',  // Substitua pelo tipo de dispositivo apropriado
            name: 'NovoDispositivo',
            fqbn: 'arduino:avr:uno'  // Substitua pelo Fully Qualified Board Name (FQBN) apropriado
            // Inclua quaisquer outros dados necessários para o dispositivo
        };

        const response = await axios.put('https://api2.arduino.cc/iot/v2/devices', deviceData, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        console.log('Device created:', response.data);
    } catch (error) {
        console.error('Failed to create device:', error.response.data);
    }
}

// Chamar a função para criar o dispositivo
createDevice();
