"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { Users, CheckCircle, XCircle, Clock, Download, Search, Save, AlertTriangle } from "lucide-react"

const courses = [
  { id: 1, name: "Computer Science 101", students: 45, time: "09:00 AM" },
  { id: 2, name: "Data Structures", students: 38, time: "11:00 AM" },
  { id: 3, name: "Web Development", students: 32, time: "02:00 PM" },
]

const studentsData = [
  {
    id: 1,
    name: "Alice Johnson",
    rollNumber: "CS2021001",
    avatar: "/student-avatar.png",
    attendance: { present: 28, absent: 4, late: 2, total: 34 },
    recentAttendance: ["present", "present", "absent", "present", "late"],
  },
  {
    id: 2,
    name: "Bob Smith",
    rollNumber: "CS2021002",
    avatar: "/student-avatar.png",
    attendance: { present: 22, absent: 8, late: 4, total: 34 },
    recentAttendance: ["absent", "present", "absent", "late", "present"],
  },
  {
    id: 3,
    name: "Carol Davis",
    rollNumber: "CS2021003",
    avatar: "/student-avatar.png",
    attendance: { present: 30, absent: 2, late: 2, total: 34 },
    recentAttendance: ["present", "present", "present", "present", "present"],
  },
  {
    id: 4,
    name: "David Wilson",
    rollNumber: "CS2021004",
    avatar: "/student-avatar.png",
    attendance: { present: 25, absent: 6, late: 3, total: 34 },
    recentAttendance: ["present", "absent", "present", "late", "absent"],
  },
]

const attendanceData = [
  { date: "2024-01-01", present: 42, absent: 3, late: 0 },
  { date: "2024-01-02", present: 40, absent: 4, late: 1 },
  { date: "2024-01-03", present: 44, absent: 1, late: 0 },
  { date: "2024-01-04", present: 38, absent: 5, late: 2 },
  { date: "2024-01-05", present: 43, absent: 2, late: 0 },
]

