import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="notfound-container">
      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you're looking for doesn't exist
        or may have been moved.
      </p>

      <Link to="/">
        ← Back to Home
      </Link>
    </section>
  )
}

export default NotFound