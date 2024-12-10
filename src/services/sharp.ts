import sharp from "sharp";

export async function optimizeImages(files: File[]) {
  try {
    const optimizedAssets = files.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());

      const asset = await sharp(buffer).toFormat("avif").toBuffer();

      return asset;
    });

    return {
      ok: true,
      optimizedAssets: await Promise.all(optimizedAssets),
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      optimizedAssets: null,
      error,
    };
  }
}
