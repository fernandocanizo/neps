// IMPORTANT: be sure to keep permissions to this file restricted
// Since Typescript will create it world-readable

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseDecimal } from '../lib/util.js'

const currentPath = path.dirname(fileURLToPath(import.meta.url))
const rootPath = path.dirname(currentPath)

export default {
  rootPath,

  // IMPORTANT: `postgres` field will be feed as is to postgres library, so beware of what you add. You can check full option details on https://github.com/porsager/postgres#connection-details
  postgres: {
    host: process.env.PGHOST ?? 'localhost',
    port: parseDecimal(process.env.PGPORT) ?? 5432,
    database: process.env.PGDATABASE ?? 'neps',
    username: process.env.PGUSER ?? 'neps',
    // https://www.postgresql.org/docs/current/libpq-envars.html
    // PGPASSWORD use is not recommended for security reasons, as some
    // operating systems allow non-root users to see process environment
    // variables via ps
    // So we don't use it. Also, using PGPASSFILE would require to parse
    // pointed file to extract the password, which is overkill, just fill it in
    // here
    password: 'neps'
  }
}
