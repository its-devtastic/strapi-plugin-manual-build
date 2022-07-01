"use strict";

const fetch = require("node-fetch");
const { pluginId } = require("../utils");

module.exports = {
  getActiveBuild: async (ctx) => {
    const config = await strapi.plugin(pluginId).service("config").getConfig();
    const projectId = config.buildUrl.match(/prj_[a-zA-Z\d]+/)[0];
    const r = await fetch(
      `https://api.vercel.com/v6/deployments?projectId=${projectId}${config.teamId ? `&teamId=${config.teamId}` : ""}&limit=1`,
      {
        headers: { Authorization: `Bearer ${config.accessToken}` },
      }
    );
    const data = await r.json();

    ctx.send((data.deployments && data.deployments[0]) || {});
  },
};
