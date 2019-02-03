function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild; 
}
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
