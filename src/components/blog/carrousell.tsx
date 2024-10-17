import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";

export default function Carousel({ files }: { files: File[] }) {
  const length = files.length * 100;
  const [position, setPosition] = useState(0);

  const goNext = () => {
    if (position === length - 100) return;

    setPosition((pos) => pos + 100);
  };
  const goPrev = () => {
    if (position === 0) return;

    setPosition((pos) => pos - 100);
  };
  return (
    <div className="relative overflow-hidden">
      <div
        className="transition w-full flex"
        style={{
          transform: `translateX(-${position}%)`,
        }}
      >
        {files.map((file, index) => {
          const src = URL.createObjectURL(file);

          return (
            <img
              src={src}
              key={index}
              className="aspect-video object-contain max-w-full"
              loading="lazy"
            />
          );
        })}
      </div>

      <button
        className="absolute z-50 left-2 top-2 p-1 rounded-full flex bg-blue-500/70 backdrop-blur-md transition hover:scale-[1.05] active:-rotate-12"
        onClick={goPrev}
        type="button"
      >
        <IconArrowLeft className="text-white" />
      </button>
      <button
        className="absolute z-50 right-2 top-2  p-1 rounded-full flex bg-blue-500/70 backdrop-blur-md transition hover:scale-[1.05] active:rotate-12"
        onClick={goNext}
        type="button"
      >
        <IconArrowRight className="text-white " />
      </button>

      <span className="absolute z-30 bottom-2 right-2 rounded p-1 text-white">
        {(position / 100) + 1}/{files.length}
      </span>
    </div>
  );
}
