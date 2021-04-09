import { createContextWithSetter } from '@onichandame/react-context-setter'
import { RxDatabase } from 'rxdb'

const Database = createContextWithSetter(null as null | RxDatabase)

export { Database }
