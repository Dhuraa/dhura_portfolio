import emailjs from "@emailjs/browser";
import { useState } from 'react'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setForm(initialForm);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 max-w-4xl mx-auto w-full" id="contact">
      <div className="text-center mb-16">
        <h2 className="text-primary font-label-mono text-sm tracking-widest uppercase mb-4">Connect</h2>
        <h3 className="text-white text-5xl font-display-xl mb-6">Let&apos;s build something.</h3>
        <p className="text-on-surface-variant text-lg">
          Currently available for freelance opportunities or full-time roles.
        </p>
      </div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-label-mono text-on-surface-variant uppercase pl-2" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              className="bg-surface-container border-outline-variant text-white rounded-xl h-14 px-4 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="John Doe"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-label-mono text-on-surface-variant uppercase pl-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              className="bg-surface-container border-outline-variant text-white rounded-xl h-14 px-4 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="john@example.com"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-label-mono text-on-surface-variant uppercase pl-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-surface-container border-outline-variant text-white rounded-xl p-4 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            placeholder="Tell me about your project..."
            rows="6"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full h-16 bg-primary text-on-primary-container font-bold text-lg rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? "Sending..." : "Send Message"}
        </button>
        {submitted && (
          <div className="text-green-400 text-center font-medium mt-4">
            ✅ Message sent successfully! I'll get back to you soon.
          </div>
        )}
      </form>
    </section>
  )
}
