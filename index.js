var express = require('express');
var exec = require('child_process').exec;

var app = express();

app.get('/cam/:function', function (req, res) {
  var func = req.params.function;
  var keys = {
    'start': '{F4}',
    'stop': '{F3}'
  };
  var cmd = __dirname + '/scripts/sendkeys.bat "YouCam" "' + keys[func] + '"';
  exec(cmd, function(error, stdout, stderr) {
    res.send('sendkeys: ' + keys[func]);
  });

  if (!func || typeof keys[func] === 'undefined') {
    return res.send('BOOO. NOT COOL.');
  }
});

app.listen(4444, function () {
  console.log('listening on port 4444');
});
