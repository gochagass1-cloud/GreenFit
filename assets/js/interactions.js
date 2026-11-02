/* =====================================================
   GREENFIT — INTERAÇÕES
===================================================== */

import { allCatalogItems, goals } from "./data.js";

const $ = (selector, scope = document) =>
  scope.querySelector(selector);

const $$ = (selector, scope = document) =>
  [...scope.querySelectorAll(selector)];


/* =====================================================
   1. NOTIFICAÇÕES
===================================================== */

export function showToast(message, type = "success") {

  const region = $("#toast-region");

  if (!region) return;

  const toast = document.createElement("div");

  toast.className = `toast toast-${type}`;

  const symbol = type === "error" ? "!" : "✓";

  toast.innerHTML = `
    <span aria-hidden="true">${symbol}</span>
    <p></p>
  `;

  $("p", toast).textContent = message;

  region.appendChild(toast);

  window.setTimeout(() => {

    toast.classList.add("toast-out");

    window.setTimeout(() => toast.remove(), 250);

  }, 4000);

}


/* =====================================================
   2. MENU MOBILE
===================================================== */

function initMenu() {

  const toggle = $("#menu-toggle");
  const nav = $("#primary-nav");

  if (!toggle || !nav) return;

  function closeMenu() {

    nav.classList.remove("open");

    toggle.setAttribute("aria-expanded", "false");

    const icon = $("i", toggle);

    if (icon) {
      icon.className = "fa-solid fa-bars";
    }

  }

  toggle.addEventListener("click", () => {

    const opened = nav.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(opened));

    const icon = $("i", toggle);

    if (icon) {
      icon.className = opened
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    }

  });

  $$("a", nav).forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeMenu();
    }

  });

}


/* =====================================================
   3. ANIMAÇÕES DE ENTRADA
===================================================== */

function initReveal() {

  const elements = $$(".reveal");

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {

    elements.forEach(element => {
      element.classList.add("visible");
    });

    return;

  }

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -30px 0px"
  });

  elements.forEach(element => observer.observe(element));

}


/* =====================================================
   4. CATÁLOGO
===================================================== */

function initCatalog() {

  const grid = $("#catalog-grid");

  if (!grid) return;

  let selectedType = "all";
  let selectedGoal = "all";
  let search = "";

  const cards = $$("[data-catalog-card]", grid);

  const result = $("#catalog-count");

  const empty = $("#catalog-empty");

  function filterCatalog() {

    let visible = 0;

    cards.forEach(card => {

      const type = card.dataset.type;
      const goal = card.dataset.goal;

      const searchable =
        card.dataset.search.toLocaleLowerCase("pt-BR");

      const matchesType =
        selectedType === "all" ||
        type === selectedType;

      const matchesGoal =
        selectedGoal === "all" ||
        goal === selectedGoal;

      const matchesSearch =
        !search ||
        searchable.includes(search);

      const shouldShow =
        matchesType &&
        matchesGoal &&
        matchesSearch;

      card.hidden = !shouldShow;

      if (shouldShow) {
        visible++;
      }

    });

    if (result) {

      result.textContent =
        `${visible} ${visible === 1
          ? "resultado encontrado"
          : "resultados encontrados"}`;

    }

    if (empty) {
      empty.classList.toggle("visible", visible === 0);
    }

  }

  function selectGroup(attribute, value, element) {

    $$(`[${attribute}]`).forEach(button => {

      const active = button === element;

      button.classList.toggle("active", active);

      button.setAttribute("aria-pressed", String(active));

    });

    if (attribute === "data-catalog-type") {
      selectedType = value;
    }

    if (attribute === "data-catalog-goal") {
      selectedGoal = value;
    }

    filterCatalog();

  }

  $$("[data-catalog-type]").forEach(button => {

    button.addEventListener("click", () => {

      selectGroup(
        "data-catalog-type",
        button.dataset.catalogType,
        button
      );

    });

  });

  $$("[data-catalog-goal]").forEach(button => {

    button.addEventListener("click", () => {

      selectGroup(
        "data-catalog-goal",
        button.dataset.catalogGoal,
        button
      );

    });

  });

  const searchInput = $("#catalog-search");

  if (searchInput) {

    searchInput.addEventListener("input", () => {

      search = searchInput.value
        .trim()
        .toLocaleLowerCase("pt-BR");

      filterCatalog();

    });

  }

  $$("[data-catalog-clear]").forEach(button => {

    button.addEventListener("click", () => {

      selectedType = "all";
      selectedGoal = "all";
      search = "";

      if (searchInput) {
        searchInput.value = "";
      }

      $$("[data-catalog-type]").forEach(item => {

        const active = item.dataset.catalogType === "all";

        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));

      });

      $$("[data-catalog-goal]").forEach(item => {

        const active = item.dataset.catalogGoal === "all";

        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));

      });

      filterCatalog();

    });

  });

}


