# ShrinkURL

ShrinkURL is a sleek, user-friendly URL shortener project designed to simplify link sharing and management. With its intuitive interface and robust backend, ShrinkURL allows users to generate concise, custom short links for long URLs effortlessly.

## Installation

To install ShrinkURL, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project folder.
3. Run the following command to install dependencies using pnpm:

```bash
pnpm install
```

## Usage

Once you have installed the dependencies, you can run the server using the following command:

```bash
pnpm dev
```

This will start the server on port 3000. You can now access ShrinkURL in your browser by visiting `http://localhost:3000`.

## Tech

ShrinkURL is built using the following technologies:

- **Next.js**: A React framework for building server-side rendered and statically generated applications.
- **TypeScript**: A statically typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs quickly.
- **Prettier**: An opinionated code formatter that ensures consistent code style.
- **ESLint**: A pluggable and configurable JavaScript linter.

## Husky and Commitlint Configuration

ShrinkURL utilizes Husky and Commitlint for ensuring consistent commit messages and running pre-commit hooks. To set up Husky and Commitlint, follow these steps:

1. Install Husky and Commitlint as dev dependencies:

```bash
pnpm install --save-dev husky @commitlint/{config-conventional,cli}
```

- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `chore`: Regular code maintenance.
- `ci`: Changes to your CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `docs`: Documentation only changes
- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `revert`: If the commit reverts a previous commit, it should begin with `revert:` , followed by the header of the reverted commit. In the body, it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test`: Adding missing tests or correcting existing tests

Remember, the goal of these conventions is to make your commit history easier to read and understand. Each commit should be a self-contained change to your codebase. By categorizing each commit, other developers (and you, in the future) can more easily understand the history of your project.

Now, whenever you make a commit, Husky will ensure that your commit message conforms to the conventional commit format specified by Commitlint.

## Credits

Developed by [Alejandro Sandí](https://alejandrosandi.dev).
