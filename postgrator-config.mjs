import config from './build/config/index.js'

const p = config.postgres

// Note: preferred to use the explicit way instead of extending with spread
// operator, because `porsager/postgres` configuration could hold other members
// that might confuse `postgrator`

export default {
  migrationPattern: 'src/migrations/*',
  driver: 'pg',
  host: p.host,
  port: p.port,
  database: p.database,
  username: p.username,
  password: p.password
}
