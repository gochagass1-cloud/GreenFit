/* =====================================================
   GREENFIT — PÁGINAS
===================================================== */

import { allCatalogItems, goals } from "./data.js";

const arrow = `<i class="fa-solid fa-arrow-right"></i>`;

const icon = (name) => `<i class="fa-solid ${name}"></i>`;

function catalogCard(item) {

  return `
    <article
      class="catalog-card"
      data-catalog-card
      data-id="${item.id}"
      data-type="${item.type}"
      data-goal="${item.goal}"
      data-search="${item.title.toLowerCase()} ${item.category.toLowerCase()}">

      <div class="catalog-card-image">
        <img
          src="${item.image}"
          alt="${item.title}"
          loading="lazy">

        <span class="catalog-image-tag">
          ${item.type === "treino" ? "Treino" : "Receita"}
        </span>
      </div>

      <div class="catalog-card-body">

        <div class="catalog-card-meta">
          <span>${item.category}</span>
          <span>${item.duration}</span>
        </div>

        <h3>${item.title}</h3>

        <p>${item.description}</p>

        <div class="catalog-card-footer">
          <span class="level-tag">${item.level}</span>

          <button
            class="details-link"
            type="button"
            data-open-details="${item.id}">
            Ver detalhes ${arrow}
          </button>
        </div>

      </div>
    </article>
  `;
}

function renderFAQ(items) {

  return `
  <div class="faq-list">

    ${items.map((item, index) => `
      <div class="faq-item ${index === 0 ? "open" : ""}">

        <button class="faq-question"
                type="button"
                aria-expanded="${index === 0}"
                data-faq-toggle>
          ${item.question}
          <i class="fa-solid fa-plus"></i>
        </button>

        <div class="faq-answer">
          <div class="faq-answer-inner">
            <p>${item.answer}</p>
          </div>
        </div>

      </div>
    `).join("")}

  </div>
  `;
}

function pageHeader(eyebrow, title, description, current) {

  return `
  <section class="section-sm page-intro">
    <div class="container">

      <div class="breadcrumb">
        <a href="/">Início</a>
        <span>/</span>
        <span>${current}</span>
      </div>

      <span class="section-eyebrow">${eyebrow}</span>

      <h1 class="section-title page-title">${title}</h1>

      <p class="page-description">${description}</p>

    </div>
  </section>
  `;
}


/* =====================================================
   1. HOME
===================================================== */

