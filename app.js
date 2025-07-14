const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// TODO: implementar esta seleção direta
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const primeiroRepertorio = urlParams.get('repertorio')

const repertorios = [repertorioGPC, repertorioDiResenha, novas]

const musicaNaoEncontradaTemplate = (nome) => {
    return { 
        title: nome,
        tone: "-",
        stanzas: [
            {
                name: "-",
                chords: ["MUSICA NÃO ENCONTRADA!!!!"]
            }
        ]
    }
}

repertorios.forEach((r, i) => {
    r.id = i;
    let blocoId = 1;
    let primeiroBloco = {id:0, nome: "0 Todas", musicas: []}
    r.blocos.forEach((b, j) => {
        b.id = blocoId++;
        b.nome =  b.nome || b.musicas.join(" - ")
        let musicasDoBloco = [];
        b.musicas?.forEach((m) => {
            let music = musicas.find(mus => mus.title === m);
            if (!music) {
                music = musicaNaoEncontradaTemplate(m);
                console.warn(`Música "${m}" não encontrada no repertório "${r.nome}"`);
            }
            musicasDoBloco.push(music);
            primeiroBloco.musicas.push(music)
        });
        b.musicas = musicasDoBloco;
        b.nome =  "Bloco " +  b.id + " - " + (b.nome || b.musicas.map(m => m.title).join(" - "))
    });
    r.blocos = [primeiroBloco, ...r.blocos]
});

let state = {
    repertorios: repertorios,
    blocos: [],
    blocksBackup: [],
    repertorioSelecionado: repertorios[0],
    blocoSelecionado: repertorios[0].blocos[0],
    filteredBlockText: "",
};

function spotlight(str) {
    return `<b><span style="color:blue">${str}</span></b>`;
}

function getTitle(m) {
    return `${m.title} (${m.tone})`;
}

let currentAudio = null;

function renderPart(part) {
    const chords = part.chords?.join(" | ") || "";
    const times = part.finalizations?.length || 1;
    let audioBtn = "";
    if (part.audio) {
        audioBtn = `<button class=\"audio-btn\" onclick=\"toggleAudio('audios/${part.audio}.ogg')\"><span role='img' aria-label='audio'>🔊</span></button> `;
    }

    if (times <= 1) {
        return `[${spotlight(part.name)}] - ${chords} ${audioBtn}`;
    }

    const finals = part.finalizations
        .map((f, idx) => `[${spotlight((idx + 1) + "º")}] ${f.join(" | ")}`)
        .join("<br>    <span class=\"tab\"></span> ");

    return `[${spotlight(part.name)}] - ${chords} <br>    <span class=\"tab\"></span> ${finals} ${audioBtn}`;
}

function renderMusic(music) {
    const container = document.createElement("li");
    container.className = "d-flex flex-row align-items-start justify-content-start";

    const info = document.createElement("div");
    info.className = "repertory_info";

    if (music.link) {
        const a = document.createElement("a");
        a.href = music.link;
        a.target = "_blank";

        const title = document.createElement("div");
        title.className = "repertory_date music_link";
        title.innerText = `${getTitle(music)}`;
        a.appendChild(title);
        info.appendChild(a);
    } else {
        const title = document.createElement("div");
        title.className = "repertory_date";
        title.innerText = `${getTitle(music)}`;
        info.appendChild(title);
    }

    if (music.audio) {
        let audioBtn = document.createElement("button");
        audioBtn.className = "audio-btn";
        audioBtn.onclick = () => toggleAudio(`audios/${music.audio}`);
        audioBtn.innerHTML = `<span role='img' aria-label='audio'>🔊</span>`;
        info.appendChild(audioBtn);
    }
    
    music.stanzas.forEach((part) => {
        const stanza = document.createElement("div");
        stanza.className = "repertory_nam";
        stanza.innerHTML = renderPart(part);
        info.appendChild(stanza);
    });

    container.appendChild(info);
    return container;
}

function renderBlock(bloco) {
    const blockDiv = document.createElement("div");
    blockDiv.className = "block";

    const fieldset = document.createElement("fieldset");

    // Botão para bloco anterior
    let leftBtn = null;
    if (state.blocoSelecionado && state.blocoSelecionado?.id != 0) {
        leftBtn = document.createElement("button");
        leftBtn.innerText = "◀";
        leftBtn.className = "block-nav block-nav-left bt-simple previous-btn";
        leftBtn.onclick = () => moveBlock(-1);
    }

    const title = document.createElement("span");
    title.className = bloco?.hasLink ? "block-title block_link" : "block-title";
    title.innerText = bloco.nome;

    if (bloco.link) {
        const a = document.createElement("a");
        a.href = bloco.link;
        a.target = "_blank";
        a.appendChild(title);
        fieldset.appendChild(a);
    } else {
        fieldset.appendChild(title);
    }

    // Botão para bloco seguinte
    let rightBtn = null;
    if (state.blocoSelecionado && state.blocoSelecionado?.id != 0) {
        rightBtn = document.createElement("button");
        rightBtn.innerText = "▶";
        rightBtn.className = "block-nav block-nav-right bt-simple next-btn";
        rightBtn.onclick = () => moveBlock(1);
    }

    bloco.musicas.forEach(m => {
        const mDiv = document.createElement("div");
        mDiv.className = "block-music";
        mDiv.appendChild(renderMusic(m));
        fieldset.appendChild(mDiv);
    });
    if (leftBtn) {
        blockDiv.appendChild(leftBtn);
    }
    blockDiv.appendChild(fieldset);
    if (rightBtn) {
        blockDiv.appendChild(rightBtn);
    }

    if (bloco.id == 0) {
        blockDiv.style.display = "none";
    }
    return blockDiv;
}