/* =====================================================
   5. MODAL DE DETALHES
===================================================== */

function initCatalogModal() {

  const root = $("#modal-root");

  if (!root) return;

  let previousFocus = null;

  function openModal(item) {

    previousFocus = document.activeElement;

    const content = item.details;

    root.innerHTML = `
      <div class="modal-root open">

        <div class="modal-overlay" data-modal-close></div>

        <section
          class="modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title">

          <button
            class="modal-close"
            type="button"
            data-modal-close
            aria-label="Fechar detalhes">
            ×
          </button>

          <span class="section-eyebrow">
            ${item.type === "treino" ? "EXERCÍCIO" : "RECEITA"}
          </span>

          <h2 id="modal-title">${item.title}</h2>

          <p>${content.intro}</p>

          <div class="modal-detail-list">

            <h3>Exemplo de organização</h3>

            <ul>
              ${content.items.map(step => `
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>${step}</span>
                </li>
              `).join("")}
            </ul>

          </div>

          <div class="modal-notice">
            <i class="fa-solid fa-circle-info"></i>
            <p>${content.note}</p>
          </div>

          <button
            type="button"
            class="btn btn-primary btn-full"
            data-modal-close>
            Fechar detalhes
          </button>

        </section>

      </div>
    `;

    document.body.style.overflow = "hidden";

    const dialog = $(".modal-dialog", root);

    if (dialog) {

      dialog.setAttribute("tabindex", "-1");

      dialog.focus();

    }

  }

  function closeModal() {

    root.innerHTML = "";

    document.body.style.overflow = "";

    if (previousFocus && previousFocus.focus) {
      previousFocus.focus();
    }

  }

  document.addEventListener("click", event => {

    const trigger = event.target.closest("[data-open-details]");

    if (trigger) {

      const id = Number(trigger.dataset.openDetails);

      const item = allCatalogItems.find(item => item.id === id);

      if (item) {
        openModal(item);
      }

      return;

    }

    if (event.target.closest("[data-modal-close]")) {
      closeModal();
    }

  });

  document.addEventListener("keydown", event => {

    if (
      event.key === "Escape" &&
      $(".modal-root.open", root)
    ) {

      closeModal();

    }

  });

}


/* =====================================================
   6. DEMONSTRAÇÃO
===================================================== */

function initDemo() {

  const buttons = $$("[data-demo-goal]");

  if (!buttons.length) return;

  const focus = $("#demo-focus");
  const insight = $("#demo-insight");
  const workout = $("#demo-workout");
  const food = $("#demo-food");

  function update(goalId) {

    const selected = goals.find(goal => goal.id === goalId);

    if (!selected) return;

    if (focus) focus.textContent = selected.focus;
    if (insight) insight.textContent = selected.insight;
    if (workout) workout.textContent = selected.workout;
    if (food) food.textContent = selected.food;

    buttons.forEach(button => {

      const active =
        button.dataset.demoGoal === goalId;

      button.classList.toggle("active", active);

      button.setAttribute("aria-pressed", String(active));

    });

  }

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      update(button.dataset.demoGoal);

    });

  });

}


/* =====================================================
   7. FAQ
===================================================== */

function initFAQ() {

  const questions = $$("[data-faq-toggle]");

  questions.forEach(button => {

    button.addEventListener("click", () => {

      const parent = button.closest(".faq-item");

      if (!parent) return;

      const wasOpen = parent.classList.contains("open");

      // Apenas um item aberto por vez dentro da mesma lista.
      const list = parent.parentElement;

      $$(".faq-item", list).forEach(item => {

        item.classList.remove("open");

        const question = $("[data-faq-toggle]", item);

        if (question) {
          question.setAttribute("aria-expanded", "false");
        }

      });

      if (!wasOpen) {

        parent.classList.add("open");

        button.setAttribute("aria-expanded", "true");

      }

    });

  });

}


/* =====================================================
   8. SENHAS
===================================================== */

