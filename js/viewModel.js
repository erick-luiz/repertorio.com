var apiUrl = "https://raw.githubusercontent.com/erick-luiz/cDay/master/data/musics.json?token=AINUJ5UOR565ZBQWZIEKHN3BEMWLK";
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
            if(typeof done === 'function'){
				done(data);
			}
		}
	}; 
	
	xhttp.open("GET", url, true);
	xhttp.send();
}

let Part = function (name, chords, finalizations, review){
	this.name = name || "";
	this.chords = chords || [];
	this.finalizations = finalizations || [];
	this.review = review || "";
}

var Music = function (id, title, tone, stanzas, block){
    this.id = id;
	this.title = title || "Sem título";
	this.tone = tone || "NA";
	this.stanzas = stanzas || [];
	this.block = block || 999;
}

Music.prototype.getTitle = function () {
	return this.title + ` (${this.tone})`;
}

const spotlight = (str) => `<b><span style="color:blue">${str}</span></b>`;

Part.prototype.getPart = function () {
	let part = this;
	let times = part.finalizations? part.finalizations.length: 1;
	let chordsCore = part.chords ? part.chords.join(" | ") : "";

	if(times <= 1) {
	    return `[${spotlight(part.name)}] -  ${chordsCore}`;
	}

    let allFinalizations = "<br>    <span class=\"tab\"></span> ";
    part.finalizations.forEach((f, idx) => allFinalizations += `   [${spotlight(idx+1 + "º")}] ` + f.join(" | "))

	return `[${spotlight(part.name)}] - ${chordsCore} ${allFinalizations}`;
}

function Repertory(){
	self = this; 

	self.musics =  ko.observableArray([]);
    self.blocks = ko.observableArray([]);
    self.blocksIdx = ko.observableArray([]);

    getMusics(function(data){
		for(var i = 0; i < data.length; i++){
			let m = data[i];
			let parts = [];
			for (var j = 0; j < m.stanzas.length; j++) {
				let p = m.stanzas[j];
				parts.push(new Part(p.name, p.chords, p.finalizations, p.review));
			}

			self.musics.push(new Music(m.id,
				m.title, m.tone, parts, m.block));
		}

		// Build blocks
        let BlocksObjt = self.musics().groupBy("block");
		let arr = [...new Set(self.musics().map(m => m.block))].sort();
        let result = [];
        arr.forEach( idx => {
            result.push({"block": idx, "musics": BlocksObjt[`${idx}`]})
        });
		self.blocks(result);

	});



	self.selectedSortOpt = ko.observable("id");

	self.opts = ["id", "tone"];
	let optsFuncs = {
		"id": (i1, i2) => i1.id.localeCompare(i2.id),
		"tone": (i1, i2) => tones.indexOf(i1.tone.toUpperCase()) - tones.indexOf(i2.tone.toUpperCase())
    }

	self.musics().sort(optsFuncs[`${self.selectedSortOpt()}`]);
	self.changeOpt = function () {
		self.musics(self.musics().sort(optsFuncs[`${self.selectedSortOpt()}`]));
    }

    self.show = ko.observable(false);
    self.showBlock = function () {
        self.show(!self.show());
    }
}

ko.applyBindings(new Repertory());
    