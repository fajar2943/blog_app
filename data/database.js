const mongodb=require('mongodb'); 
const MongoClient=mongodb.MongoClient; 
let database; 
async function connect(){ 
  const client = await MongoClient.connect('mongodb+srv://root:rahasia@gumilang.nzf4r.mongodb.net/?retryWrites=true&w=majority&appName=gumilang'); 
  database = client.db('blog'); 
} 
 
function getDb(){ 
  if (!database){ 
    throw{message:'database cnonection not establish'} 
  } 
return database; 
} 
module.exports= { 
  connectToDb: connect, 
  getDb:getDb 
}