const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const repertorios = [repertorioGPC, deliro, carnavalGPC, novas]

repertorios.forEach((r, i) => {
    r.id = i;
});

let state = {
    repertories: repertorios,
    musics: repertorios[0].musics,
    blocks: [],
    blocksBackup: [],
    selectedRepertory: null,
    selectedBlock: null,
    filteredBlockText: "",
};

function spotlight(str) {
    return `<b><span style="color:blue">${str}</span></b>`;
}

function getTitle(m) {
    return `${m.title} (${m.tone})`;
}

function renderPart(part) {
    const chords = part.chords?.join(" | ") || "";
    const times = part.finalizations?.length || 1;
    let audioBtn = "";
    if (part.audio) {
        audioBtn = `<button class="audio-btn" onclick=\"playAudio('audios/${part.audio}.mp3')\"><span role='img' aria-label='audio'>🔊</span></button> `;
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
        title.innerText = getTitle(music);
        a.appendChild(title);
        info.appendChild(a);
    } else {
        const title = document.createElement("div");
        title.className = "repertory_date";
        title.innerText = getTitle(music);
        info.appendChild(title);
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

function renderBlock(block) {
    const blockDiv = document.createElement("div");
    blockDiv.className = "block";

    const fieldset = document.createElement("fieldset");

    // Botão para bloco anterior
    let leftBtn = null;
    if (state.selectedBlock && state.selectedBlock?.name !== "0 todas") {
        leftBtn = document.createElement("button");
        leftBtn.innerText = "◀";
        leftBtn.className = "block-nav block-nav-left bt-simple previous-btn";
        leftBtn.onclick = () => moveBlock(-1);
    }

    const title = document.createElement("span");
    title.className = block.hasLink ? "block-title block_link" : "block-title";
    title.innerText = `Bloco - ${block.name}`;

    if (block.link) {
        const a = document.createElement("a");
        a.href = block.link;
        a.target = "_blank";
        a.appendChild(title);
        fieldset.appendChild(a);
    } else {
        fieldset.appendChild(title);
    }

    // Botão para bloco seguinte
    let rightBtn = null;
    if (state.selectedBlock && state.selectedBlock?.name !== "0 todas") {
        rightBtn = document.createElement("button");
        rightBtn.innerText = "▶";
        rightBtn.className = "block-nav block-nav-right bt-simple next-btn";
        rightBtn.onclick = () => moveBlock(1);
    }

    block.musics.forEach(m => {
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

    if (block.name == "0 todas") {
        blockDiv.style.display = "none";
    }
    return blockDiv;
}

function renderBlocks() {
    const container = $("#blocks-container");
    container.innerHTML = "";
    state.blocks.filter(b => b.visible).forEach(b => {
        
        container.appendChild(renderBlock(b));
        
    });
}

function groupMusics(musics) {
    const grouped = {};
    musics.forEach(m => {
        const key = m.block;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(m);
    });

    const blocks = Object.entries(grouped).map(([block, musics]) => {
        const name = block.padStart(2, '0') + " - " + musics.map(m => m.title).join("/");
        const link = musics.find(m => m.blockLink)?.blockLink || null;
        return { block, musics, name, visible: true, link, hasLink: !!link };
    });

    blocks.push({ block: "0 todas", musics: [], visible: false, name: "0 todas", hasLink: false });
    return blocks.sort((a, b) => a.name.localeCompare(b.name));
}

function changeVisibleBlock() {
    const selected = state.selectedBlock;
    state.blocks.forEach(b => b.visible = selected.name === "0 todas" || b === selected);
    renderBlocks();
}

function filterBlocks() {
    const text = state.filteredBlockText.toLowerCase();
    const filtered = state.blocksBackup.filter(b => b.name.toLowerCase().includes(text) && b.name !== "0 todas");
    state.blocks = filtered.length ? filtered : [...state.blocksBackup];
    state.selectedBlock = state.blocks[0];
    changeVisibleBlock();
}

function changeRepertory() {
    const repertory = state.selectedRepertory;
    $("#repertory-name").innerText = repertory.name;

    state.musics = state.selectedRepertory.musics.map(m => ({
        ...m,
        stanzas: m.stanzas.map(p => ({ ...p }))
    }));
    state.blocks = groupMusics(state.musics);
    state.blocksBackup = JSON.parse(JSON.stringify(state.blocks));
    state.selectedBlock = state.blocks.find(b => b.name === "0 todas");
    changeVisibleBlock();
    populateBlockSelect();
}

function populateBlockSelect() {
    const select = $("#block-select");
    select.innerHTML = "";
    state.blocks.forEach(b => {
        const option = document.createElement("option");
        option.text = b.name;
        option.value = b.block;
        select.appendChild(option);
    });
    select.value = state.selectedBlock?.block || "0 todas";
}

function populateRepertorySelect() {
    const select = $("#repertory-select");
    select.innerHTML = "";
    let selectTheItem = true;
    state.repertories.forEach(r => {
        const option = document.createElement("option");
        option.text = r.name;
        option.value = r.id;
        if (selectTheItem) {
            option.selected = true;
            state.selectedRepertory = state.repertories[0];
            selectTheItem = false;
        }
        select.appendChild(option);
    });
}

function setupEvents() {
    

    $("#repertory-select").addEventListener("change", e => {
        const id = e.target.value;
        state.selectedRepertory = state.repertories.find(r => r.id == id);
        changeRepertory();
    });

    $("#block-filter").addEventListener("keyup", e => {
        state.filteredBlockText = e.target.value;
        filterBlocks();
    });

    $("#block-select").addEventListener("change", e => {
        const val = e.target.value;
        state.selectedBlock = state.blocks.find(b => b.block === val);
        changeVisibleBlock();
    });
}

// Função para navegar entre blocos
function moveBlock(direction) {
    const currentIdx = state.blocks.findIndex(b => b === state.selectedBlock);
    let nextIdx = currentIdx + direction;
    // Pular o bloco "0 todas"
    if (state.blocks[nextIdx] && state.blocks[nextIdx].name === "0 todas") {
        nextIdx += direction;
    }
    if (nextIdx >= 0 && nextIdx < state.blocks.length) {
        state.selectedBlock = state.blocks[nextIdx];
        changeVisibleBlock();
        populateBlockSelect();
    }
}

function init() {
    setupEvents();
    populateRepertorySelect();
    changeRepertory();
}

// Função global para tocar áudio
window.playAudio = function(path) {
    const audio = new Audio(path);
    audio.play();
}

document.addEventListener("DOMContentLoaded", init);

document.addEventListener("keydown", function(e) {
    if (!state.selectedBlock || state.selectedBlock.name === "0 todas") return;
    if (e.key === "ArrowRight") {
        moveBlock();
    } else if (e.key === "ArrowLeft") {
        moveBlock();
    }
});
