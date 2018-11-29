# VlhForms

Plugin for Learning House Forms using Vue.js

<form-legal-text
    school="Alvernia University"
    fontSize="1.1em"
    textColor="blue"
    ></form-legal-text>

<example/>

<form id="tlh-form">
<form-first-name v-model="submit.firstName"/>
<form-email v-model="submit.email"/>
</form>


This is a Vue.js component library for the Learning House Marketing Forms.

VlhForms is included in the package.json of the TlhFormsWP Plugin via using github url. When VlhForms gets updated, run `yarn upgrade vlh-forms` and it updated to latest version

**[VlhForms Documentation](https://davidroyer.github.io/vlh-forms2/)**

--------------------------------------------------------------------------------

## Development

```bash
yarn dev
```

--------------------------------------------------------------------------------

## Production

```bash
yarn build
```

--------------------------------------------------------------------------------

**It uses Vue CLI for Development and Building into library**

## Documentation

[VuePress](https://vuepress.vuejs.org/) is used for creating the documentation. To Run the Docs in development mode:

```bash
yarn docs:dev

// Or with npm

npm run docs:dev
```