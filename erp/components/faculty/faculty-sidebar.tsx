"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  BarChart3,
  Users,
  Calendar,
  AlertTriangle,
  GraduationCap,
  MessageSquare,
  Settings,
  BookOpen,
  TrendingUp,
  UserCheck,
} from "lucide-react"

const sidebarItems = [
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: Users, label: "Students", id: "students", active: true },
  { icon: Calendar, label: "Attendance", id: "attendance" },
  { icon: AlertTriangle, label: "Risk Assessment", id: "risk" },
  { icon: GraduationCap, label: "Grades", id: "grades" },
  { icon: BookOpen, label: "Courses", id: "courses" },
  { icon: MessageSquare, label: "Messages", id: "messages" },
  { icon: TrendingUp, label: "Reports", id: "reports" },
  { icon: UserCheck, label: "Faculty", id: "faculty" },
  { icon: Settings, label: "Settings", id: "settings" },
]

interface FacultySidebarProps {
  activeSection?: string
  onSectionChange?: (section: string) => void
}

export function FacultySidebar({ activeSection = "analytics", onSectionChange }: FacultySidebarProps) {
  const [activeItem, setActiveItem] = useState(activeSection)

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId)
    onSectionChange?.(itemId)
  }

  return (
    <Card className="w-64 h-screen rounded-none border-r bg-sidebar">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-sidebar-foreground">IdeoNova200</h2>
            <p className="text-xs text-muted-foreground">ERP Dashboard</p>
          </div>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.id}
              variant={activeItem === item.id ? "default" : "ghost"}
              className={`w-full justify-start gap-3 ${
                activeItem === item.id
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </Card>
  )
}
