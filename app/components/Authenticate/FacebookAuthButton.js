import React from 'react'
import PropTypes from 'prop-types'

const FacebookAuthButton = ({isFetching, onAuth}) => {
  return (
    <button onClick={onAuth}>
      {isFetching ? 'Loading' : 'Login with facebook' } 
    </button>
  )
}

FacebookAuthButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired
}

export default FacebookAuthButton
