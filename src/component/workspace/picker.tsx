import { FC, useContext } from 'react'
import { TreeView } from '@material-ui/lab'

import { SelectedNodes,Database } from '../../context'

export const Picker: FC = () => {
  const [selectedNodes, setSelectedNodes] = useContext(SelectedNodes)
  const[db]=useContext(Database)
  return (
    <TreeView
      selected={selectedNodes.map(node => node.id)}
      onNodeSelect={(_, nodes) => }
      multiSelect
    ></TreeView>
  )
}
