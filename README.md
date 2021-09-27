# React Projects

## Quickstart

**Prerequisites:** Yarn ([https://yarnpkg.com/](https://yarnpkg.com/)) needs to be installed. Git-LFS needs to be installed.

1.  In your shell, navigate to the directory that should contain your project(s)
2.  Run

        yarn create @ta-interaktiv/project

    You will be asked for the project name.

3.  Change to the newly created directory, and run

        yarn install

4.  In order to start the local development server, run

        yarn start

### Directory Structure

- Main entry point for your application: `src/components/main/main.component.jsx`
- Additional components should go into `src/components`, including all necessary elements (styles, images, data ...)
- Metadata must be edited in `.taStandalonerc`

For detailed explanations, consult [Directory Structure](./docs/directory-structure.md)

### Formatting, linting and running tests

- Use `yarn run lint` to check for errors and `yarn run fix` to fix most common problems.
- Upon committing, code is automatically reformated and cleaned.
- No unit tests are run. You can run them using `yarn run test` to run all tests or `yarn run test:watch` to only run tests related to changed files.

For detailed explanations, consult [NPM Scripts](./docs/npm-scripts.md) and [Testing](./docs/testing.md).

### Deployment

- Deployment is automatically done through GitLab CI pipelines. To enable it, change the `SLUG` variable in `.gitlab-ci.yml`

For detailed explanations, consult [Deployment](./docs/deployments.md).

## Documentation

A more detailed and up-to-date version of our infrastructure documentation can be found on [Notion](https://www.notion.so/tamedia/React-Projects-036d4065a7d645ce8d8f677de5917584).

Additional excerpts can be found in the [docs/](./docs) directory of this project.

Feel free to use this space for your own project-specific documentation. Of interest are:

- Special instructions for setting up this project during development or deployment
- Any additional scripts or tools you have added
- Handling external services, like Firebase or Google Sheets

## Special git ignore rules when updating the react-base directly

These rules go into `.git/info/exclude` (not `.gitignore`!)

```gitignore
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.

# Configuration files that are being installed by various preset packages
/.eslintrc
/.prettierrc*
/tsconfig.json
/postcss.config.js
/webpack.config.js
/src/types/

# Meta data for each project, including the test files
/.taStandalonerc*
/src/__tests__/taStandalonerc.spec.ts

# Not checking in the yarn.lock file means that we always get the latest
# package version for each package defined in package.json on the first install
/yarn.lock

```
