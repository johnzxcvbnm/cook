//File contains a few basic recipes to start with to build some basic design.

const generateauthor = () => {
  const myauthors = [
    "John K",
    "Jamie M",
    "Jordan B",
    "Scott Tee",
    "Rin Z",
    "Ayra L"
  ]
  const myPick = Math.floor(Math.random() * myauthors.length);

  return myauthors[myPick];
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

const myData = [
  {
    name: "",
    author: generateauthor(),
    time: 0,
    difficulty: 0,
    description: "",
    images: [],
    ingredients: [],
    directions: [],
    ratings: generateRatings(),
    avgRating: 0,
    protect: true,
    tags: [],
    comments: []
  }
];

console.log(myData);

for(let i of myData){
  i.avgRating = generateAverage(i.ratings);
}

console.log(myData);
