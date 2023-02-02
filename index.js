const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1/recipe-app';


connectDB()
handler()

async function connectDB () {
try {
  mongoose.connect(MONGODB_URI);
}
catch(error) {
  console.log("Something went wrong", error)
}
}
async function handler () {
await Recipe.deleteMany()
console.log(`Connected to the database`)
const recipeOne = {
  title: 'Potato',
   level: "Easy Peasy",
   ingredients: [ "potato", "water", "love" ],
   cuisine: "Brazilian",
   dishType : "drink",
   duration: 10,
   creator: "Caroline"
}
await Recipe.create(recipeOne).then(()=>{ console.log("Recipe Added:", recipeOne.title)});
await Recipe.insertMany(data).then(()=>{
  for (let i = 0; i < data.length; i++) {
    console.log("Recipe Added:", data[i].title)
  }      
});
await Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, {duration: 100}, {new: true})
    .then(()=>{console.log("Updating Successful")})   
    await Recipe.deleteOne({title: "Carrot Cake"}).then(()=>{console.log("Deleting Successful")})
    mongoose.disconnect();
}


// // Connection to the database "recipe-app"
// mongoose
//   .connect(MONGODB_URI)
//   .then(x => {
//     console.log(`Connected to the database: "${x.connection.name}"`);
//     // Before adding any recipes to the database, let's remove all existing ones
//     return Recipe.deleteMany()
//   })
//   .then(async() => {
//     const recipeOne = {
//       title: 'Potato',
//        level: "Easy Peasy",
//        ingredients: [ "potato", "water", "love" ],
//        cuisine: "Brazilian",
//        dishType : "drink",
//        duration: 10,
//        creator: "Caroline"
//     }
//     await Recipe.create(recipeOne).then(()=>{ console.log("Recipe Added:", recipeOne.title)});
//     await Recipe.insertMany(data).then(()=>{
//       for (let i = 0; i < data.length; i++) {
//         console.log("Recipe Added:", data[i].title)
//       }      
//     });
//     await Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, {duration: 100}, {new: true})
//     .then(()=>{console.log("Updating Successful")})   
//     await Recipe.deleteOne({title: "Carrot Cake"}).then(()=>{console.log("Deleting Successful")})    
        
//   })  
//   .catch(error => {
//     console.error('Error connecting to the database', error);
//   })
//   .finally(()=>{    
//     mongoose.disconnect();     
//   })