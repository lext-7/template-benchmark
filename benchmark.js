var data = require('./data');

var count = 100000;
var ect = require('./ect/ect.js');
var ejs = require('./ejs/ejs.js');
var myejs = require('./ejs/my-ejs.js');
var ejsWithoutWith = require('./ejs-without-with/ejs.js');
var myejsWithoutWith = require('./ejs-without-with/my-ejs.js');
var fastEjs = require('./ejs-without-with/fast-ejs.js');
var jade = require('./jade/jade.js');
var jadeWithoutWith = require('./jade-without-with/jade.js');
var eco = require('./eco/eco.js');
// var swig = require('./swig/swig.js');
var hogan = require('./hogan/hogan.js');
var dust = require('./dust/dust.js');
var fest = require('./fest/fest.js');
var dot = require('./dot/dot.js');
var handlebars = require('./handlebars/handlebars.js');
var coffeekup = require('./coffeekup/coffeekup.js');
var underscore = require('./underscore/underscore.js');
var gaikan = require('./gaikan/gaikan.js');

var test = function(name, sample, cb) {
	var i = 0;
	var start, compileTime, hasCompiler = typeof sample.compile !== 'undefined';
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			compileTime = now - start;
		} else if (i === count * 2) {
			var now = Date.now();
			cb(null, name, now - start, compileTime);
		} 
	}
	start = Date.now();
	for (var j = 0; j < count; j++) {
		hasCompiler ? sample.compile(data, done) : sample.prepare(data, done);
	}
	sample.prepare(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var testUnescaped = function(name, sample, cb) {
	var i = 0;
	var start, compileTime, hasCompiler = typeof sample.compileUnescaped !== 'undefined';
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			compileTime = now - start;
		} else if (i === count * 2) {
			var now = Date.now();
			cb(null, name, now - start, compileTime);
		} 
	}
	start = Date.now();
	for (var j = 0; j < count; j++) {
		hasCompiler ? sample.compileUnescaped(data, done) : sample.prepareUnescaped(data, done);
	}
	sample.prepareUnescaped(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var samples = [
	{ name : 'ECT', sample : ect },
	// { name : 'fast ejs', sample : fastEjs },
	// { name : 'my EJS without `with`', sample : myejsWithoutWith },
	// { name : 'EJS without `with`', sample : ejsWithoutWith },
	// { name : 'doT', sample : dot },
	// { name : 'Jade', sample : jade },
	// { name : 'CoffeeKup', sample : coffeekup },
	// { name : 'Jade without `with`', sample : jadeWithoutWith },
	// { name : 'Handlebars.js', sample : handlebars },
	// // { name : 'Eco', sample : eco },
	// { name : 'my EJS', sample : myejs },
	// { name : 'EJS', sample : ejs },
	// { name : 'Underscore', sample : underscore },
	// // // { name : 'Swig', sample : swig },
	// { name : 'Fest', sample : fest },
	// // { name : 'Gaikan', sample: gaikan },
	// { name : 'Hogan.js', sample : hogan },
	// { name : 'Dust', sample : dust }
];

var runTests = function () {
	if (samples.length) {
		var sample = samples.pop();
		test(sample.name, sample.sample, function (err, name, escapedRenderTime, escapedCompileTime) {
			testUnescaped(sample.name, sample.sample, function (err, name, unescapedRenderTime, unescapedCompileTime) {
				console.log(name);
				console.log('  Escaped compile time     : ' + escapedCompileTime + 'ms');
				console.log('  Escaped render time      : ' + escapedRenderTime + 'ms');
				console.log('  Unescaped compile time   : ' + unescapedCompileTime + 'ms');
				console.log('  Unescaped render time    : ' + unescapedRenderTime + 'ms');
				console.log('  compile time             : ' + (escapedCompileTime + unescapedCompileTime) + 'ms');
				console.log('  render time              : ' + (escapedRenderTime + unescapedRenderTime) + 'ms');
				console.log('  Total                    : ' + (escapedCompileTime + escapedRenderTime + unescapedCompileTime + unescapedRenderTime) + 'ms');
				console.log('');
				runTests();
			});
		});
	}
};

console.log('Compiling and endering ' + count + ' templates:\n');
runTests();
