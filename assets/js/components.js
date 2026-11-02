/* =====================================================
   GREENFIT — COMPONENTES COMPARTILHADOS
===================================================== */

const leafLogo = `
<svg viewBox="0 0 40 40" fill="none"
     xmlns="http://www.w3.org/2000/svg"
     aria-hidden="true">
  <path
    d="M31.6 7.4C19.2 7.3 9.5 12.1
    8.1 21.2C7.3 26.5 11 30.3 15.7 30.3
    C24.9 30.3 31.6 19.8 31.6 7.4Z"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"/>
  <path
    d="M8.9 32.2C13.7 24.7
    19.2 20 27.2 15.9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"/>
</svg>
`;

export function renderHeader(activePage = "") {

  const links = [
    { id: "home", label: "Início", href: "/" },
    { id: "sobre", label: "A plataforma", href: "/sobre/" },
    { id: "catalogo", label: "Treinos & dietas", href: "/catalogo/" },
    { id: "simulador", label: "Demonstração", href: "/simulador/" },
    { id: "planos", label: "Planos", href: "/planos/" },
    { id: "contato", label: "Contato", href: "/contato/" }
  ];

  return `
  <header class="site-header">
    <div class="container header-inner">

      <a class="brand" href="/" aria-label="GreenFit, início">
        <span class="brand-symbol">${leafLogo}</span>
        <span>
          Green <span class="brand-name-highlight">Fit</span>
        </span>
      </a>

      <button
        class="menu-toggle"
        id="menu-toggle"
        aria-label="Abrir menu"
        aria-expanded="false"
        aria-controls="primary-nav"
        type="button">
        <i class="fa-solid fa-bars"></i>
      </button>

      <nav class="primary-nav" id="primary-nav"
           aria-label="Navegação principal">

        ${links.map(link => `
          <a
            href="${link.href}"
            class="${activePage === link.id ? "active" : ""}"
            ${activePage === link.id ? 'aria-current="page"' : ""}
          >
            ${link.label}
          </a>
        `).join("")}

      </nav>

      <div class="header-actions">
        <a class="header-login" href="/login/">
          Entrar
        </a>

        <a class="btn btn-primary btn-sm" href="/cadastro/">
          Criar conta
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>

    </div>
  </header>
  `;
}

export function renderFooter() {

  return `
  <footer class="site-footer">
    <div class="container">

      <div class="footer-grid">

        <div class="footer-brand">

          <a class="brand" href="/">
            <span class="brand-symbol">${leafLogo}</span>
            <span>
              Green <span class="brand-name-highlight">Fit</span>
            </span>
          </a>

          <p>
            Eleve seu padrão, supere seus limites.
            Uma experiência que propõe conectar treino,
            alimentação e evolução em uma jornada integrada.
          </p>

          <span class="badge badge-green">
            Projeto acadêmico demonstrativo
          </span>

        </div>

        <div class="footer-column">
          <strong>Explore</strong>
          <a href="/sobre/">A plataforma</a>
          <a href="/catalogo/">Treinos & dietas</a>
          <a href="/simulador/">Demonstração</a>
          <a href="/planos/">Planos</a>
        </div>

        <div class="footer-column">
          <strong>Sua conta</strong>
          <a href="/cadastro/">Criar conta</a>
          <a href="/login/">Entrar</a>
          <a href="/contato/">Contato</a>
        </div>

        <div class="footer-column">
          <strong>Informações</strong>
          <a href="/sobre/#proposta">Nossa proposta</a>
          <a href="/sobre/#limites">Limites do projeto</a>
          <a href="/contato/">Fale conosco</a>
        </div>

      </div>

      <div class="footer-bottom">
        <span>
          © ${new Date().getFullYear()} GreenFit.
          Todos os direitos reservados.
        </span>

        <span>
          Protótipo de front-end. Não oferece serviços de saúde.
        </span>
      </div>

    </div>
  </footer>
  `;
}