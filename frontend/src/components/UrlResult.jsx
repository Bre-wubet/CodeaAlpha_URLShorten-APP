import React from 'react'

function UrlResult({ shortUrl }) {
  return (
    <div className="mt-6 bg-white border rounded-lg shadow p-4 text-center">
      <p className="text-gray-700 mb-2">Your short URL:</p>
      <a
        href={shortUrl}
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