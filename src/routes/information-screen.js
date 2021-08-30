import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { createStructuredSelector } from 'reselect'
import Typography from '@material-ui/core/Typography'
import { MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function InformationScreen() {
  const [title, setTitle] = useState("Information Screen");
  useEffect(() => {
    document.title = `Your title is ${title}`
  })
  return (
    <div>
      <Typography variant='h5' component='h5'>
        Sample Page
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setTitle('clicked Screen')}
      >
        Click Information Title
        &nbsp;
      </Button>
    </div>
  )
}
