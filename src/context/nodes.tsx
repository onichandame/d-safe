import { createContextWithSetter } from '@onichandame/react-context-setter'

import { TreeNode } from '../types'

const Nodes = createContextWithSetter([] as TreeNode[])

export { Nodes }
