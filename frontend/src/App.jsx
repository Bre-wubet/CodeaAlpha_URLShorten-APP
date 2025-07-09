import { useState } from "react"
import UrlForm from "./components/UrlForm"
import UrlResult from "./components/UrlResult"

function App() {
  const [shortUrl, setShortUrl] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">URL Shortener</h1>
      <UrlForm onShorten={setShortUrl} />
      {shortUrl && <UrlResult shortUrl={shortUrl} />}
    </div>
  )
}

export default App
