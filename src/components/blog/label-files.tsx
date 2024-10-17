import { useState } from "react";
import Carousel from "./carrousell";
import { IconImageInPicture } from "@tabler/icons-react";

export default function LabelFiles() {
  const [files, setFiles] = useState<File[] | null>(null);
  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    if (!event.target.files) return


    const arrayFromFiles = Object.values(event.target.files)

    setFiles(arrayFromFiles)
  }

  const haveOneFile = files && files.length === 1
  const haveMultFiles = files && files.length > 1
  const src = haveOneFile ? URL.createObjectURL(files[0]) : ''
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

      {
        haveMultFiles && <Carousel files={files} />
      }
      {
        haveOneFile && <img src={src} className="object-contain aspect-video"  />
      }

      <IconImageInPicture className="text-white w-20 h-auto absolute -z-10"/>
    </label>
  );
}
