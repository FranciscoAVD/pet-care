"use client";
import { UploadButton, UploadFileResponse } from "@xixixao/uploadstuff/react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import "@xixixao/uploadstuff/react/styles.css";
import { ImageIcon } from "@radix-ui/react-icons";
import { usePetStore } from "../stores/pet-store";
export default function ImageButton({ children }:{children?: React.ReactNode}) {
  const [uploadId, setUploadId] = useState<null | string>(null);
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const patchPetImage = useMutation(api.pets.addImage)
  const activePet = usePetStore(state=> state.activePet);
  const saveAfterUpload = async (uploaded: UploadFileResponse[]) => {
    const res = await (uploaded[0].response as any).storageId
    //@ts-ignore
    patchPetImage({pet: activePet, imageId: res})
  };
  return (
      <UploadButton
        content={()=>"Add Image"}
        className={()=>"text-sm hover:cursor-pointer font-semibold"}
        uploadUrl={generateUploadUrl}
        fileTypes={["image/*"]}
        onUploadComplete={saveAfterUpload}
        onUploadError={(error: unknown) => alert(`ERROR: ${error}`)}
      />
  );
}
