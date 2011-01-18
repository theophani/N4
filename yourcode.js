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
    
    var equals = function equals(a, b) {
      return a === b;
    };
    var notEquals = function notEquals(a, b) {
      return a !== b;
    };
    var echo = function(value) {
      if (typeof value === 'string') {
        return "'" + value + "'";
      } else {
        return value;
      }
    };
    
    var check = function(a, b, f, comment) {
      var results = d.getElementById('results');
      var p = d.createElement('p');
      p.innerHTML   = 'a : ' + echo(a) + ', ' +
                      'b : ' + echo(b) + ', ' +
                      f.name + ' : ' +
                      (f(a, b) ? 'true' : 'false');
                      
      p.style.color = f(a, b) ? 'green' : 'red';
      results.appendChild(p);
      if (comment !== undefined) {
        log('&nbsp;&nbsp;&nbsp;&nbsp;' + 'Note: ' + comment); 
      }
    };
    
    return {
      equals : function (a, b, comment) {
        check(a, b, equals, comment);
      },
      notEquals : function (a, b, comment) {
        check(a, b, notEquals, comment);
      }
    };
  }());
  
  var _module = (function () {
    return {
      test : function (assertion, assert) {
       log('&nbsp;&nbsp;' + 'Testing: ' + assertion + ' : ' + assert);
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
  }};
}());