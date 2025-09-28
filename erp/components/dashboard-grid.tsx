import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  User,
  BookOpen,
  Calendar,
  Clock,
  FileText,
  BarChart3,
  Building,
  CreditCard,
  MessageCircle,
  Download,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  TrendingUp,
} from "lucide-react"

export function DashboardGrid() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-slate-900 text-balance mb-2">Welcome back, Sarthak</h2>
        <p className="text-slate-600 text-pretty">
          Here's an overview of your academic progress and upcoming activities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">Overall GPA</p>
                <p className="text-2xl font-semibold text-slate-900">8.7</p>
                <p className="text-emerald-600 text-xs font-medium flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3" />
                  Excellent
                </p>
              </div>
              <div className="bg-emerald-50 p-3 rounded-lg">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">Attendance</p>
                <p className="text-2xl font-semibold text-slate-900">87%</p>
                <p className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-1">
                  <CheckCircle className="h-3 w-3" />
                  Good Standing
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">Pending Dues</p>
                <p className="text-2xl font-semibold text-slate-900">₹12,500</p>
                <p className="text-amber-600 text-xs font-medium flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" />
                  Due Dec 31
                </p>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg">
                <AlertCircle className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">Credits Earned</p>
                <p className="text-2xl font-semibold text-slate-900">142/160</p>
                <p className="text-slate-600 text-xs font-medium mt-1">89% Complete</p>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg">
                <BookOpen className="h-5 w-5 text-slate-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Faculty Advisor */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <CardHeader className="pb-4 border-b border-slate-100">
            <CardTitle className="flex items-center gap-3 text-slate-900">
              <div className="bg-indigo-50 p-2 rounded-lg">
                <User className="h-5 w-5 text-indigo-600" />
              </div>
              Faculty Advisor
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-lg text-slate-900">Dr. Arpit Bala</p>
                <p className="text-slate-600 text-sm">Computer Science Department</p>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span>📞</span>
                <span>+91 9853640121</span>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                Schedule Meet
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Academics */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <CardHeader className="pb-4 border-b border-slate-100">
            <CardTitle className="flex items-center gap-3 text-slate-900">
              <div className="bg-emerald-50 p-2 rounded-lg">
                <BookOpen className="h-5 w-5 text-emerald-600" />
              </div>
              Academic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-lg text-slate-900">B.Tech Computer Science</p>
                <p className="text-slate-600 text-sm">Semester 5 • Section C</p>
              </div>
              <p className="text-slate-500 text-sm">Registration: 2023CSE001</p>
            </div>
            <div className="flex gap-3 pt-2">
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                <FileText className="h-4 w-4 mr-2" />
                Transcript
              </Button>
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                <ExternalLink className="h-4 w-4 mr-2" />
                Details
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Time Table */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <CardHeader className="pb-4 border-b border-slate-100">
            <CardTitle className="flex items-center gap-3 text-slate-900">
              <div className="bg-blue-50 p-2 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-medium text-slate-800">Data Structures</span>
                <Badge variant="secondary" className="bg-slate-200 text-slate-700">
                  9:00 AM
                </Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-medium text-slate-800">Machine Learning</span>
                <Badge variant="secondary" className="bg-slate-200 text-slate-700">
                  11:00 AM
                </Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-medium text-slate-800">Database Systems</span>
                <Badge variant="secondary" className="bg-slate-200 text-slate-700">
                  2:00 PM
                </Badge>
              </div>
            </div>
            <Button size="sm" variant="outline" className="w-full bg-transparent">
              <Calendar className="h-4 w-4 mr-2" />
              View Full Schedule
            </Button>
          </CardContent>
        </Card>

        {/* Attendance */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <CardHeader className="pb-4 border-b border-slate-100">
            <CardTitle className="flex items-center gap-3 text-slate-900">
              <div className="bg-orange-50 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              Attendance Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-slate-800">Overall Attendance</span>
                <span className="text-xl font-semibold text-slate-900">87%</span>
              </div>
              <div className="bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-orange-500 h-full rounded-full transition-all duration-300"
                  style={{ width: "87%" }}
                ></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                  <p className="text-xl font-semibold text-emerald-700">156</p>
                  <p className="text-xs text-emerald-600 font-medium">Present</p>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg border border-red-100">
                  <p className="text-xl font-semibold text-red-700">23</p>
                  <p className="text-xs text-red-600 font-medium">Absent</p>
                </div>
              </div>
            </div>
            <Button size="sm" variant="outline" className="w-full bg-transparent">
              <BarChart3 className="h-4 w-4 mr-2" />
              Detailed Report
            </Button>
          </CardContent>
        </Card>

        {/* Study Materials */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <CardHeader className="pb-4 border-b border-slate-100">
            <CardTitle className="flex items-center gap-3 text-slate-900">
              <div className="bg-violet-50 p-2 rounded-lg">
                <FileText className="h-5 w-5 text-violet-600" />
              </div>
              Study Resources
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-medium text-slate-800">Lecture Notes</span>
                <Badge variant="secondary" className="bg-slate-200 text-slate-700">
                  24 files
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-medium text-slate-800">Previous Papers</span>
                <Badge variant="secondary" className="bg-slate-200 text-slate-700">
                  12 files
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-medium text-slate-800">Lab Manuals</span>
                <Badge variant="secondary" className="bg-slate-200 text-slate-700">
                  8 files
                </Badge>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <Button size="sm" className="flex-1 bg-violet-600 hover:bg-violet-700">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                Browse All
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Exam Schedule */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <CardHeader className="pb-4 border-b border-slate-100">
            <CardTitle className="flex items-center gap-3 text-slate-900">
              <div className="bg-rose-50 p-2 rounded-lg">
                <Calendar className="h-5 w-5 text-rose-600" />
              </div>
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-100">
                <span className="font-medium text-slate-800">TedTalk-2025</span>
                <Badge className="bg-red-600 text-white">Dec 15</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border border-orange-100">
                <span className="font-medium text-slate-800">Nirman-2025</span>
                <Badge className="bg-orange-600 text-white">Dec 18</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                <span className="font-medium text-slate-800">RythmNova</span>
                <Badge className="bg-amber-600 text-white">Dec 22</Badge>
              </div>
            </div>
            <Button size="sm" variant="outline" className="w-full bg-transparent">
              <Calendar className="h-4 w-4 mr-2" />
              Full Schedule
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <CardHeader className="pb-4 border-b border-slate-100">
            <CardTitle className="flex items-center gap-3 text-slate-900">
              <div className="bg-teal-50 p-2 rounded-lg">
                <BarChart3 className="h-5 w-5 text-teal-600" />
              </div>
              Academic Results
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-medium text-slate-800">Mid-Sem Average</span>
                <Badge className="bg-teal-600 text-white text-base px-3 py-1">8.4</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-medium text-slate-800">Assignment Average</span>
                <Badge className="bg-emerald-600 text-white text-base px-3 py-1">9.1</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-medium text-slate-800">Lab Average</span>
                <Badge className="bg-teal-700 text-white text-base px-3 py-1">8.8</Badge>
              </div>
            </div>
            <Button size="sm" variant="outline" className="w-full bg-transparent">
              <FileText className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </CardContent>
        </Card>

        {/* Hostel */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <CardHeader className="pb-4 border-b border-slate-100">
            <CardTitle className="flex items-center gap-3 text-slate-900">
              <div className="bg-amber-50 p-2 rounded-lg">
                <Building className="h-5 w-5 text-amber-600" />
              </div>
              Hostel Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-lg text-slate-900">Boys Residence III</p>
                <p className="text-slate-600 text-sm">Room F-301, Bed 3</p>
              </div>
              <p className="text-slate-500 text-sm">Registered: 27-Sep-2023</p>
            </div>
            <div className="flex gap-3 pt-2">
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                Apply Leave
              </Button>
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                Complaints
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Fees & Dues */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <CardHeader className="pb-4 border-b border-slate-100">
            <CardTitle className="flex items-center gap-3 text-slate-900">
              <div className="bg-red-50 p-2 rounded-lg">
                <CreditCard className="h-5 w-5 text-red-600" />
              </div>
              Fees & Payments
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
              <p className="text-2xl font-semibold text-red-700">₹12,500</p>
              <p className="text-slate-600 font-medium text-sm">Outstanding Amount</p>
              <p className="text-red-600 text-xs font-medium mt-1">Due: December 31, 2024</p>
            </div>
            <div className="flex gap-3">
              <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                Pay Now
              </Button>
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
