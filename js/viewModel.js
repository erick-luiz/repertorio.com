const apiUrl = "https://raw.githubusercontent.com/erick-luiz/repertorio.com.fe/master/data/repertories.json";
const rest = restService;
const cache = cacheService;


const tones = ["Cb", "C", "C#", "Cbm", "Cm", "C#m",
	"Db", "D", "D#", "Dbm", "Dm", "D#m",
	"Eb", "E", "E#", "Ebm", "Em", "E#m",
	"Fb", "F", "F#", "Fbm", "Fm", "F#m",
	"Gb", "G", "G#", "Gbm", "Gm", "G#m",
	"Ab", "A", "A#", "Abm", "Am", "A#m",
	"Bb", "B", "B#", "Bbm", "Bm", "B#m"]

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


let _getRepertories = function(self){
	rest.get(apiUrl, function(data){
		self.repertories(data);
	});
}


function Repertory(){
	
	self = this; 
	self.repertories = ko.observableArray([]);
	self.musics =  ko.observableArray([]);
    self.blocks = ko.observableArray([]);
    self.blocksIdx = ko.observableArray([]);
	self.selectedRepertory = ko.observable("");
	self.repertoryName = ko.observable("");

	_getRepertories(self);
    
    self._reset = function() {
    	self.blocks([]);
    	self.musics([]);
    	self.repertoryName("");
    }

	self.changeRepertory = function () {
		self._reset();
        self.getMusics(self ,self.selectedRepertory());
    }

    self.cleanCache = function(){
		cache.remove(self.selectedRepertory().id);
		self.changeRepertory();   	
    }
}

let buildMusicsBlock = function(data){
	let musics = data["musics"]; // FIXME: tratar cenario de erro 
		
	for(var i = 0; i < musics.length; i++){
		let m = musics[i];
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
    result = result.sort((b1, b2) => b1.block - b2.block);

	self.blocks(result);
}

let buildMusicsBlockAndSaveInCache = function(data){
	buildMusicsBlock(data);
	cache.save(data.id, data);
}

Repertory.prototype.getMusics = function(self, repertory){
	self.repertoryName(repertory.name);
	let result = cache.queryById(repertory.id);
	if(result){
		buildMusicsBlock(result);
	} else {
		rest.get(repertory.link, buildMusicsBlockAndSaveInCache);
	}
}


ko.applyBindings(new Repertory());
    