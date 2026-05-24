function About() {
  return (
    <article className="single-post about-page">
      <header>
        <h1>Our Story</h1>
        <p className="subtitle">Fresh Ingredients. Authentic Taste. Italian Heart.</p>
        <p className="meta">Since 1995</p>
      </header>

      <section>
          <div className="about-images">
            <img src="http://cafe.local/wp-content/uploads/2026/05/image-1.png" alt="Margherita pizza" />
          </div>
        <p>
          Zaarif’s Pizza began in 1995 with a small family recipe passed down from my grandfather, who grew up in Southern Italy surrounded by traditional wood-fired cooking and homemade sauces.
          What started as a passion for making authentic pizza for family gatherings slowly became a dream of sharing those flavors with others.
        </p>

        <p>
          Inspired by his recipes, warm hospitality, and love for bringing people together through food, Zaarif’s Pizza was created to offer a cozy Italian café experience filled with fresh ingredients, handmade dough, and the true taste of tradition.
        </p>

        <p>
          We use only the finest ingredients, prepare everything with care, and invite you to enjoy a meal that feels both familiar and special.
        </p>
      </section>

      <footer className="page-note">
        <p>Twenty Twenty-Five — Designed with WordPress.</p>
      </footer>
    </article>
  )
}

export default About
