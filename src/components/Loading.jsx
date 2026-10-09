export default function Loading({ texto = 'A carregar...' }) {
  return (
    <div className="estado">
      <div className="spinner" />
      <p>{texto}</p>
    </div>
  )
}
