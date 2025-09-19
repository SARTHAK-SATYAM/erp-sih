export const maxDuration = 30

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const facultyResponses = {
  greetings: [
    "Hello! I'm here to help you with student management and educational insights. What would you like to know?",
    "Hi there! I can assist you with attendance, grades, student performance, and more. How can I help?",
    "Welcome! I'm your faculty assistant. Ask me about student analytics, course management, or teaching strategies.",
  ],

  attendance: [
    "For attendance management, you can use the Attendance tab to mark daily attendance, view patterns, and identify students with concerning absence rates. Students with less than 75% attendance are automatically flagged.",
    "To improve attendance, consider implementing engagement strategies like interactive sessions, attendance incentives, or reaching out to students with declining patterns early.",
    "The attendance analytics show trends over time. Look for patterns like Monday/Friday absences or drops after exam periods to address systemic issues.",
  ],

  grades: [
    "For grade management, focus on continuous assessment rather than just final exams. The system tracks assignment submissions, quiz scores, and participation.",
    "Students performing below 60% are automatically flagged as at-risk. Consider providing additional support, study groups, or one-on-one sessions.",
    "Use the grade distribution charts to ensure fair assessment. A healthy distribution typically shows most students in the B-C range with fewer A's and F's.",
  ],

  performance: [
    "Student performance analysis combines attendance, grades, assignment submissions, and engagement metrics. Look for students showing declining trends across multiple areas.",
    "Early intervention is key. Reach out to students showing warning signs before they fall too far behind.",
    "The performance dashboard highlights top performers who could mentor struggling students, and at-risk students who need immediate attention.",
  ],

  teaching: [
    "Effective teaching strategies include active learning, regular feedback, and adapting to different learning styles. Use varied assessment methods to engage all students.",
    "Consider flipped classroom techniques where students review materials before class and use class time for discussion and problem-solving.",
    "Regular check-ins with students help identify learning difficulties early and show that you care about their success.",
  ],

  default: [
    "I can help you with student performance analysis, attendance tracking, grade management, teaching strategies, and administrative tasks. What specific area would you like to explore?",
    "As your faculty assistant, I'm here to support your educational goals. Try asking about attendance patterns, student grades, or teaching methods.",
    "I have insights on student analytics, course management, and educational best practices. What would you like to know more about?",
  ],
}

function getResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return facultyResponses.greetings[Math.floor(Math.random() * facultyResponses.greetings.length)]
  }

  if (lowerMessage.includes("attendance") || lowerMessage.includes("absent") || lowerMessage.includes("present")) {
    return facultyResponses.attendance[Math.floor(Math.random() * facultyResponses.attendance.length)]
  }

  if (
    lowerMessage.includes("grade") ||
    lowerMessage.includes("score") ||
    lowerMessage.includes("mark") ||
    lowerMessage.includes("assessment")
  ) {
    return facultyResponses.grades[Math.floor(Math.random() * facultyResponses.grades.length)]
  }

  if (
    lowerMessage.includes("performance") ||
    lowerMessage.includes("progress") ||
    lowerMessage.includes("struggling") ||
    lowerMessage.includes("at-risk")
  ) {
    return facultyResponses.performance[Math.floor(Math.random() * facultyResponses.performance.length)]
  }

  if (
    lowerMessage.includes("teach") ||
    lowerMessage.includes("strategy") ||
    lowerMessage.includes("method") ||
    lowerMessage.includes("classroom")
  ) {
    return facultyResponses.teaching[Math.floor(Math.random() * facultyResponses.teaching.length)]
  }

  return facultyResponses.default[Math.floor(Math.random() * facultyResponses.default.length)]
}

export async function POST(req: Request) {
  try {
    const { messages }: { messages: Message[] } = await req.json()

    if (!messages || messages.length === 0) {
      return new Response("No messages provided", { status: 400 })
    }

    const lastMessage = messages[messages.length - 1]
    const response = getResponse(lastMessage.content)

    // Simulate streaming response like AI SDK
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      start(controller) {
        // Send the response character by character to simulate streaming
        let index = 0
        const interval = setInterval(() => {
          if (index < response.length) {
            controller.enqueue(encoder.encode(response[index]))
            index++
          } else {
            clearInterval(interval)
            controller.close()
          }
        }, 20) // Adjust speed as needed
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response("Internal server error", { status: 500 })
  }
}