function homePage() {

  const features = [
    {
      number: "01",
      icon: "fa-utensils",
      title: "Alimentação adaptativa",
      description: "Uma proposta de planejamento alimentar que considera objetivos, preferências, rotina, orçamento e restrições.",
      large: true
    },
    {
      number: "02",
      icon: "fa-dumbbell",
      title: "Treinos inteligentes",
      description: "Organização de treinos considerando experiência, frequência, tempo disponível e equipamentos."
    },
    {
      number: "03",
      icon: "fa-camera",
      title: "Scanner alimentar",
      description: "Conceito de registro por foto ou código de barras para consultar informações nutricionais."
    },
    {
      number: "04",
      icon: "fa-chart-line",
      title: "Evolução integrada",
      description: "Visualização de históricos e indicadores para compreender a evolução dos hábitos."
    },
    {
      number: "05",
      icon: "fa-comments",
      title: "Assistente proativo",
      description: "Uma proposta de apoio com lembretes, resumos e orientações contextuais."
    }
  ];

  const process = [
    ["01", "fa-magnifying-glass", "Conhecer", "Entender objetivos e contexto."],
    ["02", "fa-sliders", "Personalizar", "Organizar uma proposta de rotina."],
    ["03", "fa-bolt", "Executar", "Transformar planejamento em ação."],
    ["04", "fa-clipboard-check", "Registrar", "Acompanhar hábitos e atividades."],
    ["05", "fa-arrow-trend-up", "Evoluir", "Observar resultados e recomeçar."]
  ];

  return `

  <!-- HERO -->

  <section class="hero">
    <div class="container hero-grid">

      <div class="hero-content">

        <span class="hero-kicker">
          <span></span>
          BEM-ESTAR SIMPLIFICADO
        </span>

        <h1>
          Sua rotina fitness,
          <span>organizada</span>
          em um só lugar.
        </h1>

        <p class="hero-description">
          Treinos, alimentação e evolução conectados em uma experiência
          pensada para acompanhar seus objetivos e a sua rotina.
        </p>

        <div class="hero-actions">

          <a class="btn btn-primary" href="/catalogo/">
            Explorar GreenFit
            ${arrow}
          </a>

          <a class="btn btn-outline" href="/sobre/">
            Conhecer a proposta
          </a>

        </div>

        <div class="hero-metrics">

          <div class="hero-metric">
            <strong>02</strong>
            <span>Pilares principais</span>
          </div>

          <div class="hero-metric">
            <strong>05</strong>
            <span>Recursos em proposta</span>
          </div>

          <div class="hero-metric">
            <strong>01</strong>
            <span>Jornada integrada</span>
          </div>

        </div>

      </div>

      <div class="hero-visual">

        <div class="hero-art-card">

          <svg class="hero-emblem"
               viewBox="0 0 240 240"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">

            <circle
              cx="120"
              cy="120"
              r="82"
              stroke="#2E333A"
              stroke-width="5"/>

            <path
              d="M120 38 A82 82 0 0 1 202 120"
              stroke="#4ADE80"
              stroke-width="4"
              stroke-linecap="round"/>

            <circle cx="66" cy="76" r="7" fill="#2E6A49"/>
            <circle cx="164" cy="78" r="10" fill="#2E333A"/>

            <path
              d="M63 151 C87 148 106 126 124 111 C138 100 151 96 165 96 C162 121 149 141 130 153 C109 166 83 166 63 151Z"
              fill="#4ADE80"/>

            <path
              d="M70 169 C96 154 121 132 143 110"
              stroke="#F5F7F6"
              stroke-width="6"
              stroke-linecap="round"/>

          </svg>

        </div>

        <div class="floating-info top">
          <small>PLANEJAMENTO</small>
          <strong><span>✳</span> Treino + alimentação</strong>
        </div>

        <div class="floating-info bottom">
          <small>VISÃO INTEGRADA</small>
          <strong><span>↗</span> Uma jornada completa</strong>
        </div>

      </div>

    </div>
  </section>

  <!-- VALUE STRIP -->

  <section class="value-strip">
    <div class="container value-strip-inner">

      <div class="value-strip-item">
        ${icon("fa-dumbbell")}
        Treino com contexto
      </div>

      <div class="value-strip-item">
        ${icon("fa-utensils")}
        Alimentação organizada
      </div>

      <div class="value-strip-item">
        ${icon("fa-chart-line")}
        Evolução acompanhada
      </div>

      <div class="value-strip-item">
        ${icon("fa-brain")}
        Inteligência como conceito transversal
      </div>

    </div>
  </section>

  <!-- FEATURES -->

  <section class="section" id="proposta">

    <div class="container">

      <div class="section-header">
        <span class="section-eyebrow">O UNIVERSO GREENFIT</span>

        <h2 class="section-title">
          Mais clareza para cuidar de você.
          <span>Mais conexão na sua rotina.</span>
        </h2>

        <p>
          A proposta é deixar de tratar treino e alimentação como
          elementos separados. A GreenFit foi pensada para reunir
          essas dimensões em uma única jornada.
        </p>
      </div>

      <div class="feature-grid">

        ${features.map(feature => `
          <article class="feature-card ${feature.large ? "feature-large" : ""}">

            <div class="feature-card-top">
              <div class="icon-box">${icon(feature.icon)}</div>
              <span class="feature-number">${feature.number}</span>
            </div>

            <div>
              <h3>${feature.title}</h3>
              <p>${feature.description}</p>
            </div>

            <a class="feature-link" href="/sobre/">
              Conhecer recurso ${arrow}
            </a>

          </article>
        `).join("")}

      </div>

      <p class="section-footnote">
        Os recursos apresentados representam a visão conceitual do produto.
        Não estão conectados a serviços funcionais de inteligência artificial.
      </p>

    </div>

  </section>

  <!-- PROCESS -->

  <section class="section section-dark">

    <div class="container">

      <div class="section-header">

        <span class="section-eyebrow">UMA JORNADA CONECTADA</span>

        <h2 class="section-title">
          Do primeiro passo
          à sua <span>evolução.</span>
        </h2>

        <p>
          Uma experiência que considera o contexto, transforma planejamento
          em ação e utiliza o histórico como ponto de partida para novas etapas.
        </p>

      </div>

      <div class="process-flow">

        ${process.map(item => `
          <article class="process-item">

            <span class="process-number">${item[0]}</span>

            <i class="fa-solid ${item[1]}"></i>

            <h3>${item[2]}</h3>

            <p>${item[3]}</p>

          </article>
        `).join("")}

      </div>

      <div style="margin-top:35px">
        <a class="btn btn-outline" href="/simulador/">
          Conhecer a demonstração ${arrow}
        </a>
      </div>

    </div>

  </section>

  <!-- SHOWCASE -->

  <section class="section">

    <div class="container">

      <div class="section-header">
        <span class="section-eyebrow">CONTEÚDO PARA SUA ROTINA</span>

        <h2 class="section-title">
          Conhecimento que se transforma
          em <span>ação.</span>
        </h2>

        <p>
          Explore exemplos de exercícios e receitas.
          Um primeiro contato com o conteúdo que faz parte da proposta GreenFit.
        </p>
      </div>

      <div class="showcase-grid">

        <article class="showcase-card">

          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
            alt="Ambiente de treinamento com equipamentos de musculação"
            loading="lazy">

          <div class="showcase-content">

            <span class="badge badge-green">TREINAMENTO</span>

            <h3>Força, movimento e consistência.</h3>

            <p>
              Conheça exemplos de organização de exercícios para
              diferentes experiências e objetivos.
            </p>

            <a href="/catalogo/">
              Explorar exercícios ${arrow}
            </a>

          </div>

        </article>

        <article class="showcase-card">

          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85"
            alt="Refeição saudável com vegetais e ingredientes variados"
            loading="lazy">

          <div class="showcase-content">

            <span class="badge badge-green">ALIMENTAÇÃO</span>

            <h3>Variedade, sabor e praticidade.</h3>

            <p>
              Encontre ideias de refeições e combinações para
              inspirar o planejamento alimentar.
            </p>

            <a href="/catalogo/">
              Explorar receitas ${arrow}
            </a>

          </div>

        </article>

      </div>

    </div>

  </section>

  <!-- WHY GREENFIT -->

  <section class="section section-dark">

    <div class="container">

      <div class="section-header center">

        <span class="section-eyebrow">A PROPOSTA</span>

        <h2 class="section-title">
          Sua rotina merece
          uma visão <span>mais completa.</span>
        </h2>

        <p>
          A GreenFit propõe uma experiência mais integrada,
          que considera as diferentes dimensões de uma rotina saudável.
        </p>

      </div>

      <div class="feature-grid">

        <article class="feature-card">
          <div class="icon-box">${icon("fa-user-check")}</div>
          <h3>Experiência centrada no usuário</h3>
          <p>Objetivos, preferências e contexto como ponto de partida.</p>
        </article>

        <article class="feature-card">
          <div class="icon-box">${icon("fa-layer-group")}</div>
          <h3>Informações conectadas</h3>
          <p>Treino, alimentação e evolução pensados como partes da mesma experiência.</p>
        </article>

        <article class="feature-card">
          <div class="icon-box">${icon("fa-chart-simple")}</div>
          <h3>Clareza para acompanhar</h3>
          <p>Uma proposta visual para compreender hábitos e observar progresso.</p>
        </article>

      </div>

    </div>

  </section>

  <!-- PLANS PREVIEW -->

  <section class="section">

    <div class="container">

      <div class="section-header">
        <span class="section-eyebrow">PLANOS GREENFIT</span>

        <h2 class="section-title">
          Uma experiência para cada
          <span>momento.</span>
        </h2>

        <p>
          Conheça a organização conceitual das opções GreenFit,
          compare os recursos previstos e explore a proposta.
        </p>

      </div>

      <div class="pricing-grid">

        <article class="pricing-card">

          <span class="pricing-label">PARA CONHECER</span>

          <h3>Essencial</h3>

          <p class="pricing-card-description">
            Uma primeira experiência para conhecer o conceito e
            explorar os conteúdos demonstrativos.
          </p>

          <div class="pricing-value">
            <strong>Exploração</strong>
            <span>Acesso demonstrativo</span>
          </div>

          <ul class="pricing-list">
            <li><i class="fa-solid fa-check"></i> Catálogo demonstrativo</li>
            <li><i class="fa-solid fa-check"></i> Exemplos de exercícios</li>
            <li><i class="fa-solid fa-check"></i> Ideias de receitas</li>
            <li class="disabled"><i class="fa-solid fa-minus"></i> Recursos adaptativos conceituais</li>
          </ul>

          <a class="btn btn-outline btn-full" href="/catalogo/">
            Explorar conteúdo ${arrow}
          </a>

        </article>

        <article class="pricing-card featured">

          <span class="badge badge-green">EXPERIÊNCIA COMPLETA · CONCEITO</span>

          <h3>GreenFit Plus</h3>

          <p class="pricing-card-description">
            A visão integrada da plataforma, reunindo os recursos
            pensados para acompanhar toda a jornada.
          </p>

          <div class="pricing-value">
            <strong>A definir</strong>
            <span>Proposta comercial não definida</span>
          </div>

          <ul class="pricing-list">
            <li><i class="fa-solid fa-check"></i> Planejamento alimentar adaptativo</li>
            <li><i class="fa-solid fa-check"></i> Planejamento de treinos</li>
            <li><i class="fa-solid fa-check"></i> Scanner alimentar conceitual</li>
            <li><i class="fa-solid fa-check"></i> Acompanhamento da evolução</li>
            <li><i class="fa-solid fa-check"></i> Assistente e desafios</li>
          </ul>

          <a class="btn btn-primary btn-full" href="/planos/">
            Conhecer a proposta ${arrow}
          </a>

        </article>

      </div>

      <p class="pricing-footnote">
        Planos ilustrativos. Não há contratação, assinatura ou cobrança nesta versão.
      </p>

    </div>

  </section>

  <!-- FAQ -->

  <section class="section section-dark">

    <div class="container faq-layout">

      <div class="section-header">

        <span class="section-eyebrow">DÚVIDAS FREQUENTES</span>

        <h2 class="section-title">
          Tudo o que você
          precisa <span>saber.</span>
        </h2>

        <p>
          Transparência sobre o conceito da plataforma
          e sobre os limites desta demonstração.
        </p>

        <a class="btn btn-outline" href="/contato/">
          Falar sobre o projeto ${arrow}
        </a>

      </div>

      ${renderFAQ([
        {
          question: "A GreenFit já é uma plataforma funcional?",
          answer: "Não. Esta versão é um protótipo acadêmico de front-end. Ela apresenta a experiência visual, a navegação e alguns comportamentos demonstrativos."
        },
        {
          question: "A inteligência artificial já funciona?",
          answer: "Não nesta versão. A IA é parte da proposta conceitual do produto. Não há processamento real, análise dos dados ou geração de recomendações."
        },
        {
          question: "Os treinos e as receitas são personalizados?",
          answer: "Não. O catálogo contém exemplos demonstrativos, organizados por categorias e objetivos. Não são prescrições individuais."
        },
        {
          question: "Posso contratar o GreenFit Plus?",
          answer: "Não. Os planos são conceituais, e os preços e condições comerciais ainda não foram definidos."
        },
        {
          question: "Preciso informar dados reais no cadastro?",
          answer: "Não. O cadastro e o login são simulações locais. Não informe senhas ou dados pessoais verdadeiros."
        }
      ])}

    </div>

  </section>

  <!-- FINAL CTA -->

  <section class="final-cta">

    <div class="container final-cta-content">

      <span class="section-eyebrow">ELEVE SEU PADRÃO</span>

      <h2>
        O próximo passo da sua jornada
        <span>começa agora.</span>
      </h2>

      <p>
        Explore a proposta GreenFit, conheça seus recursos
        e descubra uma nova forma de pensar sua rotina.
      </p>

      <div class="hero-actions">

        <a class="btn btn-primary" href="/cadastro/">
          Conhecer o cadastro ${arrow}
        </a>

        <a class="btn btn-outline" href="/catalogo/">
          Explorar catálogo
        </a>

      </div>

    </div>

  </section>

  `;
}


