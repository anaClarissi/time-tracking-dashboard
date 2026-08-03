<div align="center">

# ⏱️ Time Tracking Dashboard

### Solução para o desafio da [Frontend Mentor](https://www.frontendmentor.io)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

[![Site](https://img.shields.io/badge/🔗_Ver_Site-time--tracking--dashboard-5433EC?style=flat-square)](https://time-tracking-dashboard-three-olive.vercel.app/#)
[![Desafio](https://img.shields.io/badge/📄_Desafio-Frontend_Mentor-fb7756?style=flat-square)](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw)
[![Perfil](https://img.shields.io/badge/👤_Meu_Perfil-anaClarissi-56c2e6?style=flat-square)](https://www.frontendmentor.io/profile/anaClarissi)

</div>

<br>

<div align="center">
  <img src="./preview.jpg" alt="Preview do Time Tracking Dashboard" width="90%">
</div>

<br>

## 📌 Sumário

- [Visão geral](#-visão-geral)
- [Links](#-links)
- [O desafio](#-o-desafio)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Técnicas e funcionalidades](#-técnicas-e-funcionalidades)
- [Responsividade](#-responsividade)
- [Como rodar o projeto](#-como-rodar-o-projeto)
- [Autora](#-autora)

<br>

## 🔎 Visão geral

Este projeto é a minha solução para o desafio **Time Tracking Dashboard** da Frontend Mentor: um painel que exibe o tempo gasto em diferentes atividades (Work, Play, Study, Exercise, Social e Self Care), permitindo alternar entre visões **Diária**, **Semanal** e **Mensal**, com os dados carregados dinamicamente a partir de um arquivo `data.json`.

<br>

## 🔗 Links

| Recurso | Link |
|---|---|
| 🚀 Site publicado | [time-tracking-dashboard-three-olive.vercel.app](https://time-tracking-dashboard-three-olive.vercel.app/#) |
| 🧩 Desafio original | [Frontend Mentor — Time Tracking Dashboard](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw) |
| 👤 Meu perfil na Frontend Mentor | [anaClarissi](https://www.frontendmentor.io/profile/anaClarissi) |

<br>

## 🎯 O desafio

Os usuários devem ser capazes de:

- ✅ Visualizar o layout ideal de acordo com o tamanho da tela do dispositivo;
- ✅ Ver os estados de *hover* em todos os elementos interativos da página;
- ✅ Alternar entre as visualizações Diária, Semanal e Mensal.

Além disso, o texto do período anterior muda de acordo com o intervalo ativo:
- **Diário** → `Yesterday`
- **Semanal** → `Last Week`
- **Mensal** → `Last Month`

<br>

## 🛠️ Tecnologias utilizadas

- **HTML5** — marcação semântica da estrutura dos cards e do layout principal.
- **CSS3** — estilização completa através de *design tokens* (variáveis CSS), Grid Layout e media queries.
- **JavaScript (ES Modules)** — lógica de interatividade, manipulação do DOM e consumo de dados via `fetch`.
- **Bootstrap** — incluído como dependência do projeto, importado via módulo ES no `main.js`.
- **Vite** — bundler e servidor de desenvolvimento, responsável por servir os módulos JS/CSS e gerar o build de produção.
- **Vercel** — plataforma utilizada para o deploy e hospedagem do site.

<br>

## ⚙️ Técnicas e funcionalidades

Alguns pontos técnicos de como o projeto foi construído:

- **Design tokens em CSS**: todas as cores, espaçamentos, tamanhos de fonte e transições estão centralizados em variáveis dentro de `:root`, seguindo a paleta definida no `style-guide.md` (Purple 600, Orange 300, Blue 300, Pink 400, Green 400, Purple 700, Yellow 300, além dos tons de Navy).
- **Layout responsivo com CSS Grid**: a estrutura dos cards é construída com `display: grid`, alterando o número de colunas e a posição do card principal conforme os breakpoints:
  - Mobile: coluna única;
  - Tablet (`min-width: 48em`): grid de 2 colunas;
  - Desktop (`min-width: 60em`): grid de 4 colunas com o card principal ocupando a primeira coluna inteira.
- **Tipografia e espaçamento fluido**: uso de `clamp()` nas variáveis de fonte e padding para que os elementos escalem suavemente entre tablet e desktop sem a necessidade de múltiplos breakpoints extras.
- **Estado ativo via atributo `data-title`**: ao clicar em Daily/Weekly/Monthly, o atributo `data-title` do `<body>` é atualizado, servindo como referência para buscar os dados corretos no JSON.
- **Consumo assíncrono de dados**: os dados de cada atividade são buscados no `data.json` através da Fetch API (`async/await`), populando dinamicamente o título, o valor atual e o valor do período anterior de cada card.
- **Renderização dinâmica dos cards**: funções JS percorrem todos os cards (exceto o card principal) e preenchem título, dado atual e dado anterior, evitando repetição manual de conteúdo no HTML.
- **Modularização do JavaScript**: a lógica foi separada em `data-title.js` (regras de negócio) e importada no `main.js`, que atua como ponto de entrada da aplicação junto com os estilos do Bootstrap e do CSS customizado.
- **Estados de interação (hover/focus)**: transições suaves em links, botões e nos cards, incluindo o ícone de "..." que muda de cor no hover.
- **Acessibilidade**: respeito à preferência `prefers-reduced-motion`, removendo as transições para usuários que optam por menos movimento na interface.

<br>

## 📱 Responsividade

O projeto foi desenvolvido seguindo a abordagem **mobile-first**, testado desde **320px** até telas grandes, com base nos tamanhos de referência do desafio:

- 📱 Mobile: `375px`
- 🖥️ Desktop: `1440px`

<br>

## ▶️ Como rodar o projeto

```bash
# Clonar o repositório
git clone https://github.com/anaClarissi/time-tracking-dashboard

# Instalar as dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

<br>

## 👩‍💻 Autora

<div align="center">

**Ana Clarissi**

[![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-@anaClarissi-4e6e7e?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/profile/anaClarissi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-anaclarissi-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anaclarissi)

</div>

<br />

<div align="center">

Feito com 💛 e muita atenção aos detalhes.

</div>