import { type SchemaTypeDefinition } from 'sanity'
import watchPerfumes from "./watchePerfumes"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [watchPerfumes],
}
