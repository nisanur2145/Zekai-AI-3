export default function Header() {
  return (
    <header className="w-full bg-white/50 backdrop-blur-md border-b-2 border-pastel-purple/30 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🧠</div>
          <h1 className="gradient-text text-3xl font-bold">Zekai-AI</h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">Ana Sayfa</a>
          <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">Hakkında</a>
          <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">İletişim</a>
        </nav>
        <button className="md:hidden text-2xl text-purple-600">☰</button>
      </div>
    </header>
  )
}