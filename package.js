Package.describe({
  name: 'percolate:intercom',
  summary: "Intercom.io basic integration (uses 'widget' snippet)",
  version: "1.2.5",
  git: "https://github.com/percolatestudio/meteor-intercom.git",
});

Package.onUse(function(api) {
  if (api.versionsFrom)
    api.versionsFrom('METEOR@0.9.3.1');

  api.use('session', 'client');
  api.use('accounts-base', ['client', 'server']);

  api.add_files('intercom_server.js', 'server');
  api.add_files(['intercom_loader.js', 'intercom_client.js'], 'client');
  
  api.export('IntercomSettings');
  api.export('IntercomHash', 'server');
});
