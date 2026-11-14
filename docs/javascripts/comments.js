(() => {
  const container = document.querySelector('.giscus');
  if (!container) return;

  const theme = () => document.body.dataset.mdColorScheme === 'slate'
    ? 'transparent_dark' : 'light';
  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.async = true;
  script.crossOrigin = 'anonymous';
  const settings = {
    ...container.dataset,
    mapping: 'specific',
    strict: '1',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    theme: theme(),
    lang: 'zh-CN',
    loading: 'lazy',
  };
  Object.entries(settings).forEach(([key, value]) => {
    script.setAttribute(`data-${key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}`, value);
  });
  container.appendChild(script);

  new MutationObserver(() => {
    const selectedTheme = theme();
    script.setAttribute('data-theme', selectedTheme);
    const frame = container.querySelector('iframe.giscus-frame');
    frame?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: selectedTheme } } },
      'https://giscus.app'
    );
  }).observe(document.body, { attributes: true, attributeFilter: ['data-md-color-scheme'] });
})();
