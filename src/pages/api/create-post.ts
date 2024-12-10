import { postModel, ObjectId, userModel } from "@db";
import { getSession } from "@scripts/auth";
import { splitTopics } from "@scripts/posts";
import { res } from "@scripts/response";
import { uploadFiles, type UploadedAsset } from "@services/cloudinary";
import { optimizeImages } from "@services/sharp";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {

  const session = getSession(request)

  if (!session) return res({ message: 'Debes iniciar sesión para crear un posteo' }, 401)
  const formData = await request.formData();

  const files = formData.getAll("files") as File[];
  const title = formData.get("title")!.toString();
  const content = formData.get("content")!.toString();
  const topics = formData.get("topics")?.toString();

  if (!title || !content)
    return res({ message: "Debes proporcionar un título y contenido." }, 400);

  // datos base para el modelo
  const timestamp = new Date();
  const splitedTopics = topics ? splitTopics(topics) : [];

  try {
    // si hay imagenes
    let images: UploadedAsset[] = [];
    if (files.length >= 1) {
      // optimizar assets
      const { optimizedAssets } = await optimizeImages(files);

      // subir assets
      const { ok, assets } = await uploadFiles(optimizedAssets!);

      if (ok) {
        images = [...assets!];
      }
    }


    const author = await userModel.findOne({ _id: new ObjectId(session.id)})
    // guardar posteo
    const { insertedId } = await postModel.insertOne({
      title,
      content,
      images,
      created: timestamp,
      topics: splitedTopics,
      author: {
        id: author?._id,
        name: author?.name
      }
    });

    return res({ message: "Posteo creado!", insertedId });
  } catch (error) {
    console.log(error)
    return res({ message: "Error en el servidor, create-post" }, 500);
  }
};
