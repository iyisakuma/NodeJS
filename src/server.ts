import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

//Recurso para ver se
fastify.get("/", (req, resp) => {
  resp.send({ hello: "world" });
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
});
