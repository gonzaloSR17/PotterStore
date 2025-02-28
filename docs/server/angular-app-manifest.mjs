
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PotterStore/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/PotterStore"
  },
  {
    "renderMode": 2,
    "route": "/PotterStore/loggin"
  },
  {
    "renderMode": 2,
    "route": "/PotterStore/register"
  },
  {
    "renderMode": 2,
    "route": "/PotterStore/wiki/movies"
  },
  {
    "renderMode": 2,
    "route": "/PotterStore/wiki/book"
  },
  {
    "renderMode": 2,
    "route": "/PotterStore/wiki/potions"
  },
  {
    "renderMode": 2,
    "route": "/PotterStore/wiki/spells"
  },
  {
    "renderMode": 2,
    "route": "/PotterStore/pedido"
  },
  {
    "renderMode": 2,
    "route": "/PotterStore/list/pedidos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5328, hash: '28694569f1c41a1a462dae5b68a8c26c13e77206f6fbb38a01f78180d1e59d93', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1376, hash: 'da51fc67f4837d843ac8cb7fbd1b0267017d486ca4b7480fedbf1b8b8d4fc1bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'loggin/index.html': {size: 34306, hash: 'f50d64962e5c7049bbb9ccf88a6b88ee82a6d54801fdc3a16437307516da14b2', text: () => import('./assets-chunks/loggin_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 41417, hash: '4cb51973b7b9da99651c73ec3ae4043232b03013a487f4a9a9a9e3c7eb4fff7b', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'wiki/book/index.html': {size: 56745, hash: '525e755aeb50005794acd636f3c29409c308f03934b63b3d9dc5292e4a904172', text: () => import('./assets-chunks/wiki_book_index_html.mjs').then(m => m.default)},
    'index.html': {size: 59160, hash: '148b7318c6967361b46e0118fb6fd647ec2995b65a58b11e440e25213b5e9970', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'wiki/movies/index.html': {size: 73797, hash: 'b23c28cafc90537f93131e540103cf20fef48d5563b5a49cb9894a1f9fef73b3', text: () => import('./assets-chunks/wiki_movies_index_html.mjs').then(m => m.default)},
    'wiki/potions/index.html': {size: 63357, hash: 'ad363d11e37e036cef18f498ca492e1c2f20e96caea18dcfe3e5e76d9a8caa49', text: () => import('./assets-chunks/wiki_potions_index_html.mjs').then(m => m.default)},
    'list/pedidos/index.html': {size: 27047, hash: '0c350b8775ab51919ae9ffa6f07715fb7bef8aad8a03c2410b40607be3e1d485', text: () => import('./assets-chunks/list_pedidos_index_html.mjs').then(m => m.default)},
    'pedido/index.html': {size: 30796, hash: '83d10654635ca6e096e82bcd2e6da7ae506556cca42c68c3f570b8afd5f6460a', text: () => import('./assets-chunks/pedido_index_html.mjs').then(m => m.default)},
    'wiki/spells/index.html': {size: 56957, hash: '0c27fca4e48bc857ae1fc297be64816f3addd7e61a0bdda1b6e7291b0a5713ec', text: () => import('./assets-chunks/wiki_spells_index_html.mjs').then(m => m.default)},
    'styles-CU55UZGF.css': {size: 237304, hash: 'LsRhXGk8AIA', text: () => import('./assets-chunks/styles-CU55UZGF_css.mjs').then(m => m.default)}
  },
};
