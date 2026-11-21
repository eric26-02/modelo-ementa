const demoPhotos = {
  soup: { url: "assets/photos/soup.jpg", altPt: "Sopa servida numa taça", altEn: "Soup served in a bowl", credit: "ALLAN LAINEZ · Unsplash" },
  salad: { url: "assets/photos/salad.jpg", altPt: "Salada fresca com legumes", altEn: "Fresh vegetable salad", credit: "Ella Olsson · Unsplash" },
  chickenSalad: { url: "assets/photos/chicken-salad.jpg", altPt: "Salada com frango grelhado", altEn: "Salad with grilled chicken", credit: "Ani Augustine · Unsplash" },
  salmon: { url: "assets/photos/salmon.jpg", altPt: "Salmão grelhado com salada", altEn: "Grilled salmon with salad", credit: "NHATHUY DUONG · Unsplash" },
  hotdog: { url: "assets/photos/hotdog.jpg", altPt: "Cachorro quente com batatas fritas", altEn: "Hot dog with fries", credit: "Diego Arenas de Rodrigo · Unsplash" },
  burger: { url: "assets/photos/burger.jpg", altPt: "Hambúrguer servido no prato", altEn: "Burger served on a plate", credit: "Anthony Espinosa · Unsplash" },
  steak: { url: "assets/photos/steak.jpg", altPt: "Carne grelhada com legumes", altEn: "Grilled meat with vegetables", credit: "Hanxiao Xu · Unsplash" },
  meatPlatter: { url: "assets/photos/meat-platter.jpg", altPt: "Prato de carnes grelhadas", altEn: "Grilled meat platter", credit: "Gang Hao · Unsplash" },
  sandwich: { url: "assets/photos/sandwich.jpg", altPt: "Sanduíche artesanal", altEn: "Artisan sandwich", credit: "Crunch · Unsplash" },
  garlicBread: { url: "assets/photos/garlic-bread.jpg", altPt: "Pão de alho com queijo e ervas", altEn: "Garlic bread with cheese and herbs", credit: "Zoshua Colah · Unsplash" },
  focaccia: { url: "assets/photos/focaccia.jpg", altPt: "Focaccia com tomate e mozzarella", altEn: "Focaccia with tomato and mozzarella", credit: "Marco Palumbo · Unsplash" },
  fries: { url: "assets/photos/fries.jpg", altPt: "Batatas fritas com molhos", altEn: "Fries with dipping sauces", credit: "Jainica Dhingra · Unsplash" },
  beer: { url: "assets/photos/beer.jpg", altPt: "Copo de cerveja com espuma", altEn: "Glass of beer with foam", credit: "Denis · Unsplash" },
  coffee: { url: "assets/photos/coffee.jpg", altPt: "Café expresso numa chávena", altEn: "Espresso in a cup", credit: "Mitchell Hollander · Unsplash" },
  wine: { url: "assets/photos/wine.jpg", altPt: "Garrafa e copo de vinho", altEn: "Wine bottle and glass", credit: "Meg von Haartman · Unsplash" },
  lemonade: { url: "assets/photos/lemonade.jpg", altPt: "Limonada com gelo e limão", altEn: "Lemonade with ice and lemon", credit: "Olga Tutunaru · Unsplash" },
  gin: { url: "assets/photos/gin.jpg", altPt: "Gin tónico com citrinos", altEn: "Gin and tonic with citrus", credit: "Gaby Yerden · Unsplash" },
  whiskey: { url: "assets/photos/whiskey.jpg", altPt: "Copo de whiskey com gelo", altEn: "Glass of whiskey with ice", credit: "Callum Mullin · Unsplash" },
  cheesecake: { url: "assets/photos/cheesecake.jpg", altPt: "Cheesecake de chocolate com morango", altEn: "Chocolate cheesecake with strawberry", credit: "American Heritage Chocolate · Unsplash" },
  mousse: { url: "assets/photos/mousse.jpg", altPt: "Sobremesa de chocolate", altEn: "Chocolate dessert", credit: "Katarzyna Grabowska · Unsplash" },
  houseBurger: { url: "assets/demo-burger.jpg", altPt: "Fotografia ilustrativa de hambúrguer", altEn: "Illustrative burger photo", credit: "Fotografia de exemplo" },
  houseSangria: { url: "assets/demo-sangria.jpg", altPt: "Fotografia ilustrativa de sangria", altEn: "Illustrative sangria photo", credit: "Fotografia de exemplo" }
};
const instagramProfileUrl = "https://www.instagram.com/";
const menuPhotoByUrl = new Map(Object.values(demoPhotos).map(function (photo) { return [photo.url, photo]; }));
const menu = [
  { name: "Entradas", image: demoPhotos.soup.url, items: [
    { name: "Creme de legumes", nameEn: "Seasonal vegetable soup", price: 4.50, description: "Creme aveludado de legumes da época, servido com ervas frescas.", descriptionEn: "Silky seasonal vegetable soup finished with fresh herbs." },
    { name: "Croquetes da casa", nameEn: "House croquettes", price: 7.00, image: demoPhotos.fries.url, description: "Croquetes crocantes de carne com maionese de ervas.", descriptionEn: "Crispy beef croquettes served with herb mayonnaise." },
    { name: "Pão de alho gratinado", nameEn: "Cheesy garlic bread", price: 6.50, image: demoPhotos.garlicBread.url, description: "Pão tostado com manteiga de alho, queijo e orégãos.", descriptionEn: "Toasted bread with garlic butter, cheese and oregano." }
  ]},
  { name: "Saladas", image: demoPhotos.salad.url, items: [
    { name: "Salada Mediterrânica", nameEn: "Mediterranean salad", price: 13.50, description: "Tomate, pepino, azeitonas, queijo feta, cebola roxa e vinagrete de limão.", descriptionEn: "Tomato, cucumber, olives, feta, red onion and lemon vinaigrette." },
    { name: "Salada de frango", nameEn: "Chicken salad", price: 14.90, image: demoPhotos.chickenSalad.url, description: "Frango grelhado, folhas frescas, abacate, tomate e molho de iogurte.", descriptionEn: "Grilled chicken, fresh leaves, avocado, tomato and yoghurt dressing." },
    { name: "Salada de quinoa", nameEn: "Quinoa salad", price: 13.90, image: demoPhotos.salmon.url, description: "Quinoa, legumes assados, rúcula, sementes e molho cítrico.", descriptionEn: "Quinoa, roasted vegetables, rocket, seeds and citrus dressing.", tags: ["Vegetariano"] }
  ]},
  { name: "Pregos", image: demoPhotos.sandwich.url, note: "Acompanhados de batata frita.", noteEn: "Served with fries.", items: [
    { name: "Prego clássico", nameEn: "Classic steak sandwich", price: 13.90, description: "Pão rústico, bife grelhado, queijo e molho da casa.", descriptionEn: "Rustic bread, grilled steak, cheese and house sauce." },
    { name: "Prego da serra", nameEn: "Mountain cheese steak sandwich", price: 15.50, image: demoPhotos.steak.url, description: "Pão rústico, bife, queijo curado, cebola caramelizada e rúcula.", descriptionEn: "Rustic bread, steak, aged cheese, caramelised onion and rocket." },
    { name: "Prego vegetariano", nameEn: "Vegetarian sandwich", price: 12.90, image: demoPhotos.salad.url, description: "Pão rústico, cogumelos grelhados, queijo e legumes assados.", descriptionEn: "Rustic bread, grilled mushrooms, cheese and roasted vegetables.", tags: ["Vegetariano"] }
  ]},
  { name: "Hambúrgueres", image: demoPhotos.houseBurger.url, note: "Acompanhados de batata frita.", noteEn: "Served with fries.", items: [
    { name: "Smash da casa", nameEn: "House smash burger", price: 14.90, image: demoPhotos.houseBurger.url, description: "Pão brioche, dois discos de carne, cheddar, cebola crocante e molho especial.", descriptionEn: "Brioche bun, two beef patties, cheddar, crispy onion and house sauce." },
    { name: "Duplo cheddar", nameEn: "Double cheddar burger", price: 16.90, image: demoPhotos.burger.url, description: "Pão brioche, dois hambúrgueres, cheddar, pickles e maionese fumada.", descriptionEn: "Brioche bun, two patties, cheddar, pickles and smoked mayonnaise." },
    { name: "Hambúrguer vegetal", nameEn: "Plant-based burger", price: 14.50, image: demoPhotos.salad.url, description: "Hambúrguer vegetal, abacate, alface e molho de ervas.", descriptionEn: "Plant-based patty, avocado, lettuce and herb sauce.", tags: ["Vegetariano"] }
  ]},
  { name: "Cachorros", image: demoPhotos.hotdog.url, note: "Acompanhados de batata frita.", noteEn: "Served with fries.", items: [
    { name: "Cachorro clássico", nameEn: "Classic hot dog", price: 10.90, description: "Pão tostado, salsicha grelhada, mostarda e cebola crocante.", descriptionEn: "Toasted bun, grilled sausage, mustard and crispy onion." },
    { name: "Cachorro especial", nameEn: "Special hot dog", price: 12.50, description: "Pão tostado, salsicha, queijo, bacon e molho barbecue.", descriptionEn: "Toasted bun, sausage, cheese, bacon and barbecue sauce." }
  ]},
  { name: "No prato", image: demoPhotos.steak.url, items: [
    { name: "Bife à portuguesa", nameEn: "Portuguese-style steak", price: 21.90, description: "Bife grelhado com ovo, presunto, batata frita e molho da casa.", descriptionEn: "Grilled steak with egg, cured ham, fries and house sauce." },
    { name: "Frango grelhado", nameEn: "Grilled chicken", price: 17.50, image: demoPhotos.meatPlatter.url, description: "Peito de frango marinado, batata rústica e salada fresca.", descriptionEn: "Marinated chicken breast with rustic potatoes and fresh salad." },
    { name: "Salmão na brasa", nameEn: "Grilled salmon", price: 19.90, image: demoPhotos.salmon.url, description: "Lombo de salmão grelhado, legumes da estação e molho de limão.", descriptionEn: "Grilled salmon fillet with seasonal vegetables and lemon sauce." }
  ]},
  { name: "Focaccias", image: demoPhotos.focaccia.url, note: "Servidas com salada e molho da casa.", noteEn: "Served with salad and house dressing.", items: [
    { name: "Focaccia de frango", nameEn: "Chicken focaccia", price: 13.50, image: demoPhotos.chickenSalad.url, description: "Frango grelhado, pesto, tomate seco e rúcula em pão focaccia.", descriptionEn: "Grilled chicken, pesto, sun-dried tomato and rocket in focaccia bread." },
    { name: "Focaccia caprese", nameEn: "Caprese focaccia", price: 12.90, description: "Mozzarella, tomate, manjericão e azeite em pão focaccia.", descriptionEn: "Mozzarella, tomato, basil and olive oil in focaccia bread.", tags: ["Vegetariano"] }
  ]},
  { name: "Infantil", image: demoPhotos.hotdog.url, note: "Para crianças até aos 12 anos.", noteEn: "For children up to 12 years old.", items: [
    { name: "Frango no prato", nameEn: "Chicken and fries", price: 9.50, image: demoPhotos.meatPlatter.url, description: "Tiras de frango panadas, batata frita e fruta da época.", descriptionEn: "Breaded chicken strips, fries and seasonal fruit." },
    { name: "Mini hambúrguer", nameEn: "Mini burger", price: 9.90, image: demoPhotos.burger.url, description: "Mini hambúrguer no pão, queijo, batata frita e fruta.", descriptionEn: "Mini burger in a bun with cheese, fries and fruit." }
  ]},
  { name: "Extras", image: demoPhotos.fries.url, items: [
    { name: "Dose de batata frita", nameEn: "Side of fries", price: 3.50, description: "Batata frita dourada, preparada no momento.", descriptionEn: "Golden fries, freshly prepared." },
    { name: "Salada pequena", nameEn: "Small side salad", price: 3.00, image: demoPhotos.salad.url, description: "Folhas frescas, tomate e vinagrete.", descriptionEn: "Fresh leaves, tomato and vinaigrette." },
    { name: "Molho da casa", nameEn: "House sauce", price: 1.50, description: "Molho cremoso de ervas da casa.", descriptionEn: "Creamy house herb sauce." }
  ]},
  { name: "Bebidas", image: demoPhotos.lemonade.url, items: [
    { name: "Água mineral", nameEn: "Mineral water", price: 1.80, description: "Água mineral natural, 50 cl.", descriptionEn: "Still mineral water, 50 cl." },
    { name: "Refrigerante", nameEn: "Soft drink", price: 2.70, description: "Refrigerante servido bem fresco, 33 cl.", descriptionEn: "Soft drink served chilled, 33 cl." },
    { name: "Limonada da casa", nameEn: "House lemonade", price: 3.50, description: "Limonada fresca com hortelã e pouco açúcar.", descriptionEn: "Fresh lemonade with mint and just a little sugar." },
    { name: "Sumo natural", nameEn: "Fresh juice", price: 4.00, description: "Sumo natural de laranja, preparado no momento.", descriptionEn: "Freshly squeezed orange juice." }
  ]},
  { name: "Cervejas", image: demoPhotos.beer.url, items: [
    { name: "Imperial · 25 cl", nameEn: "Draft beer · 25 cl", price: 2.50, description: "Cerveja de pressão servida bem fresca, 25 cl.", descriptionEn: "Draft beer served chilled, 25 cl." },
    { name: "Caneca · 50 cl", nameEn: "Large draft beer · 50 cl", price: 4.50, description: "Cerveja de pressão servida numa caneca, 50 cl.", descriptionEn: "Draft beer served in a large glass, 50 cl." },
    { name: "Cerveja artesanal", nameEn: "Craft beer", price: 5.50, description: "Cerveja artesanal local, escolha da semana.", descriptionEn: "A local craft beer selected for the week." },
    { name: "Cerveja sem álcool", nameEn: "Alcohol-free beer", price: 3.00, description: "Cerveja sem álcool, servida fresca.", descriptionEn: "Alcohol-free beer, served chilled." }
  ]},
  { name: "Sangrias", image: demoPhotos.houseSangria.url, items: [
    { name: "Sangria tinta", nameEn: "Red sangria", prices: [{ label: "Copo", labelEn: "Glass", amount: 5.50 }, { label: "Jarro · 1 l", labelEn: "Pitcher · 1 l", amount: 19.50 }], image: demoPhotos.houseSangria.url, description: "Vinho tinto, fruta fresca, citrinos e um toque de canela.", descriptionEn: "Red wine, fresh fruit, citrus and a hint of cinnamon." },
    { name: "Sangria branca", nameEn: "White sangria", prices: [{ label: "Copo", labelEn: "Glass", amount: 5.50 }, { label: "Jarro · 1 l", labelEn: "Pitcher · 1 l", amount: 19.50 }], image: demoPhotos.wine.url, description: "Vinho branco, maçã, citrinos e hortelã fresca.", descriptionEn: "White wine, apple, citrus and fresh mint." },
    { name: "Sangria de frutos vermelhos", nameEn: "Red berry sangria", prices: [{ label: "Copo", labelEn: "Glass", amount: 6.00 }, { label: "Jarro · 1 l", labelEn: "Pitcher · 1 l", amount: 21.00 }], image: demoPhotos.gin.url, description: "Vinho, frutos vermelhos, limão e água com gás.", descriptionEn: "Wine, red berries, lemon and sparkling water." }
  ]},
  { name: "Vinhos", image: demoPhotos.wine.url, items: [
    { name: "Tinto da região · Garrafa", nameEn: "Regional red · Bottle", group: "Tintos", price: 19.00, description: "Vinho tinto jovem, frutado e equilibrado.", descriptionEn: "A young, fruity and balanced red wine." },
    { name: "Reserva da casa · Garrafa", nameEn: "House reserve · Bottle", group: "Tintos", price: 28.00, description: "Vinho tinto encorpado, com final persistente.", descriptionEn: "A full-bodied red wine with a lingering finish." },
    { name: "Branco da região · Garrafa", nameEn: "Regional white · Bottle", group: "Brancos", price: 18.00, description: "Vinho branco fresco, com notas cítricas.", descriptionEn: "A fresh white wine with citrus notes." },
    { name: "Rosé da casa · Garrafa", nameEn: "House rosé · Bottle", group: "Rosé", price: 18.50, description: "Rosé leve e aromático, servido fresco.", descriptionEn: "A light, aromatic rosé, served chilled." },
    { name: "Espumante · Garrafa", nameEn: "Sparkling wine · Bottle", group: "Espumantes", price: 25.00, description: "Espumante bruto, ideal para brindar.", descriptionEn: "Brut sparkling wine, perfect for a toast." },
    { name: "Vinho a copo", nameEn: "Wine by the glass", group: "A copo", price: 5.00, description: "Consulte a seleção de vinhos servidos a copo.", descriptionEn: "Ask about the current wines available by the glass." }
  ]},
  { name: "Gin", image: demoPhotos.gin.url, items: [
    { name: "Gin tónico clássico", nameEn: "Classic gin and tonic", price: 9.50, description: "Gin, água tónica, zimbro e limão.", descriptionEn: "Gin, tonic water, juniper and lemon." },
    { name: "Gin cítrico", nameEn: "Citrus gin and tonic", price: 10.50, description: "Gin, água tónica, laranja e toranja.", descriptionEn: "Gin, tonic water, orange and grapefruit." }
  ]},
  { name: "Licores", image: demoPhotos.whiskey.url, items: [
    { name: "Licor de café", nameEn: "Coffee liqueur", price: 4.50, image: demoPhotos.coffee.url, description: "Licor de café servido simples ou com gelo.", descriptionEn: "Coffee liqueur served neat or over ice." },
    { name: "Licor de fruta", nameEn: "Fruit liqueur", price: 4.50, image: demoPhotos.lemonade.url, description: "Licor aromático de fruta, servido fresco.", descriptionEn: "Aromatic fruit liqueur, served chilled." },
    { name: "Aguardente envelhecida", nameEn: "Aged brandy", price: 6.00, description: "Aguardente envelhecida, servida à temperatura ambiente.", descriptionEn: "Aged brandy served at room temperature." }
  ]},
  { name: "Whiskey", image: demoPhotos.whiskey.url, items: [
    { name: "Whiskey clássico", nameEn: "Classic whiskey", price: 6.00, description: "Whiskey equilibrado, servido simples ou com gelo.", descriptionEn: "A balanced whiskey, served neat or over ice." },
    { name: "Whiskey reserva", nameEn: "Reserve whiskey", price: 8.50, description: "Whiskey envelhecido, com notas de madeira e baunilha.", descriptionEn: "Aged whiskey with notes of oak and vanilla." }
  ]},
  { name: "Cafetaria", image: demoPhotos.coffee.url, items: [
    { name: "Café expresso", nameEn: "Espresso", price: 1.40, description: "Café curto, servido acabado de tirar.", descriptionEn: "A short coffee, freshly brewed." },
    { name: "Abatanado", nameEn: "Americano", price: 1.80, image: demoPhotos.coffee.url, description: "Café expresso alongado com água quente.", descriptionEn: "Espresso lengthened with hot water." },
    { name: "Capuccino", nameEn: "Cappuccino", price: 3.20, image: demoPhotos.coffee.url, description: "Café expresso com leite vaporizado e cacau.", descriptionEn: "Espresso with steamed milk and cocoa." },
    { name: "Chá", nameEn: "Tea", price: 2.20, image: demoPhotos.lemonade.url, description: "Seleção de chás e infusões.", descriptionEn: "A selection of teas and infusions." }
  ]},
  { name: "Sobremesas", image: demoPhotos.cheesecake.url, items: [
    { name: "Mousse de chocolate", nameEn: "Chocolate mousse", price: 5.50, image: demoPhotos.mousse.url, description: "Mousse de chocolate negro, leve e cremosa.", descriptionEn: "Light and creamy dark chocolate mousse." },
    { name: "Cheesecake da estação", nameEn: "Seasonal cheesecake", price: 6.00, description: "Cheesecake cremosa com cobertura de fruta da estação.", descriptionEn: "Creamy cheesecake topped with seasonal fruit." },
    { name: "Serradura", nameEn: "Serradura biscuit dessert", price: 5.00, image: demoPhotos.mousse.url, description: "Camadas de natas batidas e bolacha triturada.", descriptionEn: "Layers of whipped cream and crushed biscuits." },
    { name: "Bola de gelado", nameEn: "Ice cream scoop", price: 3.50, description: "Uma bola de gelado, com sabores à escolha.", descriptionEn: "One scoop of ice cream, with a choice of flavours." }
  ]}
];
const categoryNav = document.getElementById("category-nav");
const categoryMenuToggle = document.getElementById("category-menu-toggle");
const dishBackFixed = document.getElementById("dish-back-fixed");
const categoryMenuScrim = document.getElementById("category-menu-scrim");
const menuMain = document.getElementById("menu-main");
const mediaLightbox = document.getElementById("media-lightbox");
const mediaLightboxClose = document.getElementById("media-lightbox-close");
const mediaLightboxContent = document.getElementById("media-lightbox-content");
const languageToggle = document.getElementById("language-toggle");
const scrollProgressFill = document.getElementById("scroll-progress-fill");
const brandLink = document.querySelector(".brand");
let socialVideoObserver = null;
const detailCategories = new Set(["Entradas", "Saladas", "Pregos", "Hambúrgueres", "Cachorros", "No prato", "Focaccias", "Infantil"]);
const categoryOrder = ["Entradas", "Saladas", "Pregos", "Hambúrgueres", "Cachorros", "No prato", "Focaccias", "Infantil", "Extras", "Bebidas", "Cervejas", "Sangrias", "Vinhos", "Gin", "Licores", "Whiskey", "Cafetaria", "Sobremesas", "Vídeos", "Informações"];
const categoryColors = {
  "No prato": "#4b1d3f", "Focaccias": "#4a5a24", "Pregos": "#6b2230", "Hambúrgueres": "#7a2a1f", "Cachorros": "#5a3a1c", "Saladas": "#3b5a2a", "Entradas": "#6b4a1a", "Infantil": "#1f4a5c", "Extras": "#5a3a1c", "Cafetaria": "#5a3a1c", "Bebidas": "#1f4a5c", "Cervejas": "#6b4a1a", "Licores": "#4b1d3f", "Gin": "#4b1d3f", "Whiskey": "#4b1d3f", "Vinhos": "#5b1a26", "Sangrias": "#6b2230", "Sobremesas": "#6b2230", "Informações": "#4b1d3f"
};
const englishCategory = {
  "No prato": "Main dishes", "Focaccias": "Focaccia", "Pregos": "Steak sandwiches", "Hambúrgueres": "Burgers", "Cachorros": "Hot dogs", "Saladas": "Salads", "Entradas": "Starters", "Infantil": "Kids’ menu", "Extras": "Sides and extras", "Cafetaria": "Coffee and tea", "Bebidas": "Drinks", "Cervejas": "Beer", "Licores": "Liqueurs", "Gin": "Gin", "Whiskey": "Whiskey", "Vinhos": "Wine", "Sangrias": "Sangria", "Sobremesas": "Desserts"
};
const englishGroups = { "Tintos": "Reds", "Brancos": "Whites", "Rosé": "Rosé", "Espumantes": "Sparkling", "A copo": "By the glass" };
const englishNames = {};
const englishDescriptions = {};
const englishNotes = {};
const categoryByName = new Map(menu.map(function (category) { return [category.name, category]; }));
const menuCategoryNames = categoryOrder.filter(function (name) { return name !== "Informações" && name !== "Vídeos" && categoryByName.has(name); });
const landingCategoryGroups = [
  { title: "Para comer", englishTitle: "To eat", description: "Entradas, pratos e opções para todos", englishDescription: "Starters, main dishes and options for everyone", categories: ["Entradas", "Saladas", "Pregos", "Hambúrgueres", "Cachorros", "No prato", "Focaccias", "Infantil", "Extras"] },
  { title: "Para beber", englishTitle: "Something to drink", description: "Bebidas, cervejas e sangrias", englishDescription: "Drinks, beer and sangria", featuredCategories: [
    { name: "Sangrias", image: "assets/demo-sangria.jpg", eyebrow: "SUGESTÃO DA CASA", englishEyebrow: "HOUSE FAVOURITE", detail: "Vários sabores", englishDetail: "A range of flavours" },
    { name: "Cervejas", eyebrow: "CLÁSSICAS E ARTESANAIS", englishEyebrow: "CLASSIC AND CRAFT", detail: "Descubra a seleção", englishDetail: "Explore the selection" }
  ], categories: ["Bebidas", "Vinhos", "Gin", "Licores", "Whiskey", "Cafetaria"] },
  { title: "Para fechar", englishTitle: "Something sweet", description: "Sobremesas", englishDescription: "Desserts", featuredCategories: [
    { name: "Sobremesas", eyebrow: "UM FINAL DOCE", englishEyebrow: "A SWEET FINISH", detail: "Sugestões da casa", englishDetail: "House suggestions" }
  ], categories: [] }
];
const landingCategoryImages = {
  "Hambúrgueres": "assets/demo-burger.jpg"
};
let language = /^pt/i.test(navigator.language || "") ? "pt" : "en";
let appView = "home";
let currentCategory = null;
let currentItemIndex = 0;
let homeScrollTop = 0;
let categoryMenuScrollTop = 0;
let allMenuScrollTop = 0;
let dishReturnView = "category-list";
let categoryMenuOpen = false;
const menuHistoryKey = "digitalMenuDemo";
let historySaveTimer = 0;