/* =====================================================
   2. SOBRE A PLATAFORMA
===================================================== */

function aboutPage() {

  const principles = [
    {
      icon: "fa-user-check",
      title: "Centralidade no usuário",
      description: "A experiência parte das necessidades, dos objetivos e do contexto de cada pessoa."
    },
    {
      icon: "fa-link",
      title: "Integração",
      description: "Treino e alimentação são considerados partes complementares de uma mesma rotina."
    },
    {
      icon: "fa-brain",
      title: "Inteligência transversal",
      description: "A IA faz parte da visão conceitual que conecta planejamento, acompanhamento e orientação."
    },
    {
      icon: "fa-chart-line",
      title: "Evolução contínua",
      description: "O registro e a interpretação do histórico representam um ciclo de melhoria da experiência."
    },
    {
      icon: "fa-hand-holding-heart",
      title: "Responsabilidade",
      description: "A proposta considera limites, transparência e a importância de profissionais habilitados."
    },
    {
      icon: "fa-puzzle-piece",
      title: "Experiência integrada",
      description: "Os recursos não são apresentados isoladamente, mas como partes de um ecossistema."
    }
  ];

  return `
  ${pageHeader(
    "SOBRE A GREENFIT",
    "Uma nova visão para <span>cuidar de você.</span>",
    "Conheça o conceito, os princípios e a experiência que orientam o desenvolvimento da GreenFit.",
    "A plataforma"
  )}

  <section class="section">
    <div class="container about-intro-grid">

      <div>
        <span class="section-eyebrow">NOSSA PROPOSTA</span>
        <h2 class="section-title">
          Muito além de organizar
          <span>treinos e receitas.</span>
        </h2>
      </div>

      <div class="about-copy">
        <p>
          A GreenFit nasce da percepção de que manter uma rotina saudável
          envolve diferentes decisões que muitas vezes ficam espalhadas
          por aplicativos, registros e ferramentas distintas.
        </p>

        <p>
          A proposta é reunir treino, alimentação e acompanhamento em
          uma experiência integrada, organizada e centrada no usuário.
        </p>

        <p>
          Mais do que apresentar recursos, a GreenFit propõe uma jornada
          em que cada etapa se relaciona com a próxima.
        </p>
      </div>

    </div>
  </section>

  <section class="section section-dark">

    <div class="container">

      <div class="section-header">
        <span class="section-eyebrow">PILARES DO PRODUTO</span>
        <h2 class="section-title">
          Uma estrutura pensada
          para <span>fazer sentido.</span>
        </h2>
      </div>

      <div class="feature-grid">

        ${principles.map((item, index) => `
          <article class="feature-card">

            <div class="feature-card-top">
              <span class="icon-box">${icon(item.icon)}</span>
              <span class="feature-number">0${index + 1}</span>
            </div>

            <div>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>

          </article>
        `).join("")}

      </div>

    </div>

  </section>

  <section class="section">

    <div class="container">

      <div class="section-header">
        <span class="section-eyebrow">O ECOSSISTEMA</span>
        <h2 class="section-title">
          Recursos conectados
          pela <span>mesma inteligência.</span>
        </h2>

        <p>
          A inteligência artificial é concebida como uma camada transversal,
          e não como uma funcionalidade isolada.
        </p>
      </div>

      <div class="ecosystem-layout">

        <div class="ecosystem-main">
          <div class="ecosystem-center">
            <i class="fa-solid fa-leaf"></i>
            <strong>GREENFIT</strong>
            <small>JORNADA INTEGRADA</small>
          </div>
        </div>

        <div class="ecosystem-list">

          <article>
            <span class="icon-box">${icon("fa-dumbbell")}</span>
            <div><h3>Treino adaptativo</h3><p>Objetivos, experiência, tempo e equipamentos.</p></div>
          </article>

          <article>
            <span class="icon-box">${icon("fa-utensils")}</span>
            <div><h3>Alimentação adaptativa</h3><p>Rotina, orçamento, preferências e restrições.</p></div>
          </article>

          <article>
            <span class="icon-box">${icon("fa-camera")}</span>
            <div><h3>Scanner alimentar</h3><p>Conceito de registro por foto ou código de barras.</p></div>
          </article>

          <article>
            <span class="icon-box">${icon("fa-chart-line")}</span>
            <div><h3>Evolução</h3><p>Histórico, acompanhamento e análise.</p></div>
          </article>

          <article>
            <span class="icon-box">${icon("fa-comments")}</span>
            <div><h3>Assistente proativo</h3><p>Lembretes, resumos e orientações contextuais.</p></div>
          </article>

        </div>

      </div>

    </div>

  </section>

  <section class="section section-dark">

    <div class="container">

      <div class="section-header">
        <span class="section-eyebrow">A JORNADA</span>
        <h2 class="section-title">
          Da descoberta à
          <span>evolução.</span>
        </h2>
      </div>

      <div class="journey-steps">

        ${[
          "Conhecer",
          "Personalizar",
          "Executar",
          "Registrar",
          "Analisar",
          "Orientar",
          "Engajar",
          "Evoluir"
        ].map((step, i) => `
          <div class="journey-step">
            <span>0${i + 1}</span>
            <strong>${step}</strong>
          </div>
        `).join("")}

      </div>

    </div>

  </section>

  <section class="section" id="limites">

    <div class="container limits-layout">

      <div>
        <span class="section-eyebrow">TRANSPARÊNCIA</span>
        <h2 class="section-title">
          Uma proposta ambiciosa,
          com <span>limites claros.</span>
        </h2>

        <p class="section-subtitle">
          A versão apresentada é um protótipo acadêmico de front-end.
          Seu objetivo é demonstrar a proposta, a arquitetura de informação
          e a experiência visual.
        </p>
      </div>

      <div class="panel">
        <h3>O que esta versão contempla</h3>
        <ul class="check-list">
          <li>${icon("fa-check")} Navegação entre páginas</li>
          <li>${icon("fa-check")} Catálogo com filtros demonstrativos</li>
          <li>${icon("fa-check")} Prévia interativa da experiência</li>
          <li>${icon("fa-check")} Cadastro e login simulados</li>
          <li>${icon("fa-check")} Apresentação conceitual dos planos</li>
        </ul>

        <h3 class="panel-heading">O que não está implementado</h3>
        <ul class="check-list muted-list">
          <li>${icon("fa-minus")} Banco de dados e autenticação</li>
          <li>${icon("fa-minus")} Inteligência artificial real</li>
          <li>${icon("fa-minus")} Pagamentos e assinatura</li>
          <li>${icon("fa-minus")} Recomendações profissionais</li>
        </ul>
      </div>

    </div>

  </section>

  <section class="final-cta">
    <div class="container final-cta-content">
      <span class="section-eyebrow">CONHEÇA A EXPERIÊNCIA</span>
      <h2>A GreenFit é uma nova forma de pensar sua <span>jornada.</span></h2>
      <p>Explore a demonstração e conheça as possibilidades do produto.</p>
      <a href="/simulador/" class="btn btn-primary">Ver demonstração ${arrow}</a>
    </div>
  </section>
  `;
}


