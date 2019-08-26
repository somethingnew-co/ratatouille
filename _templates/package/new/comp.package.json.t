---
to: packages/<%= h.changeCase.camel(name) %>/package.json
---
{
  "name": "@stnew/<%= h.inflection.dasherize(h.changeCase.lower(name)) %>",
  "version": "0.0.0",
  "description": "<%= locals.description ? description : null %>",
  "author": "Something New",
  "homepage": "https://github.com/somethingnew-co/ratatouille#readme",
  "license": "ISC",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "publishConfig": {
    "access": "public"
  },
  "peerDependencies": {
    <%_ if(locals.component) { _%>
    "react": "^16.9.0",
    "react-dom": "^16.9.0"<%_ if(locals.styled) { _%>,
    "styled-components": "latest"
    <%_ } _%>
  <%_ } _%>
  },
  "devDependencies": {},
  "repository": {
    "type": "git",
    "url": "git+https://github.com/somethingnew-co/ratatouille.git",
    "directory": "packages/react-dom/<%= h.inflection.dasherize(h.changeCase.lower(name)) %>"
  },
  "scripts": {
    "test": "echo \"Error: run tests from root\" && exit 1",
    "build": "tsc",
    "prepare": "npm run build",
    "prepublishOnly": "rm -rf dist  && npm run build"
  },
  "bugs": {
    "url": "https://github.com/somethingnew-co/ratatouille/issues"
  }
}
