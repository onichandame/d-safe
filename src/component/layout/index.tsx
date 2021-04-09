import { useState, useEffect, FC, ContextType } from 'react'
import { Helmet } from 'react-helmet'
import { Toolbar } from '@material-ui/core'
import { createRxDatabase } from 'rxdb'

import { NavBar } from './navbar'
import { Menu } from './menu'
import { MenuOpenContext, Database } from '../../context'
import {} from '../../model'

export const Layout: FC = ({ children }) => {
  const menuState = useState(false)
  const dbState = useState(null as ContextType<typeof Database>[0])
  useEffect(() => {}, [])
  return (
    <div>
      <Database.Provider value={dbState}>
        <MenuOpenContext.Provider value={menuState}>
          <Helmet>
            <title>Distributed Safe</title>
          </Helmet>
          <NavBar />
          <Menu />
          <Toolbar />
          <main>{children}</main>
        </MenuOpenContext.Provider>
      </Database.Provider>
    </div>
  )
}
