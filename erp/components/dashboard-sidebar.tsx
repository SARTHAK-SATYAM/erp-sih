import {
  Home,
  BookOpen,
  Calendar,
  Users,
  FileText,
  MessageCircle,
  CreditCard,
  BarChart3,
  Settings,
  HelpCircle,
  GraduationCap,
  Clock,
  Building,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: GraduationCap, label: "Academics", active: false },
  { icon: Calendar, label: "Time Table", active: false },
  { icon: Clock, label: "Attendance", active: false },
  { icon: FileText, label: "Exam Schedule", active: false },
  { icon: BarChart3, label: "Results", active: false },
  { icon: BookOpen, label: "Study Materials", active: false },
  { icon: Users, label: "Faculty Chat", active: false },
  { icon: Building, label: "Hostel", active: false },
  { icon: CreditCard, label: "Fees & Dues", active: false },
  { icon: MessageCircle, label: "Library", active: false },
  { icon: Settings, label: "Settings", active: false },
  { icon: HelpCircle, label: "Help & Support", active: false },
]

export function DashboardSidebar() {
  return (
    <aside className="w-64 border-r border-border bg-card">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold">IdeoNova200
</span>
        </div>
      </div>

      <nav className="px-4 pb-4">
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Button
                variant={item.active ? "default" : "ghost"}
                className={cn("w-full justify-start", item.active && "bg-primary text-primary-foreground")}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
