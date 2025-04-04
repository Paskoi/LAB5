const os = require('os');

const VERSION = process.env.VERSION || '1.0.0';
const hostname = os.hostname();
const ip = Object.values(os.networkInterfaces())
  .flat()
  .find((i) => i.family === 'IPv4' && !i.internal)?.address || 'unknown';

const html = `
<html>
  <head><title>LAB 5</title></head>
  <body>
    <h1>Adres IP: ${ip}</h1>
    <h2>Host: ${hostname}</h2>
    <h3>Wersja: ${VERSION}</h3>
  </body>
</html>
`;

console.log(html);
