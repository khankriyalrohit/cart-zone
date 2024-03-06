// const mongoose = require("mongoose");

// const connectDatabase = ( )=>{

//     mongoose.connect(process.env.DB_URI,{useNewUrlParser:true , useUnifiedTopology:true}).then((data)=>{
//         console.log(`MongoDb connected succesfullly at ${data.connection.host}`);
//     })
//     // .catch((error)=>{
//     //     console.log(error);          No use of catch function as we used unhandled promise rejection 
//     // })
// }

// module.exports = connectDatabase 

// const { MongoClient, ServerApiVersion } = require('mongodb');


// const connectDatabase = async () => {
//   // Create a MongoClient with a MongoClientOptions object to set the Stable API version
//   const client = new MongoClient(process.env.DB_URI, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });

//   try {
//     // Connect the client to the MongoDB Atlas cluster
//     await client.connect();

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB Atlas!");
//   } finally {
//     // Ensure that the client will close when you finish/error
//     await client.close();
//   }
// };

// module.exports = connectDatabase;

const mongoose = require("mongoose");
// const colors = require("colors");
const dotenv = require('dotenv');

const connectDatabase = async()=>{
  try{
    await mongoose.connect(`${process.env.DB_URI}`);
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`
    );
  } 
  catch(err){
    console.log(`Mil gya error ${err}`) 
  }
};

module.exports = connectDatabase; 