Package.describe({
  summary: " Fancytree for meteor ",
  version: "1.0.0",
  git: "https://github.com/sujith3g/fancytree"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use(['jquery'],"client");
  api.addFiles(['dist/jquery.fancytree-all.js','dist/skin-lion/icons.gif','dist/skin-lion/loading.gif','dist/skin-lion/ui.fancytree.css'],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sujith3g:fancytree');
  api.addFiles('sujith3g:fancytree-tests.js');
});
