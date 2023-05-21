'use client'

import React from 'react'

export default function MediaPicker() {
  const [preview, setPreview] = React.useState<string | null>(null)

  function onMediaSelection(event: React.ChangeEvent<HTMLInputElement>) {
    const { files } = event.target
    if (!files) return

    const previewUrl = URL.createObjectURL(files[0])
    setPreview(previewUrl)
  }

  return (
    <>
      <input
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*"
        onChange={onMediaSelection}
        className="invisible h-0 w-0"
      />
      {preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
