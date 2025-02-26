
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
    'index.csr.html': {size: 5328, hash: 'ef01d75fbc4b5035d90c27e86cabdcf29ddfc6059335c6f87ba3f8f6d697a185', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1376, hash: '5b0e7c1ae82aab34f9200ab18fe60beaaa03999cff8efc0f07234a5daf2cc4e4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'loggin/index.html': {size: 34296, hash: '67823db5ca648973e1d4d844a2aee1fad2344864681073a5166c3038e6783122', text: () => import('./assets-chunks/loggin_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 41288, hash: '37903180fb621f677c8c9801da99b0e3cd58190b487158f91e7f64bd6d33bf6d', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'wiki/book/index.html': {size: 56745, hash: '5b9b121de61ed632d273404760a228290c79ecc83ae6dd07d3cbacabc672e7bb', text: () => import('./assets-chunks/wiki_book_index_html.mjs').then(m => m.default)},
    'wiki/potions/index.html': {size: 63357, hash: '7e5c2ffdba8a67262de47057bc26a78f0cf4e1275be407f7b53318601ff368e4', text: () => import('./assets-chunks/wiki_potions_index_html.mjs').then(m => m.default)},
    'index.html': {size: 59160, hash: '06cce2ef8812ffc770970f51a9cccf51b71336ac58aa4cdaba24f505c30d2ee1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pedido/index.html': {size: 30799, hash: '3d6351cc3b79b1c6f9543351e04c90c9a27766b27a42834b9ab08a417cfcade6', text: () => import('./assets-chunks/pedido_index_html.mjs').then(m => m.default)},
    'list/pedidos/index.html': {size: 27047, hash: 'ca8823c3ac321cea11c605edef94d62232016ebc687308193fde49734e1523f0', text: () => import('./assets-chunks/list_pedidos_index_html.mjs').then(m => m.default)},
    'wiki/spells/index.html': {size: 56957, hash: '8e9e4792401f133c0911b30e16fee6e867a52f1e60be0ef3f75ac87f20918a94', text: () => import('./assets-chunks/wiki_spells_index_html.mjs').then(m => m.default)},
    'wiki/movies/index.html': {size: 73797, hash: '7437cde00278ccfd51e506995ee50985662e717116562e2b25487a4140afaba5', text: () => import('./assets-chunks/wiki_movies_index_html.mjs').then(m => m.default)},
    'styles-CU55UZGF.css': {size: 237304, hash: 'LsRhXGk8AIA', text: () => import('./assets-chunks/styles-CU55UZGF_css.mjs').then(m => m.default)}
  },
};
