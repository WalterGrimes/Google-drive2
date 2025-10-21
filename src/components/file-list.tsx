"use client"

import { Folder, FileText, FileImage, FileVideo, FileAudio, File, MoreVertical } from "lucide-react"
import { Button } from "~/components/ui/button"
import type { FileSystemItem } from "~/lib/mock-data"

interface FileListProps {
  items: FileSystemItem[]
  onFolderClick: (folderName: string) => void
}

export function FileList({ items, onFolderClick }: FileListProps) {
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
    <div className="space-y-1">
      {items.map((item) => {
        const Icon = getFileIcon(item.type, item.mimeType)
        return (
          <div
            key={item.id}
            className="group flex items-center gap-4 rounded-lg px-4 py-3 hover:bg-accent cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <div
              className={`rounded p-2 ${
                item.type === "folder" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate font-medium text-foreground">{item.name}</p>
            </div>
            <div className="flex items-center gap-4">
              {item.modified && <p className="text-sm text-muted-foreground">{item.modified}</p>}
              {item.size && <p className="text-sm text-muted-foreground w-20 text-right">{item.size}</p>}
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
