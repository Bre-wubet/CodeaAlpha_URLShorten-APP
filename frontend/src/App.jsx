import { useState } from "react"
import UrlForm from "./components/UrlForm"
import UrlResult from "./components/UrlResult"

function App() {
  const [shortUrl, setShortUrl] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');

  const handleShorten = (short, original) => {
    setShortUrl(short);
    setOriginalUrl(original);
  };

  return (
    <div className="items-center justify-center flex flex-col mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">URL Shortener</h1>
      <UrlForm onShorten={handleShorten} />
      {shortUrl && <UrlResult shortUrl={shortUrl} originalUrl={originalUrl} />}
    </div>
  )
}

export default App
