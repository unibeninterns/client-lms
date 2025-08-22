import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Lock, Calendar, Users, Download, ChevronDown, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Raymond</h1>
          <p className="text-gray-600">You&apos;re currently enrolled in:</p>
          <h2 className="text-xl font-semibold text-gray-900">Research Technologies & Innovation</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
            <Calendar className="h-4 w-4" />
            <span>You have 6 weeks remaining to complete this course</span>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src="/laboratory-beaker-flask-science.png" alt="Laboratory beaker" width={120} height={120} className="opacity-60" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <Progress value={50} className="h-3" />
        <p className="text-sm text-gray-600">You&apos;re doing great — just 6 modules to go!</p>
      </div>

      {/* Week Indicator and Next Session */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-6 text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-purple-300 bg-white flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-semibold text-purple-600">Week</div>
                <div className="text-2xl font-bold text-purple-600">7</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">You&apos;re currently in Week 7 of 12 — just 6 weeks to go!</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">NEXT LIVE SESSION</p>
                <h3 className="text-lg font-semibold text-gray-900">Data Analysis & Visualization</h3>
                <p className="text-gray-600">with Dr. Trisha Okonkwo</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Wed, Aug 7 • 3:00 PM – 4:30 PM (WAT)</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>Live on Zoom</span>
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">JOIN SESSION</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Module Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Module 6</p>
                <CardTitle className="text-lg">Data Cleaning & Preprocessing</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              <CheckCircle className="h-3 w-3 mr-1" />
              Completed
            </Badge>
            <p className="text-sm text-gray-600">3 of 3 Lessons Completed</p>
            <Button
              variant="outline"
              className="w-full text-purple-600 border-purple-600 hover:bg-purple-50 bg-transparent"
            >
              View Summary
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Module 7</p>
                <CardTitle className="text-lg">Data Analysis & Visualization</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
              <Clock className="h-3 w-3 mr-1" />
              In Progress
            </Badge>
            <p className="text-sm text-gray-600">1 of 3 Lessons Completed</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Resume Module</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Module 7</p>
                <CardTitle className="text-lg">Academic Writing & Referencing</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-100">
              <Lock className="h-3 w-3 mr-1" />
              Locked
            </Badge>
            <p className="text-sm text-gray-600">Unlock after completing Module 7</p>
            <Button variant="outline" disabled className="w-full bg-transparent">
              Unlock
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Analysis */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Progress Analysis</CardTitle>
              <Button variant="outline" size="sm">
                Weekly <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Modules Completed</p>
                  <p className="text-2xl font-bold">6 of 12</p>
                  <p className="text-sm text-gray-500">50% Completed</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average Weekly Study Time</p>
                  <p className="text-2xl font-bold">1.5 hrs</p>
                  <p className="text-sm text-gray-500">per week</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Quiz Pass Rate</p>
                  <p className="text-2xl font-bold">80%</p>
                  <p className="text-sm text-gray-500">Great job! Keep it up.</p>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                  <p>Progress Chart</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities & Certificate Progress */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Completed Module 6</p>
                  <p className="text-xs text-gray-500">Data Cleaning & Preprocessing</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Attempted Quiz 6</p>
                  <p className="text-xs text-gray-500">Score: 80%</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Download className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Downloaded</p>
                  <p className="text-xs text-gray-500">Data Analysis pdf</p>
                </div>
              </div>

              <Button variant="ghost" className="w-full text-purple-600 hover:bg-purple-50">
                View all activities <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certificate Progress</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="2"
                    strokeDasharray="50, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-600">50%</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Small progress is still progress. You are doing great!</p>
              <Button variant="ghost" className="text-purple-600 hover:bg-purple-50">
                View requirements <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
