import { FC, useState } from 'react'
import { Grid } from '@material-ui/core'

import { TreeNode } from '../../types'
import { Nodes, SelectedNodes } from '../../context'
import { Picker } from './picker'
import { Content } from './content'

export const Workspace: FC = () => {
  const selectedNodes = useState([] as TreeNode[])
  const nodes = useState([] as TreeNode[])
  return (
    <Nodes.Provider value={nodes}>
      <SelectedNodes.Provider value={selectedNodes}>
        <Grid container direction="row">
          <Grid item>
            <Picker />
          </Grid>
          <Grid item>
            <Content />
          </Grid>
        </Grid>
      </SelectedNodes.Provider>
    </Nodes.Provider>
  )
}
