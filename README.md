# Utility I Found Online
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
Description: When you want to execute some code right after some conditions met like wainting for data to arrive or render to complete and 
you do not have anyway to 'listen' to it, this function may help you.

It open new threads that execute the 'tryToExecute_fn' which either throw error to try again 200ms later or execute 'executeSuccess_fn' which is the function meant to be execute.

In short: 'tryToExecute_fn' decide whether context is ready to execute 'executeSuccess_fn'.

P.S. Keep 'tryToExecute_fn' light for it do execute every 200ms.
	
```
var waiter_tryExecution = function(tryToExecute_fn,executeSuccess_fn){
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