/* =====================================================
   3. CATÁLOGO
===================================================== */

function catalogPage() {

  return `
  ${pageHeader(
    "TREINOS & ALIMENTAÇÃO",
    "Inspiração para cada <span>objetivo.</span>",
    "Explore exemplos de exercícios e receitas. Encontre ideias, descubra combinações e conheça o conteúdo que faz parte da proposta GreenFit.",
    "Treinos & dietas"
  )}

  <section class="section catalog-section">

    <div class="container">

      <div class="catalog-toolbar">

        <div class="catalog-tabs" role="group" aria-label="Tipo de conteúdo">

          <button class="catalog-tab active"
                  data-catalog-type="all"
                  aria-pressed="true">
            Todos
          </button>

          <button class="catalog-tab"
                  data-catalog-type="treino"
                  aria-pressed="false">
            Exercícios
          </button>

          <button class="catalog-tab"
                  data-catalog-type="receita"
                  aria-pressed="false">
            Receitas
          </button>

        </div>

        <label class="search-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            id="catalog-search"
            placeholder="Buscar exercícios ou receitas..."
            aria-label="Pesquisar catálogo">
        </label>

      </div>

      <div class="filter-row" role="group" aria-label="Filtrar por objetivo">

        <span class="filter-label">Objetivo:</span>

        <button class="filter-chip active"
                data-catalog-goal="all"
                aria-pressed="true">Todos</button>

        <button class="filter-chip"
                data-catalog-goal="massa"
                aria-pressed="false">Ganho de massa</button>

        <button class="filter-chip"
                data-catalog-goal="emagrecimento"
                aria-pressed="false">Emagrecimento</button>

        <button class="filter-chip"
                data-catalog-goal="manutencao"
                aria-pressed="false">Manutenção</button>

        <button class="filter-chip"
                data-catalog-clear
                type="button">
          Limpar filtros
        </button>

      </div>

      <div class="catalog-result-header">
        <p id="catalog-count">12 conteúdos encontrados</p>
        <span>CONTEÚDO DEMONSTRATIVO</span>
      </div>

      <div class="catalog-grid" id="catalog-grid">

        ${allCatalogItems.map(catalogCard).join("")}

      </div>

      <div class="empty-state" id="catalog-empty">

        <i class="fa-solid fa-magnifying-glass"></i>
        <h3>Nenhum conteúdo encontrado.</h3>
        <p>Experimente modificar a busca ou remover algum filtro.</p>

        <button class="btn btn-outline" data-catalog-clear>
          Limpar filtros
        </button>

      </div>

      <p class="section-footnote">
        Os conteúdos são exemplos ilustrativos e não constituem orientação
        individual de treino ou alimentação.
      </p>

    </div>

  </section>

  <section class="section section-dark">

    <div class="container split-feature">

      <div>
        <span class="section-eyebrow">UMA EXPERIÊNCIA MAIS COMPLETA</span>

        <h2 class="section-title">
          Conteúdos hoje.
          Uma jornada integrada <span>amanhã.</span>
        </h2>

        <p class="section-subtitle">
          O catálogo demonstra uma das partes da proposta GreenFit.
          A experiência idealizada vai além da consulta de conteúdos,
          conectando planejamento, execução e evolução.
        </p>

        <a href="/sobre/" class="btn btn-primary">
          Conhecer a plataforma ${arrow}
        </a>
      </div>

      <div class="catalog-stat-card">
        <div class="catalog-stat-icon">${icon("fa-layer-group")}</div>
        <strong>Conteúdo organizado</strong>
        <p>Uma estrutura demonstrativa para explorar exercícios, receitas e objetivos.</p>
        <div class="catalog-stat-number">GF<span>.</span></div>
      </div>

    </div>

  </section>
  `;
}

