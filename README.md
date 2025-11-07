# 📚 Super Guia Completo: HTML, CSS, JavaScript e TypeScript

Um guia completo e prático de HTML, CSS, JavaScript e TypeScript em português, criado por estudante para estudantes!

## 🌐 Ver Online

**[https://fahlula.github.io/guia-programacao/](https://fahlula.github.io/guia-programacao/)**

## ✨ Características

- 📖 **Conteúdo completo** - HTML, CSS, JavaScript e TypeScript com explicações detalhadas
- 🎨 **Interface moderna** - Design responsivo com modo claro/escuro
- 💡 **Exemplos práticos** - Código de verdade que você pode testar
- 🔍 **Navegação intuitiva** - Índice lateral para encontrar tópicos rapidamente
- 🎯 **Em português** - Todo conteúdo em PT-BR
- ♿ **Acessível** - Otimizado para leitores de tela e navegação por teclado

## 📖 Conteúdo

### HTML (12 tópicos)
Estrutura básica, tags comuns, HTML semântico, listas e tabelas, formulários, atributos importantes, mídia, meta tags, Web APIs, SVG, SEO e acessibilidade.

### CSS (14 tópicos)
Sintaxe e seletores, box model, display/flex/grid, texto e cores, posicionamento, responsividade, pseudo-classes, animações, transforms, filtros, variáveis CSS, metodologias (BEM/SMACSS) e performance.

### JavaScript (13 tópicos) ⭐ **NOVO!**
Variáveis e escopo, operadores, estruturas condicionais (if/else/switch), loops (for/while), estruturas de dados (Array/Map/Set), funções, funções de alta ordem (map/filter/reduce), classes e POO, DOM, módulos, promises e async/await, tratamento de erros (try/catch).

### TypeScript (9 tópicos)
Tipos básicos, objetos e interfaces, generics, type guards, utility types, decorators, tsconfig.json e boas práticas.

## 🚀 Como Usar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/fahlula/guia-programacao.git
cd guia-programacao
```

2. Abra o arquivo `index.html` no navegador ou use um servidor local:
```bash
# Opção 1: Python
python -m http.server 8000

# Opção 2: Node.js (npx)
npx http-server

# Opção 3: VS Code
# Instale a extensão "Live Server" e clique com botão direito > "Open with Live Server"
```

3. Acesse `http://localhost:8000` no navegador

## ⚙️ Configurações Opcionais

### Google Analytics

Se você quiser rastrear visitantes do seu site, siga estes passos:

1. Crie uma conta no [Google Analytics](https://analytics.google.com/)
2. Crie uma propriedade para o site
3. Copie o ID de medição (formato: `G-XXXXXXXXXX`)
4. No arquivo `index.html`, descomente e substitua o ID:

```html
<!-- Antes (comentado) -->
<!--
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
...
-->

<!-- Depois (descomentado e com seu ID) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SEU-ID-AQUI"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SEU-ID-AQUI');
</script>
```

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript (ES6+)
- [Prism.js](https://prismjs.com/) - Syntax highlighting

## 📱 Responsividade

O guia é totalmente responsivo com breakpoints em:
- 1024px (tablets)
- 900px (tablets pequenos)
- 600px (smartphones)
- 400px (smartphones pequenos)

## ♿ Acessibilidade

- Atributos ARIA para leitores de tela
- Navegação por teclado
- Contraste adequado entre cores
- Estrutura semântica HTML5

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você encontrou um erro ou quer adicionar conteúdo:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovoConteudo`)
3. Commit suas mudanças (`git commit -m 'Adiciona novo conteúdo sobre X'`)
4. Push para a branch (`git push origin feature/NovoConteudo`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 👩‍💻 Autora

**Fabiana Almeida**

- GitHub: [@fahlula](https://github.com/fahlula)
- LinkedIn: [linkedin.com/in/fabiana-almeida-dev](https://www.linkedin.com/in/fabiana-almeida-dev)

---

⭐ Se este guia te ajudou, deixe uma estrela no repositório!

💙 Compartilhe com outras pessoas que estão aprendendo programação!
