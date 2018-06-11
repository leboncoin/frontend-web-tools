# frontend-web-tools

A set of tools to ease the everyday work of the frontend developer.

## Multi-package monorepo workflow

The multi-package monorepo allows:

* Having the code source in one place (the git repository) for easier navigation and editing
* Publishing of packages with a command line tool, in our case [lerna](https://lernajs.io/):
```
# Install lerna globally
npm install -g lerna
```

The contributing workflow of this repository is:

* Edit files **but don't change the package version, lerna will do it for you**
* Create commits **but don't create tags, lerna will do it for you**
* Publish packages with: `lerna publish --exact`
