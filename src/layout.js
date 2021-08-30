import React, { useEffect, useState } from 'react'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'


export default function Layout({ children }) {
  const [menuEl, setMenuEl] = useState(null)

  const handleMenuOpen = event => setMenuEl(event.currentTarget)

  const handleMenuClose = () => setMenuEl(null)

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 35, backgroundColor: '#f3f3f3', height: '100%', width: '100%' }}>
        <Button
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          color="inherit"
        >
          Click Me!!!
          &nbsp;
        </Button>
        <div style={{ width: '100%' }}>
          <main>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}