function renderBlocks() {
    const container = $("#blocks-container");
    container.innerHTML = "";
    state.blocos.filter(b => b.visible).forEach(b => {
        container.appendChild(renderBlock(b));        
    });
}

function alteraBlocoVisivel() {
    const selected = state.blocoSelecionado;
    state.repertorioSelecionado.blocos.forEach(b => b.visible = selected?.id == 0 || b === selected);
    renderBlocks();
}

function alteraParaOBlocoTodas() {
    state.blocoSelecionado = state.repertorioSelecionado.blocos[0];
    alteraBlocoVisivel();
}

function filtraBloco() {

    const text = state.filteredBlockText.toLowerCase();
    state.blocksBackup = [...state.repertorioSelecionado.blocos];

    if (text.trim() === "") {
        // Se o filtro estiver vazio, mostra todos e seleciona o bloco 0
        state.blocos = [...state.blocksBackup];
        state.blocos.forEach(b => b.visible = true);
        state.blocoSelecionado = state.blocos.find(b => b.id === 0) || state.blocos[0];
        preencheBlocoSelecionado();
    } else {
        // Filtra blocos pelo texto, exceto o bloco 0
        const filtered = state.blocksBackup.filter(b => b.nome.toLowerCase().includes(text) && b.id != 0);
        state.blocos = filtered.length ? filtered : [];
        state.blocos.forEach(b => b.visible = true);
        // Seleciona o primeiro bloco filtrado, se houver
        state.blocoSelecionado = state.blocos[0] || null;
    }
    alteraBlocoVisivel();

}

function alteraRepertorio() {
    const repertorio = state.repertorioSelecionado;
    $("#repertory-name").innerText = repertorio.nome;

    state.blocos = repertorio.blocos;
    state.blocoSelecionado = state.blocos.find(b => b.nome == 0);
    if(!state.blocoSelecionado) state.blocoSelecionado = state.blocos[0] 
    alteraBlocoVisivel();
    preencheBlocoSelecionado();
}

function preencheBlocoSelecionado() {
    const select = $("#block-select");
    select.innerHTML = "";
    state.repertorioSelecionado.blocos.forEach(b => {
        const option = document.createElement("option");
        option.text = b.nome;
        option.value = b.id;
        select.appendChild(option);
    });
    select.value = state.blocoSelecionado?.id || 0;
}

function preencheRepertorioSelecionado() {
    const select = $("#repertory-select");
    select.innerHTML = "";
    let selectTheItem = true;
    state.repertorios.forEach(r => {
        const option = document.createElement("option");
        option.text = r.nome;
        option.value = r.id;
        if (selectTheItem) {
            option.selected = true;
            state.repertorioSelecionado = state.repertorios[0];
            selectTheItem = false;
        }
        select.appendChild(option);
    });
}

function setupEvents() {
    
    $("#repertory-select").addEventListener("change", e => {
        const id = e.target.value;
        state.repertorioSelecionado = state.repertorios.find(r => r.id == id);
        alteraRepertorio();
    });

    $("#block-filter").addEventListener("keyup", e => {
        state.filteredBlockText = e.target.value;
        filtraBloco();
    });

    $("#block-select").addEventListener("change", e => {
    // Limpa filtro ao trocar o bloco pelo select
    const filterInput = $("#block-filter");
    if (filterInput) {
        filterInput.value = "";
    }
    state.filteredBlockText = "";
    state.blocksBackup = [...state.repertorioSelecionado.blocos];
    state.blocos = [...state.blocksBackup];
    const val = e.target.value;
    state.blocoSelecionado = state.repertorioSelecionado.blocos.find(b => b.id == val);
    alteraBlocoVisivel();
});
}

// Função para navegar entre blocos
function moveBlock(direction) {
    const currentIdx = state.blocos.findIndex(b => b === state.blocoSelecionado);
    let nextIdx = currentIdx + direction;
    // Pular o bloco "0 todas"
    if (state.blocos[nextIdx] && state.blocos[nextIdx].id == 0) {
        nextIdx += direction;
    }
    if (nextIdx >= 0 && nextIdx < state.blocos.length) {
        state.blocoSelecionado = state.blocos[nextIdx];
        alteraBlocoVisivel();
        preencheBlocoSelecionado();
    }
}

function init() {
    setupEvents();
    preencheRepertorioSelecionado();
    alteraRepertorio();
}

// Função global para tocar/parar áudio
window.toggleAudio = function(path) {
    if (currentAudio && currentAudio.src.endsWith(path)) {
        if (!currentAudio.paused) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            return;
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(path);
    }
    currentAudio.play();
}

document.addEventListener("DOMContentLoaded", init);

document.addEventListener("keydown", function(e) {
    if (!state.blocoSelecionado || state.blocoSelecionado.nome === "0 todas") return;
    if (e.key === "ArrowRight") {
        moveBlock();
    } else if (e.key === "ArrowLeft") {
        moveBlock();
    }
});
