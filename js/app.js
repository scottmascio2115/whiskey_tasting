App = Ember.Application.create();


App.Router.map(function() {
  this.resource('whiskeys');
  this.resource('whiskey', {path: '/:whiskey_id'});
  this.route('rate');
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();


App.Whiskey = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  proof: DS.attr('string'),
  price: DS.attr('string'),
  food: DS.attr('string'),
  food_image: DS.attr('string'),
  rating: DS.attr('number'),
  image: DS.attr('string')
});



App.Whiskey.FIXTURES = [
  {
  id: 1,
  title: 'Bulleit Bourbon',
  description: 'The subtlety and complexity of Bulleit Bourbon come from its unique blend of rye, corn, and barley malt, along with special strains of yeast and pure Kentucky limestone filtered water. Due to its especially high rye content, Bulleit Bourbon has a bold, spicy character with a finish thats distinctively clean and smooth.',
  proof: '90 proof',
  price: '$39.99',
  food: 'Beef Crostini',
  food_image: 'images/beef_crostini.png',
  rating: 0,
  image: 'images/bulleit.png'},

  {
  id: 2,
  title: 'Basil Haydens',
  description: 'The recipe of this remarkable bourbon dates back to 1796, when Basil Hayden himself was a master distiller. Hayden was born and raised in Maryland, where he learned to make whiskey from rye. When he came to Kentucky, Hayden began making whiskey from a base of corn, but added a higher percentage of rye than other distillers, resulting in a smooth, mild bourbon that was distinctly his own. Aroma: Spice, tea, hint of peppermint. Taste: Spicy, peppery, honey, light-bodied, gentle bite. Finish: Dry, clean, brief.',
  proof: '80 proof',
  price: '$49.99',
  food: '',
  rating: 0,
  image: 'images/basil_haydens5.png'},

  {
  id: 3,
  title: 'Makers Mark',
  description: 'Eschewing rye in the mashbill for wheat, the soft, rich sweetness of Makers Mark has made it one of the most popular bourbons in the world. On the palate, Makers offers a sure solution to anyone suffering from a sweet-tooth. Creme brulee dominates, with huge caramel and vanilla notes on the forefront before giving way to soft notes of burnt sugar and molasses at the end.',
  proof: '90 proof',
  price: '$23.99',
  food: '',
  rating: 0,
  image: 'images/makers_mark.png'},

  {
  id: 4,
  title: 'Blantons',
  description: 'Blantons Bourbon has been highly rated by spirit ratings organizations. The San Francisco World Spirits Competition gave the single barrel bourbon one double gold, three gold, and two silver medal between 2007 and 2012. Fruit and light spice flavors.',
  proof: '140 proof',
  price: '$59.99',
  food: '',
  rating: 0,
  image: 'images/blantons.png'},

  {
  id: 5,
  title: 'Larceny',
  description: 'Larceny uses wheat as the secondary grain instead of the traditional rye. Its mashbill calls for one-third more wheat than other competitors, making it a smoother tasting bourbon. With its high proof, Larceny’s smooth taste allows it to be enjoyed neat or on the rocks.',
  proof: '92 proof',
  price: '$29.99',
  food: '',
  rating: 0,
  image: 'images/LARCENY_BOURBON.png'}
];
App.WhiskeysRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('whiskey');
  }
});

App.WhiskeyRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('whiskey', params.whiskey_id);
  }
});
