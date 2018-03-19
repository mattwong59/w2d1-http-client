var https = require ("https");
var incomingData ='';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

function getAndPrintHTML (options) {

  /* Add your code here */
 https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      incomingData += data + '\n';
    });

    response.on('end', function () {
      console.log(incomingData);
    });
  });
}

getAndPrintHTML(requestOptions);
