Gulp Boiler(plate)
===========

Preferred gulp workflow to create html templates with browser-sync, pug, less ...

## Setup

Run NPM to install all needed developer dependencies listed in `package.json`.

```bash
$ npm install
```

Or use yarn if you prefer.

## Developing

This uses a source directory `source` and tests and publishes its files in a directory `public`.
To start developing and run a simultaneous watch task, run the default gulp task with:

```bash
$ gulp
```

It will do a first build and start a watch task with BrowserSync on the source directory.
