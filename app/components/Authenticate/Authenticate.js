import React from 'react'
import PropTypes from 'prop-types'
import FacebookAuthButton from './FacebookAuthButton'

const Authenticate = ({ error, isFetching, onAuth }) => {
  return (
    <div>
      <h1>Authenticate</h1>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
      {error && <p>{error}</p>}
    </div>
  )
}

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired
}

export default Authenticate
