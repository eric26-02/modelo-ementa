# Modelo de ementa digital

Demonstração adaptável de uma ementa digital para telemóvel, com categorias, pratos detalhados, preços em euros, fotografias ilustrativas nos artigos e nos banners de categoria, navegação em português e inglês e informação útil.

A carta, os preços, o horário, o contacto e a localização são fictícios. Todas as fotografias são apenas exemplos visuais e não representam os pratos de um restaurante específico. Antes de adaptar ou apresentar como uma ementa real, substitua a informação e as fotografias por materiais aprovados pelo restaurante.

## Abrir

Abra `index.html` num navegador. O projeto é estático e não precisa de instalação ou serviços externos.

## Personalizar

- Substitua “Mesa & Brasa” e `assets/modelo-wordmark.svg` pela identidade do restaurante.
- Edite categorias, pratos, descrições e preços no início de `menu.js`.
- Atualize os cartões em `landingCategoryGroups` e `landingCategoryImages`, no mesmo ficheiro.
- Troque as fotografias em `assets/photos/`, `assets/demo-burger.jpg` e `assets/demo-sangria.jpg` por fotografias autorizadas.
- Consulte `ASSET_SOURCES.md` para encontrar as fontes das imagens de demonstração.
- Atualize horários, reservas, alergénios, informação legal e redes sociais em `renderInfoSlide()` e `renderVideoSlide()`.
- Confirme todos os conteúdos antes de apresentar o menu como uma ementa real.

## Ficheiros

- `index.html`: estrutura da página.
- `styles.css`: apresentação e comportamento responsivo.
- `menu.js`: conteúdo de demonstração e navegação.
- `assets/`: marca de substituição e fotografias ilustrativas locais para artigos, categorias e página inicial.
