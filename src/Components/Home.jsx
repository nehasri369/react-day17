import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className="home-container">
        <span className="home-badge">
          ✨ YOUR NEW FAVORITE STORE
        </span>

        <h1>
          Discover Your <span>Perfect Style</span>
        </h1>

        <p>
          Explore amazing products and discover something
          special for every day. Your shopping journey starts here!
        </p>

        <Link to="/about" className="shop-btn">
          Explore Our Store →
        </Link>
      </section>

      <section className="features">
        <h2 className="section-title">Why Shop With Us?</h2>

        <p className="section-subtitle">
          A better shopping experience, designed for you.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Get your favorite products delivered conveniently.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Shopping</h3>
            <p>Enjoy a simple and comfortable shopping experience.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💜</div>
            <h3>Customer First</h3>
            <p>Your satisfaction is at the heart of our store.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 <span>ShopEase</span>. Built with React.
      </footer>
    </>
  )
}

export default Home