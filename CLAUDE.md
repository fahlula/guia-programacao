# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static web-based learning guide** for HTML, CSS, and TypeScript, built for Brazilian Portuguese speakers. It's a single-page application that dynamically loads educational content organized by technology category.

## Architecture

### File Structure
```
guia-programacao/
├── index.html          # Main entry point with layout structure
├── js/main.js          # Core application logic
├── css/style.css       # Complete styling with dark/light themes
└── content/            # Educational content files
    ├── html.html       # HTML learning sections
    ├── css.html        # CSS learning sections
    └── ts.html         # TypeScript learning sections
```

### Key Components

1. **Dynamic Content Loading System** (`js/main.js`)
   - Fetches content from `content/{section}.html` via `loadSection()`
   - Content is organized into `.topic` sections with unique IDs
   - Only one topic is visible at a time (controlled by `.active` class)

2. **Navigation Architecture**
   - **Top-level navigation**: Three category buttons (HTML, CSS, TypeScript) in `index.html:27-29`
   - **Side navigation**: Dynamically generated from `indexData` object in `js/main.js:12-59`
   - Side index is sticky on desktop, reflows to top on mobile

3. **Index-to-Content Mapping**
   - Each category has a hardcoded `indexData` array mapping topic IDs to labels
   - Content files must have matching `<section id="{topic-id}" class="topic">` elements
   - Example: `{ id: "html-intro", label: "Introdução" }` maps to `<section id="html-intro" class="topic">`

4. **Syntax Highlighting**
   - Uses Prism.js (loaded from CDN)
   - Language is auto-selected based on current section in `loadSection()`
   - Code blocks use `<pre><code>` structure

5. **Theme System**
   - CSS custom properties in `:root` and `body[data-theme="light"]`
   - Theme persisted in localStorage as `"super-guia-theme-v2"`
   - Toggle button in header updates `data-theme` attribute on `<body>`

## Development Guidelines

### Adding New Topics

1. Add entry to `indexData` in `js/main.js`:
   ```javascript
   html: [
     // ... existing items
     { id: "html-new-topic", label: "Nova Funcionalidade" }
   ]
   ```

2. Add corresponding section to `content/html.html`:
   ```html
   <section id="html-new-topic" class="topic">
     <h3>Nova Funcionalidade</h3>
     <p><strong>O que é:</strong> descrição...</p>
     <pre><code><!-- exemplo de código --></code></pre>
   </section>
   ```

3. Maintain the pattern: **"O que é" + "Por que usar" + code examples**

### Modifying Content Structure

- Each content file contains multiple `<section class="topic">` elements
- The **first topic** in each file gets `class="topic active"` for initial display
- Topics are hidden by default (`display: none`) and shown via `.active` class
- Navigation always scrolls to top on topic change (`js/main.js:106`)

### Styling Changes

- All CSS uses custom properties for theming (see `css/style.css:6-42`)
- Responsive breakpoints: 1024px, 900px, 600px, 400px
- Side index becomes static and reorders to top at 900px breakpoint
- Code blocks use monospace fonts with preference: 'JetBrains Mono', 'Fira Code', Consolas

### Testing Content Changes

Since this is a static site with no build process:
1. Open `index.html` directly in a browser (or use a local server)
2. Test all three categories (HTML, CSS, TypeScript)
3. Verify navigation between topics within each category
4. Test theme toggle persists across page reloads
5. Check responsive behavior at mobile breakpoints

## Important Constraints

- **No build system**: Pure HTML/CSS/JS - changes are immediately visible
- **CDN dependencies**: Prism.js themes and components loaded from jsdelivr
- **Manual sync required**: `indexData` in JS must match section IDs in content files
- **Language fixed**: All content is in Brazilian Portuguese (`lang="pt-BR"`)
