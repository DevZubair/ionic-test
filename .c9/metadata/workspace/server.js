{"changed":true,"filter":false,"title":"server.js","tooltip":"/server.js","value":"var express=require('./Server/node_modules/express');\nvar app=express();\nvar mongoose=require('./Server/node_modules/mongoose');\nmongoose.connect('mongodb://danhnguyen:danh014me@ds029307.mongolab.com:29307/danh01');\n\n\n\n\n\nvar morgan=require('./Server/node_modules/morgan');\n\nvar bodyParser=require('./Server/node_modules/body-parser');\nvar methodOverride=require('./Server/node_modules/method-override');\nvar Schemas=require('./Server/Schemas/Schemas.js');\nvar Api=require('./Server/Schemas/Api.js');\n\napp.use(function(req, res, next) {\n\n    res.header(\"Access-Control-Allow-Origin\", \"*\");\n    res.header(\"Acce\n    ss-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");\n    res.header(\"'Access-Control-Allow-Methods',['OPTIONS', 'GET', 'POST', 'DELETE']\");\n    res.header(\"'Access-Control-Allow-Headers','Content-Type'\");\n\n    next();\n});\napp.use(express.static(__dirname + '/www'));\n\n/* We use express.static method to call the frontend templates and controllers from node.js server file. */\n\napp.use(bodyParser());\n/* ++++++++++++++++++ Zubair Comment 5th March, 2015 ++++++++++++++++++++++++++++++ \n\n Code added above is basically adding libraries we can say which we have just added through package.json \n dependencies (Please see file package.json). So far we have just required all the framweorks which we are going\n to use later for building our database app connection. \n \n Quick Tips:\n \n 1) mongoose.connect takes the url of my mongolab db workspace. I'll replace it with your account later.\n 2) app.use(.....) basically runs at the very first as soon as we start the server.\n 3) res.header is a necessary command, it is used to tell the server that this app is a CRUD application.\n 4) CRUD: Create Read Update Delete\n 5) res.headers helps us in making $http requests through server.\n 6) next() is called at the end of a function code, it jumps to the very next app.use function which we are going\n    to add below.\n\n*/\n\nvar port = process.env.PORT || 8080;        // set our port\n\n\n\napp.post('/api/addMember',Api.addMember);\napp.post('/api/loginMember',Api.loginMember);\napp.post('/api/profileMember',Api.profileMember);\napp.post('/api/editProfile',Api.editProfile);\napp.post('/api/getMember',Api.getMember);\n\n\n\n\n\n app.get('*', function(req, res) {\n        res.sendfile(__dirname+'./www/index.html'); // load the single view file (angular will handle the page changes on the front-end)\n    });\n    \n\napp.listen(port);\nconsole.log('server is listening on 8080');\n\n\n/*  +++++++++++++++++++++++ Zubair Comment 5th March, 2015 ++++++++++++++++++++++++++++++ \n\n Code above is what we can actually call \"Structure of our Server\".\n \n Quick Overview:\n \n 1) port variable tells the server to run on which port, I have used 8000. It means localhost:8000 basically. But \n    this is not our problem because we are running our app from ionic serve, so we will just Run the server on the back\n    not thinking too much that on which port is it running.\n \n 2) Right now we have added 3 $http requests, get,post,delete. Means Read, Create, Delete. Well for now I'll build\n    an API for creating members so right now we will use app.post.\n    \n 3) app.listen(port) will start the server to run on the given port (8000) and after successfully running, it will\n    prompt a message on terminal screen 'server is listening on 8000'\n    \n 4) Please see Api.js file where we have built APIs for post,get,delete requests. \n    Note :\n            I have called those APIs here. e.g : app.post(...., Api.addMember) \n    \n\n\n\n*/","undoManager":{"mark":-1,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":19,"column":20},"end":{"row":20,"column":0},"action":"insert","lines":["",""]},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"insert","lines":["    "]}]}]]},"ace":{"folds":[],"customSyntax":"javascript","scrolltop":420,"scrollleft":0,"selection":{"start":{"row":37,"column":12},"end":{"row":37,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":27,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1425741519000}