/* =====================================================
   4. DEMONSTRAÇÃO INTERATIVA
===================================================== */

function demoPage() {

  return `
  ${pageHeader(
    "EXPERIÊNCIA GREENFIT",
    "Imagine uma rotina que entende seu <span>contexto.</span>",
    "Explore uma prévia visual de como as diferentes partes da GreenFit poderiam se conectar, de acordo com os objetivos de cada pessoa.",
    "Demonstração"
  )}

  <section class="section">

    <div class="container demo-layout">

      <div>

        <span class="section-eyebrow">EXPLORE UMA JORNADA</span>

        <h2 class="section-title">
          Cada objetivo tem
          um <span>caminho.</span>
        </h2>

        <p class="section-subtitle">
          Selecione um objetivo para visualizar uma proposta
          diferente de organização da experiência.
        </p>

        <div class="demo-options" role="group" aria-label="Escolha um objetivo">

          ${goals.map((goal, index) => `
            <button
              class="demo-option ${index === 0 ? "active" : ""}"
              type="button"
              data-demo-goal="${goal.id}"
              aria-pressed="${index === 0}">

              <span class="demo-option-icon">
                <i class="fa-solid ${goal.icon}"></i>
              </span>

              <span>
                <strong>${goal.name}</strong>
                <small>${goal.short}</small>
              </span>

              <i class="fa-solid fa-arrow-right" style="margin-left:auto"></i>

            </button>
          `).join("")}

        </div>

        <p class="section-footnote">
          A interação altera somente exemplos visuais. Nenhuma informação
          pessoal é coletada ou analisada.
        </p>

      </div>

      <div>

        <div class="demo-window">

          <div class="demo-window-header">

            <div class="demo-window-dots">
              <span></span><span></span><span></span>
            </div>

            <span class="demo-window-title">GREENFIT EXPERIENCE</span>

            <span class="badge badge-green">PRÉVIA</span>

          </div>

          <div class="demo-window-content">

            <div class="demo-summary-card">

              <small>VISÃO DA SUA JORNADA</small>

              <h3 id="demo-focus">Construção muscular</h3>

              <p id="demo-insight">
                Uma rotina que respeita progressão, consistência e recuperação.
              </p>

            </div>

            <div class="demo-metric-grid">

              <article class="demo-metric">

                <span><i class="fa-solid fa-dumbbell"></i> TREINO</span>

                <strong id="demo-workout">Força progressiva</strong>

                <small>Organização de exercícios</small>

              </article>

              <article class="demo-metric">

                <span><i class="fa-solid fa-utensils"></i> ALIMENTAÇÃO</span>

                <strong id="demo-food">Planejamento alimentar</strong>

                <small>Rotina e preferências</small>

              </article>

            </div>

            <div class="demo-summary-card" style="margin-top:10px">

              <small>ACOMPANHAMENTO CONCEITUAL</small>

              <h3>Uma visão integrada da evolução</h3>

              <div class="demo-bars" aria-label="Gráfico ilustrativo sem dados reais">
                <span style="height:32%"></span>
                <span style="height:53%"></span>
                <span style="height:43%"></span>
                <span style="height:65%"></span>
                <span style="height:59%"></span>
                <span style="height:84%"></span>
                <span style="height:76%"></span>
              </div>

              <small>Visualização fictícia, sem medições ou histórico real.</small>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

  <section class="section section-dark">

    <div class="container">

      <div class="section-header">

        <span class="section-eyebrow">O QUE CONECTA A EXPERIÊNCIA</span>

        <h2 class="section-title">
          Recursos que trabalham
          em <span>conjunto.</span>
        </h2>

      </div>

      <div class="feature-grid">

        <article class="feature-card">
          <div class="icon-box">${icon("fa-brain")}</div>
          <h3>Inteligência transversal</h3>
          <p>Uma camada conceitual que conecta as diferentes dimensões do produto.</p>
        </article>

        <article class="feature-card">
          <div class="icon-box">${icon("fa-camera")}</div>
          <h3>Registro simplificado</h3>
          <p>Proposta de registro alimentar por imagem ou leitura de código.</p>
        </article>

        <article class="feature-card">
          <div class="icon-box">${icon("fa-chart-line")}</div>
          <h3>Histórico e evolução</h3>
          <p>Uma visão unificada dos registros e mudanças ao longo do tempo.</p>
        </article>

      </div>

    </div>

  </section>

  <section class="section">
    <div class="container limits-layout">

      <div>
        <span class="section-eyebrow">IMPORTANTE</span>
        <h2 class="section-title">
          Uma demonstração,
          não um <span>diagnóstico.</span>
        </h2>

        <p class="section-subtitle">
          Esta página utiliza exemplos predefinidos. Não calcula calorias,
          metabolismo, composição corporal ou recomendações personalizadas.
        </p>
      </div>

      <div class="panel">
        <h3>Limites desta experiência</h3>
        <ul class="check-list">
          <li>${icon("fa-check")} Seleção visual de objetivos</li>
          <li>${icon("fa-check")} Atualização dos textos demonstrativos</li>
          <li>${icon("fa-check")} Prévia conceitual da interface</li>
          <li class="muted">${icon("fa-minus")} Sem inteligência artificial</li>
          <li class="muted">${icon("fa-minus")} Sem dados pessoais ou recomendações reais</li>
        </ul>
      </div>

    </div>
  </section>
  `;
}


