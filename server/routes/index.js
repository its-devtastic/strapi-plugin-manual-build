module.exports = [
  {
    method: "GET",
    path: "/config",
    handler: "config.getConfig",
    config: { policies: [] },
  },
  {
    method: "GET",
    path: "/vercel/build",
    handler: "vercel.getActiveBuild",
    config: { policies: [] },
  },
];
