import { RxJsonSchema } from 'rxdb'

import { BaseDoc } from './base'

export type Password = {
  username: string
  password: string
} & BaseDoc

export const PasswordSchema: RxJsonSchema<Password> = {
  title: `note`,
  description: `secure note`,
  version: 0,
  keyCompression: true,
  type: `object`,
  properties: {
    username: {
      type: `string`,
    },
    password: {
      type: `string`,
    },
    id: { type: `string`, primary: true },
  },
  required: [`id`, `username`, `password`],
}
