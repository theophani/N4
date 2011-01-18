var TestSuite = (function () {
  var d = document;

  var log = function (output) {
    var consoleDiv = d.getElementById('console');
    var p = d.createElement('p');
    p.innerHTML = output;
    consoleDiv.appendChild(p);
    console.log(p);
  };

  var _assert = (function () {
    return {
      equals : function (a, b, comment) {
        // check and report
        var results = d.getElementById('results');
        var p = d.createElement('p');
        p.innerHTML = a === b ? 'true' : 'false';
        results.appendChild(p);
        console.log(p);
      },
      notEquals : function (a, b, comment) {
        // check and report
        var results = d.getElementById('results');
        var p = d.createElement('p');
        p.innerHTML = a !== b ? 'true' : 'false';
        results.appendChild(p);
        console.log(p);
      }
    };
  }());
  
  var _module = (function () {
    return {
      test : function (assertion, assert) {
       log('&nbsp;&nbsp;&nbsp;&nbsp;' + 'Testing: ' + assertion);
       assert(_assert);
      },
      before : function (f) {
        f();
      }
    };
  }());
  
  return { module : function (assertion, module) {
    log('Testing: ' + assertion);
    module(_module);
    console.log(_module);
  }};
}());