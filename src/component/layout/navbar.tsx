import { Typography, IconButton, Toolbar, AppBar } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { useContext, FC } from 'react'

import { MenuOpenContext } from '../../context'

export const NavBar: FC = () => {
  const [menuOpen, setMenuOpen] = useContext(MenuOpenContext)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={toggleMenu}>
          <Menu />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          D-Safe
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
