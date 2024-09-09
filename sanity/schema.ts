import { type SchemaTypeDefinition } from 'sanity'
import  project  from './schemas/project'
import mirante from './schemas/mirante'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, mirante],
}