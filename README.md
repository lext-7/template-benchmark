# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.3 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v2.7.4 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v1.0.0 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.12.1
- [Gaikan](https://github.com/Deathspike/gaikan) v1.3.4
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v4.0.5 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v3.0.2 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v0.28.1 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v0.13.5
- [Underscore](https://github.com/documentcloud/underscore) v1.8.3 ([website](http://underscorejs.org/))

## Test environment

- CPU: Intel Core i5 450M 2.4Ghz
- OS: Ubuntu Server 12.04
- Node.JS version: 0.8.21

## Results

	Compiling and rendering 100000 templates:

	Dust  
		Escaped compile time     : 35024ms  
		Escaped render time      : 2258ms  
		Unescaped compile time   : 35475ms  
		Unescaped render time    : 750ms  
		compile time             : 70499ms  
		render time              : 3008ms  
		Total                    : 73507ms  

	Hogan.js  
		Escaped compile time     : 1308ms  
		Escaped render time      : 1683ms  
		Unescaped compile time   : 1307ms  
		Unescaped render time    : 285ms  
		compile time             : 2615ms  
		render time              : 1968ms  
		Total                    : 4583ms  

	Fest
	Escaped compile time     : 152080ms  
	Escaped render time      : 1584ms  
	Unescaped compile time   : 167779ms  
	Unescaped render time    : 220ms  
	compile time             : 319859ms  
	render time              : 1804ms  
	Total                    : 321663ms  

	Underscore  
	Escaped compile time     : 4966ms  
	Escaped render time      : 1980ms
	Unescaped compile time   : 4862ms
	Unescaped render time    : 1394ms
	compile time             : 9828ms
	render time              : 3374ms
	Total                    : 13202ms

	EJS
	Escaped compile time     : 9887ms
	Escaped render time      : 4291ms
	Unescaped compile time   : 10150ms
	Unescaped render time    : 2474ms
	compile time             : 20037ms
	render time              : 6765ms
	Total                    : 26802ms

	my EJS
	Escaped compile time     : 7938ms
	Escaped render time      : 3775ms
	Unescaped compile time   : 7931ms
	Unescaped render time    : 1939ms
	compile time             : 15869ms
	render time              : 5714ms
	Total                    : 21583ms

	Handlebars.js
	Escaped compile time     : 1300ms
	Escaped render time      : 1986ms
	Unescaped compile time   : 1304ms
	Unescaped render time    : 514ms
	compile time             : 2604ms
	render time              : 2500ms
	Total                    : 5104ms

	Jade without `with`
	Escaped compile time     : 71841ms
	Escaped render time      : 1897ms
	Unescaped compile time   : 71091ms
	Unescaped render time    : 444ms
	compile time             : 142932ms
	render time              : 2341ms
	Total                    : 145273ms

	CoffeeKup
	Escaped compile time     : 136637ms
	Escaped render time      : 2160ms
	Unescaped compile time   : 137688ms
	Unescaped render time    : 4498ms
	compile time             : 274325ms
	render time              : 6658ms
	Total                    : 280983ms

	Jade
	Escaped compile time     : 327211ms
	Escaped render time      : 3708ms
	Unescaped compile time   : 316174ms
	Unescaped render time    : 2020ms
	compile time             : 643385ms
	render time              : 5728ms
	Total                    : 649113ms

	doT
	Escaped compile time     : 4780ms
	Escaped render time      : 1940ms
	Unescaped compile time   : 4360ms
	Unescaped render time    : 42ms
	compile time             : 9140ms
	render time              : 1982ms
	Total                    : 11122ms

	EJS without `with`
	Escaped compile time     : 10207ms
	Escaped render time      : 1985ms
	Unescaped compile time   : 10440ms
	Unescaped render time    : 485ms
	compile time             : 20647ms
	render time              : 2470ms
	Total                    : 23117ms

	my EJS without `with`
	Escaped compile time     : 7402ms
	Escaped render time      : 1526ms
	Unescaped compile time   : 7615ms
	Unescaped render time    : 116ms
	compile time             : 15017ms
	render time              : 1642ms
	Total                    : 16659ms

	fast ejs
	Escaped compile time     : 5608ms
	Escaped render time      : 1424ms
	Unescaped compile time   : 5575ms
	Unescaped render time    : 63ms
	compile time             : 11183ms
	render time              : 1487ms
	Total                    : 12670ms
	
	ECT                                                                                                                                                                 
	Escaped compile time     : 96582ms                                                                                                                                
	Escaped render time      : 33ms                                                                                                                                   
	Unescaped compile time   : 95141ms                                                                                                                                
	Unescaped render time    : 38ms                                                                                                                                   
	compile time             : 191723ms                                                                                                                               
	render time              : 71ms                                                                                                                                   
	Total                    : 191794ms

## Usage

	git clone git://github.com/baryshev/template-benchmark.git --recursive
	cd template-benchmark
	npm install
	npm start
