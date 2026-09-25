<div align="center">

<img src="public/logo.png" alt="Movie Review Finder logo" width="80" />

# Movie Review Finder

**Encontre filmes que você gosta, sem se aborrecer.**

Uma aplicação React para descobrir filmes populares e buscar entre milhares de títulos, com dados em tempo real da API do [TMDB](https://www.themoviedb.org/).

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TMDB](https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)

<!-- TODO: adicione um screenshot ou GIF do app em docs/screenshot.png -->
<!-- ![Screenshot do Movie Review Finder](docs/screenshot.png) -->

</div>

---

## ✨ Funcionalidades

- 🔥 **Filmes populares na página inicial**: ao abrir o app, os filmes mais populares do momento já aparecem.
- 🔎 **Busca com debounce**: a API só é chamada 500ms depois que você para de digitar, e não a cada tecla.
- 🎬 **Cards de filme**: pôster, título, nota média (⭐), idioma original e ano de lançamento.
- ⏳ **Estados de carregamento e erro**: spinner durante as requisições e uma mensagem clara se algo falhar.
- 🖼️ **Fallback de imagem**: filmes sem pôster ganham uma imagem padrão, para o layout não quebrar.

## 🛠️ Tecnologias

| Tecnologia                                          | Uso                                           |
| --------------------------------------------------- | --------------------------------------------- |
| [React 19](https://react.dev/)                      | Interface e gerenciamento de estado com hooks |
| [Vite](https://vitejs.dev/)                         | Servidor de desenvolvimento e build           |
| [Tailwind CSS 4](https://tailwindcss.com/)          | Estilização (via plugin `@tailwindcss/vite`)  |
| [react-use](https://github.com/streamich/react-use) | Hook `useDebounce` para otimizar a busca      |
| [TMDB API](https://developer.themoviedb.org/docs)   | Fonte dos dados de filmes                     |

## 💡 Destaques técnicos

### Busca otimizada com debounce

Sem debounce, digitar "Interstellar" faria 12 requisições à API. Com o `useDebounce` do `react-use`, o termo só é "confirmado" depois de 500ms sem digitação, e só então a busca dispara:

```jsx
const [termoBusca, setTermoBusca] = useState("");
const [debounceTermoBusca, setDebounceTermoBusca] = useState("");

useDebounce(() => setDebounceTermoBusca(termoBusca), 500, [termoBusca]);

useEffect(() => {
  fetch_movies(debounceTermoBusca);
}, [debounceTermoBusca]);
```

Resultado: menos requisições, menos risco de bater no rate limit e uma interface mais fluida.

### Um único fluxo para descobrir e buscar

A mesma função decide o endpoint pelo termo de busca: sem termo, usa `/discover/movie` (populares); com termo, usa `/search/movie`. Assim, os estados de loading e erro ficam em um só lugar.

## 🚀 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20+
- Uma conta gratuita no [TMDB](https://www.themoviedb.org/signup)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/hqr999/Movie-Review-Finder.git
cd Movie-Review-Finder

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env-template .env
```

No arquivo `.env`, adicione seu token do TMDB:

```env
VITE_TMDB_API_KEY=seu_token_aqui
```

> **Atenção:** o app autentica com `Authorization: Bearer`, então use o **API Read Access Token** (o token longo), e não a "API Key" curta. Você encontra os dois em [Configurações → API](https://www.themoviedb.org/settings/api) no TMDB.

```bash
# 4. Rode o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Scripts disponíveis

| Comando           | Descrição                            |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento |
| `npm run build`   | Gera o build de produção em `dist/`  |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint`    | Roda o ESLint                        |

## 📁 Estrutura do projeto

```
src/
├── App.jsx              # Estado principal, debounce e chamadas à API
├── componentes/
│   ├── Buscar.jsx       # Barra de busca (componente controlado)
│   ├── MovieCard.jsx    # Card com pôster, nota, idioma e ano
│   └── Spinner.jsx      # Indicador de carregamento
├── index.css            # Estilos globais e tema com Tailwind
└── main.jsx             # Ponto de entrada
```

## 🗺️ Próximos passos

- [ ] Página de detalhes do filme (sinopse, elenco, trailer)
- [ ] Paginação / scroll infinito
- [ ] Seção de "buscas em alta"

## 🙏 Créditos

Dados e imagens fornecidos pelo [TMDB](https://www.themoviedb.org/). Este produto usa a API do TMDB, mas não é endossado nem certificado pelo TMDB.

## 👤 Autor

**Henrique Queiroz Reuter**

[![GitHub](https://img.shields.io/badge/GitHub-hqr999-181717?style=flat&logo=github)](https://github.com/hqr999)
