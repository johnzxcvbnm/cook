//File contains a few basic recipes to start with to build some basic design.

const generateAuthor = () => {
  const myAuthors = [
    "John K",
    "Jamie M",
    "Jordan B",
    "Scott Tee",
    "Rin Z",
    "Ayra L"
  ]
  const myPick = Math.floor(Math.random() * myAuthors.length);

  return myAuthors[myPick];
}

const generateRatings = () => {
  const myRatings = [];
  const myNum = Math.floor(Math.random() * 7) + 3;

  for(let i = 0; i < myNum; i++){
    myRatings.push(Math.floor(Math.random() * 4) + 2);
  }

  return myRatings;
}

const generateAverage = (myRatings) => {
  let mySum = 0;

  for(let i = 0; i < myRatings.length; i++){
    mySum += myRatings[i];
  }

  mySum = mySum / myRatings.length;

  return Math.floor(mySum * 10) / 10;
}

const generateComments = () => {
  const myArray = [
    "Awesome recipe!",
    "Wow.  Just wow.",
    "This made for a great meal!",
    "My girlfriend makes a better version of this.",
    "It's pretty good",
    "I honestly didn't expect it to be this good",
    "Delicious"
  ];

  const myComments = [];
  const myNum = Math.floor(Math.random() * 3) + 1;

  for(let i = 0; i < myNum; i++){
    myComments.push(myArray[Math.floor(Math.random() * myArray.length)]);
  }

  return myComments;
}

// const myData = [
//   {
//     name: "",
//     author: generateauthor(),
//     time: 0,
//     difficulty: 0,
//     description: "",
//     images: [],
//     ingredients: [],
//     directions: [],
//     ratings: generateRatings(),
//     avgRating: 0,
//     protect: true,
//     tags: [],
//     comments: generateComments()
//   }
// ];

