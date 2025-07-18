
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio-Angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6157, hash: '00bbaa4db8d01ccf1d2951845c64f07e788ce5666733aa5d2dadc4ee39d87746', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4331, hash: 'ebafbc6565f75536951835a2beae588a5bac394fcc5d8e5fe6870f06615481ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27956, hash: 'f9a6e7d92e14f3d4931ad1abbe07a693f9765ea397ec15b05db35b0b7908c6f0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HBQM3ZYQ.css': {size: 15860, hash: 'Nzbx1zaJ0KU', text: () => import('./assets-chunks/styles-HBQM3ZYQ_css.mjs').then(m => m.default)}
  },
};
