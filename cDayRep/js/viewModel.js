var apiUrl = "https://raw.githubusercontent.com/erick-luiz/cDay/master/cDayRep/data/musics.json?token=AINUJ5UOR565ZBQWZIEKHN3BEMWLK";
const tones = ["Cb", "C", "C#", "Cbm", "Cm", "C#m",
	"Db", "D", "D#", "Dbm", "Dm", "D#m",
	"Eb", "E", "E#", "Ebm", "Em", "E#m",
	"Fb", "F", "F#", "Fbm", "Fm", "F#m",
	"Gb", "G", "G#", "Gbm", "Gm", "G#m",
	"Ab", "A", "A#", "Abm", "Am", "A#m",
	"Bb", "B", "B#", "Bbm", "Bm", "B#m"]


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

let Part = function (id, partName, chords, times){
	this.id = id || 0;
	this.partName = partName || "";
	this.chords = chords || [];
	this.times = times || 1;
}

var Music = function (title, tone, chords, sequence, idx){
	this.title = title || "Sem título";
	this.tone = tone || "NA";
	this.chords = chords || [];
	this.sequence = sequence || [];
	this.idx = idx;
}

Music.prototype.getTitle = function () {
	return (this.idx ? this.idx : "n") + ".  " + this.title + ` (${this.tone})`;
}

Music.prototype.getPart = function (seq) {
	let parts = this.chords.filter(c => c.id == seq);
	if (parts && parts.length > 0) {
		let part = parts[0];

		return `[<b>${part.partName}</b>] -  ${part.times > 1 ? "|:" : ""} ${part.chords ? part.chords.join(" | ") : ""} ${part.times > 1 ? ":| (" + part.times + "x)": ""}`;
	}
	return "";
}

function cDayRepertorio(){
	self = this; 

	this.musics =  ko.observableArray([]);
    
    getMusics(function(data){
		for(var i = 0; i < data.length; i++){
			let m = data[i];
			let parts = [];
			for (var j = 0; j < m.chords.length; j++) {
				let p = m.chords[j];
				parts.push(new Part(p.id, p.partName, p.chords, p.times));
			}

			self.musics.push(new Music(
				m.title, m.tone, parts, m.sequence, m.idx));
		}
	});

	self.selectedSortOpt = ko.observable("id");

	self.opts = ["id", "tone"];
	let optsFuncs = {
		"id": (i1, i2) => i1.idx - i2.idx,
		"tone": (i1, i2) => tones.indexOf(i1.tone.toUpperCase()) - tones.indexOf(i2.tone.toUpperCase())
    }

	self.musics().sort(optsFuncs[`${self.selectedSortOpt()}`]);

	self.changeOpt = function () {
		self.musics(self.musics().sort(optsFuncs[`${self.selectedSortOpt()}`]));
    }
}

ko.applyBindings(new cDayRepertorio());
    