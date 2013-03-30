Package.describe({
      summary: "Upload files using Filepicker.io."
});

Package.on_use(function (api) {
    api.add_files('filepicker.js', 'client');
});