function initPasswordVisibility() {

  $$("[data-password-toggle]").forEach(button => {

    button.addEventListener("click", () => {

      const input = document.getElementById(
        button.dataset.passwordToggle
      );

      if (!input) return;

      const hidden = input.type === "password";

      input.type = hidden ? "text" : "password";

      button.setAttribute(
        "aria-label",
        hidden ? "Ocultar senha" : "Mostrar senha"
      );

      const icon = $("i", button);

      if (icon) {

        icon.className = hidden
          ? "fa-regular fa-eye-slash"
          : "fa-regular fa-eye";

      }

    });

  });

}


/* =====================================================
   9. VALIDAÇÃO E SUBMISSÃO DEMONSTRATIVA
===================================================== */

function initForms() {

  $$("[data-form]").forEach(form => {

    form.addEventListener("submit", event => {

      event.preventDefault();

      const feedback = $(".form-feedback", form);

      if (feedback) {
        feedback.textContent = "";
        feedback.classList.remove("error");
      }

      const kind = form.dataset.form;

      // Validação nativa dos campos obrigatórios.
      if (!form.reportValidity()) {

        if (feedback) {
          feedback.textContent = "Confira os campos obrigatórios.";
          feedback.classList.add("error");
        }

        return;

      }

      if (kind === "signup") {

        const password =
          $('[name="password"]', form)?.value || "";

        const confirm =
          $('[name="confirmPassword"]', form)?.value || "";

        if (password.length < 8) {

          setError(
            feedback,
            "A senha precisa ter pelo menos 8 caracteres."
          );

          return;

        }

        if (password !== confirm) {

          setError(
            feedback,
            "As senhas não correspondem. Confira os campos."
          );

          return;

        }

        setSuccess(
          feedback,
          "Cadastro validado! Esta experiência não cria contas nem armazena os dados."
        );

        showToast(
          "Demonstração concluída. Nenhuma conta foi criada."
        );

      }

      else if (kind === "login") {

        setSuccess(
          feedback,
          "Campos validados. A autenticação não está disponível nesta demonstração."
        );

        showToast(
          "Acesso simulado. Nenhuma sessão foi iniciada."
        );

      }

      else if (kind === "contact") {

        setSuccess(
          feedback,
          "Campos validados. Nenhuma mensagem foi transmitida ou armazenada."
        );

        showToast(
          "Envio demonstrativo concluído."
        );

      }

      // Evita persistência de informações.
      form.reset();

    });

  });

}

function setError(element, message) {

  if (!element) return;

  element.textContent = message;
  element.classList.add("error");

}

function setSuccess(element, message) {

  if (!element) return;

  element.textContent = message;
  element.classList.remove("error");

}


/* =====================================================
   10. RECUPERAÇÃO DE SENHA — MODAL
===================================================== */

function initRecovery() {

  const root = $("#modal-root");

  document.addEventListener("click", event => {

    const button = event.target.closest("[data-open-recovery]");

    if (!button || !root) return;

    event.preventDefault();

    root.innerHTML = `
      <div class="modal-root open">

        <div class="modal-overlay" data-modal-close></div>

        <section
          class="modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="recovery-title">

          <button
            class="modal-close"
            type="button"
            data-modal-close
            aria-label="Fechar">
            ×
          </button>

          <span class="section-eyebrow">RECUPERAÇÃO DE ACESSO</span>

          <h2 id="recovery-title">Esqueceu sua senha?</h2>

          <p>
            Esta experiência é demonstrativa. Como não existe autenticação
            ou envio de e-mails, a recuperação não será realizada.
          </p>

          <button
            type="button"
            class="btn btn-primary btn-full"
            data-modal-close>
            Entendi
          </button>

        </section>

      </div>
    `;

    document.body.style.overflow = "hidden";

  });

}


/* =====================================================
   11. IMAGENS COM FALLBACK
===================================================== */

function initImages() {

  $$("img").forEach(image => {

    image.addEventListener("error", () => {

      image.classList.add("image-error");

      image.alt = image.alt || "Imagem ilustrativa GreenFit";

    }, { once: true });

  });

}


/* =====================================================
   12. INICIALIZAÇÃO
===================================================== */

export function initInteractions() {

  initMenu();

  initReveal();

  initCatalog();

  initCatalogModal();

  initDemo();

  initFAQ();

  initPasswordVisibility();

  initForms();

  initRecovery();

  initImages();

}