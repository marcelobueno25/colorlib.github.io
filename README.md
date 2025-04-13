# Colorlib

> **Template Colorlib** adaptado para Gulp 4, Dart Sass e GitHub Pages. Versão em português com design responsivo e textos adequados.

## Sobre o projeto

Este repositório contém um **template de site** original da Colorlib adaptado para uso com **Gulp 4** e **Dart Sass**, tudo em **Node 20**. Além disso, possui textos em português para facilitar o uso no Brasil.

Este projeto segue as boas práticas modernas de front‑end:
- Estrutura organizada em `src/` e `dist/`.
- Gulp tasks (HTML, CSS, JS, Imagens, Fonts) prontos para minificação.
- Deploy automatizado via GitHub Pages.

---

## Demonstração

Acesse a versão ao vivo aqui:

- **[Demo: https://marcelobueno25.github.io/colorlib.github.io/](https://marcelobueno25.github.io/colorlib.github.io/)**

Caso queira rodar localmente, [siga estes passos](#guia-de-instalação).

---

## Recursos principais

- **Layout responsivo** e design clean  
- **Dart Sass** ao invés de Node‑sass (compatível com Node 20)  
- **Gulp 4** com tarefas de build e watch  
- **Imagens otimizadas** com gulp‑imagemin  
- **BrowserSync** para recarregamento automático  
- **Textos em português** prontos para uso corporativo  

---

## Estrutura de pastas

```bash
colorlib.github.io/
├── dist/                # Saída final do build (HTML, CSS, JS minificados)
├── src/
│   ├── components/      # SCSS e HTML de seções (about, features, etc.)
│   ├── img/             # Imagens originais
│   ├── js/              # Scripts JavaScript
│   ├── scss/            # Estilos SCSS (módulos, partials, etc.)
│   └── index.html       # Página principal
├── gulp.paths.json      # Definições de caminhos usados pelo gulpfile
├── gulpfile.js          # Tarefas Gulp (build, watch, etc.)
├── package.json         # Dependências Node e scripts
└── README.md            # Documentação do projeto (este arquivo)
