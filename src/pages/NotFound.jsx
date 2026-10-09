import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="estado">
      <h1>404</h1>
      <p>Página não encontrada.</p>
      <Link className="btn" to="/">Ir para o início</Link>
    </div>
  )
}
