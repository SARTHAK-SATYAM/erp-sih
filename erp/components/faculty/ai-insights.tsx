"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, AlertCircle, Lightbulb, Target, Zap } from "lucide-react"

const aiInsights = [
  {
    type: "prediction",
    title: "Performance Prediction",
    description: "Based on current trends, 15 students are likely to underperform in upcoming exams",
    confidence: 87,
    action: "Review study materials",
    priority: "high",
  },
  {
    type: "trend",
    title: "Attendance Pattern",
    description: "Friday classes show 23% lower attendance. Consider rescheduling important topics",
    confidence: 92,
    action: "Adjust schedule",
    priority: "medium",
  },
  {
    type: "recommendation",
    title: "Engagement Boost",
    description: "Interactive assignments increase performance by 18% in similar cohorts",
    confidence: 78,
    action: "Add interactive content",
    priority: "low",
  },
  {
    type: "alert",
    title: "Grade Distribution",
    description: "Unusual clustering in mid-range scores suggests assessment difficulty mismatch",
    confidence: 85,
    action: "Review assessment",
    priority: "medium",
  },
]

const predictiveMetrics = [
  { label: "Pass Rate Prediction", current: 89, predicted: 92, trend: "up" },
  { label: "Average GPA Forecast", current: 3.2, predicted: 3.4, trend: "up" },
  { label: "Dropout Risk", current: 5, predicted: 3, trend: "down" },
  { label: "Engagement Score", current: 78, predicted: 82, trend: "up" },
]

export function AIInsights() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-600" />
            AI-Powered Insights
          </CardTitle>
          <CardDescription>Machine learning analysis of student data and performance patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiInsights.map((insight, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {insight.type === "prediction" && <Target className="w-4 h-4 text-blue-600" />}
                    {insight.type === "trend" && <TrendingUp className="w-4 h-4 text-green-600" />}
                    {insight.type === "recommendation" && <Lightbulb className="w-4 h-4 text-yellow-600" />}
                    {insight.type === "alert" && <AlertCircle className="w-4 h-4 text-red-600" />}
                    <h4 className="font-medium">{insight.title}</h4>
                  </div>
                  <Badge
                    variant={
                      insight.priority === "high"
                        ? "destructive"
                        : insight.priority === "medium"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {insight.priority}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">Confidence: {insight.confidence}%</div>
                  <Button variant="outline" size="sm">
                    {insight.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Predictive Analytics
          </CardTitle>
          <CardDescription>Forecasted metrics based on current performance trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {predictiveMetrics.map((metric, index) => (
              <div key={index} className="p-4 border rounded-lg text-center">
                <h4 className="font-medium text-sm mb-2">{metric.label}</h4>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">{metric.current}</div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-muted-foreground">→</span>
                    <span
                      className={`text-lg font-semibold ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}
                    >
                      {metric.predicted}
                    </span>
                    <TrendingUp
                      className={`w-4 h-4 ${metric.trend === "up" ? "text-green-600" : "text-red-600 rotate-180"}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
