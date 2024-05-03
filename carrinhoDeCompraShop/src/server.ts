import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

//Recurso para ver se está funcionando o servidor
fastify.get("/", (req, resp) => {
  resp.send({ hello: "world" });
});



fastify
  .listen({ port: 3000 })
  .then(() => console.log("Server init on port 3000"));
