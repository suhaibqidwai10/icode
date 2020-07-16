var express = require('express');
var router = express();
var fs = require('fs');

console.log("\n *STARTING* \n");

// Get content from file
 var contents = fs.readFileSync("sampleproducts.json");
// Define to JSON type
 var jsonContent = JSON.parse(contents);

router.get('/products', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send(jsonContent);
});



var server = router.listen(5000, function () {
    console.log('Node server is running..');
});
