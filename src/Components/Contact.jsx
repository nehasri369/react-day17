import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert(`Thank you, ${form.name}! Your message has been received.`)

    setForm({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section className="contact-container">
      <span className="home-badge">💌 WE'D LOVE TO HEAR FROM YOU</span>

      <h1>Get In Touch</h1>

      <p>
        Have a question or suggestion? Fill out the form below
        and let us know how we can help.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message →</button>
      </form>
    </section>
  )
}

export default Contact