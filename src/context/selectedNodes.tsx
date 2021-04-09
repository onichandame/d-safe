import { createContextWithSetter } from '@onichandame/react-context-setter'

import { TreeNode } from '../types'

const SelectedNodes = createContextWithSetter([] as TreeNode[])

export { SelectedNodes }
