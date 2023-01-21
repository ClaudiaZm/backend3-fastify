
import postCtrol from "../controllers/post.controller.js";
import { upload } from "../middleware/imgUpload.js";

export const postRoutes = (fastify,opts, done) => {
  fastify.get("/", postCtrol.listar);
  fastify.post( "/",{preHandler:[upload.single("img"),]},postCtrol.add)
  fastify.get("/:id", postCtrol.listarById);
  fastify.delete("/:id", postCtrol.delete);
  fastify.put("/:id", {preHandler:[upload.single("img")]}, postCtrol.update);

  done()
};
