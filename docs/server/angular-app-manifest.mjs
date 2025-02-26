
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
    'index.csr.html': {size: 5328, hash: '8812557bbcce55239352e94b7e18582ec42e7313b3bfc7255cc78550c8b1be64', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1376, hash: 'aab7dd4833cfc4121772baf4f6d92845b058c67b9f5c316a412e60c669013b14', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 41294, hash: '4a1e96e95fbc2485eb6a8a16515403c5a2d775d2b9b733f563a123db6034104b', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'loggin/index.html': {size: 34299, hash: '4f7dfb2856c88dc21f837b1b32e5802c1ceca482e5a5c854a50401e43e3d0dac', text: () => import('./assets-chunks/loggin_index_html.mjs').then(m => m.default)},
    'wiki/book/index.html': {size: 56769, hash: 'c3a85bc94a347d58fd724110102a983fd61ed6cbe468dc63c7ac68bb069f5ad3', text: () => import('./assets-chunks/wiki_book_index_html.mjs').then(m => m.default)},
    'wiki/potions/index.html': {size: 63381, hash: '46fdea8b1db90ddc964dc907636f01ea281f30ce0685ef0ebf02baceca5ead31', text: () => import('./assets-chunks/wiki_potions_index_html.mjs').then(m => m.default)},
    'wiki/movies/index.html': {size: 73821, hash: 'c913110315481ec8bc52e69ddcc4dd891ecc2f83b2341467957fbcf57a403da1', text: () => import('./assets-chunks/wiki_movies_index_html.mjs').then(m => m.default)},
    'pedido/index.html': {size: 30801, hash: '29bb4ecfe977b3694af5256b9210c5ae82ad3bf210af479e833adeb542eda059', text: () => import('./assets-chunks/pedido_index_html.mjs').then(m => m.default)},
    'list/pedidos/index.html': {size: 27050, hash: '28e037286a0f3e8cfffa4648d4ea9cfee4c825c69fcf6dedd684a6cf77393b6a', text: () => import('./assets-chunks/list_pedidos_index_html.mjs').then(m => m.default)},
    'wiki/spells/index.html': {size: 56978, hash: 'bc85dffea54ef7c8ecf208026ac0734f600710f3364bb06acfae1af6170e4ec5', text: () => import('./assets-chunks/wiki_spells_index_html.mjs').then(m => m.default)},
    'index.html': {size: 59181, hash: 'fe0a8ad1748197ed0454d929423bdb20f6c47a82e2cd3052521afcf449712f64', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CU55UZGF.css': {size: 237304, hash: 'LsRhXGk8AIA', text: () => import('./assets-chunks/styles-CU55UZGF_css.mjs').then(m => m.default)}
  },
};