function currentDishIndex() {
  if (appView !== "dishes" || !currentCategory) return currentItemIndex;
  const center = menuMain.getBoundingClientRect().top + menuMain.clientHeight / 2;
  const visible = Array.from(menuMain.querySelectorAll(".dish-slide")).find(function (slide) {
    const rect = slide.getBoundingClientRect();
    return rect.top <= center && rect.bottom > center;
  });
  if (!visible) return currentItemIndex;
  const match = visible.dataset.key.match(/-(\d+)$/);
  return match ? Number(match[1]) : currentItemIndex;
}

function makeMenuHistoryState(depth) {
  return {
    [menuHistoryKey]: true,
    depth: depth,
    appView: appView,
    categoryName: currentCategory ? currentCategory.name : null,
    currentItemIndex: currentDishIndex(),
    dishReturnView: dishReturnView,
    homeScrollTop: homeScrollTop,
    categoryMenuScrollTop: categoryMenuScrollTop,
    allMenuScrollTop: allMenuScrollTop,
    scrollTop: menuMain.scrollTop
  };
}

function isMenuHistoryState(state) {
  return Boolean(state && state[menuHistoryKey]);
}

function saveCurrentMenuHistoryState() {
  if (!isMenuHistoryState(history.state)) return;
  try {
    history.replaceState(makeMenuHistoryState(history.state.depth || 0), "");
  } catch (_) {
    // Keep the menu usable in local file previews where some browsers restrict History API URLs.
  }
}

