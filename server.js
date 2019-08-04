//Install express server
const express = require('express');
const path = require('path');
var port = process.env.PORT || 8080;
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    
      res.sendFile(path.join(__dirname+'/dist/home.page.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`server started port: ${port}`);
    }
  });