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
