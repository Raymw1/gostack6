const server = require("./server");

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Go to http://localhost:${PORT}`);
});