function pushMenuHistoryState() {
  const currentState = isMenuHistoryState(history.state) ? history.state : { depth: 0 };
  const depth = Number(currentState.depth) || 0;
  saveCurrentMenuHistoryState();
  try {
    history.pushState(makeMenuHistoryState(depth + 1), "");
  } catch (_) {
    // GitHub Pages uses HTTPS; this fallback keeps local previews functional if pushState is restricted.
  }
}

function restoreMenuHistoryState(state) {
  if (!isMenuHistoryState(state)) return;
  appView = state.appView || "home";
  currentCategory = state.categoryName ? categoryByName.get(state.categoryName) || null : null;
  currentItemIndex = Math.max(0, Number(state.currentItemIndex) || 0);
  dishReturnView = state.dishReturnView || "category-list";
  homeScrollTop = Number(state.homeScrollTop) || 0;
  categoryMenuScrollTop = Number(state.categoryMenuScrollTop) || 0;
  allMenuScrollTop = Number(state.allMenuScrollTop) || 0;
  const restoreKey = appView === "dishes" && currentCategory
    ? slug(currentCategory.name) + "-" + currentItemIndex
    : "";
  renderCurrentView(restoreKey, Number(state.scrollTop) || 0);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, function (char) {
    return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char];
  });
}
function slug(value) {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function categoryLabel(category) {
  return language === "en" ? (englishCategory[category.name] || category.name) : category.name;
}
function itemLabel(category, item) {
  return language === "en" ? (item.nameEn || englishNames[category.name + "|" + item.name] || item.name) : item.name;
}
function itemDescription(category, item) {
  if (!item.description) return "";
  return language === "en" ? (item.descriptionEn || englishDescriptions[category.name + "|" + item.name] || item.description) : item.description;
}
function menuItemPhoto(category, item) {
  const url = item.image || category.image;
  return url ? menuPhotoByUrl.get(url) || { url: url, altPt: itemLabel(category, item), altEn: itemLabel(category, item), credit: "" } : null;
}
function groupLabel(group) {
  return language === "en" ? (englishGroups[group] || group) : group;
}
function categoryNote(category) {
  if (!category.note) return "";
  return language === "en" ? (category.noteEn || englishNotes[category.name] || category.note) : category.note;
}
function money(value) {
  const number = Number(value).toFixed(2);
  return language === "en" ? "€ " + number : number.replace(".", ",") + " €";
}
function arrowIcon(direction) {
  const path = direction === "back"
    ? "M19 12H5m7 7-7-7 7-7"
    : "M7 17 17 7M8 7h9v9";
  return "<svg class=\"" + (direction === "back" ? "back-arrow-icon" : "external-arrow-icon") + "\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"" + path + "\"></path></svg>";
}
function itemPrice(item) {
  if (item.prices) return item.prices.map(function (entry) {
    const label = language === "en" ? (entry.labelEn || entry.label) : entry.label;
    return escapeHtml(label) + " " + money(entry.amount);
  }).join(" <span class=\"price-separator\">·</span> ");
  if (typeof item.price !== "number" || !Number.isFinite(item.price)) return "—";
  return money(item.price);
}
function itemHasDetails(item) {
  return Boolean(item.image || item.video || item.description || (item.tags && item.tags.length));
}
function renderMenuItem(category, item, index) {
  const name = escapeHtml(itemLabel(category, item));
  const price = itemPrice(item);
  if (!itemHasDetails(item)) return "<div class=\"list-item list-item-static\"><span>" + name + "</span><span>" + price + "</span></div>";
  const photo = menuItemPhoto(category, item);
  let media = "<span class=\"list-item-media list-item-media-placeholder\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"3\"></rect><circle cx=\"8.5\" cy=\"9\" r=\"1.5\"></circle><path d=\"m5 17 5-5 3 3 2-2 4 4\"></path></svg></span>";
  if (photo) media = "<span class=\"list-item-media\"><img src=\"" + escapeHtml(photo.url) + "\" alt=\"\" loading=\"lazy\"></span>";
  else if (item.video) media = item.poster
    ? "<span class=\"list-item-media list-item-media-video\" aria-hidden=\"true\"><img src=\"" + escapeHtml(item.poster) + "\" alt=\"\" loading=\"lazy\"><span></span></span>"
    : "<span class=\"list-item-media list-item-media-video\" aria-hidden=\"true\"><span></span></span>";
  const actionText = language === "en" ? "View details" : "Ver detalhes";
  const ariaLabel = itemLabel(category, item) + " · " + itemPrice(item) + ". " + actionText;
  return "<button class=\"list-item list-item-button\" type=\"button\" data-action=\"open-dish\" data-name=\"" + escapeHtml(category.name) + "\" data-index=\"" + index + "\" aria-label=\"" + escapeHtml(ariaLabel) + "\">" + media + "<span class=\"list-item-copy\"><span class=\"list-item-name\">" + name + "</span><span class=\"list-item-action\">" + actionText + "</span></span><span class=\"list-item-price\">" + price + "</span></button>";
}
function translatedTag(tag) {
  if (language === "en" && tag === "Vegetariano") return "Vegetarian";
  return tag;
}
function slideBackground(categoryName) {
  return categoryColors[categoryName] || "#59313a";
}
function photoSourceLabel(photo) {
  if (!photo || !photo.credit || photo.credit === "Fotografia de exemplo") return language === "en" ? "Example photo" : "Fotografia de exemplo";
  return (language === "en" ? "Illustrative photo · " : "Fotografia ilustrativa · ") + photo.credit;
}
function renderInstagramLink() {
  const english = language === "en";
  const label = english ? "Follow the restaurant on Instagram" : "Segue o restaurante no Instagram";
  const detail = english ? "Photos, news and updates" : "Fotografias, novidades e atualizações";
  return "<a class=\"instagram-footer-link\" href=\"" + escapeHtml(instagramProfileUrl) + "\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"" + escapeHtml(label) + "\"><span class=\"instagram-footer-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><rect x=\"3.5\" y=\"3.5\" width=\"17\" height=\"17\" rx=\"5\"></rect><circle cx=\"12\" cy=\"12\" r=\"3.7\"></circle><circle class=\"instagram-footer-dot\" cx=\"17.7\" cy=\"6.5\" r=\"1\"></circle></svg></span><span class=\"instagram-footer-copy\"><strong>Instagram</strong><small>" + escapeHtml(detail) + "</small></span><span class=\"instagram-footer-arrow\" aria-hidden=\"true\">" + arrowIcon("external") + "</span></a>";
}
function renderDishSlide(category, item, index) {
  const categoryId = slug(category.name);
  const key = categoryId + "-" + index;
  const description = itemDescription(category, item);
  const note = categoryNote(category);
  const photo = menuItemPhoto(category, item);
  const tags = (item.tags || []).map(function (tag) {
    const label = translatedTag(tag);
    const leaf = tag === "Vegetariano" || tag === "Vegan" ? "<i class=\"diet-leaf\" aria-hidden=\"true\"></i>" : "";
    return "<span class=\"diet-tag\">" + leaf + escapeHtml(label) + "</span>";
  }).join("");
  const photoLabel = language === "en" ? "Dish photo coming soon" : "Fotografia deste prato em breve";
  const media = item.video
    ? "<video class=\"dish-video\" controls playsinline preload=\"metadata\"" + (item.poster ? " poster=\"" + escapeHtml(item.poster) + "\" data-poster=\"" + escapeHtml(item.poster) + "\"" : "") + " aria-label=\"" + escapeHtml(itemLabel(category, item)) + "\"><source src=\"" + escapeHtml(item.video) + "\" type=\"video/mp4\">" + (language === "en" ? "Your browser cannot play this video." : "O teu navegador não consegue reproduzir este vídeo.") + "</video>"
    : (photo
      ? "<img class=\"dish-photo\" src=\"" + escapeHtml(photo.url) + "\" alt=\"" + escapeHtml(item.imageAlt && item.imageAlt[language] ? item.imageAlt[language] : (language === "en" ? photo.altEn : photo.altPt)) + "\" loading=\"lazy\">"
      : (detailCategories.has(category.name) ? "<div class=\"photo-placeholder\" role=\"img\" aria-label=\"" + photoLabel + "\"><span class=\"photo-icon\" aria-hidden=\"true\">✧</span><span class=\"photo-label\">" + photoLabel + "</span></div>" : ""));
  const photoStage = media ? "<div class=\"photo-stage\">" + media + "</div>" : "";
  const photoCredit = item.video
    ? "<span class=\"photo-credit\">" + (language === "en" ? "Restaurant video" : "Vídeo do restaurante") + "</span>"
    : (photo ? "<span class=\"photo-credit\">" + escapeHtml(photoSourceLabel(photo)) + "</span>" : "");
  const slideClass = "menu-slide dish-slide" + (media ? "" : " no-photo");
  return "<section class=\"" + slideClass + "\" data-category=\"" + categoryId + "\" data-key=\"" + key + "\" style=\"--c:" + slideBackground(category.name) + "\"><div class=\"slide-background\"></div>" + photoStage + photoCredit + "<div class=\"slide-glow\"></div><div class=\"slide-content\"><span class=\"slide-category\">" + escapeHtml(categoryLabel(category)) + "</span><h1 class=\"slide-title\">" + escapeHtml(itemLabel(category, item)) + "</h1>" + (description ? "<p class=\"slide-description\">" + escapeHtml(description) + "</p>" : "") + (note ? "<p class=\"slide-note\">" + escapeHtml(note) + "</p>" : "") + "<div class=\"slide-row\"><strong class=\"price-pill\">" + itemPrice(item) + "</strong>" + tags + "</div></div></section>";
}
function renderListSlide(category) {
  const categoryId = slug(category.name);
  let lastGroup = "";
  let rows = "";
  category.items.forEach(function (item, index) {
    if (item.group && item.group !== lastGroup) rows += "<h2 class=\"list-group-title\">" + escapeHtml(groupLabel(item.group)) + "</h2>";
    lastGroup = item.group || "";
    rows += renderMenuItem(category, item, index);
  });
  const note = categoryNote(category);
  const craftFeature = category.name === "Cervejas" ? renderCraftBeerFeature() : "";
  return "<section class=\"menu-slide list-slide\" data-category=\"" + categoryId + "\" data-key=\"" + categoryId + "-list\" style=\"--c:" + slideBackground(category.name) + "\"><div class=\"list-background\"></div><div class=\"list-panel\">" + renderCategoryBanner(category) + (note ? "<p class=\"list-note\">" + escapeHtml(note) + "</p>" : "") + craftFeature + rows + "</div></section>";
}
function renderCategoryBanner(category) {
  const photo = menuItemPhoto(category, category.items[0] || {});
  const media = photo ? "<img src=\"" + escapeHtml(photo.url) + "\" alt=\"\" loading=\"lazy\">" : "";
  return "<header class=\"menu-category-banner\"><span class=\"menu-category-banner-media\">" + media + "</span><span class=\"menu-category-banner-overlay\"></span><span class=\"menu-category-banner-copy\"><small>MESA &amp; BRASA · MENU</small><strong>" + escapeHtml(categoryLabel(category)) + "</strong></span></header>";
}
function renderHomeSlide() {
  const english = language === "en";
  const allLabel = english ? "View everything" : "Ver tudo";
  const videosLabel = english ? "Kitchen videos" : "Vídeos da cozinha";
  const infoLabel = english ? "Useful information" : "Informações úteis";
  const heroTitle = english ? "A menu made for your place." : "Uma ementa feita para a sua casa.";
  const heroCopy = english ? "Explore dishes, drinks and desserts with photos and clear details." : "Explore pratos, bebidas e sobremesas com fotografias e informação clara.";
  const groups = landingCategoryGroups.map(renderLandingCategoryGroup).join("");
  return "<section class=\"menu-slide list-slide landing-slide\" data-key=\"inicio\"><div class=\"list-background\"></div><div class=\"list-panel landing-panel\"><section class=\"landing-hero\"><div class=\"landing-hero-media\"><img src=\"assets/demo-burger.jpg\" alt=\"\" fetchpriority=\"high\"><img src=\"assets/demo-sangria.jpg\" alt=\"\" loading=\"lazy\"></div><div class=\"landing-hero-copy\"><span class=\"landing-hero-kicker\">MESA &amp; BRASA · EMENTA DIGITAL</span><h1 class=\"landing-hero-title\">" + heroTitle + "</h1><p class=\"landing-hero-description\">" + heroCopy + "</p><button class=\"landing-hero-cta\" type=\"button\" data-action=\"show-all\"><span>" + allLabel + "</span><span aria-hidden=\"true\">→</span></button></div></section><p class=\"demo-notice\">" + (english ? "Fictional demo: dishes, prices, hours, contacts and photos are examples." : "Demonstração fictícia: pratos, preços, horários, contactos e fotografias são exemplos.") + "</p>" + groups + "<div class=\"landing-links\"><button type=\"button\" data-action=\"open-videos\">" + videosLabel + "</button><button type=\"button\" data-action=\"open-info\">" + infoLabel + "</button></div>" + renderInstagramLink() + "</div></section>";
}
function renderLandingCategoryGroup(group) {
  const english = language === "en";
  const title = english ? group.englishTitle : group.title;
  const description = english ? group.englishDescription : group.description;
  const categories = group.categories.map(function (name) {
    const category = categoryByName.get(name);
    if (!category) return "";
    const image = landingCategoryImages[name] || category.image;
    const media = image ? "<img src=\"" + escapeHtml(image) + "\" alt=\"\" loading=\"lazy\">" : "";
    return "<button class=\"landing-featured-category landing-category-photo-card\" type=\"button\" data-action=\"open-category\" data-name=\"" + escapeHtml(name) + "\"><span class=\"landing-featured-media\">" + media + "</span><span class=\"landing-featured-overlay\"></span><span class=\"landing-featured-copy\"><strong>" + escapeHtml(categoryLabel(category)) + "</strong></span><span class=\"landing-featured-arrow\" aria-hidden=\"true\">" + arrowIcon("external") + "</span></button>";
  }).join("");
  const features = (group.featuredCategories || []).map(function (feature) {
    const category = categoryByName.get(feature.name);
    if (!category) return "";
    const eyebrow = english ? feature.englishEyebrow : feature.eyebrow;
    const detail = english ? feature.englishDetail : feature.detail;
    const media = feature.image || category.image ? "<img src=\"" + escapeHtml(feature.image || category.image) + "\" alt=\"\" loading=\"lazy\">" : "";
    return "<button class=\"landing-featured-category\" type=\"button\" data-action=\"open-category\" data-name=\"" + escapeHtml(feature.name) + "\"><span class=\"landing-featured-media\">" + media + "</span><span class=\"landing-featured-overlay\"></span><span class=\"landing-featured-copy\"><span class=\"landing-featured-eyebrow\">" + escapeHtml(eyebrow) + "</span><strong>" + escapeHtml(categoryLabel(category)) + "</strong><span class=\"landing-featured-detail\">" + escapeHtml(detail) + "</span></span><span class=\"landing-featured-arrow\" aria-hidden=\"true\">" + arrowIcon("external") + "</span></button>";
  }).join("");
  const featureClass = (group.featuredCategories || []).length === 1 ? "landing-featured-grid landing-featured-grid-single" : "landing-featured-grid";
  const featureMarkup = features ? "<div class=\"" + featureClass + "\">" + features + "</div>" : "";
  const categoryMarkup = categories ? "<div class=\"landing-category-grid\">" + categories + "</div>" : "";
  return "<section class=\"landing-category-section\"><div class=\"landing-section-heading\"><div><h2>" + escapeHtml(title) + "</h2><p>" + escapeHtml(description) + "</p></div></div>" + featureMarkup + categoryMarkup + "</section>";
}
function renderAllMenu() {
  let slides = "";
  menuCategoryNames.forEach(function (name) {
    const category = categoryByName.get(name);
    slides += renderListSlide(category);
  });
  return slides + renderVideoSlide() + renderInfoSlide();
}
function renderCategoryMenu(category) {
  const english = language === "en";
  const back = english ? "Main menu" : "Menu inicial";
  const hint = category.items.some(itemHasDetails)
    ? (english ? "Tap an item to see its details and available photos." : "Toca num item para ver os detalhes e as fotografias disponíveis.")
    : "";
  let lastGroup = "";
  let rows = "";
  category.items.forEach(function (item, index) {
    if (item.group && item.group !== lastGroup) rows += "<h2 class=\"list-group-title\">" + escapeHtml(groupLabel(item.group)) + "</h2>";
    lastGroup = item.group || "";
    rows += renderMenuItem(category, item, index);
  });
  const note = categoryNote(category);
  const craftFeature = category.name === "Cervejas" ? renderCraftBeerFeature() : "";
  return "<section class=\"menu-slide list-slide category-menu-slide\" data-key=\"" + slug(category.name) + "-menu\" style=\"--c:" + slideBackground(category.name) + "\"><div class=\"list-background\"></div><div class=\"list-panel category-menu-panel\"><button class=\"text-back\" type=\"button\" data-action=\"back-home\">" + arrowIcon("back") + "<span>" + back + "</span></button>" + renderCategoryBanner(category) + (note ? "<p class=\"list-note\">" + escapeHtml(note) + "</p>" : "") + (hint ? "<p class=\"category-menu-hint\">" + escapeHtml(hint) + "</p>" : "") + craftFeature + rows + "</div></section>";
}
function renderCraftBeerFeature() { return ""; }
function renderInfoSlide() {
  const english = language === "en";
  const text = english ? {
    label: "FICTIONAL DEMO · EXAMPLE DETAILS", title: "Useful information", hours: "Opening hours", hoursText: "Tuesday–Sunday · 12:00–15:00 and 19:00–23:00 · Monday closed.", contact: "Contact and reservations", contactText: '<a href="mailto:reservas@example.com">reservas@example.com</a><br>Demo location · Porto, Portugal', allergens: "Allergens", allergensText: "Illustrative allergen guide only. Confirm ingredients and cross-contamination with the restaurant team before ordering.", note: "About this example", noteText: "All dishes, prices, hours, contact details and location on this page are fictional examples for presentation. Replace them with information approved by the restaurant."
  } : {
    label: "DEMONSTRAÇÃO FICTÍCIA · DADOS DE EXEMPLO", title: "Informações úteis", hours: "Horário", hoursText: "Terça a domingo · 12:00–15:00 e 19:00–23:00 · segunda-feira encerrado.", contact: "Contacto e reservas", contactText: '<a href="mailto:reservas@example.com">reservas@example.com</a><br>Localização de demonstração · Porto, Portugal', allergens: "Alergénios", allergensText: "Guia ilustrativo. Confirma os ingredientes e possíveis contaminações cruzadas com a equipa antes de encomendar.", note: "Sobre este exemplo", noteText: "Os pratos, preços, horários, contactos e localização desta página são exemplos fictícios para apresentação. Substitui-os por informação aprovada pelo restaurante."
  };
  return '<section class="menu-slide list-slide info-slide" data-category="informacoes" data-key="informacoes" style="--c:#4b1d3f"><div class="list-background"></div><div class="list-panel info-panel"><span class="list-eyebrow">' + text.label + '</span><h1 class="list-title">' + text.title + '</h1><div class="info-card"><h2>' + text.hours + '</h2><p>' + text.hoursText + '</p></div><div class="info-card"><h2>' + text.contact + '</h2><p>' + text.contactText + '</p></div><div class="info-card"><h2>' + text.allergens + '</h2><p>' + text.allergensText + '</p></div><div class="info-card"><h2>' + text.note + '</h2><p>' + text.noteText + '</p></div>' + renderInstagramLink() + '</div></section>';
}
function renderVideoSlide() {
  const english = language === "en";
  const items = [
    { title: english ? "House burger · example photo" : "Smash da casa · fotografia de exemplo", src: "assets/demo-burger.jpg" },
    { title: english ? "Red sangria · example photo" : "Sangria tinta · fotografia de exemplo", src: "assets/demo-sangria.jpg" }
  ];
  const tiles = items.map(function (item) {
    return '<button class="social-tile" type="button" data-action="open-media" data-media-type="photo" data-src="' + item.src + '" data-title="' + escapeHtml(item.title) + '" aria-label="' + escapeHtml(item.title) + '"><img class="social-tile-image" src="' + item.src + '" alt="" loading="lazy"><span class="social-tile-badge social-tile-photo-badge" aria-hidden="true">◉</span><span class="social-tile-caption">' + escapeHtml(item.title) + '</span></button>';
  }).join("");
  const label = english ? "MESA & BRASA · SAMPLE GALLERY" : "MESA & BRASA · GALERIA DE EXEMPLO";
  const title = english ? "More than a list of dishes." : "Mais do que uma lista de pratos.";
  const body = english ? "Customers can browse the menu and open photos for a closer look." : "Os clientes podem explorar a ementa e abrir fotografias para ver melhor.";
  const galleryTitle = english ? "Menu highlights" : "Destaques da ementa";
  const action = english ? "Visual menu gallery" : "Galeria visual da ementa";
  const detail = english ? "Two sample photos · video can be added" : "Duas fotografias de exemplo · também pode incluir vídeos";
  const note = english ? "Both photos are illustrative; replace them with images approved by the restaurant." : "As duas fotografias são ilustrativas; substitui-as por imagens aprovadas pelo restaurante.";
  return '<section class="menu-slide video-slide" data-category="videos" data-key="videos" style="--c:#7a2a1f"><div class="list-background"></div><div class="video-panel"><span class="list-eyebrow">' + label + '</span><h1 class="list-title">' + title + '</h1><p class="video-copy">' + body + '</p><section class="social-gallery" aria-label="' + galleryTitle + '"><h2 class="social-gallery-title">' + galleryTitle + '</h2><div class="social-media-grid">' + tiles + '</div></section><div class="video-link-card"><span class="video-mark" aria-hidden="true">+ </span><span class="video-link-text"><strong>' + action + '</strong><small>' + detail + '</small></span></div><p class="video-note">' + note + '</p></div></section>';
}function updateLanguageButton() {
  languageToggle.textContent = language === "pt" ? "EN" : "PT";
  languageToggle.setAttribute("aria-label", language === "pt" ? "View menu in English" : "Ver ementa em português");
}
function updateActiveCategory() {
  if (categoryNav.hidden || !categoryNav.classList.contains("is-drawer")) return;
  let activeCategoryId = "";
  if (appView === "all-menu") {
    const slides = Array.from(menuMain.querySelectorAll(".menu-slide"));
    if (slides.length) {
      const center = menuMain.scrollTop + menuMain.clientHeight / 2;
      let current = slides[0];
      let nearest = Infinity;
      slides.forEach(function (slide) {
        const slideCenter = slide.offsetTop + slide.offsetHeight / 2;
        const distance = Math.abs(slideCenter - center);
        if (distance < nearest) { nearest = distance; current = slide; }
      });
      activeCategoryId = current.dataset.category || "";
    }
  } else if (currentCategory) {
    activeCategoryId = slug(currentCategory.name);
  } else if (appView === "videos") {
    activeCategoryId = "videos";
  } else if (appView === "info") {
    activeCategoryId = "informacoes";
  }
  categoryNav.querySelectorAll(".drawer-item[data-category]").forEach(function (button) {
    const active = button.dataset.category === activeCategoryId;
    button.setAttribute("aria-current", String(active));
    if (active) button.scrollIntoView({ inline: "nearest", block: "nearest" });
  });
}
function setCategoryMenuOpen(open) {
  categoryMenuOpen = Boolean(open && appView !== "home");
  categoryNav.hidden = !categoryMenuOpen;
  categoryNav.classList.toggle("is-open", categoryMenuOpen);
  categoryMenuScrim.hidden = !categoryMenuOpen;
  categoryMenuToggle.setAttribute("aria-expanded", String(categoryMenuOpen));
  const english = language === "en";
  categoryMenuToggle.setAttribute("aria-label", categoryMenuOpen
    ? (english ? "Close categories" : "Fechar categorias")
    : (english ? "Open categories" : "Abrir categorias"));
  if (categoryMenuOpen) updateActiveCategory();
}
function updateScrollProgress() {
  const range = menuMain.scrollHeight - menuMain.clientHeight;
  const progress = range > 0 ? menuMain.scrollTop / range : 0;
  scrollProgressFill.style.transform = "scaleY(" + Math.max(0, Math.min(1, progress)) + ")";
}
function canAutoplaySocialPreviews() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  return !(connection && connection.saveData) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function startSocialVideoPreview(video) {
  if (!canAutoplaySocialPreviews()) return;
  if (video.dataset.loaded !== "true") {
    video.src = video.dataset.src;
    video.dataset.loaded = "true";
  }
  const playback = video.play();
  if (playback && typeof playback.catch === "function") playback.catch(function () {});
}
function initializeSocialVideoPreviews() {
  if (socialVideoObserver) socialVideoObserver.disconnect();
  const videos = menuMain.querySelectorAll(".social-tile-video");
  if (!videos.length || !("IntersectionObserver" in window)) return;
  socialVideoObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) startSocialVideoPreview(entry.target);
      else entry.target.pause();
    });
  }, { root: menuMain, rootMargin: "50px 0px", threshold: 0.08 });
  videos.forEach(function (video) { socialVideoObserver.observe(video); });
}
function pauseSocialVideoPreviews() {
  menuMain.querySelectorAll(".social-tile-video").forEach(function (video) { video.pause(); });
}
function resumeVisibleSocialVideoPreviews() {
  if (!canAutoplaySocialPreviews()) return;
  const root = menuMain.getBoundingClientRect();
  menuMain.querySelectorAll(".social-tile-video").forEach(function (video) {
    const rect = video.getBoundingClientRect();
    if (rect.bottom > root.top && rect.top < root.bottom && rect.right > root.left && rect.left < root.right) {
      startSocialVideoPreview(video);
    }
  });
}
function openGalleryMedia(button) {
  const type = button.dataset.mediaType;
  const src = button.dataset.src;
  const title = button.dataset.title || "";
  pauseSocialVideoPreviews();
  mediaLightboxContent.replaceChildren();
  let media;
  if (type === "video") {
    media = document.createElement("video");
    media.controls = true;
    media.autoplay = true;
    media.playsInline = true;
    if (button.dataset.poster) media.poster = button.dataset.poster;
    media.src = src;
    media.setAttribute("aria-label", title);
    media.addEventListener("error", function () {
      if (!button.dataset.poster || !media.isConnected) return;
      const fallbackImage = document.createElement("img");
      fallbackImage.className = "media-lightbox-media";
      fallbackImage.src = button.dataset.poster;
      fallbackImage.alt = title;
      media.replaceWith(fallbackImage);
    }, { once: true });
  } else {
    media = document.createElement("img");
    media.src = src;
    media.alt = title;
  }
  media.className = "media-lightbox-media";
  const caption = document.createElement("p");
  caption.className = "media-lightbox-caption";
  caption.textContent = title;
  mediaLightboxContent.append(media, caption);
  mediaLightbox.showModal();
  if (type === "video") {
    const playback = media.play();
    if (playback && typeof playback.catch === "function") playback.catch(function () {});
  }
}
function renderCurrentView(restoreKey, restoreScrollTop) {
  let content = "";
  if (appView === "home") content = renderHomeSlide();
  else if (appView === "all-menu") content = renderAllMenu();
  else if (appView === "category-list" && currentCategory) content = renderCategoryMenu(currentCategory);
  else if (appView === "dishes" && currentCategory) {
    content = currentCategory.items.map(function (item, index) { return renderDishSlide(currentCategory, item, index); }).join("");
  } else if (appView === "videos") content = renderVideoSlide();
  else if (appView === "info") content = renderInfoSlide();
  else content = renderHomeSlide();

  menuMain.innerHTML = content;
  menuMain.classList.toggle("is-dishes", appView === "dishes");
  dishBackFixed.hidden = appView !== "dishes" || !currentCategory;
  if (!dishBackFixed.hidden) {
    const backText = dishReturnView === "all-menu"
      ? (language === "en" ? "Back to everything" : "Voltar a ver tudo")
      : (language === "en" ? "Back to " : "Voltar a ") + categoryLabel(currentCategory);
    dishBackFixed.innerHTML = arrowIcon("back") + "<span>" + escapeHtml(backText) + "</span>";
    dishBackFixed.setAttribute("aria-label", backText);
  }
  categoryMenuOpen = false;
  categoryMenuToggle.hidden = appView === "home";
  categoryMenuToggle.setAttribute("aria-expanded", "false");
  categoryMenuScrim.hidden = true;
  categoryNav.classList.remove("is-open", "is-drawer", "is-back-nav");
  categoryNav.hidden = true;
  if (appView !== "home") {
    const english = language === "en";
    const heading = english ? "GO TO" : "IR PARA";
    const closeLabel = english ? "Close categories" : "Fechar categorias";
    const isAllMenu = appView === "all-menu";
    categoryNav.classList.add("is-drawer");
    const backToCategory = appView === "dishes" && currentCategory
      ? "<button class=\"chip drawer-item drawer-home\" type=\"button\" data-action=\"back-category\">" + arrowIcon("back") + "<span>" + escapeHtml(language === "en" ? "Back to " : "Voltar a ") + escapeHtml(categoryLabel(currentCategory)) + "</span></button>"
      : "";
    const initialMenuLabel = english ? "⌂  Main menu" : "⌂  Menu inicial";
    const viewAllLabel = english ? "View everything" : "Ver tudo";
    const categoryItems = menuCategoryNames.map(function (name) {
      const categoryId = name === "Informações" ? "informacoes" : slug(name);
      const label = language === "en" ? (englishCategory[name] || name) : name;
      const action = isAllMenu ? "jump-category" : "navigate-category";
      return "<button class=\"chip drawer-item\" type=\"button\" data-action=\"" + action + "\" data-category=\"" + categoryId + "\" data-name=\"" + escapeHtml(name) + "\" aria-current=\"false\">" + escapeHtml(label) + "</button>";
    }).join("");
    const specialItems = ["Vídeos", "Informações"].map(function (name) {
      const categoryId = name === "Informações" ? "informacoes" : "videos";
      const label = language === "en" ? (englishCategory[name] || name) : name;
      const action = isAllMenu ? "jump-category" : (name === "Informações" ? "open-info" : "open-videos");
      return "<button class=\"chip drawer-item\" type=\"button\" data-action=\"" + action + "\" data-category=\"" + categoryId + "\" aria-current=\"false\">" + escapeHtml(label) + "</button>";
    }).join("");
    categoryNav.innerHTML = "<div class=\"category-drawer-heading\"><span>" + heading + "</span><button class=\"drawer-close\" type=\"button\" data-action=\"close-category-menu\" aria-label=\"" + closeLabel + "\">×</button></div>" + backToCategory + "<button class=\"chip drawer-item drawer-home\" type=\"button\" data-action=\"home\">" + initialMenuLabel + "</button><button class=\"chip drawer-item drawer-home\" type=\"button\" data-action=\"show-all\">" + viewAllLabel + "</button>" + categoryItems + specialItems;
  }
  document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
  updateLanguageButton();

  const targetKey = restoreKey || (appView === "dishes" && currentCategory ? slug(currentCategory.name) + "-" + currentItemIndex : "");
  const target = targetKey ? menuMain.querySelector(".menu-slide[data-key=\"" + targetKey + "\"]") : null;
  menuMain.scrollTop = target ? target.offsetTop : (typeof restoreScrollTop === "number" ? restoreScrollTop : 0);
  initializeSocialVideoPreviews();
  updateActiveCategory();
  updateScrollProgress();
  saveCurrentMenuHistoryState();
}