/* =====================================================
   5. PLANOS
===================================================== */

function plansPage() {

  const comparison = [
    ["Catálogo de exercícios", true, true],
    ["Catálogo de receitas", true, true],
    ["Planejamento alimentar adaptativo", false, true],
    ["Planejamento de treinos adaptativo", false, true],
    ["Scanner alimentar", false, true],
    ["Histórico e evolução integrados", false, true],
    ["Assistente proativo", false, true],
    ["Desafios e engajamento", false, true]
  ];

  return `
  ${pageHeader(
    "PLANOS GREENFIT",
    "Sua jornada. Seu ritmo. Sua <span>experiência.</span>",
    "Conheça a proposta de organização dos planos GreenFit e descubra como os diferentes recursos poderiam compor cada experiência.",
    "Planos"
  )}

  <section class="section">

    <div class="container">

      <div class="panel plans-disclaimer">

        <i class="fa-solid fa-circle-info"></i>

        <p>
          <strong>Sobre os planos:</strong> esta é uma apresentação conceitual.
          Preços, condições comerciais, disponibilidade e contratação ainda
          não foram definidos. Nenhum botão realiza uma compra.
        </p>

      </div>

      <div class="pricing-grid">

        <article class="pricing-card">

          <div class="pricing-card-top">
            <span class="pricing-label">PRIMEIRO CONTATO</span>
            <span class="icon-box">${icon("fa-compass")}</span>
          </div>

          <h3>Essencial</h3>

          <p class="pricing-card-description">
            Uma experiência de exploração para conhecer a proposta,
            os conteúdos e os recursos da GreenFit.
          </p>

          <div class="pricing-value">
            <strong>Acesso demonstrativo</strong>
            <span>Sem contratação nesta versão</span>
          </div>

          <ul class="pricing-list">
            <li><i class="fa-solid fa-check"></i> Catálogo de exercícios</li>
            <li><i class="fa-solid fa-check"></i> Catálogo de receitas</li>
            <li><i class="fa-solid fa-check"></i> Demonstração de objetivos</li>
            <li class="disabled"><i class="fa-solid fa-minus"></i> Planejamento adaptativo</li>
            <li class="disabled"><i class="fa-solid fa-minus"></i> Acompanhamento avançado</li>
          </ul>

          <a href="/catalogo/" class="btn btn-outline btn-full">
            Explorar catálogo ${arrow}
          </a>

        </article>

        <article class="pricing-card featured">

          <div class="pricing-card-top">
            <span class="pricing-label">EXPERIÊNCIA AMPLIADA</span>
            <span class="badge badge-green">PLANO CONCEITUAL</span>
          </div>

          <h3>GreenFit Plus</h3>

          <p class="pricing-card-description">
            A experiência integrada idealizada, com planejamento,
            registros, análise e acompanhamento.
          </p>

          <div class="pricing-value">
            <strong>Valor a definir</strong>
            <span>Condições ainda não estabelecidas</span>
          </div>

          <ul class="pricing-list">
            <li><i class="fa-solid fa-check"></i> Todos os recursos do Essencial</li>
            <li><i class="fa-solid fa-check"></i> Planejamento alimentar adaptativo</li>
            <li><i class="fa-solid fa-check"></i> Planejamento de treino adaptativo</li>
            <li><i class="fa-solid fa-check"></i> Scanner alimentar conceitual</li>
            <li><i class="fa-solid fa-check"></i> Histórico e evolução</li>
            <li><i class="fa-solid fa-check"></i> Assistente e desafios</li>
          </ul>

          <a href="/cadastro/" class="btn btn-primary btn-full">
            Conhecer cadastro demonstrativo ${arrow}
          </a>

        </article>

      </div>

      <p class="pricing-footnote">
        Os recursos do GreenFit Plus representam a visão futura do produto,
        não funcionalidades disponíveis nesta demonstração.
      </p>

    </div>

  </section>

  <section class="section section-dark">

    <div class="container">

      <div class="section-header">

        <span class="section-eyebrow">COMPARAÇÃO</span>

        <h2 class="section-title">
          Veja a proposta de
          cada <span>experiência.</span>
        </h2>

      </div>

      <div class="pricing-comparison">

        <table class="comparison-table">

          <thead>
            <tr>
              <th>Recursos</th>
              <th>Essencial</th>
              <th>GreenFit Plus</th>
            </tr>
          </thead>

          <tbody>

            ${comparison.map(row => `
              <tr>
                <td>${row[0]}</td>
                <td class="${row[1] ? "yes" : "no"}">
                  ${row[1] ? "✓" : "—"}
                </td>
                <td class="${row[2] ? "yes" : "no"}">
                  ${row[2] ? "✓" : "—"}
                </td>
              </tr>
            `).join("")}

          </tbody>

        </table>

      </div>

      <p class="pricing-footnote">
        Matriz ilustrativa da proposta de produto. A divisão comercial
        definitiva ainda depende de validação.
      </p>

    </div>

  </section>

  <section class="section">

    <div class="container faq-layout">

      <div class="section-header">
        <span class="section-eyebrow">PLANOS E CONDIÇÕES</span>
        <h2 class="section-title">Perguntas <span>importantes.</span></h2>
        <p>Entenda o que está sendo apresentado antes de explorar o cadastro.</p>
      </div>

      ${renderFAQ([
        {
          question: "Os planos já estão disponíveis para contratação?",
          answer: "Não. Os planos representam uma possibilidade de organização comercial do produto. Não há pagamentos ou assinaturas."
        },
        {
          question: "Por que o Plus não tem preço?",
          answer: "Porque não definimos uma política de preços. É mais transparente apresentar o valor como a definir do que inventar uma condição comercial."
        },
        {
          question: "Os recursos apresentados já funcionam?",
          answer: "Não. São recursos planejados na concepção da GreenFit e apresentados visualmente para demonstrar a proposta."
        },
        {
          question: "O cadastro libera o plano?",
          answer: "Não. A tela de cadastro é uma demonstração de interface, sem conta real ou liberação de acesso."
        }
      ])}

    </div>

  </section>
  `;
}

