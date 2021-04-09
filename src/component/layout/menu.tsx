import { FC, useContext } from 'react'
import { Settings } from '@material-ui/icons'
import {
  ListItemIcon,
  ListItemText,
  ListItem,
  List,
  Drawer,
} from '@material-ui/core'

import { MenuOpenContext } from '../../context'

export const Menu: FC = () => {
  const [open, setOpen] = useContext(MenuOpenContext)
  const close = () => setOpen(false)
  return (
    <Drawer anchor="left" variant="temporary" open={open} onClose={close}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  )
}
