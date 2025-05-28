const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  console.log('Cliente conectado');

  // Nos sirve para enviar un mensaje cada 3 seg
  const interval = setInterval(() => {
    const msg = `Mensaje del servidor: ${new Date().toLocaleTimeString()}`;
    ws.send(msg);
  }, 3000);

  ws.on('close', () => {
    console.log('Cliente desconectado');
    clearInterval(interval);
  });
});

