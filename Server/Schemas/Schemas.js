var mongoose=require('mongoose');
var memberSchema=mongoose.Schema({
   
    Firstname:String,
    Lastname:String,
    Username:String,
    Password:String,
    Email:String,
    Aboutme:String,
    Mentor:String
   
});



mongoose.model('Members',memberSchema);

/* ++++++++++++++++++ Zubair Comment 5th March, 2015 ++++++++++++++++++++++++++++++

  Schema.js file is basically used to add the collections format for my MongoDB. I can add collections as much as I
  need for my app. Here we have created memberSchema and added the appropriate objects which we will ask a User
  to give information during registration.
  
  Note:
  mongoose.model will be used in my APIs to set the values in each object in this schema and than server will 
  send all the data with schema to the Mongo Lab collections and it will be added there.


*/
