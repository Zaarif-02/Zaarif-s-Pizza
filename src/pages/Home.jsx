import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Authentic Italian pizza</span>
          <h1>Fresh flavors, warm hospitality, and the real taste of Italy.</h1>
          <p>
            Zaarif&apos;s Pizza serves handcrafted pies with premium ingredients, 
            house-made dough, and a cozy neighborhood vibe.
          </p>
          <div className="hero-actions">
            <Link to="/menu" className="button">View Menu</Link>
            <Link to="/about" className="button button-secondary">Our Story</Link>
          </div>
        </div>
      </section>

      <section className="feature-grid">
        <article>
          <h2>Wood-fired crust</h2>
          <p>Each pizza is baked to order for a crisp edge and soft, airy center.</p>
        </article>
        <article>
          <h2>Locally sourced</h2>
          <p>We choose fresh produce, artisan cheeses, and quality ingredients daily.</p>
        </article>
        <article>
          <h2>Neighborhood favorite</h2>
          <p>Enjoy friendly service and a welcoming atmosphere for every visit.</p>
        </article>
      </section>
    </main>
  )
}

export default Home
