import React from 'react';
import './App.css';
import Route from './routes'
import AppLayout from './layout'
import store, { history } from 'store'
import { Router } from 'react-router-dom';

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  fullScreen: {
    width: '100%',
    display: 'flex',
    height: '100vh'
  },
  centerScreen: {
    margin: 'Auto',
    textAlign: 'center'
  }
}))

function App() {
  const classes = useStyles();

  return (
    <div className={classes.fullScreen}>
      <AppLayout>
        <Route />
      </AppLayout>
    </div>
  );
}

export default App;
