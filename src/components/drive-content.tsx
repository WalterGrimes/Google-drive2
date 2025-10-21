"use client"

import { FileGrid } from "./file-grid"
import { FileList } from "./file-list"
import type { FileSystemItem } from "~/lib/mock-data"

interface DriveContentProps {
  currentPath: string[]
  onNavigate: (path: string[]) => void
  viewMode: "grid" | "list"
  fileSystem: FileSystemItem[]
}

export function DriveContent({ currentPath, onNavigate, viewMode, fileSystem }: DriveContentProps) {
  // Navigate through the file system based on current path
  let currentItems = fileSystem
  for (const pathSegment of currentPath) {
    const folder = currentItems.find((item) => item.name === pathSegment && item.type === "folder")
    if (folder && folder.children) {
      currentItems = folder.children
    }
  }

  const handleFolderClick = (folderName: string) => {
    onNavigate([...currentPath, folderName])
  }

  return (
    <main className="flex-1 overflow-auto">
      <div className="p-6">
        {viewMode === "grid" ? (
          <FileGrid items={currentItems} onFolderClick={handleFolderClick} />
        ) : (
          <FileList items={currentItems} onFolderClick={handleFolderClick} />
        )}
      </div>
    </main>
  )
}
