import type { Asset } from "@scripts/posts";
import { useEffect, useState } from "react";

type Props = {
  assets?: Asset[];
  containerStyle?: string;
  imageStyle?: string;
  files?: File[];
};
export default function Gallery({
  assets,
  containerStyle,
  imageStyle,
  files,
}: Props) {
  const [position, setPosition] = useState(0);
  const [length, setLength] = useState(0);

  const hasFinishedArray = position === length - 1;

  const handleLeft = () => {
    if (position === 0) return;

    setPosition(position - 1);
  };
  const handleRight = () => {
    if (hasFinishedArray) return;

    setPosition(position + 1);
  };

  useEffect(() => {
    if (assets) setLength(assets.length);
    if (files) setLength(files.length);
  }, []);
  return (
    <div className="relative">
      <picture
        className="flex flex-row transition-transform"
        style={{
          transform: `translateX(-${position * 100}%)`,
        }}
        id="images-container"
      >
        {assets &&
          assets.map((asset, index) => (
            <img
              key={asset.publicId}
              src={asset.secureUrl}
              alt={`Imagen ${index}`}
              width={asset.width}
              height={asset.height}
              loading="lazy"
              className="aspect-video max-w-full object-contain"
            />
          ))}

        {files &&
          files.map((file, index) => {
            const src = URL.createObjectURL(file);

            return (
              <img
                key={index}
                src={src}
                alt={`Imagen ${index}`}
                className="aspect-video max-w-full object-contain"
              />
            );
          })}
      </picture>

      <div className="w-full flex justify-between px-3 absolute bottom-10">
        <button
          className={
            "text-white transition hover:scale-[1.05] active:rotate-12 " +
            (position === 0
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto")
          }
          onClick={handleLeft}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </button>
        <button
          className={
            "text-white transition hover:scale-[1.05] active:rotate-12 " +
            (hasFinishedArray
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto")
          }
          onClick={handleRight}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
