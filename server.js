var express=require('./Server/node_modules/express');
var app=express();
var mongoose=require('./Server/node_modules/mongoose');
mongoose.connect('mongodb://danhnguyen:danh014me@ds029307.mongolab.com:29307/danh01');





var morgan=require('./Server/node_modules/morgan');

var bodyParser=require('./Server/node_modules/body-parser');
var methodOverride=require('./Server/node_modules/method-override');
var Schemas=require('./Server/Schemas/Schemas.js');
var Api=require('./Server/Schemas/Api.js');

app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("'Access-Control-Allow-Methods',['OPTIONS', 'GET', 'POST', 'DELETE']");
    res.header("'Access-Control-Allow-Headers','Content-Type'");

    next();
});
app.use(express.static(__dirname + '/www'));

/* We use express.static method to call the frontend templates and controllers from node.js server file. */

app.use(bodyParser());
/* ++++++++++++++++++ Zubair Comment 5th March, 2015 ++++++++++++++++++++++++++++++ 

 Code added above is basically adding libraries we can say which we have just added through package.json 
 dependencies (Please see file package.json). So far we have just required all the framweorks which we are going
 to use later for building our database app connection. 
 
 Quick Tips:
 
 1) mongoose.connect takes the url of my mongolab db workspace. I'll replace it with your account later.
 2) app.use(.....) basically runs at the very first as soon as we start the server.
 3) res.header is a necessary command, it is used to tell the server that this app is a CRUD application.
 4) CRUD: Create Read Update Delete
 5) res.headers helps us in making $http requests through server.
 6) next() is called at the end of a function code, it jumps to the very next app.use function which we are going
    to add below.

*/

var port = process.env.PORT || 8080;        // set our port



app.post('/api/addMember',Api.addMember);
app.post('/api/loginMember',Api.loginMember);
app.post('/api/profileMember',Api.profileMember);
app.post('/api/editProfile',Api.editProfile);
app.post('/api/getMember',Api.getMember);





 app.get('*', function(req, res) {
        res.sendfile(__dirname+'./www/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
    

app.listen(port);
console.log('server is listening on 8080');


/*  +++++++++++++++++++++++ Zubair Comment 5th March, 2015 ++++++++++++++++++++++++++++++ 

 Code above is what we can actually call "Structure of our Server".
 
 Quick Overview:
 
 1) port variable tells the server to run on which port, I have used 8000. It means localhost:8000 basically. But 
    this is not our problem because we are running our app from ionic serve, so we will just Run the server on the back
    not thinking too much that on which port is it running.
 
 2) Right now we have added 3 $http requests, get,post,delete. Means Read, Create, Delete. Well for now I'll build
    an API for creating members so right now we will use app.post.
    
 3) app.listen(port) will start the server to run on the given port (8000) and after successfully running, it will
    prompt a message on terminal screen 'server is listening on 8000'
    
 4) Please see Api.js file where we have built APIs for post,get,delete requests. 
    Note :
            I have called those APIs here. e.g : app.post(...., Api.addMember) 
    



*/