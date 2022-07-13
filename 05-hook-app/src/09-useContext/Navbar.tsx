
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark rounded-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">useContext</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="login">Login</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
