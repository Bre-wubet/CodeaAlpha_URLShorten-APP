import React from 'react'
import api from '../api'

function UrlResult({ shortUrl }) {
  const handleClick = async (e) => {
    e.preventDefault()

    // Extract short code from shortUrl
    const shortCode = shortUrl.split('/').pop()

    try {
      const response = await api.get(`/${shortCode}`) // GET /:shortCode
      const { originalUrl } = response.data

      // Redirect to original URL
      window.location.assign(originalUrl)
    } catch (error) {
      console.error('Error fetching original URL:', error)
      alert('Could not resolve short URL.')
    }
  }

  return (
    <div className="mt-6 bg-white border rounded-lg shadow p-4 text-center">
      <p className="text-gray-700 mb-2">Your short URL:</p>
      <a
        href={shortUrl}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium underline break-all"
      >
        {shortUrl}
      </a>
    </div>
  )
}

export default UrlResult
