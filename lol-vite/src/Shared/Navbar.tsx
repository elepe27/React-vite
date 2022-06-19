import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <p className="is-white"> PaisesApp </p>
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
    
    <NavLink className="navbar-item" to="/" >Home</NavLink>
    
    <NavLink className="navbar-item" to="/about" >About</NavLink>
    
    <NavLink className="navbar-item" to="/login">Login</NavLink>
     
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}
