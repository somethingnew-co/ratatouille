---
to: packages/<%= h.changeCase.camel(name) %>/package.json
---
{
  "name": "@stnew/<%= h.inflection.dasherize(h.changeCase.lower(name)) %>",
  "version": "1.0.0",
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
    "react": "^16.9.0"
    <%_ } _%>
    <%_ if(locals.styled) { _%>
    "styled-components": "latest"
    <%_ } _%>
  },
  "devDependencies": {
    <%_ if(locals.styled) { _%>
    "@types/styled-components": "latest"
    <%_ } _%>
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/somethingnew-co/ratatouille.git"
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
