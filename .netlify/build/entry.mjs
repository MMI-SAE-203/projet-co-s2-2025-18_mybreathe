import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BhRq_T_-.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/accueil.astro.mjs');
const _page2 = () => import('./pages/connexion.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/detente.astro.mjs');
const _page5 = () => import('./pages/inscription.astro.mjs');
const _page6 = () => import('./pages/mentions.astro.mjs');
const _page7 = () => import('./pages/moodtracker/add.astro.mjs');
const _page8 = () => import('./pages/moodtracker/historique.astro.mjs');
const _page9 = () => import('./pages/moodtracker.astro.mjs');
const _page10 = () => import('./pages/politique.astro.mjs');
const _page11 = () => import('./pages/temoignages.astro.mjs');
const _page12 = () => import('./pages/urgence.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/accueil/index.astro", _page1],
    ["src/pages/connexion/index.astro", _page2],
    ["src/pages/contact/index.astro", _page3],
    ["src/pages/detente/index.astro", _page4],
    ["src/pages/inscription/index.astro", _page5],
    ["src/pages/mentions/index.astro", _page6],
    ["src/pages/moodtracker/add.astro", _page7],
    ["src/pages/moodtracker/historique.astro", _page8],
    ["src/pages/moodtracker/index.astro", _page9],
    ["src/pages/politique/index.astro", _page10],
    ["src/pages/temoignages/index.astro", _page11],
    ["src/pages/urgence/index.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3f0e1d7d-4729-410a-bcb4-cb00d4963e2b"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
