# Directory Structure

# Main Files

- `.gitlab-ci.yml`: Configuration for the automatic deployment. See the chapter "Deployment" for more information
- `.taStandalonerc`: Configuration file for standalone projects. Contains meta data and configurations for the webpack build process.
- `package.json`: Lists dependencies, defines NPM scripts, and contains configuration for the following tools:
  - `react-snap`: Renders the React-generated HTML to the `index.html`, so that search engines can index it. See [Used Tools](./used-tools.md)
  - `lint-staged`: Runs scripts (currently: ESLint and Prettier) on staged files right before commiting
  - `husky`: Allows execution of scripts during various stages when using git.
- `src/`: Contains all your source code
  - `__tests__/`: Some basic tests for the whole project
    - `gitlab-ci.spec.ts`: Tests for the existence of a `gitlab-ci.yml` file and checks that you have set a non-default slug name.
    - `taStandaloners.spec.ts`: Tests `.taStandalone` and makes sure that you have changed the default values to something that makes a bit more sense.
  - `actions/`: May contain Redux actions, if you need those
  - `components/`: This is where you will spend 90% of your time in. Contains the React components.
    - `main/`: Contains the main entry point of your app
      - `__tests__`:
        - `main.spec.tsx`: Contains tests that check the main component for completeness – making sure it contains a masthead and a footer, and that the article ID is added.
      - `index.js`: exports the main component
      - `**main.component.jsx`: edit this\*\*
      - `main.container.jsx`: wraps the main component in the hot reloader; can be used to wrap it with other components (like React-Redux, Redux-Saga, etc.)
      - `styles.scss`: styles for the whole app. It might be better to keep the styles local to each component, though.
      - `tagesanzeiger.png`: demo picture
    - `typescriptExample/`: contains an example component to show the TypeScript capabilities of the project configuration. You may delete this before you start working.
  - `config/`: contains configuration files for different environments. Consult the included README for a more detailed description.
  - `contexts/`: May contain your React contexts, if you need those.
  - `hooks/`: May contain your React hooks, if you need those.
  - `images/`: May contain your images.
  - `index.html`: Scaffolding HTML for development. Editing this file will have no effect on the production code, which is generated using a template that is part of the `webpack-config` package.
  - `index.js`: JavaScript entry point. Commonly does not need any editing.
  - `lib/`: Library directory. Use for all things that are shared between components and don't fit any other directories.
  - `locales/`: A place for your string translations, unless you want to make them part of each component.
  - `sagas/`: May contain your Redux-Saga sagas. See [Used Tools](./used-tools.md)
  - `stores/`: May contain your Redux stores. See [Used Tools](./used-tools.md)
  - `styles/`: May contain your styles
  - `text/`: May contain your text/MDX files. See [Used Tools](./used-tools.md)
  - `types/`: May contain additional TypeScript types, with some types already provided. See [Used Tools](./used-tools.md)
- `static/`: Place any other files here that should be uploaded to the server, including your **teaser image**. The files will be placed beside the `index.html` on the server.

# Other

- `.babelrc`: Babel configuration – uses by default our config, found here: [https://www.npmjs.com/package/@ta-interaktiv/babel-preset-react-project](https://www.npmjs.com/package/@ta-interaktiv/babel-preset-react-project). Also see [Used Tools](./used-tools.md)
- `.editorconfig`: EditorConfig. See [Used Tools](./used-tools.md)
- `.eslintrc`: ESLint configuration – uses by default our config, found here: [https://www.npmjs.com/package/@ta-interaktiv/eslint-config](https://www.npmjs.com/package/@ta-interaktiv/eslint-config). Also see [Used Tools](./used-tools.md)
- `.gitattributes`: Config for tracking the file extensions of binary files that should be tracked using git-LFS. See [Used Tools](./used-tools.md)
- `.gitignore`: Files to be ignored by git and not checked in. Make sure to add any files and directories that are very large, contain confidential information (API-Keys), or can be automatically (re-)generated using a script.
- `.idea/`: IDE configuration files for IDE by JetBrains (WebStorm, IntelliJ, PyCharm, etc.)
- `.prettierrc.yml`: Prettier configuration
- `.vscode`: IDE configuration files for VisualStudio Code
- `__mocks__`: Mock implementations for Jest tests
- `CHANGELOG.md`: Changelog for the React base project. Automatically generated based on the commit messages
- `jest.config.js`: Jest configuration. See [Used Tools](./used-tools.md)
- `jest-setup.js`: Jest setup script
- `postcss.config.js`: Configuration for PostCSS. See [Used Tools](./used-tools.md)
- `README.md`: this file. I think.
- `tsconfig.json`: The TypeScript configuration. See [Used Tools](./used-tools.md)
- `webpack.config.js`: The webpack configuration. By default extends our config, found here: [https://www.npmjs.com/package/@ta-interaktiv/webpack-config](https://www.npmjs.com/package/@ta-interaktiv/webpack-config). You may adapt the config to your liking. See [Used Tools](./used-tools.md)