/* =====================================================
   6. CADASTRO
===================================================== */

function signupPage() {

  return `
  <section class="form-shell">

    <aside class="form-visual">

      <a class="brand" href="/">
        <span class="brand-symbol">
          <i class="fa-solid fa-leaf"></i>
        </span>

        <span>
          Green <span class="brand-name-highlight">Fit</span>
        </span>
      </a>

      <div>

        <span class="section-eyebrow">SUA EVOLUÇÃO COMEÇA AQUI</span>

        <h1>
          Um novo passo para
          uma vida <span>melhor.</span>
        </h1>

        <p>
          Conheça uma experiência que propõe conectar
          alimentação, treinamento e evolução.
          Tudo pensado para sua rotina.
        </p>

      </div>

      <div class="form-visual-footer">
        ELEVE SEU PADRÃO. SUPERE SEUS LIMITES.
      </div>

    </aside>

    <div class="form-content">

      <div class="form-top-link">
        Já possui uma conta?
        <a href="/login/">Entrar</a>
      </div>

      <div class="form-content-inner">

        <div class="form-heading">

          <span class="section-eyebrow">CRIE SUA CONTA</span>

          <h2>
            Comece sua
            <span>evolução.</span>
          </h2>

          <p>
            Preencha os campos para conhecer o fluxo de cadastro GreenFit.
          </p>

        </div>

        <form data-form="signup" class="form-fields" novalidate>

          <div class="form-field">
            <label for="signup-name">Nome completo</label>
            <input
              id="signup-name"
              name="name"
              type="text"
              autocomplete="name"
              placeholder="Digite seu nome"
              minlength="2"
              required>
          </div>

          <div class="form-field">
            <label for="signup-email">E-mail</label>
            <input
              id="signup-email"
              name="email"
              type="email"
              autocomplete="email"
              placeholder="voce@email.com"
              required>
          </div>

          <div class="form-field">
            <label for="signup-password">Senha</label>

            <div class="password-wrapper">

              <input
                id="signup-password"
                name="password"
                type="password"
                autocomplete="new-password"
                placeholder="Crie uma senha demonstrativa"
                minlength="8"
                required>

              <button
                class="password-toggle"
                type="button"
                data-password-toggle="signup-password"
                aria-label="Mostrar senha">
                <i class="fa-regular fa-eye"></i>
              </button>

            </div>

            <span class="form-hint">
              Utilize pelo menos 8 caracteres.
            </span>
          </div>

          <div class="form-field">
            <label for="signup-confirm">Confirmar senha</label>

            <div class="password-wrapper">

              <input
                id="signup-confirm"
                name="confirmPassword"
                type="password"
                autocomplete="new-password"
                placeholder="Digite a senha novamente"
                minlength="8"
                required>

              <button
                class="password-toggle"
                type="button"
                data-password-toggle="signup-confirm"
                aria-label="Mostrar senha">
                <i class="fa-regular fa-eye"></i>
              </button>

            </div>
          </div>

          <label class="checkbox-field">

            <input type="checkbox" name="terms" required>

            <span>
              Li e aceito os termos demonstrativos e a política
              de privacidade desta experiência.
            </span>

          </label>

          <button type="submit" class="btn btn-primary btn-full">
            Criar minha conta
            ${arrow}
          </button>

          <div class="form-feedback"
               aria-live="polite"
               role="status"></div>

          <p class="form-notice">
            Protótipo demonstrativo: não informe dados pessoais ou senhas reais.
            Os dados não serão enviados, armazenados ou utilizados para criar uma conta.
          </p>

        </form>

        <p class="form-switch">
          Já possui uma conta?
          <a href="/login/">Faça login</a>
        </p>

      </div>

    </div>

  </section>
  `;
}


/* =====================================================
   7. LOGIN
===================================================== */

