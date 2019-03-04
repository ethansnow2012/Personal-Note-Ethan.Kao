# My Creation
### 1. ut_waiter
```
TL;DR: 'tryToExecute_fn' decide whether context is ready to execute 'executeSuccess_fn'.
```
Description: When you want to execute some code right after some conditions met like wainting for data to arrive or render to complete and 
you do not have anyway to 'listen' to it, this function may help you.

It open new threads that execute the 'tryToExecute_fn' which either throw error to try again 200ms later or execute 'executeSuccess_fn' which is the function meant to be execute.

BTW: 
1. Keep 'tryToExecute_fn' light for it do execute every 200ms.
2. Data can be passed between 'tryToExecute_fn' and 'executeSuccess_fn' via 'this'.
```
var ut_waiter = function(tryToExecute_fn,executeSuccess_fn){
	var _thread = function(){
		try{
			tryToExecute_fn.bind(this)()
			executeSuccess_fn.bind(this)()
		}catch (err) {
        		setTimeout(_thread, 200)
		}
		
	}
	_thread()
}
```
# Some Awesome in Vue.js Source Code
### 1.proxy
Mantra: We all know the necessity to do DRY principle at our best. That is in 'logic' domain we do not repeat our self. How about in data domain? Keep the data from duplicating, shall we?

P.S. Program is the combination of logic and data. I thought...
```
function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }
```
### 2.makeMap
Mantra: Coding in string domain is so efficent so powerful but, without care, it can backfire easily. A factory function that convert things from string domain to logic domain is nice, isn't it?
```
function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }
```
### 3. Nice Recursive Function
I forgot which line...
Things like this:
```
function a(){
	if (condition1){
		a() //Recursive
	}else {
		//Do something at the end of recursion
	}
}
```
### 4. Code Encapsulation
```
(function (global, factory) {
	/* This is where the API interact with the context */
}(this, function (){
	/* Build the API here */
})
```
# Utility Found Online
convert string into Html element
```
function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild; 
}
```
 [Reference](https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro)

# Javascript Technique
1. Block(cluster) the scripts
```
{
	console.log("log1");
	console.log("log2");
}
```
```
2==1?2:(console.log("log1"),console.log("log2"))
```

# Murmur
1. In vue.js, I found this line `var perf = inBrowser && window.performance;` This is succinct but how can someone understand it exp. people from strong typed language.
BTW, `true||'a'//return true` and `'a'||true //'a'`
2. In my understanding, Factory Pattern takes in "plain values" and then return new "object"; Decoration Pattern takes in an "object" and then return a wrapped the object(without new). Correct?
3. Framework and libraries bring in some power but also introduce some limitation. Beware.
4. One difficult part I encountered in multi-thread programing is that some thread once it invoked it will execute through even when context changed it ought to be canceled.
5. Question: two AJAX wait for each other's result what is the best way to deal with it.
6. Reminder: extract the embeded functions to be middle moderating variables if they are meaningful enough.
7. Async code is hard to debug because some cases occur rarely or are hard to replicate.
