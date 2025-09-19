"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm your AI assistant. I can help you with academic queries, find study materials, check your schedule, and much more. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("attendance")) {
      return "Your current attendance is 87%. You need to maintain at least 75% to be eligible for exams. You have 23 absent days out of 179 total days."
    }

    if (lowerQuery.includes("schedule") || lowerQuery.includes("timetable")) {
      return "Today's schedule: Data Structures at 9:00 AM, Machine Learning at 11:00 AM, and Database Systems at 2:00 PM. Would you like me to show your full weekly schedule?"
    }

    if (lowerQuery.includes("exam") || lowerQuery.includes("test")) {
      return "Your upcoming exams: Data Structures on Dec 15, Machine Learning on Dec 18, and Database Systems on Dec 22. Would you like study material recommendations for any of these subjects?"
    }

    if (lowerQuery.includes("fees") || lowerQuery.includes("dues")) {
      return "You have ₹12,500 in outstanding dues with a due date of Dec 31, 2024. This includes tuition fees and hostel charges. Would you like me to help you with the payment process?"
    }

    if (lowerQuery.includes("gpa") || lowerQuery.includes("grades")) {
      return "Your current GPA is 8.7. Your mid-semester average is 8.4, assignment average is 9.1, and lab average is 8.8. Great work! Keep it up!"
    }

    if (lowerQuery.includes("study material") || lowerQuery.includes("notes")) {
      return "I can help you access study materials! You have 24 lecture notes, 12 previous year papers, and 8 lab manuals available. Which subject are you looking for?"
    }

    if (lowerQuery.includes("faculty") || lowerQuery.includes("professor")) {
      return "Your faculty advisor is Dr. Debahuti Paikaray from the Computer Science Department. You can chat with her directly through the Faculty Chat feature or schedule a meeting. Would you like me to help you compose a message?"
    }

    return (
      "I understand you're asking about " +
      query +
      ". I can help you with attendance, schedules, exams, fees, grades, study materials, and faculty communication. Could you please be more specific about what you'd like to know?"
    )
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn("fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50", isOpen && "hidden")}
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-xl z-50 flex flex-col">
          <CardHeader className="pb-3 border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-primary">
                <Bot className="h-5 w-5" />
                AI Assistant
              </CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn("flex gap-3", message.sender === "user" ? "justify-end" : "justify-start")}
                  >
                    {message.sender === "bot" && (
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      {message.content}
                    </div>
                    {message.sender === "user" && (
                      <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything about your academics..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
