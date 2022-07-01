"use strict";

/**
 * config.js configuration service
 */

const { pluginId } = require("../utils");

module.exports = ({ strapi }) => {
  const p = strapi.plugin(pluginId);

  return {
    getConfig() {
      return {
        buildUrl: p.config("buildUrl"),
        provider: p.config("provider"),
        accessToken: p.config("accessToken"),
        teamId: p.config("teamId"),
      };
    },
  };
};
