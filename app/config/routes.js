import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer } from 'containers'

const routes = (
  <Router>
    <Switch>
      <MainContainer>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/home" component={HomeContainer} />
        <Route exact path="/auth" component={AuthenticateContainer} />
        <Route path="/feed" component={FeedContainer} />
      </MainContainer>
      <Route render={()=>{ return <p>Not Found</p> }} />
    </Switch>
  </Router>
)

export default routes
