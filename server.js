const cmd = require('node-cmd');
const path = require('path');

// Obtém o caminho absoluto para o executável arduino-cli
const arduinoCliPath = path.join(__dirname, 'arduino-cli');

// Envolve o caminho em aspas duplas para lidar com espaços
const command = `"${arduinoCliPath}" board list`;

cmd.run(command, (err, data, stderr) => {
    if (err) {
        console.error(`Erro ao executar arduino-cli: ${err}`);
        return;
    }
    console.log(`Saída do comando arduino-cli: ${data}`);
});
