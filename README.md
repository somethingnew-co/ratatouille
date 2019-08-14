# React Component Library Publishing Starter.

## Getting Started

1. Clone the repo: `git clone git@github.com:somethingnew-co/ratatouille.git`
2. Setup project: `npm install`
3. Run `npm run start`

Running `npm run start` will:

1.) Spin up Storybook at [http://localhost:9001/](http://localhost:9001/).

2.) Will run the build script in watch mode. Changes made in the packages folder will automatically be built and updated in Storybook.

## Publishing

To build and publish the packages you just need to run:

```
npm run publish-packages
```

(You will need to be logged into npm and be part of the stnew organization)

This will run the build script and then publish the packages.

## Tests

We're using Jest and Enzyme. To run all tests and generate a coverage report simply run:

```
npm run test
```

While developing you can also run tests in watch mode by running:

```
npm run test:watch
```

## Deploy Static Storybook

To update [ratatouille.somethingnew.co](https://ratatouille.somethingnew.co):
(user: stnew / pw: output)

```
# add git remote
git remote add dokku dokku@deploy.somethingnew.co:ratatouille
# then push
git push dokku master
```
