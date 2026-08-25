import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.title = 'Zekai-AI - Akıllı Yardımcınız'
  }, [])

  return <Component {...pageProps} />
}

export default MyApp