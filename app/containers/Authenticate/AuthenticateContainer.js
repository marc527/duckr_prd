import React from 'react'
import { Authenticate } from 'components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators  from 'redux/module/users'

class AuthenticateContainer extends React.Component {

  constructor(props) {
    super(props)

    this.handleAuth = this.handleAuth.bind(this);
  }

  handleAuth (e) {

    e.preventDefault()

    this.props.fetchAndHandleUser().then(() => this.context.router.history.push('/feed'))

  }

  render() {
      return (
        <Authenticate
          isFetching={this.props.isFetching}
          error={this.props.error}
          onAuth={this.handleAuth}/>
      )
  }
}

AuthenticateContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchAndHandleUser: PropTypes.func.isRequired
}

AuthenticateContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(userActionCreators, dispatch);
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(AuthenticateContainer)
