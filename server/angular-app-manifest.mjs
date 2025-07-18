
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
    'index.csr.html': {size: 6157, hash: 'f39350969ef4a66906f6cdae333f314bebe39c8d08156e27c406125b8f3d34fe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4331, hash: '7b8d1da4b9725efae5fab25fb9c1afdf634598d3c8485f921ec31c19bc73a234', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27958, hash: '136ee8bbfdb558a482b5d3e0c4ba482f9d55e4a5bbbb6e2a31d40c3e5d6aed64', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HBQM3ZYQ.css': {size: 15860, hash: 'Nzbx1zaJ0KU', text: () => import('./assets-chunks/styles-HBQM3ZYQ_css.mjs').then(m => m.default)}
  },
};
