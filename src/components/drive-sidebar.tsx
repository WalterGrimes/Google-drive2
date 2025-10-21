"use client"

import { Home, Clock, Star, Trash2, Cloud, HardDrive } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Progress } from "~/components/ui/progress"

export function DriveSidebar() {
  const navItems = [
    { icon: Home, label: "My Drive", active: true },
    { icon: Clock, label: "Recent", active: false },
    { icon: Star, label: "Starred", active: false },
    { icon: Trash2, label: "Trash", active: false },
  ]

  return (
    <aside className="w-64 border-r border-border bg-card p-4">
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Button key={item.label} variant={item.active ? "secondary" : "ghost"} className="w-full justify-start gap-3">
            <item.icon className="h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="mt-8 space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Cloud className="h-4 w-4" />
          <span>Storage</span>
        </div>
        <Progress value={65} className="h-2" />
        <p className="text-xs text-muted-foreground">6.5 GB of 10 GB used</p>
        <Button variant="outline" size="sm" className="w-full bg-transparent">
          <HardDrive className="mr-2 h-4 w-4" />
          Get more storage
        </Button>
      </div>
    </aside>
  )
}
