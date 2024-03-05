"use client";
import { UploadButton, UploadFileResponse } from "@xixixao/uploadstuff/react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
export default function ImageButton({  }) {
  const [uploadId, setUploadId] = useState<null | string>(null);
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const saveAfterUpload = (uploaded: UploadFileResponse[]) => {
    setUploadId((uploaded[0].response as any).storageId);
  };
  return (
    <>
      <UploadButton
        uploadUrl={generateUploadUrl}
        fileTypes={["image/*"]}
        onUploadComplete={saveAfterUpload}
        onUploadError={(error: unknown) => alert(`ERROR: ${error}`)}
      />
    </>
  );
}
