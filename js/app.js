App = Ember.Application.create();


App.Router.map(function() {
  this.resource('whiskeys');
  this.resource('whiskey', {path: '/:whiskey_id'});
  this.resource('reviews');
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
  image: DS.attr('string'),
  review: DS.hasMany('review', {async: true})
});

App.Review = DS.Model.extend({
  text: DS.attr('string'),
  whiskey_type: DS.attr('string'),
  author: DS.attr('string'),
  whiskey: DS.belongsTo('whiskey')
})

App.Review.FIXTURES = [
  {id:1,
    whiskey_type: 'Makers Mark',
    text:"Great first whiskey to try!",
    author:"Scott Mascio"
  }

];

App.Whiskey.FIXTURES = [
  {
  id: 1,
  title: 'Bulleit Bourbon',
  description: 'The subtlety and complexity of Bulleit Bourbon come from its unique blend of rye, corn, and barley malt, along with special strains of yeast and pure Kentucky limestone filtered water. Due to its especially high rye content, Bulleit Bourbon has a bold, spicy character with a finish thats distinctively clean and smooth.',
  proof: '90 proof',
  price: '$39.99',
  food: 'Steak Crostini with Avacado Horseradish Mayonnaise',
  food_image: 'images/beef_crostini.png',
  rating: 0,
  image: 'images/bulleit_bourbon_10.png'},

  {
  id: 2,
  title: 'Basil Haydens',
  description: 'The recipe of this remarkable bourbon dates back to 1796, when Basil Hayden himself was a master distiller. Hayden was born and raised in Maryland, where he learned to make whiskey from rye. When he came to Kentucky, Hayden began making whiskey from a base of corn, but added a higher percentage of rye than other distillers, resulting in a smooth, mild bourbon that was distinctly his own.',
  proof: '80 proof',
  price: '$49.99',
  food: 'Cranberry Brie',
  food_image: 'images/cranberry_brie.png',
  rating: 0,
  image: 'images/basil_haydens5.png'},

  {
  id: 3,
  title: 'Makers Mark',
  description: 'Eschewing rye in the mashbill for wheat, the soft, rich sweetness of Makers Mark has made it one of the most popular bourbons in the world. On the palate, Makers offers a sure solution to anyone suffering from a sweet-tooth. Creme brulee dominates, with huge caramel and vanilla notes on the forefront before giving way to soft notes of burnt sugar and molasses at the end.',
  proof: '90 proof',
  price: '$23.99',
  food: 'Fresh Veggies and Spinach Dip',
  food_image: 'images/spinach_dip.png',
  rating: 0,
  image: 'images/makers_mark.png'},

  {
  id: 4,
  title: 'Blantons',
  description: 'Blantons Bourbon has been highly rated by spirit ratings organizations. The San Francisco World Spirits Competition gave the single barrel bourbon one double gold, three gold, and two silver medal between 2007 and 2012. Fruit and light spice flavors.',
  proof: '140 proof',
  price: '$59.99',
  food: 'Deep Dish Pizza',
  food_image: 'images/deep_dish_pizza.png',
  rating: 0,
  image: 'images/blantons.png'},

  {
  id: 5,
  title: 'Larceny',
  description: 'Larceny uses wheat as the secondary grain instead of the traditional rye. Its mashbill calls for one-third more wheat than other competitors, making it a smoother tasting bourbon. With its high proof, Larceny’s smooth taste allows it to be enjoyed neat or on the rocks.',
  proof: '92 proof',
  price: '$29.99',
  food: 'Fresh Fruit',
  food_image: 'images/fresh_fruit.png',
  rating: 0,
  image: 'images/LARCENY_BOURBON.png'}
];

App.WhiskeysRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('whiskey');
  }
});

App.ReviewsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('review');
  }
});

App.WhiskeyRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('whiskey', params.whiskey_id);
  }
});

App.WhiskeysController = Ember.ArrayController.extend({
  sortProperties: ['price'],
  sortAscending: true
});

App.ReviewsController = Ember.ArrayController.extend({
  actions: {
    createReview: function() {

      var whiskey = $('#whiskey_type').val();
      var text = $('#text').val();
      var author = $('#author').val();



      var whiskey = this.store.createRecord('review', {
        whiskey_type: whiskey,
        text: text,
        author: author
      });


      whiskey.save();
      this.transitionTo('whiskeys');


    }
  }
});

