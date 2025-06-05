import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_CgQgV4Hd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CXX1l6fb.mjs';
/* empty css                                 */
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Carousel2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="overflow-x-auto whitespace-nowrap px-6 py-10"> <div class="inline-flex gap-6"> ${[
    {
      title: "Respiration ancr\xE9e",
      description: "Id\xE9al pour calmer rapidement le syst\xE8me nerveux.",
      details: `Inspirez profond\xE9ment par le nez en comptant jusqu'\xE0 3.
                  Retenez votre souffle 3 secondes.
                  Expirez lentement par la bouche en comptant jusqu'\xE0 6.
                  R\xE9p\xE9tez pendant 1 \xE0 2 minutes jusqu'\xE0 ressentir un apaisement.`
    },
    {
      title: "Relaxation profonde",
      description: "Une m\xE9thode pour lib\xE9rer les tensions.",
      details: `Fermez les yeux et imaginez-vous dans un lieu calme.
                  Respirez profond\xE9ment et rel\xE2chez toute tension \xE0 chaque expiration.`
    },
    {
      title: "M\xE9thode de concentration",
      description: "Parfaite pour am\xE9liorer la concentration.",
      details: `Concentrez-vous sur un objet ou une image et respirez profond\xE9ment.
                  Maintenez cette attention pendant quelques minutes.`
    },
    {
      title: "\xC9quilibre \xE9nerg\xE9tique",
      description: "Id\xE9al pour r\xE9tablir l\u2019\xE9quilibre int\xE9rieur.",
      details: `Visualisez une lumi\xE8re qui circule dans votre corps.
                  Respirez profond\xE9ment et imaginez l\u2019\xE9nergie se d\xE9placer \xE0 travers vous.`
    },
    {
      title: "M\xE9ditation guid\xE9e",
      description: "Suivez les instructions pour entrer en m\xE9ditation.",
      details: `Asseyez-vous confortablement et concentrez-vous sur votre respiration.
                  Suivez les \xE9tapes pour entrer dans un \xE9tat de relaxation profonde.`
    }
  ].map((card, index) => renderTemplate`<div${addAttribute(index, "key")} class="flip-card w-[300px] h-[400px] inline-block"> <div class="flip-card-inner w-full h-full relative"> <div class="flip-card-front absolute w-full h-full rounded-2xl overflow-hidden backface-hidden shadow-xl"> <div class="absolute top-0 left-0 bg-[#7096D1] p-6 w-full h-full flex flex-col justify-center overflow-hidden"> <p class="text-5xl">${index + 1}</p> <h2 class="text-2xl font-bold text-ellipsis overflow-hidden whitespace-nowrap"> ${card.title} </h2> <p class="mt-2 text-lg text-ellipsis overflow-hidden whitespace-nowrap"> ${card.description} </p> </div> </div> <div class="flip-card-back absolute w-full h-full rounded-2xl px-5 bg-[#7096D1] text-center flex items-center justify-center backface-hidden rotate-y-180 shadow-xl overflow-hidden"> <p class="text-lg text-ellipsis overflow-hidden whitespace-normal"> ${card.details} </p> </div> </div> </div>`)} </div> </div> `;
}, "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/components/Carousel2.astro", void 0);

const $$Carousel3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="overflow-x-auto whitespace-nowrap px-6 py-10"> <div class="inline-flex gap-6"> ${[
    {
      title: " Respiration consciente (1-2 min)",
      description: "Id\xE9al pour calmer rapidement le syst\xE8me nerveux.",
      details: `Inspirez profond\xE9ment par le nez en comptant jusqu'\xE0 3.
                  Retenez votre souffle 3 secondes.
                  Expirez lentement par la bouche en comptant jusqu'\xE0 6.
                  R\xE9p\xE9tez pendant 1 \xE0 2 minutes jusqu'\xE0 ressentir un apaisement.`
    },
    {
      title: "Relaxation profonde",
      description: "Une m\xE9thode pour lib\xE9rer les tensions.",
      details: `Fermez les yeux et imaginez-vous dans un lieu calme.
                  Respirez profond\xE9ment et rel\xE2chez toute tension \xE0 chaque expiration.`
    },
    {
      title: "M\xE9thode de concentration",
      description: "Parfaite pour am\xE9liorer la concentration.",
      details: `Concentrez-vous sur un objet ou une image et respirez profond\xE9ment.
                  Maintenez cette attention pendant quelques minutes.`
    },
    {
      title: "\xC9quilibre \xE9nerg\xE9tique",
      description: "Id\xE9al pour r\xE9tablir l\u2019\xE9quilibre int\xE9rieur.",
      details: `Visualisez une lumi\xE8re qui circule dans votre corps.
                  Respirez profond\xE9ment et imaginez l\u2019\xE9nergie se d\xE9placer \xE0 travers vous.`
    },
    {
      title: "M\xE9ditation guid\xE9e",
      description: "Suivez les instructions pour entrer en m\xE9ditation.",
      details: `Asseyez-vous confortablement et concentrez-vous sur votre respiration.
                  Suivez les \xE9tapes pour entrer dans un \xE9tat de relaxation profonde.`
    }
  ].map((card, index) => renderTemplate`<div${addAttribute(index, "key")} class="flip-card w-[300px] h-[400px] inline-block"> <div class="flip-card-inner w-full h-full relative"> <div class="flip-card-front absolute w-full h-full rounded-2xl overflow-hidden backface-hidden shadow-xl"> <div class="absolute top-0 left-0 bg-[#7096D1] p-6 w-full h-full flex flex-col justify-center overflow-hidden"> <p class="text-5xl">${index + 1}</p> <h2 class="text-2xl font-bold text-ellipsis overflow-hidden whitespace-nowrap"> ${card.title} </h2> </div> </div> <div class="flip-card-back absolute w-full h-full rounded-2xl px-5 bg-[#7096D1] text-center flex items-center justify-center backface-hidden rotate-y-180 shadow-xl overflow-hidden"> <p class="text-lg text-ellipsis overflow-hidden whitespace-normal"> ${card.details} </p> </div> </div> </div>`)} </div> </div> `;
}, "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/components/Carousel3.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>COIN DÉTENTE</h1> <h2 class="mt-15">Exercices de respiration</h2> <div class=""> <p>
Nous mettons à votre <span class="text-[#FCB2D8] font-bold">disposition</span> une série d’exercices de respiration conçus pour vous <span class="text-[#FCB2D8] font-bold">aider</span> à vous détendre et à retrouver un état de
<span class="text-[#FCB2D8] font-bold">calme</span>.
</p> <p>
Simples et accessibles à tout moment, ces techniques vous
            permettront de <span class="text-[#FCB2D8] font-bold">recentrer</span> votre attention, d’<span class="text-[#FCB2D8] font-bold">apaiser</span>
votre esprit et de mieux gérer vos <span class="text-[#FCB2D8] font-bold">émotions</span> au quotidien. Prenez un instant pour respirer et vous reconnecter à
            vous-même.
</p> </div> <div class="lg:max-w-[600px] w-full mx-auto my-15"> ${renderComponent($$result2, "Carousel2", $$Carousel2, {})} </div> <h2>Exercices de yoga - pour débutant(e)</h2> <p>
Nous vous proposons une sélection d’exercices de yoga adaptés aux
        débutants, conçus pour vous aider à
<span class="text-[#FCB2D8] font-bold">vous détendre</span>, à améliorer
        votre <span class="text-[#FCB2D8] font-bold">souplesse</span> et à renforcer
        votre <span class="text-[#FCB2D8] font-bold">concentration</span>. Ces
        postures simples et accessibles vous permettront de découvrir les
        bienfaits du yoga tout en prenant soin de votre corps et de votre
        esprit. Prenez un moment pour vous recentrer et profiter de ces
        exercices apaisants.
</p> <div class="lg:max-w-[600px] w-full mx-auto mt-15"> ${renderComponent($$result2, "Carousel3", $$Carousel3, {})} </div> ` })}`;
}, "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/detente/index.astro", void 0);

const $$file = "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/detente/index.astro";
const $$url = "/detente";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
