var ajax_new = (function () {
		var ajaxFunc = (function () {

			// 依據不同的瀏覽器，取得 XMLHttpRequest 物件
			var createAJAX = function () {
				ajax = null;
				var versions = [
					"MSXML2.XmlHttp.6.0",
					"MSXML2.XmlHttp.5.0",
					"MSXML2.XmlHttp.4.0",
					"MSXML2.XmlHttp.3.0",
					"MSXML2.XmlHttp.2.0",
					"Microsoft.XmlHttp"
				];
				if (window.ActiveXObject) {
					for (var i = 0; i < versions.length; i++) {
						try {
							return new ActiveXObject(versions[i]);
							break;
						} catch (e) {
							return null;
						}
					}
				} else if (window.XMLHttpRequest) {
					return new XMLHttpRequest();
				} else {
					return null;
				}
			};

			// 送出資料
			var ajaxSendRequest = function (uri, method, synchronize, callback, sendData) {
				// AJAX 物件
				var ajax = createAJAX();
				

				if (!ajax) {
					alert('使用不相容 XMLHttpRequest 的瀏覽器');
					return 0;
				}
				
				if(location.hostname.indexOf("my")>-1){
					uri= "https://cdn-www.acti.com"+uri;	
				}else{
					uri= (location.hostname.indexOf("cdn-")>-1?"https://cdn-www.acti.com":"https://www.acti.com")+uri;	
					
				}
				
				//uri= (location.hostname.indexOf("cdn-")>-1?"https://cdn-www.acti.com":"https://www.acti.com")+uri;	
				ajax.open(method, uri, synchronize);
				ajax.withCredentials = true



				// 非同步傳輸的回應函式，用來處理伺服器回傳的資料	
				ajax.onreadystatechange = function () {
					// readyState:
					// 　０：尚未讀取
					// 　１：讀取中
					// 　２：已下載完畢
					// 　３：資訊交換中
					// 　４：處理完畢
					if (ajax.readyState == 4) {
						//HTTP狀態碼
						if (ajax.status == 200) {
							callback(ajax.responseText);
						}
					}
				};
				if (method == 'POST') {
					// POST，則必須先將 MIME 型態改好
					ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				}
				ajax.send(sendData);
				ajaxArray.push(ajax);
				return ajax;
			};

			var ajaxSendMethod = (function () {
				// 非同步參數synchronize
				// Data Format
				// {a:1,b:2}

				var query;
				var get = function (url, synchronize, callback, data) {
					dealWith(data);
					return ajaxSendRequest(url + (query.length ? '?' + query.join('&') : ''), 'GET', synchronize, callback, null);
				};

				var post = function (url, synchronize, callback, data) {
					dealWith(data);
					return ajaxSendRequest(url, 'POST', synchronize, callback, query.join('&'));
				};

				var dealWith = function(data) {
					query = [];
					for (var key in data) {
						query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
					}
				};

				return {
					get: get,
					post: post
				};
			})();

			return {
				ajaxSendMethod: ajaxSendMethod
			};
		})();

		var getQueryString = function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = location.search.substr(1).match(reg);
			if (r != null) return unescape(decodeURI(r[2]));
			return '';
		};

		return {
			ajaxFunc: ajaxFunc,
			getQueryString: getQueryString
		};
	})();
