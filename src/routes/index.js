import React from 'react'
import { Route, Switch } from 'react-router-dom'
import InformationScreen from './information-screen'

export default () => (
  <Switch>
    <Route exact path='/' component={InformationScreen} />
  </Switch>
)
