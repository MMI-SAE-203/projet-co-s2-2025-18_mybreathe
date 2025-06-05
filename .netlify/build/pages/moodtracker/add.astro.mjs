import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CgQgV4Hd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as addMood } from '../../chunks/backend_mVS5SHvb.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CXX1l6fb.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const response = await addMood(formData);
    message = response.message;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Ajouter une humeur</h1> ${message && renderTemplate`<p class="text-gray-400 mx-6">${message}</p>`}<form action="/moodtracker/add" method="POST" enctype="multipart/form-data"> <select name="humeur" required class="w-full mt-2 p-2 border border-gray-300 rounded-md m-6 max-w-80"> <option value="">Choisissez votre humeur</option> <option value="😁Heureux(se)">😁Heureux</option> <option value="😕Déçu(e)">😕Déçu(e)</option> <option value="😰Anxieux(se)">😰Anxieux(se)</option> <option value="😧Peureux(se)">😧Peureux(se)</option> <option value="😢Triste">😢Triste</option> </select> <div class="my-5"> <button class="bg-[#FCB2D8] text-[#06064F] px-4 py-2 rounded shadow mx-6" type="submit">Ajouter</button> </div> <div class="my-10"> <a class="bg-gray-700 text-white px-4 py-2 rounded shadow mx-6" href="/moodtracker">Retour au Moodtracker</a> </div> <div class="my-10"> <a class="bg-[#FCB2D8] text-[#06064F] px-4 py-2 rounded shadow mx-6" href="/moodtracker/historique">Accéder à mon historique</a> </div> </form> ` })}`;
}, "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/moodtracker/add.astro", void 0);

const $$file = "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/moodtracker/add.astro";
const $$url = "/moodtracker/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
