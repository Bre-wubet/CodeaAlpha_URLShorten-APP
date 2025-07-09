import { useState } from 'react'
import api from '../api'

function UrlForm({ onShorten }) {
    const [longUrl, setLongUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await api.post('/shorten', { longUrl });
        onShorten(res.data.shortUrl)
    }
  return (
    <div>
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-full">
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Paste your long URL here..."
        className="w-full px-10 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition duration-200"
      >
        Shorten URL
      </button>
    </form>
    </div>
  )
}

export default UrlForm