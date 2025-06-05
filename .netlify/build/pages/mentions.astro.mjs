import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CgQgV4Hd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CXX1l6fb.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>MENTIONS LÉGALES</h1> <div> <h2>1. Éditeur du site</h2> <p>Le site 2BeBetter est édité par :</p> <ul> <li><span class="font-bold text-[#FCB2D8]">Nom de l’organisation / entreprise :</span> Département MMI de Montbéliard</li> <li><span class="font-bold text-[#FCB2D8]">Adresse :</span> 4 Place Lucien Tharradin, 25200 Montbéliard</li> <li><span class="font-bold text-[#FCB2D8]">Email :</span> contact-mybreathe@gmail.com</li> <li><span class="font-bold text-[#FCB2D8]">Téléphone :</span> 03.12.34.56.78</li> <li><span class="font-bold text-[#FCB2D8]">Responsable de la publication :</span> Juline Adam, Margaux Couturier, Mathis Desraches & Solène Geiss</li> </ul> </div> <div> <h2>2. Hébergement</h2> <ul> <li><span class="font-bold text-[#FCB2D8]">Nom de l’hébergeur :</span> Infomaniak</li> <li><span class="font-bold text-[#FCB2D8]">Adresse :</span> Rue Eugène-Marziano 25, 1227 Genève, Suisse</li> <li><span class="font-bold text-[#FCB2D8]">Téléphone :</span> +41 22 820 35 40</li> </ul> </div> <div> <h2>3. Propriété intellectuelle</h2> <p>
Tous les contenus (textes, images, logos, interface, outils interactifs) présents sur 2BeBetter sont protégés par le droit d’auteur et appartiennent exclusivement au Département MMI de Montbéliard, sauf mention contraire. Toute reproduction, modification ou diffusion sans autorisation est interdite.
</p> </div> <div> <h2>4. Responsabilité</h2> <p>
L’éditeur du site ne saurait être tenu responsable en cas d’interruptions, d’erreurs ou d’éventuelles violations des conditions d’utilisation par des tiers. MyBreathe met tout en œuvre pour garantir un espace sécurisé, mais la responsabilité des échanges entre utilisateurs leur incombe.
</p> </div> <div> <h2>5. Signalement et modération</h2> <p>
2BeBetter met en place une modération active et permet à tout utilisateur de signaler un contenu inapproprié via la page contact.
</p> </div> <div> <h2>6. Cookies et traçabilité</h2> <p>
Des cookies sont utilisés pour améliorer l’expérience utilisateur et fournir des statistiques anonymes sur l’utilisation du site. Plus d’informations dans notre [Politique de confidentialité]. </p> </div> ` })}`;
}, "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/mentions/index.astro", void 0);

const $$file = "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/mentions/index.astro";
const $$url = "/mentions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
