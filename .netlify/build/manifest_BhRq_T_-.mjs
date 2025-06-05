import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_CgQgV4Hd.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/","cacheDir":"file:///Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/node_modules/.astro/","outDir":"file:///Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/dist/","srcDir":"file:///Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/","publicDir":"file:///Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/public/","buildClientDir":"file:///Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/dist/","buildServerDir":"file:///Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ClBTM2ab.css"}],"routeData":{"route":"/accueil","isIndex":true,"type":"page","pattern":"^\\/accueil\\/?$","segments":[[{"content":"accueil","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/accueil/index.astro","pathname":"/accueil","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body:before{content:\"\";position:fixed;top:0;left:0;width:100vw;height:100vh;background-image:url(/oreole.png);background-size:cover;background-position:center;opacity:1;z-index:-1}\n"}],"routeData":{"route":"/connexion","isIndex":true,"type":"page","pattern":"^\\/connexion\\/?$","segments":[[{"content":"connexion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/connexion/index.astro","pathname":"/connexion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ClBTM2ab.css"},{"type":"inline","content":"form[data-astro-cid-iybth2ls]{background-color:#2c2c69;padding:2rem;border-radius:.75rem;max-width:500px;margin:auto}label[data-astro-cid-iybth2ls]{display:block;margin-top:1rem;color:#fff;font-weight:500}input[data-astro-cid-iybth2ls],textarea[data-astro-cid-iybth2ls]{color:#000;background-color:#fff;width:100%;padding:.75rem;margin-top:.25rem;border:none;border-radius:.5rem;font-size:1rem}button[data-astro-cid-iybth2ls]{margin-top:2rem;padding:.75rem 1.5rem;background-color:#06064f;color:#fff;border:1px solid white;border-radius:.5rem;font-size:1rem;cursor:pointer;transition:.3s}button[data-astro-cid-iybth2ls]:hover{background-color:#fff;color:#06064f}\n"}],"routeData":{"route":"/contact","isIndex":true,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/index.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ClBTM2ab.css"},{"type":"inline","content":".flip-card{perspective:1000px}.flip-card-inner{transition:transform .8s;transform-style:preserve-3d;position:relative}.flip-card:hover .flip-card-inner{transform:rotateY(180deg)}.flip-card-front,.flip-card-back{backface-visibility:hidden}.flip-card-back{transform:rotateY(180deg)}.text-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-normal{white-space:normal}\n"}],"routeData":{"route":"/detente","isIndex":true,"type":"page","pattern":"^\\/detente\\/?$","segments":[[{"content":"detente","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/detente/index.astro","pathname":"/detente","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body:before{content:\"\";position:fixed;top:0;left:0;width:100vw;height:100vh;background-image:url(/oreole.png);background-size:cover;background-position:center;opacity:1;z-index:-1}\n"}],"routeData":{"route":"/inscription","isIndex":true,"type":"page","pattern":"^\\/inscription\\/?$","segments":[[{"content":"inscription","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inscription/index.astro","pathname":"/inscription","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ClBTM2ab.css"}],"routeData":{"route":"/mentions","isIndex":true,"type":"page","pattern":"^\\/mentions\\/?$","segments":[[{"content":"mentions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mentions/index.astro","pathname":"/mentions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ClBTM2ab.css"}],"routeData":{"route":"/moodtracker/add","isIndex":false,"type":"page","pattern":"^\\/moodtracker\\/add\\/?$","segments":[[{"content":"moodtracker","dynamic":false,"spread":false}],[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/moodtracker/add.astro","pathname":"/moodtracker/add","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ClBTM2ab.css"}],"routeData":{"route":"/moodtracker/historique","isIndex":false,"type":"page","pattern":"^\\/moodtracker\\/historique\\/?$","segments":[[{"content":"moodtracker","dynamic":false,"spread":false}],[{"content":"historique","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/moodtracker/historique.astro","pathname":"/moodtracker/historique","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ClBTM2ab.css"}],"routeData":{"route":"/moodtracker","isIndex":true,"type":"page","pattern":"^\\/moodtracker\\/?$","segments":[[{"content":"moodtracker","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/moodtracker/index.astro","pathname":"/moodtracker","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ClBTM2ab.css"}],"routeData":{"route":"/politique","isIndex":true,"type":"page","pattern":"^\\/politique\\/?$","segments":[[{"content":"politique","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politique/index.astro","pathname":"/politique","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ClBTM2ab.css"},{"type":"inline","content":".container[data-astro-cid-udq2rn26]{max-width:700px;margin:0 auto;padding:2rem;color:#fff}.temoignage[data-astro-cid-udq2rn26]{background-color:#2c2c69;border-radius:.75rem;padding:1.5rem;text-align:left;display:none}.temoignage[data-astro-cid-udq2rn26].active{display:block}.nav-wrapper[data-astro-cid-udq2rn26]{display:flex;justify-content:center;gap:1rem;margin:1.5rem 0}.nav-btn[data-astro-cid-udq2rn26]{background-color:#fff;color:#2c2c5d;padding:.5rem 1.5rem;border-radius:.75rem;font-weight:700;font-size:1.25rem;transition:all .3s}.nav-btn[data-astro-cid-udq2rn26]:disabled{opacity:.4;cursor:not-allowed}.toggle-form-btn[data-astro-cid-udq2rn26]{margin-top:2rem;padding:.75rem 1.5rem;background-color:#06064f;color:#fff;border:1px solid white;border-radius:.5rem;font-size:1rem;cursor:pointer;transition:.3s}.toggle-form-btn[data-astro-cid-udq2rn26]:hover{background-color:#fff;color:#06064f}form[data-astro-cid-udq2rn26]{background-color:#2c2c69;padding:2rem;border-radius:.75rem;margin-top:2rem}label[data-astro-cid-udq2rn26]{display:block;margin-top:1rem;font-weight:500;text-align:left}input[data-astro-cid-udq2rn26],textarea[data-astro-cid-udq2rn26]{color:#000;background-color:#fff;width:100%;padding:.75rem;margin-top:.25rem;border:none;border-radius:.5rem;font-size:1rem}\n"}],"routeData":{"route":"/temoignages","isIndex":true,"type":"page","pattern":"^\\/temoignages\\/?$","segments":[[{"content":"temoignages","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/temoignages/index.astro","pathname":"/temoignages","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ClBTM2ab.css"}],"routeData":{"route":"/urgence","isIndex":true,"type":"page","pattern":"^\\/urgence\\/?$","segments":[[{"content":"urgence","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/urgence/index.astro","pathname":"/urgence","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ClBTM2ab.css"},{"type":"inline","content":"form[data-astro-cid-iybth2ls]{background-color:#2c2c69;padding:2rem;border-radius:.75rem;max-width:500px;margin:auto}label[data-astro-cid-iybth2ls]{display:block;margin-top:1rem;color:#fff;font-weight:500}input[data-astro-cid-iybth2ls],textarea[data-astro-cid-iybth2ls]{color:#000;background-color:#fff;width:100%;padding:.75rem;margin-top:.25rem;border:none;border-radius:.5rem;font-size:1rem}button[data-astro-cid-iybth2ls]{margin-top:2rem;padding:.75rem 1.5rem;background-color:#06064f;color:#fff;border:1px solid white;border-radius:.5rem;font-size:1rem;cursor:pointer;transition:.3s}button[data-astro-cid-iybth2ls]:hover{background-color:#fff;color:#06064f}\n.carousel[data-astro-cid-wfe7xcno]{position:relative;overflow:hidden;width:auto;height:auto}.carousel-track[data-astro-cid-wfe7xcno]{display:flex;transition:transform .5s ease-in-out}.carousel-slide[data-astro-cid-wfe7xcno]{min-width:100%;flex-shrink:0;object-fit:contain;height:auto;transition:transform .5s ease-in-out,transform .3s ease-in-out}.carousel-slide[data-astro-cid-wfe7xcno].active{transform:scale(1.1)}.carousel-slide[data-astro-cid-wfe7xcno]:not(.active){transform:scale(.9)}.carousel-btn[data-astro-cid-wfe7xcno]{position:absolute;top:50%;transform:translateY(-50%);background-color:#0006;border:none;color:#fff;font-size:2rem;padding:.5rem 1rem;cursor:pointer;z-index:10}.carousel-btn-left[data-astro-cid-wfe7xcno]{left:10px}.carousel-btn-right[data-astro-cid-wfe7xcno]{right:10px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/connexion/index.astro",{"propagation":"none","containsHead":true}],["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/inscription/index.astro",{"propagation":"none","containsHead":true}],["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/accueil/index.astro",{"propagation":"none","containsHead":true}],["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/contact/index.astro",{"propagation":"none","containsHead":true}],["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/detente/index.astro",{"propagation":"none","containsHead":true}],["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/mentions/index.astro",{"propagation":"none","containsHead":true}],["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/moodtracker/add.astro",{"propagation":"none","containsHead":true}],["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/moodtracker/historique.astro",{"propagation":"none","containsHead":true}],["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/moodtracker/index.astro",{"propagation":"none","containsHead":true}],["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/politique/index.astro",{"propagation":"none","containsHead":true}],["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/temoignages/index.astro",{"propagation":"none","containsHead":true}],["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/urgence/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/accueil/index@_@astro":"pages/accueil.astro.mjs","\u0000@astro-page:src/pages/connexion/index@_@astro":"pages/connexion.astro.mjs","\u0000@astro-page:src/pages/contact/index@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/detente/index@_@astro":"pages/detente.astro.mjs","\u0000@astro-page:src/pages/inscription/index@_@astro":"pages/inscription.astro.mjs","\u0000@astro-page:src/pages/mentions/index@_@astro":"pages/mentions.astro.mjs","\u0000@astro-page:src/pages/moodtracker/add@_@astro":"pages/moodtracker/add.astro.mjs","\u0000@astro-page:src/pages/moodtracker/historique@_@astro":"pages/moodtracker/historique.astro.mjs","\u0000@astro-page:src/pages/moodtracker/index@_@astro":"pages/moodtracker.astro.mjs","\u0000@astro-page:src/pages/politique/index@_@astro":"pages/politique.astro.mjs","\u0000@astro-page:src/pages/temoignages/index@_@astro":"pages/temoignages.astro.mjs","\u0000@astro-page:src/pages/urgence/index@_@astro":"pages/urgence.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BhRq_T_-.mjs","/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D5Z_E7dH.mjs","/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/components/FormTemoignage.astro?astro&type=script&index=0&lang.ts":"_astro/FormTemoignage.astro_astro_type_script_index_0_lang.Bq3EmCHT.js","/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BbSlzd-g.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/components/FormTemoignage.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"toggle-form\").addEventListener(\"click\",()=>{const t=document.getElementById(\"contact-form\");t.style.display=t.style.display===\"none\"?\"block\":\"none\"});const n=Array.from(document.querySelectorAll(\".temoignage\")),c=document.getElementById(\"prevBtn\"),d=document.getElementById(\"nextBtn\");let e=0;function o(){n.forEach((t,l)=>{t.classList.toggle(\"active\",l===e)}),c.disabled=e===0,d.disabled=e===n.length-1}c.addEventListener(\"click\",()=>{e>0&&(e--,o())});d.addEventListener(\"click\",()=>{e<n.length-1&&(e++,o())});o();"],["/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-btn\"),t=document.querySelector(\"#menu\"),a=document.body;e&&t&&e.addEventListener(\"click\",()=>{const s=e.getAttribute(\"aria-expanded\")===\"true\";e.setAttribute(\"aria-expanded\",String(!s)),t.setAttribute(\"aria-hidden\",String(s)),s?(t.classList.add(\"translate-x-full\"),t.classList.remove(\"translate-x-0\"),a.classList.remove(\"noscroll\")):(t.classList.remove(\"translate-x-full\"),t.classList.add(\"translate-x-0\"),a.classList.add(\"noscroll\"))});"]],"assets":["/_astro/acceuil_personnage1.DdnSw8Vm.svg","/_astro/carousel_discussions.8IU9x3Bc.webp","/_astro/carousel_numero.DEPAvjYb.webp","/_astro/carousel_ex.AlSwi41A.webp","/_astro/carousel_moodtracker.vBi-ngCt.webp","/_astro/carousel_temoignages.Cj7CzZW1.webp","/_astro/montserrat-cyrillic-ext-wght-normal.DV_LRdWn.woff2","/_astro/montserrat-vietnamese-wght-normal.BcziCZ2I.woff2","/_astro/montserrat-latin-wght-normal.AeMhpAKq.woff2","/_astro/montserrat-cyrillic-wght-normal.D3on441i.woff2","/_astro/montserrat-latin-ext-wght-normal.BLkAzDQP.woff2","/_astro/index.ClBTM2ab.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"nWl8x6qCBnnTH7Mzch9d5sqEtQZt7HbbI0wkkYMltaM=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
