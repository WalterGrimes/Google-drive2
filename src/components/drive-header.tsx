"use client"

import { Search, Grid3x3, List, Upload, ChevronRight } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

interface DriveHeaderProps {
  currentPath: string[]
  onNavigate: (path: string[]) => void
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
}

export function DriveHeader({ currentPath, onNavigate, viewMode, onViewModeChange }: DriveHeaderProps) {
  const handleUpload = () => {
    alert("Upload functionality would be implemented here!")
  }

  return (
    <header className="border-b border-border bg-card">
      <div className="flex h-16 items-center gap-4 px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary" />
            <h1 className="text-xl font-semibold text-foreground">Drive</h1>
          </div>
        </div>

        <div className="flex flex-1 items-center gap-4">
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search in Drive" className="w-full pl-10 bg-secondary border-0" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onViewModeChange("grid")}
            className={viewMode === "grid" ? "bg-accent" : ""}
          >
            <Grid3x3 className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onViewModeChange("list")}
            className={viewMode === "list" ? "bg-accent" : ""}
          >
            <List className="h-5 w-5" />
          </Button>
          <Button onClick={handleUpload} className="gap-2">
            <Upload className="h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 px-6 py-3 border-t border-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onNavigate([])}
          className="h-8 px-3 text-foreground hover:bg-accent font-medium"
        >
          My Drive
        </Button>
        {currentPath.map((segment, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate(currentPath.slice(0, index + 1))}
              className="h-8 px-3 text-foreground hover:bg-accent font-medium"
            >
              {segment}
            </Button>
          </div>
        ))}
      </div>
    </header>
  )
}
