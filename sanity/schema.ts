import { type SchemaTypeDefinition } from 'sanity'
import  project  from './schemas/project'
import mirante from './schemas/mirante'
import gallery from './schemas/gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, mirante, gallery],
}