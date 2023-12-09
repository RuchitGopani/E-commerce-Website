const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Replace with your JSON file
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Enable CORS for all routes
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

server.use(router);

const PORT = 8080; // Choose any port you prefer
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});