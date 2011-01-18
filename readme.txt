Write a simple test framework that will be run from the following html file and produce sensible results. Please do not use any JS library for your code (no JQuery, MooTools, Prototype, etc):

<html>
<head>
<script src='yourcode.js'></script>
<head>
<body>
<div id='results'></div>
<div id='console'></div>
<script>
TestSuite.module("Module A", function(module) {
module.test("working assertions", function(assert) {
  assert.equals(1, 1);

  assert.equals('1', '1');

  assert.notEquals('1', 1);
});

module.test("failing assertion", function(assert) {
  assert.equals(1, 2, "Expected this to break.");
});
});

TestSuite.module("Module B", function(module) {
var a;

module.before(function () {
  a = 1;
});

module.test("messing with a", function(assert) {
  a = 1010;
  assert.equals(a, 1010);
});

module.test("failing assertion", function(assert) {
  assert.equals(a, 1);
});
});
</script>
</body>