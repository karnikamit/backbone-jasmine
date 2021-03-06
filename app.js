var express = require("express"),
    app     = express.createServer();
    
app.get("/", function(req, res) {
  res.redirect("/javascript/spec/SpecRunner.html");
});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/'));
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});

app.listen(3000);