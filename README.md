<div align="center" width="150px">
  <img style="width: 150px; height: auto;" src="public/assets/logo.png" alt="Logo - Strapi Manual Build plugin" />
</div>
<div align="center">
  <h1>Strapi v4 - Manual Build plugin</h1>
  <p>A simple interface to manually trigger a website build.</p>
  <a href="https://www.npmjs.org/package/strapi-plugin-manual-build">
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/devtastic-org/strapi-plugin-manual-build?label=npm&logo=npm">
  </a>
  <a href="https://www.npmjs.org/package/strapi-plugin-manual-build">
    <img src="https://img.shields.io/npm/dm/strapi-plugin-manual-build.svg" alt="Monthly download on NPM" />
  </a>
</div>

---

A plugin for [Strapi](https://github.com/strapi/strapi) that adds an easy way 
for non-admin CMS users to trigger a build.

⚠️ Currently only supports Vercel


## Supported Strapi version

Currently only Strapi v4 is supported.

## Installation

With `npm`
```bash
npm install strapi-plugin-manual-build
```

With `yarn`
```bash
yarn add strapi-plugin-manual-build
```

In the `config/plugins.js` file add:

```js
module.exports = ({ env }) => ({
  "build-button": {
    config: {
      provider: "vercel",
      buildUrl: env("BUILD_URL"),
      accessToken: env("VERCEL_ACCESS_TOKEN"),
      teamId: env("VERCEL_TEAM_ID"),
    }
  }
  // Other plugins
})
```

## Support

For Strapi documentation, please go to [the official Strapi documentation](https://strapi.io/documentation/).

For questions and issues with this plugin use one of the following channels:

- [GitHub](https://github.com/devtastic-org/strapi-plugin-manual-build/issues) (Bug reports, Contributions, Questions and Discussions)
- [E-mail](mailto:hi@devtastic.co) - We'll respond as soon as possible

## 📝 License

[MIT License](LICENSE.md) 

Made with 💜 in Utrecht by [Devtastic](https://devtastic.co/).
