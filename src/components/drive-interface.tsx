"use client"

import { useState } from "react"
import { DriveHeader } from "./drive-header"
import { DriveContent } from "./drive-content"
import { mockFileSystem } from "~/lib/mock-data"

export function DriveInterface() {
  const [currentPath, setCurrentPath] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")

  return (
    <div className="flex h-screen flex-col bg-background">
      <DriveHeader
        currentPath={currentPath}
        onNavigate={setCurrentPath}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <DriveContent
        currentPath={currentPath}
        onNavigate={setCurrentPath}
        viewMode={viewMode}
        fileSystem={mockFileSystem}
      />
    </div>
  )
}
