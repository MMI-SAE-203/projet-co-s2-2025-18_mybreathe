import { e as createComponent, r as renderTemplate, j as renderHead } from '../chunks/astro/server_CgQgV4Hd.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="fr" data-astro-cid-pyinv6qf> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Inscription</title><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">', `</head> <body class="min-h-screen flex items-center justify-center font-sans relative bg-gray-800" data-astro-cid-pyinv6qf> <div class="w-full max-w-md text-white px-8 py-10 rounded-lg z-10" data-astro-cid-pyinv6qf> <div data-astro-cid-pyinv6qf> <img src="/src/assets/icones/logo.svg" alt="Logo 2BeBetter" class="w-40 mx-auto" data-astro-cid-pyinv6qf> </div> <div class="text-center mb-6" data-astro-cid-pyinv6qf> <h1 class="text-3xl font-bold" data-astro-cid-pyinv6qf>INSCRIPTION</h1> </div> <div id="success-message" class="hidden text-center text-lg font-semibold text-green-600 mb-4" data-astro-cid-pyinv6qf></div> <form class="space-y-4" data-astro-cid-pyinv6qf> <div data-astro-cid-pyinv6qf> <label for="name" class="text-sm font-light text-gray-400" data-astro-cid-pyinv6qf>Nom complet</label> <input type="text" id="name" placeholder="Votre nom complet" class="mt-1 w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300" required data-astro-cid-pyinv6qf> </div> <div data-astro-cid-pyinv6qf> <label for="nom_utilisateur" class="text-sm font-light text-gray-400" data-astro-cid-pyinv6qf>Nom d'utilisateur</label> <input type="text" id="nom_utilisateur" placeholder="nom_utilisateur123" class="mt-1 w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300" required data-astro-cid-pyinv6qf> </div> <div data-astro-cid-pyinv6qf> <label for="email" class="text-sm font-light text-gray-400" data-astro-cid-pyinv6qf>Email</label> <input type="email" id="email" placeholder="votre.email@gmail.com" class="mt-1 w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300" required data-astro-cid-pyinv6qf> </div> <div data-astro-cid-pyinv6qf> <label for="password" class="text-sm font-light text-gray-400" data-astro-cid-pyinv6qf>Mot de passe</label> <input type="password" id="password" placeholder="Minimum 8 caract\xE8res" class="mt-1 w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300" required minlength="8" data-astro-cid-pyinv6qf> </div> <div data-astro-cid-pyinv6qf> <label for="passwordConfirm" class="text-sm font-light text-gray-400" data-astro-cid-pyinv6qf>Confirmer le mot de passe</label> <input type="password" id="passwordConfirm" placeholder="R\xE9p\xE9tez votre mot de passe" class="mt-1 w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300" required minlength="8" data-astro-cid-pyinv6qf> </div> <button type="submit" class="w-full bg-pink-300 py-2 rounded-full font-semibold text-gray-800 hover:opacity-90" data-astro-cid-pyinv6qf>
S'inscrire
</button> </form> </div> <div class="absolute bottom-4 left-6 text-sm text-gray-400 pb-8" data-astro-cid-pyinv6qf>
D\xE9j\xE0 un compte ? <a href="/connexion" class="underline" data-astro-cid-pyinv6qf>Se connecter</a> </div> <script type="module">
      import PocketBase from "https://esm.sh/pocketbase";

      const pb = new PocketBase("https://pocketbase-2bebetter.juline-adam.fr");

      window.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("form");
        const successMessage = document.querySelector("#success-message");

        form.addEventListener("submit", async (e) => {
          e.preventDefault();

          const name = document.querySelector("#name").value;
          const nom_utilisateur = document.querySelector("#nom_utilisateur").value;
          const email = document.querySelector("#email").value;
          const password = document.querySelector("#password").value;
          const passwordConfirm = document.querySelector("#passwordConfirm").value;

          if (password !== passwordConfirm) {
            alert("Les mots de passe ne correspondent pas !");
            return;
          }

          console.log("Tentative d'inscription avec", email);

          try {
            const userData = {
              name,
              nom_utilisateur,
              email,
              password,
              passwordConfirm,
              emailVisibility: false,
              verified: false
            };

            const record = await pb.collection("users").create(userData);

            const authData = await pb.collection("users").authWithPassword(email, password);
            const user = pb.authStore.model;

            form.classList.add("hidden");
            successMessage.classList.remove("hidden");
            successMessage.innerText = \`Inscription r\xE9ussie ! Bienvenue \${user.name} !\`;
          } catch (err) {
            console.error("Erreur d'inscription:", err);

            let errorMessage = "Erreur lors de l'inscription : ";

            if (err.data && err.data.data) {
              const errors = err.data.data;
              if (errors.email) errorMessage += "Email d\xE9j\xE0 utilis\xE9 ou invalide. ";
              if (errors.nom_utilisateur) errorMessage += "Nom d'utilisateur d\xE9j\xE0 pris. ";
              if (errors.password) errorMessage += "Mot de passe trop faible. ";
              if (errors.name) errorMessage += "Nom requis. ";
            } else {
              errorMessage += err.message || "Une erreur inconnue s'est produite.";
            }

            alert(errorMessage);
          }
        });

        const password = document.querySelector("#password");
        const passwordConfirm = document.querySelector("#passwordConfirm");

        function validatePasswords() {
          if (password.value && passwordConfirm.value) {
            if (password.value !== passwordConfirm.value) {
              passwordConfirm.setCustomValidity("Les mots de passe ne correspondent pas");
            } else {
              passwordConfirm.setCustomValidity("");
            }
          }
        }

        password.addEventListener("input", validatePasswords);
        passwordConfirm.addEventListener("input", validatePasswords);
      });
    <\/script> </body> </html>`], ['<html lang="fr" data-astro-cid-pyinv6qf> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Inscription</title><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">', `</head> <body class="min-h-screen flex items-center justify-center font-sans relative bg-gray-800" data-astro-cid-pyinv6qf> <div class="w-full max-w-md text-white px-8 py-10 rounded-lg z-10" data-astro-cid-pyinv6qf> <div data-astro-cid-pyinv6qf> <img src="/src/assets/icones/logo.svg" alt="Logo 2BeBetter" class="w-40 mx-auto" data-astro-cid-pyinv6qf> </div> <div class="text-center mb-6" data-astro-cid-pyinv6qf> <h1 class="text-3xl font-bold" data-astro-cid-pyinv6qf>INSCRIPTION</h1> </div> <div id="success-message" class="hidden text-center text-lg font-semibold text-green-600 mb-4" data-astro-cid-pyinv6qf></div> <form class="space-y-4" data-astro-cid-pyinv6qf> <div data-astro-cid-pyinv6qf> <label for="name" class="text-sm font-light text-gray-400" data-astro-cid-pyinv6qf>Nom complet</label> <input type="text" id="name" placeholder="Votre nom complet" class="mt-1 w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300" required data-astro-cid-pyinv6qf> </div> <div data-astro-cid-pyinv6qf> <label for="nom_utilisateur" class="text-sm font-light text-gray-400" data-astro-cid-pyinv6qf>Nom d'utilisateur</label> <input type="text" id="nom_utilisateur" placeholder="nom_utilisateur123" class="mt-1 w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300" required data-astro-cid-pyinv6qf> </div> <div data-astro-cid-pyinv6qf> <label for="email" class="text-sm font-light text-gray-400" data-astro-cid-pyinv6qf>Email</label> <input type="email" id="email" placeholder="votre.email@gmail.com" class="mt-1 w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300" required data-astro-cid-pyinv6qf> </div> <div data-astro-cid-pyinv6qf> <label for="password" class="text-sm font-light text-gray-400" data-astro-cid-pyinv6qf>Mot de passe</label> <input type="password" id="password" placeholder="Minimum 8 caract\xE8res" class="mt-1 w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300" required minlength="8" data-astro-cid-pyinv6qf> </div> <div data-astro-cid-pyinv6qf> <label for="passwordConfirm" class="text-sm font-light text-gray-400" data-astro-cid-pyinv6qf>Confirmer le mot de passe</label> <input type="password" id="passwordConfirm" placeholder="R\xE9p\xE9tez votre mot de passe" class="mt-1 w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300" required minlength="8" data-astro-cid-pyinv6qf> </div> <button type="submit" class="w-full bg-pink-300 py-2 rounded-full font-semibold text-gray-800 hover:opacity-90" data-astro-cid-pyinv6qf>
S'inscrire
</button> </form> </div> <div class="absolute bottom-4 left-6 text-sm text-gray-400 pb-8" data-astro-cid-pyinv6qf>
D\xE9j\xE0 un compte ? <a href="/connexion" class="underline" data-astro-cid-pyinv6qf>Se connecter</a> </div> <script type="module">
      import PocketBase from "https://esm.sh/pocketbase";

      const pb = new PocketBase("https://pocketbase-2bebetter.juline-adam.fr");

      window.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("form");
        const successMessage = document.querySelector("#success-message");

        form.addEventListener("submit", async (e) => {
          e.preventDefault();

          const name = document.querySelector("#name").value;
          const nom_utilisateur = document.querySelector("#nom_utilisateur").value;
          const email = document.querySelector("#email").value;
          const password = document.querySelector("#password").value;
          const passwordConfirm = document.querySelector("#passwordConfirm").value;

          if (password !== passwordConfirm) {
            alert("Les mots de passe ne correspondent pas !");
            return;
          }

          console.log("Tentative d'inscription avec", email);

          try {
            const userData = {
              name,
              nom_utilisateur,
              email,
              password,
              passwordConfirm,
              emailVisibility: false,
              verified: false
            };

            const record = await pb.collection("users").create(userData);

            const authData = await pb.collection("users").authWithPassword(email, password);
            const user = pb.authStore.model;

            form.classList.add("hidden");
            successMessage.classList.remove("hidden");
            successMessage.innerText = \\\`Inscription r\xE9ussie ! Bienvenue \\\${user.name} !\\\`;
          } catch (err) {
            console.error("Erreur d'inscription:", err);

            let errorMessage = "Erreur lors de l'inscription : ";

            if (err.data && err.data.data) {
              const errors = err.data.data;
              if (errors.email) errorMessage += "Email d\xE9j\xE0 utilis\xE9 ou invalide. ";
              if (errors.nom_utilisateur) errorMessage += "Nom d'utilisateur d\xE9j\xE0 pris. ";
              if (errors.password) errorMessage += "Mot de passe trop faible. ";
              if (errors.name) errorMessage += "Nom requis. ";
            } else {
              errorMessage += err.message || "Une erreur inconnue s'est produite.";
            }

            alert(errorMessage);
          }
        });

        const password = document.querySelector("#password");
        const passwordConfirm = document.querySelector("#passwordConfirm");

        function validatePasswords() {
          if (password.value && passwordConfirm.value) {
            if (password.value !== passwordConfirm.value) {
              passwordConfirm.setCustomValidity("Les mots de passe ne correspondent pas");
            } else {
              passwordConfirm.setCustomValidity("");
            }
          }
        }

        password.addEventListener("input", validatePasswords);
        passwordConfirm.addEventListener("input", validatePasswords);
      });
    <\/script> </body> </html>`])), renderHead());
}, "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/inscription/index.astro", void 0);

const $$file = "/Users/adamjuline/Desktop/IUT/S2/projet-co-s2-2025-18_mybreathe/src/pages/inscription/index.astro";
const $$url = "/inscription";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
