const coffees = [
  {
    name: 'espresso',
    description:
      'strong coffee with a good crema forms the base of many other drinks',
    photo: '/images/espresso.png',
    photocredit: `<span>Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/espresso?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    type: 'hot',
  },
  {
    name: 'ristretto',
    description:
      'Ristretto means restricted or concentrated in Italian so this drink is a short shot of espresso made with half the amount of water compared to an espresso. It is seen as the perfect espresso by some.',
    photo: '/images/ristretto.png',
    photocredit: `<span>Photo from <a href="https://http://minimoka.es/">minimoka.es</a><a href="http://minimoka.es/wp-content/uploads/2012/07/Ristretto.jpg">here</a></span>`,
    type: 'hot',
  },
  {
    name: 'macchiato',
    description:
      'In Italian macchiato means stained or spotted referring to the small amount of frothed milk used. Espresso coffee topped with a small amount of frothed milk.',
    photo: '/images/espresso-macchiato.png',
    photocredit: `<span>Photo from <a href="https://www.caffesociety.co.uk/">https://www.caffesociety.co.uk/</a> <a href="https://www.caffesociety.co.uk/assets/recipe-images/macchiato-small.jpg">here</a></span>`,
    type: 'hot',
  },
  {
    name: 'espresso con panna',
    description:
      'means espresso with cream in Italian a single or double espresso topped with whipped cream',
    photo: '/images/con-panna.png',
    photocredit: `<span>Photo from <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Caff%C3%A8_con_panna.jpg/220px-Caff%C3%A8_con_panna.jpg">Wikimedia</a></span>`,
    type: 'hot',
  },
  {
    name: 'latte',
    description:
      'A drink made with espresso and steamed milk. Can be made with different types of milk e.g. soya, almond or coconut.',
    photo: '/images/latte.png',
    photocredit: `<span>Photo from <a href="https://www.whittard.co.uk">https://www.whittard.co.uk</a> <a href="https://www.whittard.co.uk/on/demandware.static/-/Sites-whittard-master-catalog/default/dw975b484c/images/hi-res/319806-soho_latte_glass_set-3.jpg">here</a></span>`,
    type: 'hot',
  },
  {
    name: 'cappuccino',
    description:
      'An espresso based drink with steamed milk foam it originates from Italy. The name is thought to come from the Capuchin friars referring to the colour of their habitats. Also available as an iced option.',
    photo: '/images/cappuccino.png',
    photocredit: `<span>Photo from <a href="https://pngimg.com">https://pngimg.com</a><a href="https://pngimg.com/uploads/cappuccino/cappuccino_PNG26.png">here</a></span>`,
    type: 'hot',
  },
  {
    name: 'mocha',
    description:
      'made with espresso and milk like a latte but with added chocolate flavouring usually cocoa powder. Often available as an iced option and in some cases there is a sweeter white chocolate mocha available.',
    photo: '/images/mocha.png',
    photocredit: `<span>Photo from <a href="https://gatherforbread.com">gatherfrombread</a><a href="https://gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg">here</a></span>`,
    type: 'hot',
  },
  {
    name: 'cortado',
    description:
      'espresso with equal amount of steamed warm milk reducing the acidity. It originates from Spain.',
    photo: '/images/cortado.png',
    photocredit: `<span>Photo from <a href="https://pngio.com/png">https://pngio.com/png</a> <a href="https://img.pngio.com/cortado-mix-cafe-cortado-png-300_300.png">here</a></span>`,
    type: 'hot',
  },
  {
    name: 'americano',
    description:
      'Drink prepared by diluting an espresso with hot water resulting in a different flavour to traditionally brewed coffee.',
    photo: '/images/americano.png',
    photocredit: `<span>Photo from <a href="https://www.aroma-housewares.com/">https://www.aroma-housewares.com/</a> <a href="https://www.aroma-housewares.com/images/recipes/370/coffee.jpg">here</a></span>`,
    type: 'hot',
  },
  {
    name: 'piccolo',
    description:
      'Australian in origin it is a ristretto shot (20ml) topped with warm milk in a small latte glass (demitasse)',
    photo: '/images/piccolo.png',
    photocredit: `<span>Photo from <a href="https://www.tripadvisor.com/">https://www.tripadvisor.com/</a><a href="https://media-cdn.tripadvisor.com/media/photo-s/0e/11/8b/3b/piccolo-coffee.jpg">here</a></span>`,
    type: 'hot',
  },
  {
    name: 'flat white',
    description: 'Originally from New Zealand',
    photo: '/images/flat-white.jpg',
    photocredit: `<span>Photo from <a href="https://www.flickr.com/">https://www.flickr.com</a> <a href="https://www.flickr.com/photos/mulia/6792268281">here</a></span>`,
    type: 'hot',
  },
  {
    name: 'lungo',
    description:
      'Lungo means long in Italian made with an espresso machine but with twice as much water. Less strong but more bitter than an espresso',
    photo: '/images/lungo.png',
    photocredit: `<span>Photo from <a href="https://www.nespresso.com">https://www.nespresso.com</a> <a href="https://www.nespresso.com/shared_res/mosaic_freehtml/images/coffees/ranges/lungo/big_cup.png">here</a></span>`,
    type: 'hot',
  },
  {
    name: 'Moretta fanese',
    description:
      'It is strong and sweet, and usually drunk after meals as a digestive, or used as a hot drink on cold afternoons. The hot cocktail is a blend of anise, rum and brandy in roughly equal parts.',
    photo: '/images/moretta.jpg',
    photocredit: `<span>Photo from <a href="https://www.shelf5.com/">https://www.shelf5.com/</a> <a href="https://www.shelf5.com/wp-content/uploads/2010/08/cafe-moretta.jpg">here</a></span>`,
    type: 'hot',
  },
  {
    name: 'affogato',
    description:
      'Italian for drowned this is a coffee-based dessert with vanilla ice-cream topped or drowned with a shot of hot espresso',
    photo: '/images/affogato.jpg',
    photocredit: `<span>Photo by <a href="https://unsplash.com/@ayahya09?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ali Yahya</a> on <a href="https://unsplash.com/s/photos/affogato?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    type: 'cold',
  },
  {
    name: 'espresso martini',
    description:
      'a cold coffee-flavoured cocktail made with vodka, espresso, coffee liquer and sugar syrup garnished with coffee beans. It is not a true martini which traditionally includes Tia Maria or Kahlua.',
    photo: '/images/espresso-martini.png',
    photocredit: `<span>Photo from <a href="https://www.finedininglovers.it/">finedininglovers.it</a> <a href="http://finedininglovers-it.cdn.crosscast-system.com/ImageAlbum/13973/original_Espresso-Martini.jpg">here</a></span>`,
    type: 'cold',
  },
  {
    name: 'cold brew',
    description:
      'coarse grind coffee is soaked overnight (sometimes longer) in cold water. It produces a drink with less acidity and therefore a sweeter taste.',
    photo: '/images/cold-brew.jpg',
    photocredit: `<span>Photo from <a href="https://www.gimmesomeoven.com">https://www.gimmesomeoven.com</a> <a href="https://www.gimmesomeoven.com/wp-content/uploads/2014/06/Cold-Brew-Coffee-1.jpg">here</a></span>`,
    type: 'cold',
  },
  {
    name: 'iced coffee',
    description:
      'this differs from cold brew as the coffee is brewed hot and poured over ice. It is brewed stronger to make up for dilution caused by the ice.',
    photo: '/images/iced-coffee.png',
    photocredit: `<span>Photo from <a href="https://une-journee-a-paris.com">https://une-journee-a-paris.com</a><a href="https://une-journee-a-paris.com/wp-content/uploads/2016/12/long-black-iced-coffee.jpg"><here</a></span>`,
    type: 'cold',
  },
]

// add full range of iced coffees and maybe frappes

export { coffees }
