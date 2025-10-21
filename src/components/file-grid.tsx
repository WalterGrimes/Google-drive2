"use client"

import { Folder, FileText, FileImage, FileVideo, FileAudio, File } from "lucide-react"
import { Card } from "~/components/ui/card"
import type { FileSystemItem } from "~/lib/mock-data"

interface FileGridProps {
  items: FileSystemItem[]
  onFolderClick: (folderName: string) => void
}

export function FileGrid({ items, onFolderClick }: FileGridProps) {
  const getFileIcon = (type: string, mimeType?: string) => {
    if (type === "folder") return Folder
    if (mimeType?.startsWith("image/")) return FileImage
    if (mimeType?.startsWith("video/")) return FileVideo
    if (mimeType?.startsWith("audio/")) return FileAudio
    if (mimeType?.includes("pdf") || mimeType?.includes("document")) return FileText
    return File
  }

  const handleItemClick = (item: FileSystemItem) => {
    if (item.type === "folder") {
      onFolderClick(item.name)
    } else if (item.url) {
      window.open(item.url, "_blank")
    }
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {items.map((item) => {
        const Icon = getFileIcon(item.type, item.mimeType)
        return (
          <Card
            key={item.id}
            className="group cursor-pointer overflow-hidden transition-all hover:shadow-md"
            onClick={() => handleItemClick(item)}
          >
            <div className="flex flex-col items-center p-4">
              <div
                className={`mb-3 rounded-lg p-3 ${
                  item.type === "folder" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                }`}
              >
                <Icon className="h-8 w-8" />
              </div>
              <p className="w-full truncate text-center text-sm font-medium text-foreground">{item.name}</p>
              {item.size && <p className="mt-1 text-xs text-muted-foreground">{item.size}</p>}
            </div>
          </Card>
        )
      })}
    </div>
  )
}
