# Deployment

## Automatic Deployments using GitLab CI

Newly created projects that are based on the React Base Project (from October 2019 on) have a `.gitlab-ci.yml` file included that allows for automatic deployments through GitLab.

However, while most of the configuration is done, some additional steps are required to finish the setup for each project.

### Preparations

1. In `.gitlab-ci.yml`, change the variable `SLUG` to the project URL you would like to use. Start with the year, followed by a `/`, and then add the project name, as you would name the project folder on the FTP server.

   Be specific – you would not want to overwrite an already existing project!

2. Go to your project on [https://gitlab.com](https://gitlab.com). In the sidebar on the left, navigate to _Settings > Repository_, then open the _Protected Branches_ header.
3. In the input field _Branch_, enter `production*`
4. In both the following dropdown menus, choose `Maintainers + Developers`
5. Click on `Protect`.

- Why is this necessary?

  The password and user name to access the FTP server are stored within GitLab as protected environment variables. They are only passed to pipelines that run on protected branches, in order to make sure that they can't be leaked.

### What happens

#### … when you push a branch that starts with `master`

1. The `.gitlab-ci.yml` file is tested whether the `SLUG` variable has been changed to something other than `2019/react-base`. **If this test fails, no build and deployment will happen.**
2. All the unit tests are run. These include some basic tests that are predefined in the React Base Project, based on the checklist that is part of every project. These tests _may_ fail at this point.
3. If the first task has not failed, the project will be built and the resulting files be uploaded to the FTP server in the `staging` directory (see [Infrastructure](https://www.notion.so/a639aa21-dcbf-4cf7-9d80-20e9fff39393)).

If your `SLUG` has been set to `2019/swiss-tax-map`, the project will now be available under `https://interaktiv.<medium>.ch/staging/2019/swiss-tax-map/`.

#### … when you push a branch that starts with `production`

1. The `.gitlab-ci.yml` file is tested whether the `SLUG` variable has been changed to something other than `2019/react-base`. **If this test fails, no build and deployment will happen.**
2. All the unit tests are run. These include some basic tests that are predefined in the React Base Project, based on the checklist that is part of every project. These tests _must not_ fail at this point. **If these tests fail, no build and deployment will happen.**
3. If the previous tasks have not failed, the project will be built and the resulting files be uploaded to the FTP server in the main directory (see [Infrastructure](https://www.notion.so/a639aa21-dcbf-4cf7-9d80-20e9fff39393)).

If your `SLUG` has been set to `2019/swiss-tax-map`, the project will now be available under the URL `https://interaktiv.<medium>.ch/2019/swiss-tax-map/`.

### How To

#### Publish for the first time

In your project directory, create a new branch called `production` from your current version, and push it to GitLab

```shell script
git branch production
git checkout production
git push
git checkout master
```

#### Publish changes after the first time

Make sure you are on the `master` branch. Commit your changes. Then change to the `production` branch and merge in the changes from `master` – in most cases, this should be a fast-forward merge. Then push both branches to GitLab, and change back to `master`, because there will be more changes. There always are.

```shell script
git commit -am "Your changes …"
git checkout production
git merge master
git push --all
git checkout master
```

## Manual Deployments (Escape Hatch)

In cases where you have some special requirements, you can still manually build the project and upload it yourself to the FTP server.

### Preparations

1. **Remove** the following lines from `package.json`
   ```yaml
   "puppeteerArgs": [
        "--no-sandbox",
        "--disable-setuid-sandbox"
      ],
   "puppeteerExecutablePath": "/usr/bin/chromium"
   ```

- Why is this necessary?

  These are configurations for `react-snap`, which are necessary for it run without problems in a Docker container and on a Linux-based system.

  When building locally on your machine, these configurations should a) not be necessary and b) might even be wrong.

### Building

1. Run `yarn run dist`
2. The resulting files are put into the `dist/` directory.
3. Upload to files to the FTP server
