import { e as createComponent, i as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_CgQgV4Hd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CXX1l6fb.mjs';
/* empty css                                    */
import { b as allHumeurs } from '../../chunks/backend_mVS5SHvb.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Historique = createComponent(async ($$result, $$props, $$slots) => {
  const moodHistory = await allHumeurs();
  function groupByMonth(humeurs) {
    const grouped = {};
    for (const humeur of humeurs) {
      const date = new Date(humeur.created);
      const key = date.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long"
      });
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(humeur);
    }
    return grouped;
  }
  const groupedHumeurs = groupByMonth(moodHistory);
  const months = Object.keys(groupedHumeurs);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="relative flex flex-col items-center p-4 text-white"> <h2 id="month-title" class="text-2xl mb-8 transition-all duration-300"> ', ' </h2> <div class="flex items-center gap-4 mb-6"> <button id="prevBtn" class="bg-white text-[#2c2c5d] px-4 py-2 rounded-xl font-bold disabled:opacity-30" disabled>\n\u2190\n</button> <button id="nextBtn" class="bg-white text-[#2c2c5d] px-4 py-2 rounded-xl font-bold">\n\u2192\n</button> </div> <div id="month-lists" class="w-full max-w-md"> ', ' </div> <div class="my-10"> <a class="bg-gray-700 text-white px-4 py-2 rounded shadow mx-6" href="/moodtracker">Retour au Moodtracker</a> </div> </div> <script type="module">\n        const months = Array.from(document.querySelectorAll(".month-list"));\n        const monthTitle = document.getElementById("month-title");\n        const prevBtn = document.getElementById("prevBtn");\n        const nextBtn = document.getElementById("nextBtn");\n\n        let currentIndex = 0;\n\n        function updateMonthView() {\n            months.forEach((el, i) => {\n                el.classList.toggle("hidden", i !== currentIndex);\n            });\n\n            const currentMonth = months[currentIndex].dataset.month;\n            monthTitle.textContent = currentMonth;\n\n            prevBtn.disabled = currentIndex === 0;\n            nextBtn.disabled = currentIndex === months.length - 1;\n        }\n\n        prevBtn.addEventListener("click", () => {\n            if (currentIndex > 0) {\n                currentIndex--;\n                updateMonthView();\n            }\n        });\n\n        nextBtn.addEventListener("click", () => {\n            if (currentIndex < months.length - 1) {\n                currentIndex++;\n                updateMonthView();\n            }\n        });\n    <\/script> '])), maybeRenderHead(), months[0], months.map((month, index) => renderTemplate`<ul${addAttribute(`month-list ${index !== 0 ? "hidden" : ""} list-none p-0 transition-opacity duration-500`, "class")}${addAttribute(month, "data-month")}> ${groupedHumeurs[month].sort(
    (a, b) => new Date(a.created) - new Date(b.created)
  ).map((mood) => renderTemplate`<li class="flex justify-between items-center bg-[#2c2c5d] p-4 rounded-2xl mb-4 text-white text-lg shadow-md"${addAttribute(mood.id, "key")}> <div class="bg-white text-[#2c2c5d] py-2 px-3 rounded-xl font-bold text-base"> ${new Date(
    mood.created
  ).toLocaleDateString("fr-FR")} </div> <div class="text-2xl">${mood.humeur}</div> </li>`)} </ul>`)) })}`;
}, "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/moodtracker/historique.astro", void 0);

const $$file = "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/moodtracker/historique.astro";
const $$url = "/moodtracker/historique";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Historique,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
