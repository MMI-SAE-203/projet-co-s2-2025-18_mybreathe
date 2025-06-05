import { e as createComponent, r as renderTemplate, k as renderScript, h as addAttribute, m as maybeRenderHead, i as renderComponent } from '../chunks/astro/server_CgQgV4Hd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CXX1l6fb.mjs';
/* empty css                                 */
import 'clsx';
import PocketBase from 'pocketbase';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FormTemoignage = createComponent(async ($$result, $$props, $$slots) => {
  const pb = new PocketBase("https://pocketbase-2bebetter.juline-adam.fr:443");
  const temoignages = await pb.collection("temoignages").getFullList({
    sort: "-created"
  });
  return renderTemplate(_a || (_a = __template(["", '<div class="container" data-astro-cid-udq2rn26> <h3 data-astro-cid-udq2rn26>Les t\xE9moignages des autres utilisateurs</h3> <div class="nav-wrapper" data-astro-cid-udq2rn26> <button id="prevBtn" class="nav-btn" disabled data-astro-cid-udq2rn26>\u2190</button> <button id="nextBtn" class="nav-btn" data-astro-cid-udq2rn26>\u2192</button> </div> ', ` <button class="toggle-form-btn" id="toggle-form" data-astro-cid-udq2rn26>
\xC9crire un t\xE9moignage
</button> <form id="contact-form" style="display: none;" data-astro-cid-udq2rn26> <label for="titre" data-astro-cid-udq2rn26>Titre du t\xE9moignage</label> <input type="text" id="titre" name="titre" required data-astro-cid-udq2rn26> <label for="message" data-astro-cid-udq2rn26>Mon t\xE9moignage</label> <textarea id="message" name="message" rows="5" required data-astro-cid-udq2rn26></textarea> <button type="submit" style="
                margin-top: 2rem;
                padding: 0.75rem 1.5rem;
                background-color: #06064f;
                color: white;
                border: 1px solid white;
                border-radius: 0.5rem;
                font-size: 1rem;
                cursor: pointer;
                transition: 0.3s;
            " onmouseover="this.style.backgroundColor='white'; this.style.color='#06064f';" onmouseout="this.style.backgroundColor='#06064f'; this.style.color='white';" data-astro-cid-udq2rn26>
ENVOYER
</button> </form> </div> <script type="module" src="/src/scripts/formTemoignage.js"><\/script> `, ""])), maybeRenderHead(), temoignages.map((t, index) => renderTemplate`<div${addAttribute(`temoignage ${index === 0 ? "active" : ""}`, "class")}${addAttribute(index, "data-index")} data-astro-cid-udq2rn26> <strong data-astro-cid-udq2rn26>${t.titre}</strong> <p data-astro-cid-udq2rn26>${t.message}</p> <small data-astro-cid-udq2rn26>${new Date(t.created).toLocaleDateString("fr-FR")}</small> </div>`), renderScript($$result, "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/components/FormTemoignage.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/components/FormTemoignage.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>TÉMOIGNAGES</h1> <div> <p>
Votre voix compte. ✨ Partager votre histoire peut aider d’autres
            personnes à se sentir moins seules et à trouver du soutien.
</p> <p>
💙 Ici, vous pouvez témoigner librement et en toute bienveillance.
</p> </div> <div class="mb-20"> ${renderComponent($$result2, "FormTemoignage", $$FormTemoignage, {})} </div> ` })}`;
}, "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/temoignages/index.astro", void 0);

const $$file = "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/temoignages/index.astro";
const $$url = "/temoignages";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
