---
to: packages/<%=h.changeCase.camel(name)%>/tsconfig.json
---
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": [
    "./src"
  ]
}
