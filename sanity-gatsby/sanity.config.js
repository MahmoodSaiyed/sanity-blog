import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { codeInput } from '@sanity/code-input'


export default defineConfig({
  name: 'default',
  title: 'Sanity',

  projectId: 'zzi3r1qb',
  dataset: 'blogs',

  plugins: [structureTool(), visionTool(),codeInput()],

  schema: {
    types: schemaTypes,
  },
})
