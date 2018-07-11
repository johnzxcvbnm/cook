//File contains a few basic recipes to start with to build some basic design.

module.exports = [
  {
    name: "Green Eggs and Ham",
    author: "John",
    time: 10,
    difficulty: 2,
    description: "A classic dish for all ages.",
    images: ["http://www.celebrityparentsmag.com/wp-content/uploads/2018/02/green-eggs-and-ham-768x575.jpg", "https://www.eurekaschool.com/images/VARIANT/highres/841543.jpg", "https://eatingrichly.com/wp-content/uploads/2018/01/green-eggs-ham-9036-800x533.jpg"],
    ingredients: ["Two Eggs", "A Ham", "Green Food Coloring"],
    directions: ["Add Eggs to skillet", "Add food coloring to eggs", "Cook Eggs to desired doneness", "Slice ham", "Serve and Enjoy"],
    ratings: [5, 5, 2, 4],
    avgRating: 4,
    protect: true,
    tags: ["DINNER", "HAM", "EGGS", "SEASONAL"]
  },
  {
    name: "Baked Potato",
    author: "John",
    time: 30,
    difficulty: 1,
    description: "A perfect dish as a side to dinner or a mid-day snack.",
    images: ["https://images.media-allrecipes.com/userphotos/250x250/61497.jpg", "https://www.seriouseats.com/recipes/images/2016/10/20161004-baked-potato-vicky-wasik-10.jpg"],
    ingredients: ["1 Potato", "Desired Toppings"],
    directions: ["Preheat oven to 400 degrees", "Slice Potato down the center, longways", "Place potato directly on oven rack", "Cook potato for 20 to 30 minutes", "Remove potato from oven, use a for to check for doneness", "Add any desired toppings and serve"],
    ratings: [2, 4, 3, 1],
    avgRating: 2.5,
    protect: false,
    tags: ["DINNER", "SIDE DISH", "POTATO"]
  },
  {
    name: "Sugar Coated Pecans",
    author: "John",
    time: 80,
    difficulty: 2,
    description: "A sweet and wonderful snack for any occasion.",
    images: ["https://images.media-allrecipes.com/userphotos/720x405/4796508.jpg", "https://images.media-allrecipes.com/userphotos/720x405/4775937.jpg"],
    ingredients: ["1 Egg White", "1 Tablespoon Water", "1 Pound Pecan Halves", "1 Cup White Sugar", "3/4 Teaspoon Salt", "1/2 Teaspoon Ground Cinnamon"],
    directions: ["Preheat Oven to 250 degrees F.  Grease one baking sheet.", "In a mixing bowl, whip together the egg white and water until frothy.  In a separate bowl, mix together sugar, salt and cinnamon.", "Add pecans to egg whites, stir to coat the nuts evenly.  Remove the nuts, and toss them in the sugar mixture until coated.  Spread the nuts out on the prepared baking sheet.", "Bake at 250 degrees F for 1 hour.  Stir every 15 minutes."],
    ratings: [5, 5, 4, 3, 5],
    avgRating: 4.4,
    protect: true,
    tags: ["SNACK", "DESSERT", "PECANS"]
  }
];
