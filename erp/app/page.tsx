import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardGrid } from "@/components/dashboard-grid"
import { AIChatbot } from "@/components/ai-chatbot"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <DashboardSidebar />
        <div className="flex-1">
          <DashboardHeader />
          <main className="p-6">
            <DashboardGrid />
          </main>
        </div>
      </div>
      <AIChatbot />
    </div>
  )
}
