# NEPS - WARNING: this is ALPHA software

[![Linting rules](https://img.shields.io/badge/standard-rules-brightgreen)](https://standardjs.com)
[![Code formatting](https://img.shields.io/badge/prettier-formatted-ff69b4)](https://github.com/prettier/prettier)

[Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [PostgreSQL](https://www.postgresql.org/) Scaffolder for RESTful API servers.

With heavily borrowed ideas from [node-express-boilerplate](https://github.com/hagopj13/node-express-boilerplate).

## Usage

### Clone repository

Clone the repository and remove the git database folder:

```bash
git clone --depth 1 https://github.com/fernandocanizo/neps.git your-brand-new-project
cd your-brand-new-project
rm -rf .git
```

Install dependencies:

```bash
pnpm install
```

### Create role and database and user

Precise instructions on how to create a role and database are out of the scope
of this documentation, but here's a quick example using defaults:

```bash
sudo su
su postgres
createuser -i neps
exit
exit
psql -U neps postgres
postgres=> create database neps;
exit
```

### Configure and set up database

Edit `build/config/index.js` appropriately with database connections details
and `chmod 700 build/config` and `chmod 600 build/config/index.js` to improve
security.

Migrate database with:

```bash
npm run migrate
```

**Note:** I prefer **forward-only** migrations, since experience has showed me
that you cannot do a realiable rollback in production. However sometimes
rollbacks are useful in development, so if you want, `postgrator` allows them,
so they can be used.

## Features

- [EditorConfig](http://editorconfig.org/) configuration
- Code formatting with [Prettier](https://github.com/prettier/prettier)
- [Standard](https://standardjs.com/) linted
- [Husky](https://github.com/typicode/husky) git hooks to run checkers when
  needed
- [Postgrator-cli](https://github.com/MattiLehtinen/postgrator-cli) for
  database migrations
