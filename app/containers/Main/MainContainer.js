import React from 'react'
import { HomeContainer } from 'containers'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class MainContainer extends React.Component {
  render () {
    return (
      <div>
        <Navigation isAuthed={this.props.isAuthed} />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    isAuthed: state.isAuthed
  }
}

export default connect(mapStateToProps)(MainContainer)
