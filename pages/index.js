import { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import ChatBox from '../components/ChatBox'
import Footer from '../components/Footer'

export default function Home() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Merhaba! 👋 Ben Zekai-AI. Sana nasıl yardımcı olabilirim?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      })

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Bir hata oluştu. Lütfen tekrar deneyin.' }])
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pastel-pink via-pastel-purple to-pastel-blue">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <ChatBox
          messages={messages}
          input={input}
          loading={loading}
          onInputChange={setInput}
          onSendMessage={handleSendMessage}
          messagesEndRef={messagesEndRef}
        />
      </main>
      <Footer />
    </div>
  )
}