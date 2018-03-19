var https = require ("https");
var incomingData ='';

function getHTML (options, callback) {

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      incomingData += data + '\n';
    });
    response.on('end', function() {
      callback(incomingData);
    })
  });
}
  function printHTML (html) {
    console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);