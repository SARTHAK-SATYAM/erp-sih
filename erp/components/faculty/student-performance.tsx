"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { Search, Download, MessageSquare, TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react"

const students = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@university.edu",
    course: "Computer Science",
    year: "3rd Year",
    gpa: 3.8,
    attendance: 92,
    status: "excellent",
    avatar: "/student-avatar.png",
    recentGrades: [85, 88, 92, 87, 90],
    subjects: [
      { name: "Data Structures", grade: 90, credits: 4 },
      { name: "Algorithms", grade: 88, credits: 4 },
      { name: "Database Systems", grade: 85, credits: 3 },
      { name: "Web Development", grade: 92, credits: 3 },
    ],
    performanceData: [
      { month: "Jan", score: 85 },
      { month: "Feb", score: 88 },
      { month: "Mar", score: 92 },
      { month: "Apr", score: 87 },
      { month: "May", score: 90 },
    ],
    skillsData: [
      { skill: "Programming", score: 90 },
      { skill: "Problem Solving", score: 85 },
      { skill: "Communication", score: 78 },
      { skill: "Teamwork", score: 82 },
      { skill: "Critical Thinking", score: 88 },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@university.edu",
    course: "Mathematics",
    year: "2nd Year",
    gpa: 3.2,
    attendance: 78,
    status: "at-risk",
    avatar: "/student-avatar.png",
    recentGrades: [65, 72, 68, 75, 70],
    subjects: [
      { name: "Calculus III", grade: 72, credits: 4 },
      { name: "Linear Algebra", grade: 68, credits: 3 },
      { name: "Statistics", grade: 75, credits: 3 },
      { name: "Discrete Math", grade: 70, credits: 4 },
    ],
    performanceData: [
      { month: "Jan", score: 65 },
      { month: "Feb", score: 72 },
      { month: "Mar", score: 68 },
      { month: "Apr", score: 75 },
      { month: "May", score: 70 },
    ],
    skillsData: [
      { skill: "Mathematical Reasoning", score: 75 },
      { skill: "Problem Solving", score: 70 },
      { skill: "Communication", score: 65 },
      { skill: "Analytical Thinking", score: 78 },
      { skill: "Attention to Detail", score: 72 },
    ],
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol.davis@university.edu",
    course: "Physics",
    year: "4th Year",
    gpa: 3.6,
    attendance: 88,
    status: "good",
    avatar: "/student-avatar.png",
    recentGrades: [82, 85, 80, 87, 84],
    subjects: [
      { name: "Quantum Physics", grade: 85, credits: 4 },
      { name: "Thermodynamics", grade: 82, credits: 3 },
      { name: "Electromagnetism", grade: 87, credits: 4 },
      { name: "Lab Physics", grade: 84, credits: 2 },
    ],
    performanceData: [
      { month: "Jan", score: 82 },
      { month: "Feb", score: 85 },
      { month: "Mar", score: 80 },
      { month: "Apr", score: 87 },
      { month: "May", score: 84 },
    ],
    skillsData: [
      { skill: "Scientific Method", score: 88 },
      { skill: "Data Analysis", score: 85 },
      { skill: "Laboratory Skills", score: 90 },
      { skill: "Mathematical Modeling", score: 82 },
      { skill: "Research", score: 86 },
    ],
  },
]

export function StudentPerformance() {
  const [selectedStudent, setSelectedStudent] = useState(students[0])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || student.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-600 bg-green-50"
      case "good":
        return "text-blue-600 bg-blue-50"
      case "at-risk":
        return "text-red-600 bg-red-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <CheckCircle className="w-4 h-4" />
      case "good":
        return <TrendingUp className="w-4 h-4" />
      case "at-risk":
        return <AlertTriangle className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Student Performance Tracking</h2>
          <p className="text-muted-foreground">Monitor and analyze individual student progress</p>
        </div>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Students</CardTitle>
            <div className="space-y-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Students</SelectItem>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="at-risk">At Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedStudent.id === student.id ? "bg-primary/10 border-primary" : "hover:bg-muted"
                  }`}
                  onClick={() => setSelectedStudent(student)}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={student.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{student.name}</p>
                      <p className="text-sm text-muted-foreground truncate">{student.course}</p>
                    </div>
                    <div
                      className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(student.status)}`}
                    >
                      {getStatusIcon(student.status)}
                      <span className="capitalize">{student.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Student Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={selectedStudent.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-lg">
                    {selectedStudent.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{selectedStudent.name}</CardTitle>
                  <CardDescription>
                    {selectedStudent.course} • {selectedStudent.year}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-1">{selectedStudent.email}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button size="sm">View Profile</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="subjects">Subjects</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{selectedStudent.gpa}</div>
                    <div className="text-sm text-muted-foreground">Current GPA</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{selectedStudent.attendance}%</div>
                    <div className="text-sm text-muted-foreground">Attendance</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div
                      className={`text-2xl font-bold capitalize ${getStatusColor(selectedStudent.status).split(" ")[0]}`}
                    >
                      {selectedStudent.status}
                    </div>
                    <div className="text-sm text-muted-foreground">Status</div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Performance Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={selectedStudent.performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="score" stroke="hsl(var(--chart-1))" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="performance" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Grade History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart
                        data={selectedStudent.recentGrades.map((grade, index) => ({
                          assignment: `Assignment ${index + 1}`,
                          grade,
                        }))}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="assignment" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="grade" fill="hsl(var(--chart-2))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="subjects" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedStudent.subjects.map((subject, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{subject.name}</h4>
                          <Badge variant="outline">{subject.credits} Credits</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-2xl font-bold">{subject.grade}%</div>
                          {subject.grade >= 85 ? (
                            <TrendingUp className="w-4 h-4 text-green-600" />
                          ) : subject.grade >= 70 ? (
                            <TrendingUp className="w-4 h-4 text-yellow-600" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-600" />
                          )}
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${subject.grade}%` }} />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="skills" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Skills Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <RadarChart data={selectedStudent.skillsData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="skill" />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} />
                        <Radar
                          name="Skills"
                          dataKey="score"
                          stroke="hsl(var(--chart-3))"
                          fill="hsl(var(--chart-3))"
                          fillOpacity={0.3}
                        />
                        <Tooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
