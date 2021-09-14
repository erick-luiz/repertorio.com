let restService = (function(){
	
	function get(url, callback){

		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var data = JSON.parse(this.responseText);
	            if(typeof callback === 'function'){
					callback(data);
				}
			}
		}; 
		
		xhttp.open("GET", url, true);
		xhttp.send();
	}

	return { get }
})();