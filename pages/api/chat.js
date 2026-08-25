export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message } = req.body

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  // Basit yanıt sistemini. OpenAI API entegrasyonu için OPENAI_API_KEY gerekli
  const replies = {
    'merhaba': 'Merhaba! 👋 Hoş buldum!',
    'nasılsın': 'Çok iyiyim, teşekkür ederim! 😊 Sen nasılsın?',
    'yardım': 'Sana yardımcı olabileceğim konular: Sorular, bilgi, yazma yardımı, problem çözme...',
    'default': 'İlginç bir soru! 🤔 Bunun hakkında daha fazla bilgi verebilir misin?'
  }

  const messageLower = message.toLowerCase().trim()
  let reply = replies['default']

  for (const [key, value] of Object.entries(replies)) {
    if (messageLower.includes(key) && key !== 'default') {
      reply = value
      break
    }
  }

  res.status(200).json({ reply })
}