
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
    'index.csr.html': {size: 5328, hash: '9a405c0976550ce8165348548f215f10cde1ce2d63abbc2b73456c39b276fc69', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1376, hash: '6b262febf8ccc3edeed22366bc3bef32eb4cfced583fed50e57b941f80b6d4eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'loggin/index.html': {size: 34296, hash: 'a275d9d925b5de7b25d8ea24f71fd754cf7c4b912fe9e1be82f0e7d14413c730', text: () => import('./assets-chunks/loggin_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 41288, hash: '62d5a8f2aa143b4a3cf99c31cab663b1ed987724454790fbe969070bb4dabb0d', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'wiki/movies/index.html': {size: 73797, hash: 'c56f020da37c0ca73490e1e40651cc8817757459c73d0a826f6b5f0352866d47', text: () => import('./assets-chunks/wiki_movies_index_html.mjs').then(m => m.default)},
    'wiki/book/index.html': {size: 56745, hash: '54210986c9ed5b52011048de05ff959760ab46400c446aa4693d2520b7ac33fc', text: () => import('./assets-chunks/wiki_book_index_html.mjs').then(m => m.default)},
    'index.html': {size: 59160, hash: 'a1343e9ac777a5d849928bd6246e08542ce49e238a5ed891db17395487d6e8eb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pedido/index.html': {size: 30797, hash: '17fb8e00fcc8144c87c2eb55288e2ce06a7198ad98b221a2588f117afccddcac', text: () => import('./assets-chunks/pedido_index_html.mjs').then(m => m.default)},
    'wiki/potions/index.html': {size: 63357, hash: 'ebd99e2a187ccfda37fcd054ac2d5393f0841987928cc725f99b2d0acc896993', text: () => import('./assets-chunks/wiki_potions_index_html.mjs').then(m => m.default)},
    'wiki/spells/index.html': {size: 56957, hash: '164c044cbdc9b6b31882d6b2ff491e0a5d575982487483e477c6148b4c6b69e8', text: () => import('./assets-chunks/wiki_spells_index_html.mjs').then(m => m.default)},
    'list/pedidos/index.html': {size: 27047, hash: '0278de5cd683b1df6ada6641fe69570898b441205f86419a3784277a54c30c5a', text: () => import('./assets-chunks/list_pedidos_index_html.mjs').then(m => m.default)},
    'styles-CU55UZGF.css': {size: 237304, hash: 'LsRhXGk8AIA', text: () => import('./assets-chunks/styles-CU55UZGF_css.mjs').then(m => m.default)}
  },
};