function handleAction(button) {
  const action = button.dataset.action;
  const name = button.dataset.name;
  if (action === "open-media") {
    openGalleryMedia(button);
    return;
  }
  if (action === "back-category" && isMenuHistoryState(history.state) && (Number(history.state.depth) || 0) > 0) {
    saveCurrentMenuHistoryState();
    history.back();
    return;
  }
  if (["home", "back-home", "show-all", "open-category", "navigate-category", "open-dish", "open-videos", "open-info"].includes(action)) {
    pushMenuHistoryState();
  }
  let restoreScrollTop;
  if (action === "home" || action === "back-home") {
    appView = "home";
    currentCategory = null;
    restoreScrollTop = action === "back-home" ? homeScrollTop : undefined;
  } else if (action === "show-all") {
    currentCategory = null;
    appView = "all-menu";
  } else if (action === "open-category") {
    homeScrollTop = menuMain.scrollTop;
    currentCategory = categoryByName.get(name);
    appView = currentCategory ? "category-list" : "home";
  } else if (action === "navigate-category") {
    currentCategory = categoryByName.get(name);
    appView = currentCategory ? "category-list" : "home";
  } else if (action === "open-dish") {
    dishReturnView = appView;
    if (dishReturnView === "all-menu") allMenuScrollTop = menuMain.scrollTop;
    categoryMenuScrollTop = menuMain.scrollTop;
    currentCategory = categoryByName.get(name);
    currentItemIndex = Math.max(0, Number(button.dataset.index) || 0);
    appView = currentCategory ? "dishes" : "home";
  } else if (action === "back-category") {
    appView = dishReturnView;
    restoreScrollTop = dishReturnView === "all-menu" ? allMenuScrollTop : categoryMenuScrollTop;
  } else if (action === "open-videos") {
    appView = "videos";
  } else if (action === "open-info") {
    appView = "info";
  }
  renderCurrentView("", restoreScrollTop);
}

