let cacheService = (function(){
	
	const save = function(id, data){
		localStorage.setItem(id, JSON.stringify(data));
	}

	const _queryByIdAsString = function(id){
		return localStorage.getItem(id);
	}

	const queryById = function(id){
		return JSON.parse(_queryByIdAsString(id));
	}

	const clear = function(){
		localStorage.clear();
	}

	return {save, queryById, clear};

})();