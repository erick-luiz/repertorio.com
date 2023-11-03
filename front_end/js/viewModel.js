const apiUrl = "https://raw.githubusercontent.com/erick-luiz/repertorio.com/main/data/repertories.json";
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

var Music = function (id, title, tone, stanzas, block, link, blockLink){
    this.id = id;
	this.title = title || "Sem título";
	this.tone = tone || "NA";
	this.stanzas = stanzas || [];
	this.block = block || 999;
	this.link = link || null;
	this.blockLink = blockLink || null;
}

Music.prototype.getTitle = function () {
	return this.title + ` (${this.tone})`;
}

Music.prototype.hasLink = function () {
	if(this.link){
		return true;
	}
	return false;
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
	self.blocksBackup = [];
    self.blocksIdx = ko.observableArray([]);
	self.selectedRepertory = ko.observable("");
	self.repertoryName = ko.observable("");
	self.selectedBlock = ko.observable("all");
	self.filteredBlockText = ko.observable("");

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

    self.changeVisibleBlock = function () {
		
    	let currentBlock = self.selectedBlock();

    	self.blocks().forEach(block => {
			block.visible = self.selectedBlock().name == "0 todas"? self.selectedBlock() != block : block == self.selectedBlock();
    	});
		
    	arr = self.blocks();
    	self.blocks([]);
    	self.blocks(arr);
    	self.selectedBlock(currentBlock);
    }

	/*
		Esta func utiliza uma copia do Array de Blocos para filtrar o Array Existente. Assim, o Filtro muda a selecao de blocos atuais, 
		mas tambem consegue voltar para a versao inicial dos blocos. 
		Ela foi criada apenas como uma var por que não deve mudar nunca. É um backup dos blocos inicialmente montados. 
	*/
	self.filterBlocks = function() {
		let arr = []
		
		if(self.selectedBlock() != self.blocksBackup[0]) {
			self.selectedBlock(self.blocksBackup[0])
		}

		if (self.filteredBlockText()) {
			let filterStr =  self.filteredBlockText().toLowerCase();
			arr = ko.utils.arrayFilter(self.blocksBackup, function(block) {
				return block.name.toLowerCase().indexOf(filterStr) != -1 && block.name != "0 todas"
			});
		}

		if(arr.length == 0) {
			arr = [...self.blocksBackup];
		} 
		
		
		//arr.forEach(b => b.visible = b != self.blocksBackup[0])
		self.blocks(arr);
		self.selectedBlock(self.blocks()[0]);
		self.changeVisibleBlock()
	}
}



let getNormalizedNumber = (n) =>  (n.match(/^\d{1}\D{1}.*/) || (n.length == 1 && n.match(/^\d{1}/)))? "0" + n: n;
let fixBlockName = (b) => {
	let name = getNormalizedNumber("" + b.musics[0].block);

	if(name.match(/[0-9]*/)){
		b.name = name + " - " + b.musics.map(m => m.title).join("/");
	} else{
		b.name = name; 
	}
}

let fixBlockLink = (b) => {
	b.link = null;
	b.hasLink = false;
	for(let i = 0; i < b.musics.length; i++){
		let link = b.musics[i]["blockLink"];
		if(link){
			b.link = link;
			b.hasLink = true;
			return;
		}
	}

}

let sortBlockMusics = (b) => {
	b.musics = b.musics.sort((m1, m2) => (""+m1.id).localeCompare(""+m2.id));
}


let buildMusicsBlock = function(data){
	let musics = data["musics"]; // FIXME: tratar cenario de erro 



	for(var i = 0; i < musics.length; i++){
		let m = musics[i];
		m.block = "" + m.block;
		let parts = [];
		for (var j = 0; j < m.stanzas.length; j++) {
			let p = m.stanzas[j];
			parts.push(new Part(p.name, p.chords, p.finalizations, p.review));
		}

		self.musics.push(new Music(m.id,
			m.title, m.tone, parts, m.block, m.link, m.blockLink));
	}

	// Build blocks
    let BlocksObjt = self.musics().groupBy("block");
	let arr = [...new Set(self.musics().map(m => m.block))].sort();
    let result = [];
    arr.forEach( idx => {
        result.push({"block": idx, "musics": BlocksObjt[`${idx}`], "visible": true})
    });
    result.forEach(b => {
    	sortBlockMusics(b);
    	fixBlockName(b);
    	fixBlockLink(b);
    })

    result.push({"block": "0 todas", "musics": [], "visible": false, "name":"0 todas", "hasLink": false}); // FIXME: cleaner 
    result = result.sort((b1, b2) => (""+b1.name).localeCompare(""+b2.name));
 
	self.blocks(result);
	self.blocksBackup = [...result];
	self.blocksBackup.forEach(b => b.visible = true);
	self.blocksBackup[0].visible = false
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
    