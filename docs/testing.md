# Testing

The React Base Project has support for unit tests, using the Jest testing library; and using Enzyme for testing React components. See [Used Tools](https://www.notion.so/7316f5b3-70db-4ad8-9456-7cee5f21ff76)

Some default tests have already been set up, they are used for the GitLab Deployement. They are:

- Check that a non-default `SLUG` variable has been set in `gitlab-ci.yml`
- Check that non-default values for common meta data has been set in `.taStandalonerc`
- Check that the `main` component contains a `masthead` and `footer` components, and that a correct-looking article ID an credits are being passed to them.

# Scripts

## `yarn test`

Run all tests

## `yarn test:watch`

Run all tests that are related to files that have been changed since the last commit. Keeps on running whenever a file changes.

# Recognised File Types

- Files in a `__tests__` directory
- Files matching the RegExp `\.(spec|test)\.[jt]sx?`

# When you should write tests

- In the morning in order to get your head back into the project ;)
- When you do calculations or manipulate data, and want to make sure that you get the expected results when passing in specific inputs
- When you plan to re-use a component and potentially make it part of the [Component Library](https://www.notion.so/323fce06-af2b-40b2-b416-8967764c8f4b) – components there should always have tests
- When dealing with external APIs it might be helpful to write tests to make sure that you cover all the weird shit the external API might throw at you
- When you want to train yourself in thinking more modular, how you separate your code into pieces that can be individually tested

# When _not_ to write tests

- For throw-away components that will just be used in this project and don't do any meaningful data manipulation.
- When the test would not check for the _content_ of a component, but how it _looks_ – you can still do that, but be prepared that a component will change its looks several times over the lifetime of a project, and you will have to adapt the tests accordingly
