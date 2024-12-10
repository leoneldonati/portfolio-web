import { v2 as cld } from "cloudinary";

cld.config({
  cloud_name: import.meta.env.CLD_NAME,
  api_key: import.meta.env.CLD_KEY,
  api_secret: import.meta.env.CLD_SECRET,
});
export type UploadedAsset = {
  secureUrl: string;
  publicId: string;
  width: number;
  height: number;
};
export async function uploadFiles(buffers: Buffer[]) {
  const UPLOAD_CONFIG = {
    folder: "blog-images",
  };
  let uploadedAssets: UploadedAsset[] = [];
  try {
    for (const buffer of buffers) {

      const resolved = (await new Promise((res, rej) => {
        cld.uploader
          .upload_stream(UPLOAD_CONFIG, (err, result) =>
            err
              ? rej({ ok: false, err, result: null })
              : res({ ok: true, result, err: null })
          )
          .end(buffer);
      })) as any;

      uploadedAssets.push({
        secureUrl: resolved?.result.secure_url,
        publicId: resolved?.result.public_id,
        height: resolved?.result.height,
        width: resolved?.result.width,
      });
    }

    return {
      ok: true,
      assets: uploadedAssets,
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      assets: null,
      error,
    };
  }
}
