import React from 'react'

function UrlResult({ shortUrl, originalUrl }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.assign(originalUrl);
  };
  return (
    <div className="mt-6 bg-white border rounded-lg shadow p-4 text-center">
      <p className="text-gray-700 mb-2">Your short URL:</p>
      <a
        href={shortUrl}
        onClick={handleClick}
        target="_blank"
        className="text-blue-600 font-medium underline break-all"
      >
        {shortUrl}
      </a>
    </div>
  )
}

export default UrlResult