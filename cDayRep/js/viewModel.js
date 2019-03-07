var apiUrl = "http://localhost:8080/";

function getMusics(done){
	var url = apiUrl + "musics";
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText);
            console.log(data);
            if(typeof done === 'function'){
				done(data);
			}
		}
	}; 
	
	xhttp.open("GET", url, true);
	xhttp.send();
}

var Music = function(title, letra, cifra, idx){
    this.title = title || "Sem título"; 
    this.letra = letra || "Letra indefinida"; 
    this.cifra = cifra;
    this.idx = idx;
}
Music.prototype.getTitle = function(){
    return this.idx + ".  " + this.title;
}
function cDayRepertorio(){
	self = this; 

	this.musics =  ko.observableArray([]);
    
    getMusics(function(data){
		for(var i = 0; i < data.musics.length; i++){
			self.musics.push(new Music(
				data.musics[i].title,
                data.musics[i].letra,
                data.musics[i].cifra,
                i+1
			));
		}
	});

    self.visibleTitle = ko.observable("");
    self.showLetra = function(){
        self.visibleTitle(this.title);
    }

}

ko.applyBindings(new cDayRepertorio());
    