// IMPORTANT: be sure to keep permissions to this file restricted
// Since Typescript will create it world-readable

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseDecimal } from '../lib/util.js'

dotenv.config()

const currentPath = path.dirname(fileURLToPath(import.meta.url))
const rootPath = path.dirname(currentPath)

export default {
  rootPath,

  // IMPORTANT: `postgres` field will be feed as is to postgres library, so beware of what you add. You can check full option details on https://github.com/porsager/postgres#connection-details
  postgres: {
    host: process.env.NEPS_HOST ?? 'localhost',
    port: parseDecimal(process.env.NEPS_PORT) ?? 5432,
    database: process.env.NEPS_DATABASE ?? 'neps',
    username: process.env.NEPS_USER ?? 'neps',
    password: process.env.NEPS_PASSWORD ?? 'neps'
  }
}
