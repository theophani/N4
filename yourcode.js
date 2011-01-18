var TestSuite = (function () {
  var d = document;
  
  
  var resultsDiv = d.getElementById('results');
  
  var module = (function () {
    return {
      test : function (assertion, assert) {
       log( '&nbsp;&nbsp;&nbsp;&nbsp;' + 'Testing: ' + assertion);
      },
      before : function (f) {
        f();
      }
    };
  }());
  
  
  var log = function (output) {
    var consoleDiv = d.getElementById('console');
    var p = d.createElement('p');
    p.innerHTML = output;
    consoleDiv.appendChild(p);
    console.log(p);
  };
   
  return { module : function (assertion, mod) {
    log('Testing: ' + assertion);
    mod(module);
    console.log(mod);
  }};
}());