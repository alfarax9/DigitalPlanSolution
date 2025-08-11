"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

export default function ImageUploader({ onUpload }: { onUpload: (url: string) => void }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      {imageUrl && <img src={imageUrl} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />}
      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        onUpload={(result: any) => {
          const url = result.info.secure_url;
          setImageUrl(url);
          onUpload(url);
        }}
      >
        {({ open }) => (
          <button
            type="button"
            onClick={() => open()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Upload Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
}