const myData = [
  {
    name: "Vegan Breakfast Tacos",
    arthor: generateAuthor(),
    time: 30,
    difficulty: 2,
    description: "Breakfast tacos that are vegan! Guilt Free and cruelty free, your diet will thank you!",
    images: ["https://minimalistbaker.com/wp-content/uploads/2015/01/Easy-30-minute-Vegan-Breakfast-Tacos.jpg", "https://minimalistbaker.com/wp-content/uploads/2015/01/Tofu-Black-Bean-Tacos-Perfect-for-breakfast-lunch-and-dinner-vegan-healthy.jpg",
    "https://minimalistbaker.com/wp-content/uploads/2015/01/Easy-Vegan-Breakfast-Tacos-30-minutes-healthy-ingredients-so-delicious.jpg"],
    ingredients: ["8 ounces firm tofu",
    "1 cup cooked black beans",
    "1/4 red onion, diced",
    "1 cup fresh cilantro, chopped",
    "1 ripe avocado, sliced (or sub guacamole)",
    "1/2 cup salsa for serving (hot sauce also optional)",
    "1 lime sliced, for serving",
    "1/4 cup pomegranate arils",
    "Corn tortillas (2 per person)",
    "TOFU SEASONING",
    "3/4 tsp garlic powder",
    "1/2 tsp chili powder",
    "1 tsp cumin",
    "1/8 tsp sea salt",
    "1 Tbsp salsa",
    "1 Tbsp water"],
    directions: ["Wrap tofu in a clean, absorbent towel and place something heavy on top, such as a cast-iron skillet, while prepping toppings.",
    "Cook black beans in a small saucepan over medium heat until bubbly. Then reduce heat to simmer and set aside. If unsalted/unseasoned, add a pinch of salt, cumin, chili powder, and garlic powder.",
    "Add dry tofu spices + salsa to a small bowl and add enough water to make a pourable sauce. Set aside.",
    "Heat a large skillet over medium heat and unwrap tofu. Use a fork to crumble.",
    "Once the pan is hot, add 1-2 Tbsp oil of choice and the tofu. Stir fry for 4-5 minutes to brown. Then add seasoning and toss to coat. Continue cooking until browned and fragrant - about 5-10 minutes - stirring frequently. Set aside.",
    "To serve, warm tortillas in the microwave wrapped in a damp paper towel or in a 250-degree F (121 C) oven (optional). Top tortillas with tofu scramble, black beans, onion, avocado, cilantro, salsa, fresh lime juice, and pomegranate arils (or desired toppings)."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Vegan", "Breakfast", "Tofu", "Tacos"],
    comments: generateComments()
  },
  {
    name: "Breakfast Casserole",
    author: generateAuthor(),
    time: 60,
    difficulty: 2,
    description: "Got a hangry family? Nothing better for breakfast than a crowd pleasing casserole!",
    images: ["https://www.bing.com/th?id=AOR_937198e016b7820ae0531f600339692c&w=200&h=160&c=7&rs=1&qlt=80&cdv=1&pid=16.1", "https://www.bing.com/th?id=AOR_31e9d96a6eab044801a36addfda1004d&w=200&h=160&c=7&rs=1&qlt=80&cdv=1&pid=16.1"],
    ingredients: ["6 slices white bread, torn into bite-size pieces",
    "1 lb. breakfast pork sausage, cooked, drained",
    "1 cup Shredded Sharp Cheddar Cheese",
    "6 eggs",
    "2 cups milk",
    "1/4 tsp. pepper",
    "1 tsp. salt"],
    directions: ["Heat oven to 350∞F.",
    "Place bread in 13x9-inch pan sprayed with cooking spray; top with sausage and cheese.",
    "Whisk remaining ingredients until blended; pour over ingredients in pan.",
    "Bake 40 to 45 min. or until knife inserted in center comes out clean and top is lightly browned."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Breakfast", "Sausage",],
    comments: generateComments()
  },
  {
    name: "Breakfast Burritos",
    author: generateAuthor(),
    time: 15,
    difficulty: 1,
    description: "It's a classic! Breakfast Burritos are perfect for adults, children, the elderly, and even the ghost that lives in the attic.",
    images: ["https://www.bing.com/th?id=OIP.HB_QqklKpWDpDpJOjoMIDQHaHa&w=194&h=192&c=7&o=5&pid=1.7", "https://www.bing.com/th?id=OIP.fcJvZYUawjDCATtJXLyoIQHaE8&w=268&h=179&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.IBhFrUgkHDxsA3zDx4WrOwHaFg&w=259&h=191&c=7&o=5&pid=1.7"],
    ingredients: ["4 flour tortillas (8-inch)",
    "3 large eggs",
    "1lb cooked breakfast sausage, drained",
    "3/4 teaspoon coarse salt",
    "1 teaspoon olive oil",
    "1 cup shredded pepper Jack cheese",
    "1 cup salsa"],
    directions: ["Preheat oven to 350 degrees. Wrap tortillas in foil; heat in oven, 10 minutes.",
    "Meanwhile, in a large bowl, whisk eggs and salt. In a large nonstick skillet, heat oil over medium-low. Add mixture; cook, stirring with a heatproof spatula, until eggs start to form curds. Stir in cheese and sausage; cook until cheese is melted.",
    "In a small skillet, heat salsa over medium. Divide eggs among tortillas; spoon sauce over eggs. Roll up tortillas."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Breakfast", "Sausage", "Burrito", "Eggs"],
    comments: generateComments()
  },
  {
    name: "Overnight Oats (Warm)",
    author: generateAuthor(),
    time: 540,
    difficulty: 1,
    description: "Is 2 minutes too quick for oatmeal? Do you crave a warm, hearty breakfast that takes nine hours? This is for you!",
    images: ["https://www.bing.com/th?id=OIP.08CmUGgnzVG18t4WEG7XugHaE8&w=270&h=180&c=7&o=5&pid=1.7", "https://www.bing.com/th?id=OIP.08Cuoh8sdtnXsILN4w185gHaFs&w=235&h=180&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.j4K-9k5Cb1Zwxl0Q0RDOrwHaFj&w=264&h=197&c=7&o=5&pid=1.7", "https://www.bing.com/th?id=OIP.8acUXIER5cEoGjr232N5WAHaEo&w=278&h=173&c=7&o=5&pid=1.7"],
    ingredients: ["1 cup steel cut oats",
    "1 cup dried cranberries",
    "1 cup dried figs",
    "4 cups water",
    "1/2 cup half-and-half"],
    directions: ["In a slow cooker, combine all ingredients and set to low heat. Cover and let cook for 8 to 9 hours.",
    "Stir and remove to serving bowls. This method works best if started before you go to bed. This way your oatmeal will be finished by morning."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Oatmeal", "Overnight", "Fruit", "Breakfast"],
    comments: generateComments()
  },
  {
    name: "Overnight Oats (Cold)",
    arthor: generateAuthor(),
    time: 540,
    difficulty: 1,
    description: "These overnight oats are perfect to chill in the fridge while you dream about sheep and quickly grab in the morning when you oversleep!",
    images: ["https://www.bing.com/th?id=OIP.OqOOMHkpQ_piPQikuY0E8QHaE8&w=298&h=199&c=7&o=5&pid=1.7", "https://www.bing.com/th?id=OIP.s_TXatpGxFVev9eUleTV-wHaE8&w=299&h=199&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.9Dy1QI25StjbdLBm_hNFDgHaHa&w=172&h=188&c=7&o=5&pid=1.7"],
    ingredients: ["1/2 cup rolled oats",
    "1/2 cup coconut milk",
    "1 tablespoon chia seeds",
    "2 tablespoons slivered almonds",
    "1/2 tablespoon maple syrup",
    "1 teaspoon vanilla extract"],
    directions: ["Mix all the ingredients together in a glass jar. Stir well, cover, and refrigerate overnight.",
    "The next morning, remove from the fridge, top off with your favorite fresh fruit, and enjoy!"],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Overnight", "Oatmeal", "Fruit", "Breakfast"],
    comments: generateComments()
  },
  {
    name: "Waffles",
    author: generateAuthor(),
    time: 30,
    difficulty: 4,
    description: "Quit waffling when it comes to breakfast, you know you want waffles! Golden, delicious, and smothered in syrup.",
    images: ["https://www.bing.com/th?id=OIP.S6wDgxctTRqrt57vSpgbLAHaHa&w=186&h=186&c=7&o=5&pid=1.7", "https://www.bing.com/th?id=OIP.KD069pW8DixvfwO1HJ1OXAHaFj&w=248&h=186&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.0YsuV1p0RfEVWs0926TWBQHaEK&w=300&h=168&c=7&o=5&pid=1.7", "https://www.bing.com/th?id=OIP.Y7uzKZIpRobjRzIoTdsEvwHaEc&w=300&h=180&c=7&o=5&pid=1.7"],
    ingredients: [
    "2 cups All-purpose Flour",
    "3 teaspoons Baking Powder",
    "1/2 teaspoon Salt",
    "1/4 cup Sugar",
    "1-1/2 cup Milk",
    "2 whole Egg Yolks",
    "1 Tablespoon Vanilla Extract",
    "1 teaspoon (additional) Vanilla Extract",
    "1 stick (1/2 Cup) Salted Butter, Melted",
    "4 whole Egg Whites"],
    directions: ["Preheat the waffle iron to the regular setting.",
    "Sift together the flour, baking powder, salt, and sugar in a bowl.",
    "In a separate bowl, whisk together milk, 2 egg yolks, and vanilla. Pour over the dry ingredients and very gently stir until halfway combined. Pour in the melted butter and continue mixing very gently until combined.",
    "In a separate bowl (or using a mixer), beat the egg whites with a whisk until stiff. Slowly fold them into the batter, stopping short of mixing them all the way through.",
    "Scoop the batter into your waffle iron in batches and cook according to its directions (lean toward being a little deep golden and crisp!) Remove and serve immediately with softened butter and warm syrup."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Waffles", "Breakfast", "Butter", "Syrup"],
    comments: generateComments()
  },
  {
    name: "Hashbrowns",
    author: generateAuthor(),
    time: 15,
    difficulty: 2,
    description: "Who doesn't love hot, crispy potatoes?",
    images: ["https://www.bing.com/th?id=OIP.iE8SDGI6oELyU2VOrd1t2gHaFj&w=248&h=186&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.ADEbMKaRHlpX-ljQuu8V_wHaF7&w=249&h=192&c=7&o=5&pid=1.7"],
    ingredients: [
    "2 medium russet potatoes, shredded",
    "1/2 medium onion, finely chopped",
    "1/4 cup all-purpose flour",
    "1 egg",
    "1 cup oil for frying, or as needed",
    "salt and pepper to taste"],
    directions: ["Rinse shredded potatoes until water is clear, then drain and squeeze dry. Place shreds in a bowl, and mix in the onion, flour and egg until evenly distributed.",
    "Heat about 1/4 inch of oil in a large heavy skillet over medium-high heat. When oil is sizzling hot, place potatoes into the pan in a 1/2 inch thick layer. Cover the whole bottom of the pan, or make separate piles like pancakes. Cook until nicely browned on the bottom, then flip over and brown on the other side. It should take at least 5 minutes per side. If you are cooking them in one big piece, it can be cut into quarters for easier flipping.",
    "Remove from pan, and drain on paper towels. Season with salt and pepper and serve immediately."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Breakfast", "Hasbrowns", "Potatoes"],
    comments: generateComments()
  },
  {
    name: "Biscuits",
    author: generateAuthor(),
    time: 30,
    difficulty: 4,
    description: "Y'all ready for the best part of any down home country breakfast? Light and fluffy, you can smother them in some gravy and have yourself a true Texas breakfast!",
    images: ["https://www.bing.com/th?id=OIP.cC7tiaLR0IWEg8ZWd8gAxQHaFj&w=264&h=198&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.b-kIjkrOPp9VEHaCQft8VQHaHa&w=160&h=160&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.M9zDEeEKcod8sjq-jtrBrAHaFj&w=166&h=160&c=7&o=5&pid=1.7"],
    ingredients: [
    "2 cups flour",
    "4 teaspoons baking powder",
    "1/4 teaspoon baking soda",
    "3/4 teaspoon salt",
    "2 tablespoons butter",
    "2 tablespoons shortening",
    "1 cup buttermilk, chilled"],
    directions: ["Preheat oven to 450 degrees.",
    "In a large mixing bowl, combine flour, baking powder, baking soda and salt. Using your fingertips, rub butter and shortening into dry ingredients until mixture looks like crumbs. (The faster the better, you don't want the fats to melt.) Make a well in the center and pour in the chilled buttermilk. Stir just until the dough comes together. The dough will be very sticky.",
    "Turn dough onto floured surface, dust top with flour and gently fold dough over on itself 5 or 6 times. Press into a 1-inch thick round. Cut out biscuits with a 2-inch cutter, being sure to push straight down through the dough. Place biscuits on baking sheet so that they just touch. Reform scrap dough, working it as little as possible and continue cutting. (Biscuits from the second pass will not be quite as light as those from the first, but hey, that's life.)",
    "Bake until biscuits are tall and light gold on top, 15 to 20 minutes."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Breakfast", "Biscuits"],
    comments: generateComments()
  },
  {
    name: "Oven Scrambled Eggs",
    author: generateAuthor(),
    time: 45,
    difficulty: 1,
    description: "Do you have more eggs than you know what to do with? Scramble them in the oven! You heard me, in the OVEN!",
    images: ["https://www.bing.com/th?id=OIP.AK4WWV_Wlie_2V7zTzjARAHaE7&w=263&h=174&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.Ux6s0IVYMS0eZHcV_4ILNwHaFj&w=264&h=198&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.e4EYNi-M57p6OquTFhBqLAHaFj&w=252&h=184&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.O4gnws5KHtTQ7tCnzgIeaAHaFj&w=239&h=176&c=7&o=5&pid=1.7"],
    ingredients: [
    "1/2 cup butter or margarine, melted",
    "24 eggs",
    "2 1/4 teaspoons salt",
    "2 1/2 cups milk"],
    directions: ["Preheat the oven to 350 degrees F (175 degrees C)",
    "Pour melted butter into a glass 9x13 inch baking dish. In a large bowl, whisk together eggs and salt until well blended. Gradually whisk in milk. Pour egg mixture into the baking dish.",
    "Bake uncovered for 10 minutes, then stir, and bake an additional 10 to 15 minutes, or until eggs are set. Serve immediately."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Breakfast", "Eggs"],
    comments: generateComments()
  },
  {
    name: "Breakfast Pizza",
    author: generateAuthor(),
    time: 25,
    difficulty: 2,
    description: "Pizza for dinner? Yawn. Amp up breakfast with a pizza!",
    images: ["https://www.bing.com/th?id=OIP.t5mo_E7bNIz2mVDNDi5nbAHaHa&w=187&h=179&c=7&o=5&pid=1.7"],
    ingredients: [
    "1 can (13.8 oz) refrigerated pizza crust",
    "8 eggs",
    "1/4 cup half-and-half or milk",
    "1/8 teaspoon salt",
    "1/8 teaspoon pepper",
    "2 tablespoons butter",
    "1 container (8 oz) chive, vegetable or regular cream cheese",
    "8 slices bacon, crisply cooked",
    "Green onions, if desired"],
    directions: ["Heat oven to 425∞F. Spray 12-inch pizza pan with Cooking Spray, or grease with shortening. Unroll dough; place in pan. Starting at center, press out dough with hands to edge of pan.",
    "In medium bowl, beat eggs, half-and-half, salt and pepper. In 10-inch skillet, melt butter over medium heat. Add egg mixture; cook and stir until thoroughly cooked but still moist. Remove from heat.",
    "Spoon cooked egg mixture over crust. Drop cream cheese by teaspoonfuls over eggs. Arrange bacon in spoke fashion on top of pizza.",
    "Bake 12 to 15 minutes or until toppings are thoroughly heated and crust is deep golden brown. Garnish with green onions."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Breakfast", "Pizza", "Bacon", "Eggs"],
    comments: generateComments()
  },
  {
    name: "Veggies and Ranch",
    author: generateAuthor(),
    time: 5,
    difficulty: 1,
    description: "Keep it simple, Sam! These cut veggies will keep you going!",
    images: ["https://www.bing.com/th?id=OIP.cBX_09XPnVpRUCpKTRZm4wHaE6&w=300&h=199&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.XUBUAq2IJSlvPs2XR6CVmgHaHa&w=204&h=201&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.kBSA8r1GJpFfiAxNMq5oCwHaE6&w=279&h=186&c=7&o=5&pid=1.7"],
    ingredients: [
    "8 cups chopped veggies (carrots, celery, peppers, etc)",
    "1/2 cup Hidden Valley Original Ranch"],
    directions: ["Wash and chop veggies on a cutting board. To store them vertically, chop them a bit smaller than the storage container.",
    "Place 1 tablespoon of ranch dressing at the bottom of each cup, and fill each container with about 1 cup of vertically placed veggies.",
    "Close the lid and refrigerate up to 3 days."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Snack", "Carrots", "Celery", "Peppers", "Ranch Dressing", "Gluten Free"],
    comments: generateComments()
  },
  {
    name: "Homemade Tortilla Chips",
    author: generateAuthor(),
    time: 20,
    difficulty: 2,
    description: "Make your own tortilla chips at home! You too can crunchy, delicious chips perfect for salsa or guacomole.",
    images: ["https://www.bing.com/th?id=OIP.mrip9DLSxn8fL9G6_I6tawHaE7&w=277&h=184&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.g9AkomAHnLIn_NDNZCkwOwHaE8&w=276&h=184&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.4ddAjx3HlfgbkXnqsE3y9AHaLw&w=115&h=175&c=7&o=5&pid=1.7"],
    ingredients: ["1 package flour tortillas or 1 package corn tortilla",
    "2 tablespoons oil"],
    directions: ["With a pastry brush, paint a very light coating of oil on one side of each tortilla.",
    "Stack the tortillas greased side up in an even pile.",
    "With a sharp, heavy knife (or serrated knife) cut the stack in half, then into quarters, then into eighths.",
    "Separate the pieces and arrange them greased side up on a lightly oiled baking sheet.",
    "Toast the chips in a preheated 350 degree oven for about 10 minutes or until they are crisp and just beginning to brown lightly; watch them closely so they don't become over baked."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Snack", "Tortilla", "Chips"],
    comments: generateComments()
  },
  {
    name: "Crispy Rosemary Crackers",
    author: generateAuthor(),
    time: 45,
    difficulty: 3,
    description: "You'll get addicted to these crackers flavoured with rosemary!",
    images: ["https://www.bing.com/th?id=OIP.6YjQfku0p8nvDAPuQJ8_ZgHaHa&w=187&h=187&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.uIfeza0fdK6ahuLn6X_H0gHaHa&w=187&h=187&c=7&o=5&pid=1.7"],
    ingredients: [
    "1 1/2 cups all-purpose flour",
    "1 1/2 teaspoons kosher salt",
    "1 teaspoon white sugar",
    "1/2 cup freshly grated Parmigiano-Reggiano cheese",
    "3 tablespoons extra-virgin olive oil",
    "1/2 cup cold water",
    "1 tablespoon minced fresh rosemary"],
    directions: [
    "Preheat oven to 400 degrees F (200 degrees C). Line a baking sheet with a silicon mat or parchment paper.",
    "Place flour, salt, sugar, and grated cheese in a mixing bowl. Stir together until well mixed. Add rosemary; drizzle with olive oil and add water. Mix with a fork until mixture comes together in a fairly sticky dough and pulls away from the sides of the bowl, 3 to 5 minutes.",
    "Transfer dough onto floured surface and add flour as you knead the dough. Knead until it no longer sticks to work surface, 4 or minutes. Divide dough in half.",
    "Dust work surface with flour. Roll out dough to 1/8-inch thickness or less. Brush or mist surface of dough very lightly with water. Sprinkle with coarse sea salt. Prick the entire surface of dough with the tines of a fork to prevent crackers from puffing too much when baking.",
    "Cut each rolled out half into about 30 pieces with a pizza wheel. You can cut them out in squares, rectangles, or triangles--your choice. Transfer onto prepared baking sheet with a bench scraper or your floured fingers (dough will be very sticky).",
    "Bake in preheated oven until perfectly browned and crunchy, 10 to 15 minutes, depending on the thickness."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Snack", "Crackers", "Rosemary"],
    comments: generateComments()
  },
  {
    name: "John's Cheesy Crackers",
    arthor: generateAuthor(),
    time: 20,
    difficulty: 4,
    description: "Inspired by a great love, John's crackers are as cheesy as the man himself.",
    images: ["https://www.bing.com/th?id=OIP.LeYNELBGAnbrCyeEzPb-AgHaEK&w=300&h=168&c=7&o=5&pid=1.7"],
    ingredients: ["1/2 teaspoon vegetable oil",
    "2 tablespoons unsalted butter at room temperature",
    "3/4 cup lightly packed shredded sharp Cheddar cheese",
    "1/3 cup lightly packed freshly shredded Parmesan cheese",
    "1/2 teaspoon paprika1 pinch cayenne pepper, or to taste",
    "1/4 teaspoon salt",
    "1/2 cup all-purpose flour",
    "1 tablespoon cold water, or as needed"],
    directions: ["Line a baking sheet with aluminum foil and lightly grease with vegetable oil.",
    "Place butter into a mixing bowl; add Cheddar cheese, Parmesan cheese, paprika, cayenne pepper, and salt. Mix together with the back of a spatula until thoroughly combined.",
    "Mix flour into cheese mixture with a fork until crumbly. Sprinkle in cold water, 1 or 2 drops at a time, and mix with spatula until it comes together in a dough that holds its shape when squeezed.",
    "Transfer dough to a work surface and press into a thick, flattened disk. Wrap in plastic wrap and refrigerate 30 minutes.",
    "Preheat oven to 375 degrees F (190 degrees C).",
    "Roll dough out on a floured work surface to about 1/8-inch thick. Use a pizza cutter to cut 1-inch wide strips from the dough. Cut strips crosswise into rectangles about 1 1/2-inches long. Use the back of a bamboo skewer to punch 5 small holes into each cracker. Arrange crackers onto prepared baking sheet.",
    "Bake in the preheated oven until crackers are browned and crisp, about 15 minutes. Let stand about 3 minutes for crackers to cool and release from the foil. Let cool completely before serving."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Snack", "John", "Cheese", "Crackers"],
    comments: generateComments()
  },
  {
    name: "Simple Mochi",
    author: generateAuthor(),
    time: 10,
    difficulty: 2,
    description: "Konnichiwa! Please enjoy tasty mochi made from rice flour and happiness! Itadakimasu!",
    images: ["https://www.bing.com/th?id=OIP.fbxIqx_m24Of5engRRtxJwHaG_&w=211&h=196&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.Qump3m_1ynIkvmQjD1tKIgHaFj&w=238&h=178&c=7&o=5&pid=1.7"],
    ingredients: ["1 cup mochiko sweet rice flour (glutinous rice flour)",
    "1 cup water",
    "1/4 cup sugar",
    "katakuriko, for dusting (potato starch)"],
    directions: ["Mix mochiko and sugar in a bowl.",
    "Add water and mix thoroughly. (will be watery).",
    "Put in a microwaveable dish. Cover with plastic wrap.",
    "Microwave on high for 4 minutes. Take off plastic wrap. Cool for a few minutes, if you want. Cut. Serve.",
    "Opt. Dust with katakuriko or kinako to prevent mochi from sticking everywhere. If you don't have these, you can just put the mochi on cellophane."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Snack", "Rice flour", "Japanese", "Vegan"],
    comments: generateComments()
  },
  {
    name: "Hummus",
    author: generateAuthor(),
    time: 10,
    difficulty: 2,
    description: "A traditional Mediterranean snack, usually eaten with pita bread. Pita bread sold separately. ",
    images: ["https://www.bing.com/th?id=OIP.3rVfLxFHmfkR_rNsePafBQHaE8&w=258&h=172&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.n28GP6isU0Y-ZZE_BVwPugHaE8&w=258&h=172&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.8-2E0ifq5iDZ8RnaVIKIbQHaEK&w=299&h=168&c=7&o=5&pid=1.7"],
    ingredients: ["2 15 ounce cans of chickpeas, drained and rinsed",
    "Juice of 1 small lemon (seeds removed, pulp optional)",
    "1 tablespoon good olive oil",
    "1 tablespoon tahini (sesame paste, you can find it in the 'international' aisle in the grocery store or more cheaply in a middle eastern specialty shop)",
    "2 small or one large clove of garlic, finely grated",
    "Water to adjust consistancy",
    "Sweet hungarian paprika to garnish"],
    directions: ["Drain and wash the chickpeas, add to blender or food processor.",
    "Add grated garlic, olive oil, tahini, lemon juice, and about 2 tablespoons of water.",
    "Puree until there are no whole chickpeas, and the hummus is a thick paste.",
    "Remove from bowl of mixer and garnish with a sprinkle of paprika. You could drizzle some olive oil and toss some chopped tomatoes on top of it if you desire. Serve with pita bread."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Snack", "Chickpeas", "Olive Oil", "Gluten Free", "Vegan"],
    comments: generateComments()
  },
  {
    name: "Spicy Pretzels",
    author: generateAuthor(),
    time: 5,
    difficulty: 1,
    description: "Spice up that bag of pretzels you found in the back of the pantry. Are cobwebs edible?",
    images: ["https://www.bing.com/th?id=OIP.uQLSmiXF5RwBCCYsOGzKhQHaLq&w=116&h=182&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.bGiiW_g-VHDbQeR0Ku301wHaE-&w=299&h=200&c=7&o=5&pid=1.7"],
    ingredients: ["1 teaspoon ground cayenne pepper",
    "1 teaspoon lemon pepper",
    "1 1/2 teaspoons garlic salt",
    "1 (1 ounce) package dry Ranch-style dressing mix",
    "3/4 cup vegetable oil",
    "1 1/2 (15 ounce) packages mini pretzels"],
    directions: ["In a small bowl, mix together cayenne pepper, lemon pepper, garlic salt, ranch-style dressing mix and vegetable oil.",
    "Place pretzels in a large, sealable plastic bag. Pour in mixture from bowl. Shake well. Allow pretzels to marinate in the mixture approximately 2 hours before serving. Shake occasionally to maintain coating."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Snack", "Spicy", "Pretzels"],
    comments: generateComments()
  },
  {
    name: "Homemade Chips",
    author: generateAuthor(),
    time: 45,
    difficulty: 2,
    description: "Paper thin and super crunchy, these homemade chips will always hit the spot.",
    images: ["https://www.bing.com/th?id=OIP.r1pA4T0Hmdl9I0Yv_rrpbQHaFj&w=253&h=187&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.BL6CBmhCPZ0QL219SXgx_QHaE7&w=280&h=186&c=7&o=5&pid=1.7"],
    ingredients: ["4 medium potatoes, peeled and sliced paper-thin",
    "3 tablespoons salt",
    "1 liter oil for deep frying"],
    directions: [
    "Slice potatoes to your desired chip thickness and place them into a bowl of cold water as you slice. Drain and rinse, then refill the bowl with water and add the salt.",
    "Let the potatoes soak in the salty water for at least 30 minutes. Drain, then rinse and drain again.",
    "Heat oil in a deep-fryer to 185 C. Fry potato slices in small batches. Once they start turning golden, remove and drain on paper towels. Continue until all of the slices are fried. Season with additional salt if desired."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Snack", "Potatoes", "Oil"],
    comments: generateComments()
  },
  {
    name: "Gourmet Popcorn",
    author: generateAuthor(),
    time: 10,
    difficulty: 2,
    description: "Let's face it, it's not as good as theater popcorn. No matter, we can still give this plain popcorn a makeover!",
    images: ["https://www.bing.com/th?id=OIP.P8fmGdA05orH0qY4fAU5aAHaE7&w=290&h=192&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.fPwaZmAuyOQPjMEcY4pU6gHaHV&w=211&h=208&c=7&o=5&pid=1.7"],
    ingredients: ["1 bag Pop Secret Homestyle Popcorn",
    "º C canola Oil",
    "2 Tbsp truffle Oil",
    "º C grated parmesan cheese",
    "2 Tbsp finely chopped rosemary"],
    directions: ["Pop 1 bag of Popsecret Homestyle Popcorn, following package directions",
    "Pour popped corn into large bowl",
    "Drizzle both oils over corn and toss to coat.",
    "While tossing bowl shake parmesan cheese and rosemary over corn.",
    "Mix to thoroughly coat popcorn",
    "Call everyone in and enjoy."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Snack", "Popcorn", "Rosemary", "Oil"],
    comments: generateComments()
  },
  {
    name: "Cheddar Zucchini Muffins",
    author: generateAuthor(),
    time: 45,
    difficulty: 4,
    description: "Still on that diet? Try this healthy muffin made with zucchini, made delicious with a little cheddar!",
    images: ["https://www.bing.com/th?id=OIP.ddWqNtRdzWH14nu5hVQ5_wHaE8&w=284&h=189&c=7&o=5&pid=1.7"],
    ingredients: ["Cooking spray, for the pan",
    "1 medium zucchini (6 oz.)",
    "1/2 tsp. kosher salt",
    "2 c. all-purpose flour",
    "2 tsp. baking powder",
    "1/2 tsp. baking soda",
    "2 large eggs",
    "1 c. buttermilk",
    "4 tbsp. extra-virgin olive oil",
    "1 10-oz. package frozen leaf spinach, thawed, squeezed dry and roughly chopped",
    "5 oz. extra-sharp Cheddar, coarsely grated",
    "3 scallions, finely chopped"],
    directions: ["Heat oven to 400 degrees F. Lightly coat a 12-hole muffin pan with cooking spray.",
    "Coarsely grate the zucchini and sprinkle with 1/4 teaspoon salt. Let sit for 10 minutes, then use a clean towel to squeeze out all excess liquid.",
    "In a large bowl, whisk together the flour,baking powder, baking soda and the remaining 1/4 teaspoon salt.",
    "In a medium bowl, whisk together the eggs, buttermilk and oil. Fold into the dry ingredients along with the zucchini, spinach, Cheddar, and scallions until just barely combined (do not overmix; itís OK to have a few lumps of flour).",
    "Divide the batter among the prepared muffin cups (they will appear over filled). Bake until lightly golden brown and a wooden pick inserted into the center comes out clean, 23 to 27 minutes."],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: ["Snack", "Zucchini", "Muffin", "Cheddar"],
    comments: generateComments()
  }
];



for(let i of myData){
  for(let x = 0; x < i.tags.length; x++){
    i.tags[x] = i.tags[x].toUpperCase();
  }
  i.avgRating = generateAverage(i.ratings);
}

// console.log(myData);

module.exports = myData;
