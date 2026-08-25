export default function ChatBox({ messages, input, loading, onInputChange, onSendMessage, messagesEndRef }) {
  return (
    <div className="w-full max-w-2xl pastel-card">
      <div className="h-96 overflow-y-auto mb-6 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-xl ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-purple-400 to-pink-300 text-white'
                  : 'bg-pastel-blue text-gray-800'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-pastel-blue text-gray-800 px-4 py-3 rounded-xl flex gap-2">
              <span>⏳</span> Yazıyor...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={onSendMessage} className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Sorunuzu yazın..."
          className="ai-input flex-1"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-50"
        >
          {loading ? '⏳' : '📤'}
        </button>
      </form>
    </div>
  )
}