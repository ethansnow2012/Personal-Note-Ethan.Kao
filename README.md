# Some Awosome in Vue.js Source Code
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
# My Creation
### 1. ut_waiter
```
TL;DR: 'tryToExecute_fn' decide whether context is ready to execute 'executeSuccess_fn'.
```
Description: When you want to execute some code right after some conditions met like wainting for data to arrive or render to complete and 
you do not have anyway to 'listen' to it, this function may help you.

It open new threads that execute the 'tryToExecute_fn' which either throw error to try again 200ms later or execute 'executeSuccess_fn' which is the function meant to be execute.

P.S. Keep 'tryToExecute_fn' light for it do execute every 200ms.
	
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
