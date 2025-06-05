import { e as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_CgQgV4Hd.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FormContact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<form id="contact-form" data-astro-cid-iybth2ls> <label for="prenom" data-astro-cid-iybth2ls>Pr\xE9nom</label> <input type="text" id="prenom" name="prenom" required data-astro-cid-iybth2ls> <label for="nom" data-astro-cid-iybth2ls>Nom</label> <input type="text" id="nom" name="nom" required data-astro-cid-iybth2ls> <label for="email" data-astro-cid-iybth2ls>Adresse mail</label> <input type="email" id="email" name="email" required data-astro-cid-iybth2ls> <label for="message" data-astro-cid-iybth2ls>Message</label> <textarea id="message" name="message" rows="5" required data-astro-cid-iybth2ls></textarea> <button type="submit" data-astro-cid-iybth2ls>ENVOYER</button> </form> <!-- Lien vers le script JS --> <script type="module" src="/src/scripts/formContact.js"><\/script>'])), maybeRenderHead());
}, "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/components/FormContact.astro", void 0);

export { $$FormContact as $ };
