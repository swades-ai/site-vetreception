/* Public website messenger. Generated with the site's public inbox token. */
(function () {
  var baseUrl = "https://chat.swades.ai";
  var websiteToken = "a7Z27oFbJ5Wm7tDFqLUmoPHc";
  if (window.$chatwoot || document.getElementById('chatwoot-sdk')) return;

  window.chatwootSettings = {
    hideMessageBubble: false,
    position: 'right',
    locale: 'en',
    type: 'expanded_bubble',
    launcherTitle: 'Chat with us'
  };

  var script = document.createElement('script');
  script.id = 'chatwoot-sdk';
  script.src = baseUrl + '/packs/js/sdk.js';
  script.async = true;
  script.onload = function () {
    window.chatwootSDK.run({ websiteToken: websiteToken, baseUrl: baseUrl });
  };
  document.head.appendChild(script);
})();
