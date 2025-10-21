export interface FileSystemItem {
  id: string
  name: string
  type: "folder" | "file"
  mimeType?: string
  size?: string
  modified?: string
  url?: string
  children?: FileSystemItem[]
}

export const mockFileSystem: FileSystemItem[] = [
  {
    id: "1",
    name: "Work Projects",
    type: "folder",
    modified: "Oct 15, 2025",
    children: [
      {
        id: "1-1",
        name: "Q4 Presentation.pdf",
        type: "file",
        mimeType: "application/pdf",
        size: "2.4 MB",
        modified: "Oct 15, 2025",
        url: "https://example.com/q4-presentation.pdf",
      },
      {
        id: "1-2",
        name: "Budget Report.xlsx",
        type: "file",
        mimeType: "application/vnd.ms-excel",
        size: "856 KB",
        modified: "Oct 12, 2025",
        url: "https://example.com/budget-report.xlsx",
      },
      {
        id: "1-3",
        name: "Meeting Notes",
        type: "folder",
        modified: "Oct 10, 2025",
        children: [
          {
            id: "1-3-1",
            name: "Team Sync Oct 10.docx",
            type: "file",
            mimeType: "application/msword",
            size: "124 KB",
            modified: "Oct 10, 2025",
            url: "https://example.com/team-sync.docx",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Personal",
    type: "folder",
    modified: "Oct 18, 2025",
    children: [
      {
        id: "2-1",
        name: "Vacation Photos",
        type: "folder",
        modified: "Oct 18, 2025",
        children: [
          {
            id: "2-1-1",
            name: "beach-sunset.jpg",
            type: "file",
            mimeType: "image/jpeg",
            size: "3.2 MB",
            modified: "Oct 18, 2025",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
          },
          {
            id: "2-1-2",
            name: "mountain-view.jpg",
            type: "file",
            mimeType: "image/jpeg",
            size: "4.1 MB",
            modified: "Oct 18, 2025",
            url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
          },
        ],
      },
      {
        id: "2-2",
        name: "Recipe Collection.pdf",
        type: "file",
        mimeType: "application/pdf",
        size: "1.8 MB",
        modified: "Oct 5, 2025",
        url: "https://example.com/recipes.pdf",
      },
    ],
  },
  {
    id: "3",
    name: "Design Assets",
    type: "folder",
    modified: "Oct 14, 2025",
    children: [
      {
        id: "3-1",
        name: "logo-design.png",
        type: "file",
        mimeType: "image/png",
        size: "512 KB",
        modified: "Oct 14, 2025",
        url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800",
      },
      {
        id: "3-2",
        name: "brand-guidelines.pdf",
        type: "file",
        mimeType: "application/pdf",
        size: "5.2 MB",
        modified: "Oct 12, 2025",
        url: "https://example.com/brand-guidelines.pdf",
      },
    ],
  },
  {
    id: "4",
    name: "Project Proposal.docx",
    type: "file",
    mimeType: "application/msword",
    size: "1.2 MB",
    modified: "Oct 19, 2025",
    url: "https://example.com/project-proposal.docx",
  },
  {
    id: "5",
    name: "Demo Video.mp4",
    type: "file",
    mimeType: "video/mp4",
    size: "45.6 MB",
    modified: "Oct 17, 2025",
    url: "https://example.com/demo-video.mp4",
  },
  {
    id: "6",
    name: "Podcast Episode.mp3",
    type: "file",
    mimeType: "audio/mpeg",
    size: "28.3 MB",
    modified: "Oct 16, 2025",
    url: "https://example.com/podcast.mp3",
  },
]
