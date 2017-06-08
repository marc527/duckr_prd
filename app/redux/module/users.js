import auth from 'helpers/auth'

const authUser = (uid) => {
  return {
    type: "AUTH_USER",
    uid,
  }
}

const unauthUser = () => {
  return {
    type: "UNAUTH_USER"
  }
}

const fetchingUser = () => {
  return {
    type: "FETCHING_USER"
  }
}

const fetchingUserFailure = () => {
  return {
    type: "FETCHING_USER_FAILURE",
    error: "Error fetching user"
  }
}

const fetchingUserSuccess = (uid, user, timestamp) => {
  return {
    type: "FETCHING_USER_SUCCESS",
    uid,
    user,
    timestamp
  }
}

export const fetchAndHandleUser = () => {
  return (dispatch) => {
    dispatch(fetchingUser())
    return auth().then((user) => {
      dispatch(fetchingUserSuccess(user.uid, user, Date.now()))
      dispatch(authUser(user.uid))
    }).catch((error) => dispatch(fetchingUserFailure()))
  }
}

const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: ''
  }
}

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case 'FETCHING_USER_SUCCESS' :
      return {
        lastUpdated: action.timestamp,
        info: action.user
      }
    default :
      return state
  }
}

const initialState = {
  isAuthed: false,
  authedId: '',
  error: '',
  isFetching: false
}

const users = (state = initialState, action) => {
  switch(action.type) {
    case "AUTH_USER":
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid
      }
    case "UNAUTH_USER" :
      return {
        ...state,
        isAuthed: false,
        authedId: ''
      }
    case "FETCHING_USER" :
      return {
        ...state,
        isFetching: true
      }
    case "FETCHING_USER_FAILURE" :
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case "FETCHING_USER_SUCCESS" :
      return action.user ? {
        ...state,
        isFetching: false,
        error: '',
        [action.uid]: user(state[action.uid], action)
      } : {
        ...state,
        isFetching: false,
        error: ''
      }
    default :
      return state
  }
}

export default users
