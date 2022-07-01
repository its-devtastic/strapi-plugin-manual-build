"use strict";

const { pluginId } = require("../utils");

module.exports = {
  getConfig: async (ctx) => {
    const { provider, buildUrl } = await strapi
      .plugin(pluginId)
      .service("config")
      .getConfig();
    ctx.send({ buildUrl, provider });
  },
};