export function AttendanceManagement() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0])
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [searchTerm, setSearchTerm] = useState("")
  const [attendanceStatus, setAttendanceStatus] = useState<Record<number, string>>({})

  const filteredStudents = studentsData.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getAttendancePercentage = (student: any) => {
    return Math.round((student.attendance.present / student.attendance.total) * 100)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "text-green-600 bg-green-50"
      case "absent":
        return "text-red-600 bg-red-50"
      case "late":
        return "text-yellow-600 bg-yellow-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="w-4 h-4" />
      case "absent":
        return <XCircle className="w-4 h-4" />
      case "late":
        return <Clock className="w-4 h-4" />
      default:
        return null
    }
  }

  const handleAttendanceChange = (studentId: number, status: string) => {
    setAttendanceStatus((prev) => ({ ...prev, [studentId]: status }))
  }

  const saveAttendance = () => {
    // Here you would save the attendance data
    console.log("Saving attendance:", attendanceStatus)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Attendance Management</h2>
          <p className="text-muted-foreground">Track and manage student attendance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button onClick={saveAttendance}>
            <Save className="w-4 h-4 mr-2" />
            Save Attendance
          </Button>
        </div>
      </div>

      <Tabs defaultValue="mark-attendance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="mark-attendance">Mark Attendance</TabsTrigger>
          <TabsTrigger value="attendance-overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="mark-attendance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Course and Date Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Class Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Course</label>
                  <Select
                    value={selectedCourse.id.toString()}
                    onValueChange={(value) =>
                      setSelectedCourse(courses.find((c) => c.id === Number.parseInt(value)) || courses[0])
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id.toString()}>
                          {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Date</label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => date && setSelectedDate(date)}
                    className="rounded-md border"
                  />
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span>Total Students:</span>
                      <span className="font-medium">{selectedCourse.students}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Class Time:</span>
                      <span className="font-medium">{selectedCourse.time}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Student List */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Student Attendance</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const newStatus: Record<number, string> = {}
                        filteredStudents.forEach((student) => {
                          newStatus[student.id] = "present"
                        })
                        setAttendanceStatus(newStatus)
                      }}
                    >
                      Mark All Present
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const newStatus: Record<number, string> = {}
                        filteredStudents.forEach((student) => {
                          newStatus[student.id] = "absent"
                        })
                        setAttendanceStatus(newStatus)
                      }}
                    >
                      Mark All Absent
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredStudents.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={student.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.rollNumber}</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Attendance: </span>
                          <span className={getAttendancePercentage(student) >= 75 ? "text-green-600" : "text-red-600"}>
                            {getAttendancePercentage(student)}%
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Recent Attendance */}
                        <div className="flex gap-1 mr-4">
                          {student.recentAttendance.map((status, index) => (
                            <div
                              key={index}
                              className={`w-3 h-3 rounded-full ${
                                status === "present"
                                  ? "bg-green-500"
                                  : status === "absent"
                                    ? "bg-red-500"
                                    : "bg-yellow-500"
                              }`}
                              title={status}
                            />
                          ))}
                        </div>

                        {/* Attendance Buttons */}
                        <div className="flex gap-2">
                          <Button
                            variant={attendanceStatus[student.id] === "present" ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleAttendanceChange(student.id, "present")}
                            className="text-green-600 border-green-600 hover:bg-green-50"
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Present
                          </Button>
                          <Button
                            variant={attendanceStatus[student.id] === "late" ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleAttendanceChange(student.id, "late")}
                            className="text-yellow-600 border-yellow-600 hover:bg-yellow-50"
                          >
                            <Clock className="w-4 h-4 mr-1" />
                            Late
                          </Button>
                          <Button
                            variant={attendanceStatus[student.id] === "absent" ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleAttendanceChange(student.id, "absent")}
                            className="text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <XCircle className="w-4 h-4 mr-1" />
                            Absent
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="attendance-overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87.3%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+2.1%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Students at Risk</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-600">Below 75%</span> attendance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Perfect Attendance</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">100%</span> attendance rate
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Student Attendance Summary</CardTitle>
              <CardDescription>Individual student attendance records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentsData.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={student.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.rollNumber}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-sm font-medium text-green-600">{student.attendance.present}</div>
                        <div className="text-xs text-muted-foreground">Present</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-yellow-600">{student.attendance.late}</div>
                        <div className="text-xs text-muted-foreground">Late</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-red-600">{student.attendance.absent}</div>
                        <div className="text-xs text-muted-foreground">Absent</div>
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-lg font-bold ${getAttendancePercentage(student) >= 75 ? "text-green-600" : "text-red-600"}`}
                        >
                          {getAttendancePercentage(student)}%
                        </div>
                        <div className="text-xs text-muted-foreground">Overall</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily Attendance Trends</CardTitle>
                <CardDescription>Attendance patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="present" stroke="hsl(var(--chart-1))" name="Present" />
                    <Line type="monotone" dataKey="absent" stroke="hsl(var(--chart-2))" name="Absent" />
                    <Line type="monotone" dataKey="late" stroke="hsl(var(--chart-3))" name="Late" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attendance Distribution</CardTitle>
                <CardDescription>Breakdown of attendance status</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={[
                      { status: "Present", count: 42, color: "#10b981" },
                      { status: "Late", count: 3, color: "#f59e0b" },
                      { status: "Absent", count: 5, color: "#ef4444" },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="status" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="hsl(var(--chart-1))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Generate Reports</CardTitle>
              <CardDescription>Create detailed attendance reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button variant="outline" className="h-24 flex flex-col gap-2 bg-transparent">
                  <Download className="w-6 h-6" />
                  <span>Daily Report</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2 bg-transparent">
                  <Download className="w-6 h-6" />
                  <span>Weekly Summary</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2 bg-transparent">
                  <Download className="w-6 h-6" />
                  <span>Monthly Report</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2 bg-transparent">
                  <Download className="w-6 h-6" />
                  <span>Student Wise</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2 bg-transparent">
                  <Download className="w-6 h-6" />
                  <span>Course Wise</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2 bg-transparent">
                  <Download className="w-6 h-6" />
                  <span>Defaulter List</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
