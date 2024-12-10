import Gallery from "@components/gallery";
import { useState } from "react";

export default function LabelFiles() {
  const [files, setFiles] = useState<File[] | null>(null);
  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const arrayFromFiles = Object.values(event.target.files);

    setFiles(arrayFromFiles);
  };

  const haveOneFile = files && files.length === 1;
  const haveMultFiles = files && files.length > 1;
  const src = haveOneFile ? URL.createObjectURL(files[0]) : "";
  return (
    <label
      htmlFor="files"
      className="relative grid place-items-center w-full overflow-hidden aspect-video border-medium border-white/70 rounded cursor-pointer transition shadow-inner hover:shadow-white/50"
    >
      <input
        type="file"
        name="files"
        id="files"
        accept="image/*"
        multiple
        hidden
        onChange={handleFilesChange}
      />

      {haveMultFiles && <Gallery files={files} />}
      {haveOneFile && <img src={src} className="object-contain aspect-video" />}
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
        className="text-white w-20 h-auto absolute -z-10"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M13 15c-2 0 -5 1 -5 5" />
        <path d="M4 11m0 2a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2z" />
        <path d="M4 7v-2a1 1 0 0 1 1 -1h2" />
        <path d="M11 4h2" />
        <path d="M17 4h2a1 1 0 0 1 1 1v2" />
        <path d="M20 11v2" />
        <path d="M20 17v2a1 1 0 0 1 -1 1h-2" />
      </svg>
    </label>
  );
}