brandLink.addEventListener("click", function (event) {
  event.preventDefault();
  if (appView !== "home") pushMenuHistoryState();
  appView = "home";
  currentCategory = null;
  renderCurrentView();
});

categoryNav.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  if (button.dataset.action === "close-category-menu") {
    setCategoryMenuOpen(false);
    return;
  }
  if (button.dataset.action === "jump-category") {
    setCategoryMenuOpen(false);
    const target = menuMain.querySelector(".menu-slide[data-category=\"" + button.dataset.category + "\"]");
    if (target) menuMain.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    return;
  }
  handleAction(button);
});
dishBackFixed.addEventListener("click", function () {
  handleAction(dishBackFixed);
});
categoryMenuToggle.addEventListener("click", function () {
  setCategoryMenuOpen(!categoryMenuOpen);
});
categoryMenuScrim.addEventListener("click", function () {
  setCategoryMenuOpen(false);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && categoryMenuOpen) setCategoryMenuOpen(false);
});
mediaLightboxClose.addEventListener("click", function () {
  mediaLightbox.close();
});
mediaLightbox.addEventListener("click", function (event) {
  if (event.target === mediaLightbox) mediaLightbox.close();
});
mediaLightbox.addEventListener("close", function () {
  mediaLightboxContent.replaceChildren();
  resumeVisibleSocialVideoPreviews();
});
menuMain.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-action]");
  if (button && !button.disabled) handleAction(button);
});
menuMain.addEventListener("error", function (event) {
  const media = event.target;
  if (media instanceof HTMLVideoElement && media.dataset.poster) {
    const fallbackImage = document.createElement("img");
    const isSocialTile = media.classList.contains("social-tile-video");
    fallbackImage.className = isSocialTile ? "social-tile-image" : "dish-photo";
    fallbackImage.src = media.dataset.poster;
    fallbackImage.alt = media.getAttribute("aria-label") || (language === "en" ? "Video still" : "Frame do vídeo");
    fallbackImage.loading = "eager";
    media.replaceWith(fallbackImage);
    const credit = !isSocialTile && fallbackImage.closest(".dish-slide")?.querySelector(".photo-credit");
    if (credit) credit.textContent = language === "en" ? "Video still" : "Imagem do vídeo";
    return;
  }
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || !image.classList.contains("dish-photo")) return;
  const label = language === "en" ? "Photo unavailable" : "Fotografia indisponível";
  const fallback = document.createElement("div");
  fallback.className = "photo-placeholder photo-unavailable";
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", label);
  const icon = document.createElement("span");
  icon.className = "photo-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = "✧";
  const caption = document.createElement("span");
  caption.className = "photo-label";
  caption.textContent = label;
  fallback.append(icon, caption);
  image.replaceWith(fallback);
}, true);
let scrollFrame = 0;
menuMain.addEventListener("scroll", function () {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(function () {
    scrollFrame = 0;
    updateActiveCategory();
    updateScrollProgress();
    clearTimeout(historySaveTimer);
    historySaveTimer = setTimeout(saveCurrentMenuHistoryState, 140);
  });
});
window.addEventListener("popstate", function (event) {
  restoreMenuHistoryState(event.state);
});
languageToggle.addEventListener("click", function () {
  let restoreKey = "";
  if (appView === "dishes") {
    const center = menuMain.getBoundingClientRect().top + menuMain.clientHeight / 2;
    const visible = Array.from(menuMain.querySelectorAll(".dish-slide")).find(function (slide) {
      const rect = slide.getBoundingClientRect();
      return rect.top <= center && rect.bottom > center;
    });
    if (visible) restoreKey = visible.dataset.key;
  }
  language = language === "pt" ? "en" : "pt";
  renderCurrentView(restoreKey);
});

if ("scrollRestoration" in history) history.scrollRestoration = "manual";
if (isMenuHistoryState(history.state)) {
  restoreMenuHistoryState(history.state);
  saveCurrentMenuHistoryState();
} else {
  try {
    history.replaceState(makeMenuHistoryState(0), "");
  } catch (_) {
    // The menu still works normally in browser previews that disallow history state changes.
  }
  renderCurrentView();
}