function loginPage() {

  return `
  <section class="form-shell">

    <aside class="form-visual">

      <a class="brand" href="/">
        <span class="brand-symbol">
          <i class="fa-solid fa-leaf"></i>
        </span>

        <span>
          Green <span class="brand-name-highlight">Fit</span>
        </span>
      </a>

      <div>

        <span class="section-eyebrow">BEM-VINDO DE VOLTA</span>

        <h1>
          Sua jornada
          continua <span>aqui.</span>
        </h1>

        <p>
          Uma rotina consistente é construída com escolhas possíveis.
          Descubra como a GreenFit propõe organizar esse caminho.
        </p>

      </div>

      <div class="form-visual-footer">
        ELEVE SEU PADRÃO. SUPERE SEUS LIMITES.
      </div>

    </aside>

    <div class="form-content">

      <div class="form-top-link">
        Ainda não tem conta?
        <a href="/cadastro/">Criar conta</a>
      </div>

      <div class="form-content-inner">

        <div class="form-heading">

          <span class="section-eyebrow">ACESSE SUA CONTA</span>

          <h2>
            Bom ter você
            <span>de volta.</span>
          </h2>

          <p>
            Entre para continuar sua experiência demonstrativa.
          </p>

        </div>

        <form data-form="login" class="form-fields" novalidate>

          <div class="form-field">
            <label for="login-email">E-mail</label>

            <input
              id="login-email"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="voce@email.com"
              required>
          </div>

          <div class="form-field">

            <div class="form-row">
              <label for="login-password">Senha</label>

              <a href="#recuperacao" data-open-recovery>
                Esqueci minha senha
              </a>
            </div>

            <div class="password-wrapper">

              <input
                id="login-password"
                type="password"
                name="password"
                autocomplete="current-password"
                placeholder="Digite sua senha demonstrativa"
                required>

              <button
                class="password-toggle"
                type="button"
                data-password-toggle="login-password"
                aria-label="Mostrar senha">
                <i class="fa-regular fa-eye"></i>
              </button>

            </div>

          </div>

          <button type="submit" class="btn btn-primary btn-full">
            Entrar ${arrow}
          </button>

          <div class="form-feedback"
               aria-live="polite"
               role="status"></div>

          <p class="form-notice">
            A autenticação não está implementada. Esta tela não permite
            entrar em uma conta real e não armazena credenciais.
          </p>

        </form>

        <p class="form-switch">
          Ainda não possui conta?
          <a href="/cadastro/">Criar conta demonstrativa</a>
        </p>

      </div>

    </div>

  </section>
  `;
}


/* =====================================================
   8. CONTATO
===================================================== */

function contactPage() {

  return `
  ${pageHeader(
    "FALE COM A GREENFIT",
    "Vamos conversar<span>?</span>",
    "Dúvidas, sugestões ou interesse no projeto? Conheça nosso canal demonstrativo de contato.",
    "Contato"
  )}

  <section class="section">

    <div class="container contact-layout">

      <div>

        <span class="section-eyebrow">ESTAMOS POR AQUI</span>

        <h2 class="section-title">
          Conte com a
          <span>gente.</span>
        </h2>

        <p class="section-subtitle">
          A GreenFit é um projeto acadêmico. Esta área
          demonstra como poderia ser estruturado um canal
          de comunicação com os usuários.
        </p>

        <div class="contact-info-list">

          <article>
            <span class="icon-box">${icon("fa-envelope")}</span>
            <div>
              <strong>E-mail institucional</strong>
              <p>Contato ilustrativo do projeto.</p>
            </div>
          </article>

          <article>
            <span class="icon-box">${icon("fa-graduation-cap")}</span>
            <div>
              <strong>Contexto</strong>
              <p>Projeto acadêmico de UX e front-end.</p>
            </div>
          </article>

          <article>
            <span class="icon-box">${icon("fa-circle-info")}</span>
            <div>
              <strong>Transparência</strong>
              <p>O envio não transmite informações.</p>
            </div>
          </article>

        </div>

      </div>

      <div class="panel contact-form-panel">

        <div class="form-heading">
          <span class="section-eyebrow">ENVIE UMA MENSAGEM</span>
          <h2>Como podemos ajudar?</h2>
          <p>Preencha os campos abaixo para testar a interface.</p>
        </div>

        <form data-form="contact" class="form-fields" novalidate>

          <div class="form-field">
            <label for="contact-name">Nome completo</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Seu nome"
              required
              minlength="2">
          </div>

          <div class="form-field">
            <label for="contact-email">E-mail</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              required>
          </div>

          <div class="form-field">
            <label for="contact-subject">Assunto</label>
            <select id="contact-subject" name="subject" required>
              <option value="">Selecione</option>
              <option value="plataforma">Sobre a plataforma</option>
              <option value="planos">Planos e recursos</option>
              <option value="projeto">Sobre o projeto acadêmico</option>
              <option value="sugestao">Sugestão</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div class="form-field">
            <label for="contact-message">Mensagem</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Escreva sua mensagem..."
              minlength="10"
              required></textarea>
          </div>

          <button class="btn btn-primary btn-full" type="submit">
            Testar envio ${arrow}
          </button>

          <div class="form-feedback"
               aria-live="polite"
               role="status"></div>

          <p class="form-notice">
            Nenhuma mensagem será enviada ou armazenada.
          </p>

        </form>

      </div>

    </div>

  </section>
  `;
}


/* =====================================================
   9. ROTEAMENTO
===================================================== */

const pageRegistry = {

  "/": {
    title: "GreenFit — Sua rotina fitness em um só lugar",
    active: "home",
    render: homePage
  },

  "/sobre": {
    title: "A plataforma | GreenFit",
    active: "sobre",
    render: aboutPage
  },

  "/catalogo": {
    title: "Treinos & dietas | GreenFit",
    active: "catalogo",
    render: catalogPage
  },

  "/simulador": {
    title: "Demonstração | GreenFit",
    active: "simulador",
    render: demoPage
  },

  "/planos": {
    title: "Planos | GreenFit",
    active: "planos",
    render: plansPage
  },

  "/cadastro": {
    title: "Criar conta | GreenFit",
    active: "",
    render: signupPage
  },

  "/login": {
    title: "Entrar | GreenFit",
    active: "",
    render: loginPage
  },

  "/contato": {
    title: "Contato | GreenFit",
    active: "contato",
    render: contactPage
  }

};

export function resolvePage(pathname) {

  const normalized =
    pathname === "/"
      ? "/"
      : `/${pathname.replace(/^\/+|\/+$/g, "")}`;

  return pageRegistry[normalized] || pageRegistry["/"];
}