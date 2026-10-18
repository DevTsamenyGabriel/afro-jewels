import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section className="py-12 md:py-20 bg-cream">
      <div className="max-w-xl mx-auto px-6 md:px-10 text-center">

        <p className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase text-gold-dark font-medium mb-5">
          <span className="w-5 h-px bg-gold-dark inline-block" />
          Stay Connected
        </p>

        <h2 className="font-serif font-light text-3xl md:text-4xl text-charcoal tracking-wide leading-[1.2] mb-4">
          Join the Afro Jewels Circle
        </h2>

        <p className="text-sm text-stone leading-relaxed mb-10 max-w-sm mx-auto">
          New collections, artisan portraits, and quiet offers — delivered to your inbox
          before anyone else hears about them. No clutter, ever.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="w-12 h-12 rounded-full border border-gold-light/60 bg-sand flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A87C4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <p className="font-serif text-xl text-charcoal tracking-wide">You're on the list.</p>
            <p className="text-sm text-stone">Watch your inbox for something beautiful.</p>
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1 min-w-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError('') }}
                  placeholder="Your email address"
                  aria-label="Email address"
                  className={`w-full bg-transparent border rounded-full px-6 py-4 text-sm text-charcoal placeholder-stone/50 tracking-wide focus:outline-none transition-colors duration-200 ${
                    error
                      ? 'border-red-400 focus:border-red-400'
                      : 'border-gold-light focus:border-gold'
                  }`}
                />
              </div>
              <button
                type="submit"
                className="shrink-0 bg-gold hover:bg-gold-dark text-cream text-xs tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors duration-200 font-medium"
              >
                Subscribe
              </button>
            </form>

            {error && (
              <p className="text-[10px] text-red-400 mt-3 pl-2 text-left tracking-wide">
                {error}
              </p>
            )}
          </>
        )}

        <p className="text-[10px] text-stone/40 mt-6 tracking-wide">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
