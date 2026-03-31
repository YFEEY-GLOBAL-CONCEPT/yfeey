import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { categoryType } from './categoryType'
import { workType } from './workType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, categoryType, workType],
}
