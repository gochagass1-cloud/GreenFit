/* =====================================================
   GREENFIT — APPLICATION ENTRY POINT
===================================================== */

import { renderHeader, renderFooter } from "./components.js";

import { resolvePage } from "./pages.js";

import { initInteractions } from "./interactions.js";


function normalizePath(pathname) {

  if (!pathname || pathname === "/") {
    return "/";
  }

  return `/${pathname.replace(/^\/+|\/+$/g, "")}`;

}


function initializeApplication() {

  const path = normalizePath(window.location.pathname);

  const page = resolvePage(path);

  const headerRoot = document.querySelector("#site-header");

  const contentRoot = document.querySelector("#main-content");

  const footerRoot = document.querySelector("#site-footer");

  if (!contentRoot) {
    console.error("GreenFit: container principal não encontrado.");
    return;
  }

  // Páginas de acesso utilizam uma experiência sem navbar.
  const isAuthPage =
    path === "/cadastro" ||
    path === "/login";

  if (headerRoot) {
    headerRoot.innerHTML = isAuthPage
      ? ""
      : renderHeader(page.active);
  }

  contentRoot.innerHTML = page.render();

  if (footerRoot) {
    footerRoot.innerHTML = isAuthPage
      ? ""
      : renderFooter();
  }

  // Atualiza título da aba.
  document.title = page.title;

  // Atualiza descrição.
  const description = document.querySelector(
    'meta[name="description"]'
  );

  if (description) {
    description.content =
      "GreenFit — Eleve seu padrão, supere seus limites. Treino, alimentação e evolução em uma experiência integrada.";
  }

  // Define a identificação da página.
  document.body.dataset.page = path;

  // Inicializa os comportamentos depois da renderização.
  initInteractions();

  // Retorna ao topo ao entrar em uma página.
  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}


// Inicialização segura.
if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initializeApplication,
    { once: true }
  );

} else {

  initializeApplication();

}