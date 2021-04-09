import { RxJsonSchema } from 'rxdb'

import { BaseDoc } from './base'

export type Note = {
  content: string
} & BaseDoc

export const NoteSchema: RxJsonSchema<Note> = {
  title: `note`,
  description: `secure note`,
  version: 0,
  keyCompression: true,
  type: `object`,
  properties: {
    content: {
      type: `string`,
    },
    id: { type: `string`, primary: true },
  },
  required: [`id`, `content`],
}
