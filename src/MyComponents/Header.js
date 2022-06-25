import React from 'react'
import PropTypes from 'prop-types';


export default function Header(props) {
  return (
    <nav id="navbar-example2" className="navbar navbar-dark bg-dark px-3">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              contact
            </a>
          </li>
        </ul>
      </nav>
  )
}

Header.defaultProps = {
  title: "App Name"
}

Header.propTypes = {
  title: PropTypes.string
}