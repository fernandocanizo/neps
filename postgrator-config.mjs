export default {
  migrationPattern: 'src/migrations/*',
  driver: 'pg',
  host: process.env.NEPS_DB_HOST || '127.0.0.1',
  port: process.env.NEPS_DB_PORT || 5432,
  database: process.env.NEPS_DB_NAME || 'neps',
  username: process.env.NEPS_DB_USER || 'neps',
  password: process.env.NEPS_DB_PASS || 'neps'
}
