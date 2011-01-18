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
    
    var check = function(condition, comment) {
      var results = d.getElementById('results');
      var p = d.createElement('p');
      p.innerHTML   = condition ? 'true' : 'false';
      p.style.color = condition ? 'green' : 'red';
      results.appendChild(p);
      console.log(p);
      if (comment !== undefined) {
        log('&nbsp;&nbsp;&nbsp;&nbsp;' + 'Note: ' + comment); 
      }
    };
    
    return {
      equals : function (a, b, comment) {
        check(a === b, comment);
      },
      notEquals : function (a, b, comment) {
        check(a !== b, comment);
      }
    };
  }());
  
  var _module = (function () {
    return {
      test : function (assertion, assert) {
       log('&nbsp;&nbsp;' + 'Testing: ' + assertion);
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