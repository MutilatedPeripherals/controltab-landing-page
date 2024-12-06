import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileMusicIcon as MusicNote, Mic, Tv2, ListMusic, GitBranch, FileDown } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Guitar Tab Management",
    description: "Upload, organize, and collaborate on your Guitar Pro files effortlessly. Visualize tabs and tracks without additional software, streamlining your workflow.",
    icon: MusicNote
  },
  {
    title: "Version Control",
    description: "Track changes, compare versions, and approve updates to tabs and lyrics seamlessly.",
    icon: GitBranch,
    comingSoon: true
  },
  {
    title: "Lyrics Editor",
    description: "Perfect your lyrics with our built-in editor. Share drafts and finalize songs as a band.",
    icon: Mic
  },
  {
    title: "Concert Playlist Mode",
    description: "Create a playable track of your entire setlist with backing tracks for at-home practice sessions. Perfect for rehearsing your concert from start to finish.",
    icon: ListMusic
  },
  {
    title: "Export Features",
    description: "Download songs as PDFs for sharing or as metronome-ready MP3s to practice with precision.",
    icon: FileDown
  },
  {
    title: "Stage Plot Editor",
    description: "Plan your stage setup visually. Ensure every performance is flawless with clear layouts for instruments, amps, and more.",
    icon: Tv2
  }
]

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Everything Your Band Needs to Succeed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors">
            <CardHeader>
              <div className="flex justify-between items-start">
                <feature.icon className="w-10 h-10 mb-4 text-pink-500" />
                {(feature.title === "Stage Plot Editor" || feature.title === "Version Control") && (
          <Badge variant="secondary" className="bg-yellow-500 text-gray-900">Coming Soon</Badge>
        )}
              </div>
              <CardTitle className="text-xl font-semibold text-gray-100">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

