js-editor-tags [![Build Status](https://travis-ci.org/artemave/js-editor-tags.svg?branch=master)](https://travis-ci.org/artemave/js-editor-tags)
-------

Generate tags file for javascript codebase using static code analyses (babylon).

## Usage

The following will generate `tags` file in the current folder:

```bash
npm i -g js-editor-tags
git ls-files | js-editor-tags
```

You can also automatically keep tags file up to date. For example, using [fswatch](https://github.com/emcrisostomo/fswatch):

```bash
fswatch -0 -r . | while read -d "" file_path; do git ls-files $file_path; done | js-editor-tags -u
```

## Running tests

```bash
yarn test
```
