/**
 * Module dependencies.
 */

var express = require('express')
  , app = module.exports = express.createServer()
  , config = require('./config')(app)
  , io = require('./websocket')(app)
  , routes = require('./routes')
  , socket = require('./socket')
  , schema = require('./schema')
  , mongoose = schema.mongoose
  , Log = mongoose.model('Log', schema.Log);

/**
 * Stream archive data.
 */

function stream() {
  var limit = 25000;
  
  Log.find().count(function(err, num) {
    var offset = Math.floor(Math.random() * (num - limit));
    
    Log.find()
      .sort('timestamp', 1)
      .limit(limit)
      .skip(offset)
      .exec(function(err, doc) {
        doc.forEach(function(el, n) {
          setTimeout(function() {
            io.sockets.emit(el.get('type'), el.get('data'));
          }, n * 50);
        });
        setTimeout(function() {
          stream();
        }, doc.length * 50);
      });
  });
}

/**
 * Error handler.
 */

process.on('uncaughtException', function (err) {
  //console.err(err);
});

/**
 * Configuration.
 */

app.configure(config.all);
app.configure('development', config.development);
app.configure('production', config.production);

/**
 * Broadcasting.
 */

socket.on('broadcast', function(data) {
  io.sockets.emit('data', data);
});

/**
 * Boot.
 */

socket.listen(9337, function() {
  app.listen(process.env.PORT || 3000);
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
  mongoose.connect(process.env.ARSOCK_MONGODB_URI || 'mongodb://localhost/arsock');
  stream();
});
