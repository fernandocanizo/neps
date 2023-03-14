// IMPORTANT: be sure to keep permissions to this file restricted
// Since Typescript will create it world-readable

import path from 'node:path'
import { fileURLToPath } from 'node:url'

const currentPath = path.dirname(fileURLToPath(import.meta.url))
const rootPath = path.dirname(currentPath)

export default {
  rootPath,

  // IMPORTANT: `postgres` field will be feed as is to postgres library, so beware of what you add. You can check full option details on https://github.com/porsager/postgres#connection-details
  postgres: {
    host: 'localhost',
    port: 5432,
    database: 'neps',
    username: 'neps',
    // https://www.postgresql.org/docs/current/libpq-envars.html
    // PGPASSWORD use is not recommended for security reasons, as some
    // operating systems allow non-root users to see process environment
    // variables via ps
    password: 'neps'
  }
}
