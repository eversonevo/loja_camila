import "./NavBar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="navbar">
      <h2>Loja Camila</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/clients">Clientes</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/sales">Vendas</Link>
        <Link to="/reports">Relatórios</Link>
      </nav>
    </header>
  )
}

export default Navbar