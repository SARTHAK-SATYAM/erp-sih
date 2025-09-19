"use client"

import { useState } from "react"
import { FacultySidebar } from "@/components/faculty/faculty-sidebar"
import { FacultyHeader } from "@/components/faculty/faculty-header"
import { AnalyticsDashboard } from "@/components/faculty/analytics-dashboard"
import { StudentPerformance } from "@/components/faculty/student-performance"
import { AttendanceManagement } from "@/components/faculty/attendance-management"
import { AIChatbot } from "@/components/faculty/ai-chatbot"

export default function FacultyDashboard() {
  const [activeSection, setActiveSection] = useState("analytics")

  const renderContent = () => {
    switch (activeSection) {
      case "analytics":
        return <AnalyticsDashboard />
      case "students":
        return <StudentPerformance />
      case "attendance":
        return <AttendanceManagement />
      default:
        return <AnalyticsDashboard />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <FacultySidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <div className="flex-1">
          <FacultyHeader />
          <main className="p-6">{renderContent()}</main>
        </div>
      </div>
      <AIChatbot />
    </div>
  )
}
