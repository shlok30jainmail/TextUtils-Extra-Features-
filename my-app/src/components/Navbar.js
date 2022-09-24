import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>

            </li>
          </ul>
          {/* <div class="btn-group mx-2" role="group" aria-label="First group">
    <button type="button" onClick={props.color} className="btn btn-outline-light">Light</button>
    <button type="button" onClick={props.color} className="btn btn-outline-success">Green</button>
    <button type="button" onClick={props.color} className="btn btn-outline-secondary">Grey</button>
    <button type="button" onClick={props.color} className="btn btn-outline-danger">red</button>
  </div> */}
          {/* for making a search button */}
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        */}
        {/* exercise solution */}
          <div className={`form-check form-switch text-light text-${props.mode === 'light' || 'dark' ? 'primary' : 'light'}`}>
            <input className="form-check-input" onClick={props.colorMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable ColorMode</label>
          </div>
          {/* exercise solution end */}
          
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>


        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About Text here'
}