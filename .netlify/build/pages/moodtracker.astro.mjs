import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CgQgV4Hd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CXX1l6fb.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>MOODTRACKER</h1> <div> <p>
Vos émotions comptent. ✨ Partager votre humeur chaque jour peut
            vous aider à mieux vous comprendre et à trouver un équilibre.
</p> <p>
💜 Ici, vous pouvez accueillir vos émotions en toute douceur et sans
            jugement.
</p> </div> <div></div> <div class="my-20"> <a class="bg-[#FCB2D8] text-[#06064F] px-4 py-2 rounded shadow mx-6" href="/moodtracker/add">Ajouter une humeur</a> </div> <div> <a class="bg-[#FCB2D8] text-[#06064F] px-4 py-2 rounded shadow mx-6" href="/moodtracker/historique">Accéder à mon historique</a> </div> ` })}`;
}, "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/moodtracker/index.astro", void 0);

const $$file = "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/moodtracker/index.astro";
const $$url = "/moodtracker";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
