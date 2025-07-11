import { useState } from 'react'
import api from '../api'

function UrlForm({ onShorten }) {
    const [originalUrl, setOriginalUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await api.post('/shorten', { originalUrl });
        onShorten(res.data.shortUrl, originalUrl)
    }
  return (
    <form onSubmit={handleSubmit} className="items-center justify-center flex flex-col space-y-4 w-full">
      <input
        type="text"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="Paste your long URL here..."
        className="p-3 w-7/12 m-1 rounded-lg shadow-sm focus:outline-none border-blue-800 border-l-2 border-b-2 focus:border-blue-950"
        required
      />
      <button
        type="submit"
        className="w-7/12 bg-blue-400 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition duration-200"
      >
        Shorten URL
      </button>
    </form>
  )
}

export default UrlForm