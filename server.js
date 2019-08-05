//Install express server
const express = require('express');
const path = require('path');
var port = process.env.PORT || 8080;
const app = express();

// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist'));
//app.use(express.static('www'));

app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/images',express.static('public/images'));

//app.get('/*', function(req,res) {
    
 //     res.sendFile(path.join(__dirname+'/dist/index.html'));
//});

// Start the app by listening on the default Heroku port
app.listen(port, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`server started port: ${port}`);
    }
  });