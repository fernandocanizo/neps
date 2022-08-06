# NEPS

[![Linting rules](https://img.shields.io/badge/standard-rules-brightgreen)](https://standardjs.com)
[![Code formatting](https://img.shields.io/badge/prettier-formatted-ff69b4)](https://github.com/prettier/prettier)


[Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [PostgreSQL](https://www.postgresql.org/) Scaffolder for RESTful API servers.

With heavily borrowed ideas from [node-express-boilerplate](https://github.com/hagopj13/node-express-boilerplate).

## Usage

Clone the repo and remove the git database folder:

```bash
git clone --depth 1 https://github.com/fernandocanizo/neps.git your-brand-new-project
cd your-brand-new-project
rm -rf .git
```

Install dependencies:

```bash
pnpm install
```

Set environment variables:

```bash
cp example.env .env
```

Edit `.env` and configure accordingly to your project.


## Features

- [EditorConfig](http://editorconfig.org/) configuration
- Code formatting with [Prettier](https://github.com/prettier/prettier)
- [Standard](https://standardjs.com/) linted
