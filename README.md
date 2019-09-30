## Docs

- [Contributing](#contributing)
  - [Codebase](#codebase)
    - [Technologies](#technologies)
    - [Folder Structure](#folder-structure)
    - [Code Style](#code-style)
  - [First time setup](#first-time-setup)
  - [Running the app locally](#running-the-app-locally)

## Contributing

### Codebase

#### Technologies

- **Full-stack React**: We use React to power the frontend. Almost all of the code you'll touch in this codebase will be JavaScript.

Here is a list of all the big technologies we use:

- **Redux**: Data storage
- **React**: Frontend React app
- **Styled-components**: CSS-in-JS, styling
- **Fetch API**: HTTP client

#### Folder structure

```
src/
├── actions
├── api
├── components
├── config
├── constants
├── reducers
├── store
├── utils
├── views
```

#### Code Style

We run Prettier on-commit, which means you can write code in whatever style you want and it will be automatically formatted according to the common style when you run `git commit`. We also have ESLint setup, although we've disabled all stylistic rules since Prettier takes care of those.

### First time setup

The first step to running the app locally is downloading the code by cloning the repository:

```
git clone https://github.com/rockysantiago/problem-tree-builder.git
```

#### Installation

The app has two big installation steps:

1. **Install yarn**: We use [yarn](https://yarnpkg.com) to handle our JavaScript dependencies. See [the yarn documentation](https://yarnpkg.com/en/docs/install) for instructions on installing it.
2. **Install the dependencies**:

```
yarn
```

You've now finished installing everything!

### Running the app locally

#### Develop the web UI

To develop the frontend and web UI run

```
yarn start
```
