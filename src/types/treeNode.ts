import { RxDocument } from 'rxdb'

export type TreeNode = RxDocument<{
  id: string
  label: string
  children?: Node[]
}>
