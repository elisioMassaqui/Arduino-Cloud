const axios = require('axios');

async function checkOptions(url) {
    try {
        const response = await axios.options(url);
        console.log('Allowed methods:', response.headers.allow);
    } catch (error) {
        console.error('Failed to get allowed methods:', error);
    }
}

// Exemplo de uso
checkOptions('https://api2.arduino.cc/iot/v2/things');
