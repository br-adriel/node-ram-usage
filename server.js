const http = require('http');
const stats = require('./pcRamUsage.js');

const HOST = 'http://localhost';
const PORT = 3000;

http
  .createServer((req, res) => {
    let url = req.url;

    if (url === '/stats') {
      res.end(JSON.stringify(stats, null, 2));
    } else {
      res.end(`<h1>It's working</h1>`);
    }
  })
  .listen(PORT, () => console.log(`Servidor executando em ${HOST}:${PORT}`));
