import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo">🐾 AdotaPet</Link>
        <nav>
          <NavLink to="/" end>Animais</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
      </div>
    </header>
  )
}
