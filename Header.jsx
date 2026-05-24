import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container">
        <h1><Link to="/">Zaarif&apos;s Pizza</Link></h1>

        <button
          type="button"
          className="nav-toggle"
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
          <span aria-hidden="true"> {menuOpen ? '×' : '☰'}</span>
        </button>

        <nav id="site-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>Our Story</Link></li>
            <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
