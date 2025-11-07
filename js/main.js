// Script principal do guia com índice lateral e exibição de seções fixas

const contentDiv = document.getElementById("content");
const buttons = document.querySelectorAll(".btn[data-section]");
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const sideIndex = document.getElementById("sideIndex");

let currentSection = "html";

// Estrutura dos itens do índice lateral
const indexData = {
  html: [
    { id: "html-intro", label: "Introdução" },
    { id: "html-basico", label: "Estrutura básica" },
    { id: "html-tags-comuns", label: "Tags mais usadas" },
    { id: "html-semantico", label: "HTML semântico" },
    { id: "html-listas-tabelas", label: "Listas e tabelas" },
    { id: "html-formularios", label: "Formulários" },
    { id: "html-atributos", label: "Atributos importantes" },
    { id: "html-midia", label: "Mídia e elementos avançados" },
    { id: "html-meta-tags", label: "Meta tags e Open Graph" },
    { id: "html-apis", label: "Web APIs (Storage, Geolocation)" },
    { id: "html-svg", label: "SVG básico" },
    { id: "html-seo-acessibilidade", label: "SEO e acessibilidade" }
  ],
  css: [
    { id: "css-intro", label: "Introdução" },
    { id: "css-basico", label: "Sintaxe e seletores" },
    { id: "css-box-model", label: "Box model" },
    { id: "css-layout", label: "Display, Flex e Grid" },
    { id: "css-texto", label: "Texto, cores e fundo" },
    { id: "css-position", label: "Posicionamento" },
    { id: "css-responsivo", label: "Responsividade" },
    { id: "css-avancado", label: "Pseudo-classes e animações" },
    { id: "css-transforms", label: "Transforms 2D e 3D" },
    { id: "css-filtros", label: "Filtros e efeitos visuais" },
    { id: "css-grid-avancado", label: "Grid avançado" },
    { id: "css-variaveis", label: "Variáveis e funções úteis" },
    { id: "css-metodologias", label: "Metodologias (BEM, SMACSS)" },
    { id: "css-performance", label: "Performance e otimização" }
  ],
  ts: [
    { id: "ts-intro", label: "Introdução" },
    { id: "ts-tipos-basicos", label: "Tipos básicos" },
    { id: "ts-objetos-interfaces", label: "Objetos e interfaces" },
    { id: "ts-funcoes", label: "Funções" },
    { id: "ts-classes", label: "Classes e POO" },
    { id: "ts-generics", label: "Generics e avançado" },
    { id: "ts-type-guards", label: "Type Guards e Narrowing" },
    { id: "ts-utility-types", label: "Utility Types avançados" },
    { id: "ts-decorators", label: "Decorators" },
    { id: "ts-dom", label: "DOM com TypeScript" },
    { id: "ts-modulos", label: "Módulos" },
    { id: "ts-async", label: "Promises e async/await" },
    { id: "ts-erros", label: "Tratamento de erros (try/catch)" },
    { id: "ts-config", label: "tsconfig.json" },
    { id: "ts-boas-praticas", label: "Boas práticas" }
  ]
};

/**
 * Renderiza o índice lateral e adiciona os botões
 */
function renderIndex(section) {
  const items = indexData[section] || [];
  sideIndex.innerHTML = "";

  const title = document.createElement("h3");
  title.textContent = section.toUpperCase();
  sideIndex.appendChild(title);

  const list = document.createElement("ul");
  items.forEach((item, idx) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = item.label;
    btn.dataset.targetId = item.id;
    if (idx === 0) btn.classList.add("active-link");
    li.appendChild(btn);
    list.appendChild(li);
  });
  sideIndex.appendChild(list);
}

/**
 * Associa os eventos de clique do índice lateral ao conteúdo carregado
 */
function bindIndexEvents() {
  const indexButtons = sideIndex.querySelectorAll("button");
  const topics = contentDiv.querySelectorAll(".topic");

  indexButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.targetId;

      // Atualiza botão ativo no índice
      indexButtons.forEach(b => b.classList.remove("active-link"));
      btn.classList.add("active-link");

      // Alterna exibição de seções
      topics.forEach(t => t.classList.remove("active"));
      const target = contentDiv.querySelector(`#${id}`);
      if (target) target.classList.add("active");

      // Fica sempre no topo da página
      window.scrollTo(0, 0);
    });
  });
}

/**
 * Carrega o conteúdo HTML correspondente à categoria (html/css/ts)
 */
async function loadSection(section) {
  try {
    const response = await fetch(`content/${section}.html`);
    const html = await response.text();
    contentDiv.innerHTML = html;

    // Define qual linguagem será usada para o destaque
    let lang = "markup";
    if (section === "css") lang = "css";
    if (section === "ts") lang = "typescript";

    // Ajusta classes de sintaxe
    contentDiv.querySelectorAll("pre code").forEach(code => {
      code.className = `language-${lang}`;
    });

    // Ativa o destaque de código
    if (window.Prism) Prism.highlightAllUnder(contentDiv);

    // Exibe apenas a primeira seção inicialmente
    const topics = contentDiv.querySelectorAll(".topic");
    topics.forEach((t, i) => t.classList.toggle("active", i === 0));

    // Gera o índice lateral e vincula os eventos
    renderIndex(section);
    bindIndexEvents();

  } catch (err) {
    contentDiv.innerHTML = "<p>Erro ao carregar conteúdo. Verifique os arquivos.</p>";
    console.error("Erro ao carregar seção:", err);
  }
}

/**
 * Alterna o tema claro/escuro e salva no localStorage
 */
function applyTheme(theme) {
  body.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️ Modo claro" : "🌙 Modo escuro";
}

const savedTheme = localStorage.getItem("super-guia-theme-v2") || "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = body.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  localStorage.setItem("super-guia-theme-v2", next);
  applyTheme(next);
});

/**
 * Troca entre as categorias principais (HTML, CSS, TS)
 */
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const section = btn.dataset.section;
    currentSection = section;

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    loadSection(section);
  });
});

// Carrega a seção inicial
loadSection(currentSection);
