const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => console.log("Server raised in port: " + PORT));
});

// el metodo find me sirve para encontrar id, para otros datos no esta tan bueno
// el +id es para parsear

//JSON.stringify es para convertirlo
