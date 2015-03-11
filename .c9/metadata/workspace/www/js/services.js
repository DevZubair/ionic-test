{"filter":false,"title":"services.js","tooltip":"/www/js/services.js","undoManager":{"mark":69,"position":69,"stack":[[{"group":"doc","deltas":[{"start":{"row":104,"column":0},"end":{"row":105,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":0},"end":{"row":106,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":0},"end":{"row":106,"column":1},"action":"insert","lines":["<"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":1},"end":{"row":106,"column":2},"action":"insert","lines":["!"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":2},"end":{"row":106,"column":3},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":3},"end":{"row":106,"column":4},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":4},"end":{"row":106,"column":5},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":5},"end":{"row":106,"column":6},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":6},"end":{"row":106,"column":7},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":7},"end":{"row":106,"column":8},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":8},"end":{"row":106,"column":9},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":9},"end":{"row":106,"column":10},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":10},"end":{"row":106,"column":11},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":11},"end":{"row":106,"column":12},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":12},"end":{"row":106,"column":13},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":13},"end":{"row":106,"column":14},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":14},"end":{"row":106,"column":15},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":15},"end":{"row":106,"column":16},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":16},"end":{"row":106,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":17},"end":{"row":106,"column":18},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":18},"end":{"row":106,"column":19},"action":"insert","lines":["B"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":19},"end":{"row":106,"column":20},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":20},"end":{"row":106,"column":21},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":21},"end":{"row":106,"column":22},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":22},"end":{"row":106,"column":23},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":23},"end":{"row":106,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":24},"end":{"row":107,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":0},"end":{"row":108,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":108,"column":0},"end":{"row":128,"column":4},"action":"insert","lines":["  var MongoClient = require('mongodb').MongoClient","    , format = require('util').format;","","  MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {","    if(err) throw err;","","    var collection = db.collection('test_insert');","    collection.insert({a:2}, function(err, docs) {","","      collection.count(function(err, count) {","        console.log(format(\"count = %s\", count));","      });","","      // Locate all the entries using find","      collection.find().toArray(function(err, results) {","        console.dir(results);","        // Let's close the db","        db.close();","      });","    });","  })"]}]}],[{"group":"doc","deltas":[{"start":{"row":128,"column":4},"end":{"row":128,"column":5},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":128,"column":5},"end":{"row":129,"column":0},"action":"insert","lines":["",""]},{"start":{"row":129,"column":0},"end":{"row":129,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":129,"column":2},"end":{"row":130,"column":0},"action":"insert","lines":["",""]},{"start":{"row":130,"column":0},"end":{"row":130,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":130,"column":2},"end":{"row":130,"column":3},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":130,"column":3},"end":{"row":130,"column":4},"action":"insert","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":130,"column":4},"end":{"row":130,"column":5},"action":"insert","lines":[">"]}]}],[{"group":"doc","deltas":[{"start":{"row":130,"column":5},"end":{"row":131,"column":0},"action":"insert","lines":["",""]},{"start":{"row":131,"column":0},"end":{"row":131,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":3},"end":{"row":106,"column":4},"action":"remove","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":2},"end":{"row":106,"column":3},"action":"remove","lines":["-"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":1},"end":{"row":106,"column":2},"action":"remove","lines":["!"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":1},"end":{"row":106,"column":2},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":1},"end":{"row":106,"column":2},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":0},"end":{"row":106,"column":1},"action":"remove","lines":["<"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":0},"end":{"row":106,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":1},"end":{"row":106,"column":2},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":130,"column":0},"end":{"row":130,"column":5},"action":"remove","lines":["  -->"]},{"start":{"row":130,"column":0},"end":{"row":130,"column":1},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":130,"column":1},"end":{"row":130,"column":2},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":22},"end":{"row":106,"column":23},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":23},"end":{"row":106,"column":24},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":24},"end":{"row":106,"column":25},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":25},"end":{"row":106,"column":26},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":26},"end":{"row":106,"column":27},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":27},"end":{"row":106,"column":28},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":27},"end":{"row":106,"column":28},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":26},"end":{"row":106,"column":27},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":25},"end":{"row":106,"column":26},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":25},"end":{"row":106,"column":26},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":25},"end":{"row":106,"column":26},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":24},"end":{"row":106,"column":25},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":24},"end":{"row":106,"column":25},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":25},"end":{"row":106,"column":26},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":26},"end":{"row":106,"column":27},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":27},"end":{"row":106,"column":28},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":28},"end":{"row":106,"column":29},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":29},"end":{"row":106,"column":30},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":30},"end":{"row":106,"column":31},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":31},"end":{"row":106,"column":32},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":32},"end":{"row":106,"column":33},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":33},"end":{"row":106,"column":34},"action":"insert","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":34},"end":{"row":106,"column":35},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":35},"end":{"row":106,"column":36},"action":"insert","lines":["b"]}]}]]},"ace":{"folds":[],"scrolltop":240,"scrollleft":0,"selection":{"start":{"row":37,"column":0},"end":{"row":37,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":16,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1425421758000,"hash":"6d1b358e6d2953032a06fc8b5222540697839461"}