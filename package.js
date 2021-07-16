Package.describe({
  name: "planable:intercom",
  summary: "Intercom.io basic integration (uses 'widget' snippet)",
  version: "1.5.1",
  git: "https://github.com/Planable/meteor-intercom.git",
});

Npm.depends({ "intercom-client": "2.8.3" });

Package.onUse(function (api) {
  api.versionsFrom("2.3");
  api.use(["underscore", "accounts-base", "ecmascript"]);
  api.use(["session", "tracker"], "client");

  api.addFiles("intercom_server.js", "server");
  api.addFiles(["intercom_loader.js", "intercom_client.js"], "client");

  api.export("IntercomSettings");
  api.export("IntercomHash", "server");
  api.export("IntercomClient", "server");
});
