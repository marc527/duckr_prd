import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavLinks = ({ isAuthed }) => {
  return isAuthed ? (
    <ul>
      <li><Link to="/home">Home</Link></li>
    </ul>
  ) : null
}

const ActionLinks = ({ isAuthed }) => {
  return isAuthed ? (
    <ul>
      <li>New Duck</li>
      <li><Link to="/logout">Logout</Link></li>
    </ul>
  ) : (
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/auth">Authenticate</Link></li>
    </ul>
  )
}

const Navigation = ({ isAuthed }) => {

  return (
    <div>
      <nav>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  )

}

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

export default Navigation
