"use client";
import { UploadButton, UploadFileResponse } from "@xixixao/uploadstuff/react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
export default function ImageButton(){
    const generateUploadUrl = useMutation(api.files.generateUploadUrl);
    return <UploadButton uploadUrl={""}/>
}