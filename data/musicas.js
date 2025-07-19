const musicas = [
    {
        title: "Gamei",
        tone: "-",
        link: "https://www.youtube.com/watch?v=mFBGqkHXXKs",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "Cm",
                    "F7(9)",
                    "Bb7(4)(9)",
                    "Eb7+",
                    "Dm7(5b) G7(b13)",
                    "Cm",
                    "Aº",
                    "Dm7(b5) G7(13)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Fm",
                    "Bb",
                    "Fm",
                    "Bb",
                    "Fm",
                    "Bb",
                    "Cm C7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "F7+ F6",
                    "Bbm",
                    "Am7 D7(b9)",
                    "Gm C7(9)"
                ]
            },
            {
                name: "volta",
                chords: [
                    "Dm7(b5) G7(b13)"
                ]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Desafio",
        tone: "Cm",
        artist: "GPC",
        link: "https://www.youtube.com/watch?v=P6Erot7n1TE",
        stanzas: [
            {
                name: "Intro - solo violão",
                chords: ["Cm7(9)", "Dm7(9)", "Eb7+", "Dm7(b5) G7(b13)"]
            },
            {
                name: "Loop",
                chords: ["Cm", "Bbm Eb7", "Ab7+", "Dm7(b5) G7(b13)"]
            }
        ]
    },
    {
        title: "Temporal",
        tone: "Gm",
        artist: "GPC",
        link: "https://youtu.be/I5Rl73wFmWs?si=_r6y9pTQah0dK4aO&t=337",
        stanzas: [
            {
                name: "P1",
                chords: [
                    "Gm7",
                    "Cm7",
                    "F",
                    "Bb D7"
                ]
            },
            {
                name: "P2",
                chords: [
                    "Gm7 G7",
                    "Cm7 F7(9)",
                    "Bb7+ Eb7+",
                    "Cm7 Eb7",
                    "D7 Eb7^D7",
                    "Gm G7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "Cm7",
                    "Fsus7",
                    "Bb7+ D7",
                    "Gm7 G7",
                    "Cm7",
                    "Fsus7",
                    "Bb7+ D7",
                    "Gm7 D7",
                    "Gm7 C#º",
                    "D7"
                ]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Velocidade da Luz",
        tone: "Gm",
        artist: "GPC",
        link: "https://youtu.be/EBAPw31SEJI?si=eUbRmoi6851F6MLD&t=63",
        stanzas: [
            {
                name:"Intro violão",
                chords: ["Gm7 ","Cm","Am7(5-)  D7 "," Gm7  D7"]
            },
            {
                name: "Parte 1",
                chords: ["Gm", "D7", "Cm7 F7", "Bb D7"]
            },
            {
                name: "p2",
                chords: ["G7", "Cm7", "F7", "Bb D7", "Gm", "Ab", "Am7(b5) D7", "Gm D7"]
            },
            {
                name: "Refrão",
                chords: ["Gm7", "Cm7", "F7", "Bb D7", "Gm", "Ab", "Am7(b5) D7", "Gm D7"]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Só depois - Revelação",
        tone: "Gm",
        artist: "Revelação",
        link: "https://www.youtube.com/watch?v=9HcEUvbF6-k",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "24 23 35 33 45 43"
                ]
            },
            {
                name: "P1",
                chords: [
                    "Gm",
                    "Dm",
                    "Gm",
                    "Dm",
                    "Eb7+",
                    "Ab7+",
                    "Am7(b5)"
                ],
                finalizations: [
                    [
                        "D7(b13)"
                    ],
                    [
                        "D7(b13) G7"
                    ]
                ]
            },
            {
                name: "refrao",
                chords: [
                    "Cm",
                    "Bbm7 Eb7",
                    "Ab7+ Ab6",
                    "Dm7(5-) G7"
                ]
            },
            {
                name: "solo-final",
                chords: [
                    "24 23 35 33 45 43"
                ]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Coração Blindado",
        tone: "Gm",
        artist: "Revelação",
        link: "https://www.youtube.com/watch?v=WRZkz0BP9zg&list=RDWRZkz0BP9zg&start_radio=1",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "Gm", "Dm", "Gm", "Dm", "Eb7+", "Dm", "Eb7+", "Am7(b5) D7"
                ]
            },
            {
                name: "p2 - tem gente que não pode",
                chords: [
                    "Gm", "Cm", "Am7(b5) D7", "Gm Gm7+", "Fm Bb7", "Eb7+", "Am7(b5) D7", "G7+ G6", "Dm G7"
                ]
            },
            {
                name: "refrão",
                chords: [
                    "C", "Am7(b5) D7", "G7+ G6", "Dm G7", "C", "Am7(b5) D7", "G7+ G6", "Am7(b5) D7"
                ]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Deixa alagar",
        tone: "Gm",
        link: "https://www.youtube.com/watch?v=ebGXBgmVcNw",
        stanzas: [
            {
                name: "Intro",
                chords: [
                    "Gm7",
                    "C7",
                    "Gm7",
                    "C7"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Gm Gm7(11)",
                    "Fm7(11) Bbsus",
                    "Eb7+ Csus",
                    "Fsus D7(b13)",
                    "[2x]"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Gm 32 33 13 32 33 15 13 24 35 13",
                    "Fm7(11)",
                    "Em7(b5)",
                    "Am7(11) Ab7(13)"
                ]
            },
            {
                name: "p3",
                chords: [
                    "Gm",
                    "Fm7 Bb7",
                    "Eb7+",
                    "Cm7(9) D7(b9) D7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "F/G",
                    "Fm6 Bb7(13)",
                    "Ebadd9",
                    "Cm7(9) D/C [40 44 40 32]",
                    "F/G",
                    "Fm6 E7(#9)",
                    "Eb9",
                    "Cm7(9) Dsus"
                ]
            },
            {
                name: "final",
                chords: [
                    "Gm7",
                    "C7",
                    "Gm7",
                    "C7"
                ]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Sou o Cara Pra Voce",
        tone: "D",
        artist: "Thiaguinho",
        link: "https://www.youtube.com/watch?v=xNRtGCwmoQw",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "D7+ Bm7",
                    "C#m7 F#m7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "D7+",
                    "Bm7",
                    "C#m7 F#m7",
                    "Em7 A7"
                ]
            },
            {
                name: "ref",
                chords: [
                    "D7+ Bm7",
                    "C#m7 F#m7",
                    "2x"
                ],
                finalizations: [
                    [
                        "Em7 A7"
                    ]
                ]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Eu Nunca Amei Assim",
        tone: "???",
        artist: "GPC",
        link: "https://www.youtube.com/watch?v=ec0IQr_D0UU",
        stanzas: [
            {
                name: "intro",
                chords: ["Bm C#m D7+ D7+", "Bm C#m D7+ D7+ E7(4)(9)"]
            },
            {
                name: "p1",
                chords: ["F#m7 F#m7+", "C#/E", "D7+ C#m7"],
                finalizations: [["Bm7 E7(4)(9) C#7(b9)"], ["Bm7 E7(4)(9)"]]
            },
            {
                name: "p2",
                chords: ["D7+", "C#m7 F#m7^A7(b13)", "D7+", "C#m7 C#7", "D7+", "C#m7 F#m7^A7(b13)", "D7+", "E7(4)(9)"]
            },
            {
                name: "Refrão",
                chords: ["D7+ E/D", "C#m7 F#m7"]
            },
            {
                name: "Nunca Amei Assim...",
                chords: ["Bm C#m D7+ D7+", "Bm C#m D7+ D7+"]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Ainda Gosto de Voce - Sorriso Maroto",
        tone: "???",
        artist: "Sorriso Maroto",
        stanzas: [
            {
                name: "solo-1",
                chords: ["20 12 14 15 14 12 21", "32 21 23 12 23 21 32", "30", "32", "35 25 15 17"]
            },
            {
                name: "p1",
                chords: ["G7+", "G6", "Am7", "C/D"]
            },
            {
                name: "p2",
                chords: ["G7+", "Bm7", "Em7", "Am7"]
            },
            {
                name: "Refrão",
                chords: ["G7+", "Em7", "G7+ G6", "Em7", "Am7 Ab(#5)", "Am7 D", "F7+", "Am7 D7"]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Coração Deserto",
        tone: "???",
        artist: "???",
        link: "https://www.youtube.com/watch?v=FikN-MxEAmI",
        stanzas: [
            {
                name: "solo-intro",
                chords: ["Am ... Bm... Cm... ", "C/D... D D C7+"]
            },
            {
                name: "p1",
                chords: ["G7+", "C7+", "G7+ D/F#", "Em7", "Bm7", "Em7", "Bm7 Db7(9)(#11)"]
            },
            {
                name: "p2",
                chords: ["C7+", "C/D", "Bm7(b5)", "E7(b9)", "Am7 Bm7", "C7+", "Am7 Bm7", "C7+ C/D"]
            },
            {
                name: "p2",
                chords: ["G7+ Bm7", "C9 D7(4)", "[3x]", "G(9) Bm7", "C7+ D7(4)", "Na segunda C7+"]
            },
            {
                name: "final",
                chords: ["Am ... Bm... Cm... "]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Preciso viver - Chega de felicidade (Sorriso Maroto)",
        tone: "G",
        stanzas: [
            {
                name: "loop",
                chords: [
                    "G7+ G6", "C7+ D7", "G7+ G6", "Am7 F7", "Bb", "Eb", "Bb", "Eb", "Am7 Bm7", "Am7 D7"
                ]
            },
            {
                name: "loop - refrao",
                chords: [
                    "G7+ G6", "C7+ D7", "G7+ G6", "Am7 F7", "Bb Eb", "Bb Eb", "Am7 Bm7", "Am7 D7"
                ]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Beijo Doce",
        artist: "Pixote",
        tone: "G",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "G7+ G7 | C7+ D7(4) | G7+ G7 | C7+ D7(4) | G7(4) G7 | C7+ B7 | Em7 A7 | Am7 D/C"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Gm7 Eb7+ | Am7(5b) D7(b9) | Gm7 Eb7+ Dm| Cm F7(4)| Bb7+ D7(4)"
                ]
            },
            {
                name: "ref",
                chords: [
                    "G7+ G7 | C7+ D7(4) | G7+ G7 | C7+ F7(4) | Bb7+ Gm7 | Am7(b5) D7(4) D7 | Bm7 Em7 | Am7 D7"
                ]
            },
            {
                name: "final",
                chords: [
                    "G7+ G7 | C7+ D7(4)"
                ]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Idem",
        tone: "Bb",
        artist: "Pixote",
        link: "https://www.youtube.com/watch?v=IpK10AFfJQQ",
        stanzas: [
            {
                name: "Intro",
                chords: [""]
            },
            {
                name: "p1",
                chords: ["Bb", "Eb F7", "Bb", "Eb D7"]
            },
            {
                name: "p2",
                chords: ["Gm C7", "Gm C7", "Eb Dm", "Am D7", "Gm C7", "Gm C7", "Eb Dm", "Cm F7"]
            },
            {
                name: "refrao",
                chords: ["Bb Gm", "Cm F7", "Dm Eb7", "Cm F7"]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Insegurança",
        tone: "-",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "43 13 11 23 21 21 23 43",
                    "43 13 11 23 21 21",
                    "33 21 23 11 13 22 21 11",
                    "14 13"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Bb7+ F",
                    "Gm7 Gm7/F",
                    "Eb7+ Bb9",
                    "Cm7 F7(4)",
                    "Bb7+ F",
                    "Gm7 Bb7(4)",
                    "Eb7+ Dm7",
                    "Cm7 F7 (30 32 33 23)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Eb7+  (30 32 33 23)",
                    "Gm7",
                    "Ab7+ F7(4)",
                    "Bb7+ F7(4)"
                ]
            },
            {
                name: "REF",
                chords: [
                    "Bb7+ Bb7(4)",
                    "Eb7+ Eb7+ Dm7"
                ],
                finalizations: [
                    [
                        "Cm7 Gm7",
                        "Gb7+ F7(4)"
                    ],
                    [
                        "Cm7 F7(4)",
                        "Bb7+ F7(4)"
                    ]
                ]
            },
            {
                name: "POS-REF",
                chords: [
                    "Eb7+ Dm7",
                    "Cm7 F7(4)"
                ]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Lancinho",
        tone: "???",
        artist: "Turma do Pagode",
        stanzas: [
            {
                name: "intro",
                chords: ["Bb", "C", "Bb", "C 17 15 26 35 37", "Bb", "C", "Bb", "C D7"]
            },
            {
                name: "p1",
                chords: ["Gm7(11)", "Am7(11) D7", "Bb7+ Am7", "Bb7+ C7"]
            },
            {
                name: "ref",
                chords: ["Gm7(11)", "Am7(11) D7"]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Bem querer",
        tone: "A",
        artist: "Maurício maniere",
        stanzas: [
            {
                name: "Intro",
                chords: ["A9 F#m D7+ F7+ E7(4)(9)"]
            },
            {
                name: "p1",
                chords: ["A9", "F#m7", "D7+", "F#m7 E7(4)(9)"]
            },
            {
                name: "pre-refrao",
                chords: ["D7+", "C#m7", "Bm7", "E7(4)(9)"]
            },
            {
                name: "refrao",
                chords: ["A9", "F#m7", "D7+", "F#m7 E7(4)(9)"]
            }
        ],
        block: 0.1,
        id: 1
    },
    {
        title: "Coração Partido",
        tone: "F#",
        artist: "Menos é Mais",
        link: "https://www.youtube.com/watch?v=n5wxZ_OBUXk",
        stanzas: [
            {
                name: "solo-1",
                audio: "coracao-partido-solo",
                chords: ["33 22 13 33 22 13", "33 22 11 33 22 11", "34 24 14 34 24 14 13"],
                finalizations: [["13^14^13 24 36 34"]]
            },
            {
                name: "p1",
                chords: ["F#7+ F#(#5)", "F#6 Cm7(b5)", "A#m7", "G#m7 C#7(9)"]
            },
            {
                name: "p2 e pre-refrao",
                chords: ["F#7+ F#(#5)", "F#6 Cm7(b5)^F7(2ª)", "A#m7", "G#m7 C#7(9)", "A#m7  D#7 D#7"]
            },
            {
                name: "refrao",
                chords: ["G#m7", "C#7(9)", "A#m7", "D#7(4) D#7"]
            },
            {
                name: "solo da volta",
                audio: "coracao-partido-solo-meio",
                chords: ["34 24 14 34 24 14 13 13^14^13 24 36 34"]
            },
            {
                name: "Final",
                audio: "coracao-partido-solo-meio",
                chords: ["G#m7 C#7(9)", "F#7+ G#m7 % 44 33 24 22 34 31 32"]
            }
        ],
        block: 0.2,
        id: 1
    },
    {
        title: "A Três",
        tone: "F#m",
        artist: "Mumuzinho",
        link: "https://www.youtube.com/watch?v=S7P8sdcCNzc",
        stanzas: [
            {
                name: "intro",
                chords: ["F#m7 C#m7", "Bm7 C#7", "[2x]"]
            },
            {
                name: "p1",
                chords: ["F#m7 C#m7", "Bm7 C#7", "F#m7 C#m7", "Bm7 20 20 20 20 22"],
                audio: "a-tres-solo-fim-p1"
            },
            {
                name: "p2",
                chords: ["F#m7 C#m7", "D7+(9) C#7", "F#m7 C#m7", "G#m7(b5) 22 12 14 32^34 32 42 44"],
                audio: "a-tres-solo-inicio-refrao"
            },
            {
                name: "Refrao ",
                chords: ["F#m7 C#m7", "D7+(9) C#7", "F#m7 C#m7",],
                audio: "a-tres-solo-meio-refrao",
                finalizations: [["G#m7(b5) C#7"], ["D7+(9) 22 32 43 12 23 20 22"]]
            },
            {
                name: "Refrao-cont (Só na 1ª vez)",
                chords: ["F#m7 C#m7", "D7+(9) 20 22 22 22 12 14"],
                audio: "a-tres-solo-fim-refrao"
            },
            {
                name: "Refrao repeticao (nao faz na 1ª vez)",
                chords: ["F#m7 C#m7", "D7+(9) C#7", "F#m7 C#m7", "*** D7+ C#m7 Bm7 A9 E/G#", "F#7+(...) Em7 Em7 A7", "D7+ C#7", "F#m7 C#m7", "D7+(9) G#m7(b5) C#7"]
            },
            {
                name: "Final (nao faz na 1ª vez)",
                chords: ["F#m7 F#m7 C#m7 C#m7", "D7+(9) D7+(9) 22 32 43 12 23 20 22", "F#m6 (no cvc D#m7(b5))"],
                audio: "a-tres-solo-final"
            }
        ],
        block: 0.2,
        id: 2
    },
    {
        title: "Saudade da Gente",
        tone: "???",
        artist: "Ludimila",
        stanzas: [
            {
                name: "P1",
                chords: [
                    "D9",
                    "Am7",
                    "G6",
                    "C7"
                ]
            },
            {
                name: "P2",
                chords: [
                    "Bm7",
                    "D9",
                    "E/G#",
                    "Gm6  F#7(b13)",
                    "Bm7",
                    "D9",
                    "E/G#",
                    "Gm6  Asus"
                ]
            },
            {
                name: "Refrao",
                chords: [
                    "D9",
                    "Am7",
                    "G6",
                    "C7"
                ]
            }
        ],
        block: 0.2,
        id: 3
    },
    {
        title: "Diferentão - Dilsinho",
        tone: "",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "36 16 25 19 16 (2X)",
                    "46 38 36 27 38"
                ]
            },
            {
                name: "solo pre p1",
                chords: [
                    "12 24 22 "
                ]
            },
            {
                name: "p1",
                chords: [
                    "F#m7",
                    "B7(4)",
                    "G#m7",
                    "B9 C#7"
                ]
            },
            {
                name: "refrão",
                chords: [
                    "A7+",
                    "B7(4)",
                    "G#m7",
                    "B9 C#7"
                ]
            }
        ]
    },
    {
        title: "Choro é livre - Dilsinho",
        tone: "",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "15 24 15 24 15 24 13 24 13 (2x)",
                    "33 13 33 13 33 13 33 11 33 10 (2x)"
                ]
            },
            {
                name: "p1 - solo 1ªx",
                chords: [
                    "15 24 15 24 15 24 13 24 13 (2x)",
                    "33 13 33 13 33 13 33 11 33 10 (2x)",
                    "15 24 15 24 15 24 13 24 13 (2x)",
                    "33 13 33 13 33 13 33 11 33 10 Fm7 Cm7 Bb4 Bb"
                ]
            },
            {
                name: "p1 - acorde 2ªx",
                chords: [
                    "Eb", "%", "Bb", "%", "Cm7", "%", "Bb", "45 46 33 35 33 24 26 24 15 16 15 24"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Fm7",
                    "Ab7+",
                    "Eb",
                    "Bb/D 10 11 10 33 43",
                    "Fm7",
                    "Ab7+",
                    "Eb",
                    "Bb4 (♪ 6x) Eb (𝅘𝅥𝅯 4x)"

                ]
            },
            {
                name: "refrão",
                chords: [
                    "Ab7+", "%",
                    "Gm7", "45 33 35 24 35 33 45 33",
                    "Ab7+ Ab7+^Bb^Ab/C", "C#7(#11)",
                    "Gm7", "45 33 35 24 35 33 45 33",
                ]
            },
            {
                name: "pos-refrão",
                chords: [
                    "Ab7+ 15 13", "Ab7+ 15 13",
                    "Gm7 13 13", "45 33 35 24 35 33 45 33",
                    "15 24 15 24 15 24 13 24 13 (2x)"
                ]
            }
        ],
        block: 0.2,
        id: 5
    },
    {
        title: "Apaguei pra todos",
        tone: "Em",
        artist: "Ferrugem",
        link: "https://www.youtube.com/watch?v=o3dknP3jclw",
        stanzas: [
            {
                name: "solo",
                chords: ["Base Em7(9)", "32 23 25 23 32", "32 25 23 32"],
                audio: "apaguei-pra-todos-solo"
            },
            {
                name: "p1",
                chords: ["C9", "C9", "(Em7(9)) 32 23 25 23 32", "32 25 23 32", "C9", "C9"]
            },
            {
                name: "p2 mas quando vi tuas fotos",
                chords: ["Em7(9) D9", "C9", "B7(4) B7(b13)", "C9 Am7", "B7(4) B7(b13)"]
            },
            {
                name: "Refrao",
                chords: ["15 14 12 14 15 C7+", "C7+", "G7^G#7^A7", "C9", "B7(4) B7(b13)"],
                audio: "apaguei-pra-todos-solo-refrao"
            },
            {
                name: "Pos-refrao",
                chords: ["C9 D9", "Volta no solo"]
            }
        ],
        block: 0.3,
        id: 1
    },
    {
        title: "Me bloqueia",
        tone: "E",
        artist: "Ferrugem",
        link: "https://youtu.be/TqwTnz5cBOw?si=Pm-nQ8gP-ytljOBv&t=172",
        stanzas: [
            {
                name: "solo intro",
                chords: ["(25 15)>(26 17) [4x]"],
                audio: "me-bloqueia-solo-intro"
            },
            {
                name: "p1",
                chords: ["F#m7", "Am6", "A7+", "Bm7 E7(sus4)", "A7+", "F#m7", "E", "Bm7 E7(sus4)"]
            },
            {
                name: "pre-ref",
                chords: ["A7+^G#m7^F#m7", "B7(sus4)", "E (49 19)", "D/F#^D#/G^E/G#"]
            },
            {
                name: "refrao",
                chords: ["A7+", "F#m7", "Eadd9", "Bm7 E7(sus4)", "[2x]"]
            }
        ],
        block: 0.3,
        id: 2
    },
    {
        title: "Vitamina C",
        tone: "Fm",
        artist: "Suel",
        link: "https://www.youtube.com/watch?v=_6UDeS9v0qo",
        stanzas: [
            {
                name: "Solo- harm",
                chords: ["Bbm7 Absus"]
            }, {
                name: "Solo- notas",
                audio: "vitamina-c-solo-intro",
                chords: ["33 24 22 21 22 22", "33 24 22 21 22 22", "33 24 22 21 22 21 33 31 43"]
            },
            {
                name: "p1",
                chords: ["Fm7", "Db", "Fm", "Eb"]
            },
            {
                name: "p2",
                chords: ["Bbm7", "Db", "Fm", "Eb", "Db7+", "Eb"]
            },
            {
                name: "refrao",
                chords: ["Bbm7", "Db", "Fm", "Eb"]
            },
            {
                name: "Solo da volta",
                audio: "vitamina-c-solo-meio",
                chords: ["33 11 22 21 22", "[4x]", "22 22 22 21 33 43", "33 21 21 21 33 31 41"]
            },
            {
                name: "Solo final",
                audio: "vitamina-c-solo-final",
                chords: ["33 31 33 21 31", "11 22 21 33 31 31", "33 31 33 21 31", "31 33 21 31 31"]
            }
        ],
        block: 0.3,
        id: 3
    },
    {
        title: "O nosso primeiro Beijo",
        tone: "Bb",
        artist: "Gloria Groove",
        link: "https://www.youtube.com/watch?v=mBvcHrwuAjs",
        stanzas: [
            {
                name: "Intro",
                chords: [
                    "Eb7+",
                    "Dm",
                    "Cm",
                    "Bb"
                ]
            },
            {
                name: "P1",
                chords: [
                    "Eb7+",
                    "Dm",
                    "Cm",
                    "Bb D"
                ]
            },
            {
                name: "P2",
                chords: [
                    "Gm",
                    "D",
                    "Bb",
                    "C",
                    "Eb",
                    "D"
                ]
            },
            {
                name: "Refrao",
                chords: [
                    "Gm F",
                    "Cm Dm^D",
                    "Gm F",
                    "C Do Do Do Re Do Si"
                ]
            }
        ],
        block: 0.3,
        id: 3
    },
    {
        title: "Prefixo",
        tone: "Am",
        artist: "GPC",
        audio: "bloco-prefixo.ogg",
        stanzas: [
            {
                name: "solo-1",
                chords: [
                    "32 32 33 33 21 21 23 12"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Am7",
                    "Gm7 C7",
                    "Am6",
                    "Bm7(b5) E7"
                ],
                finalizations: [
                    [
                        "Bm7(b5) E7"
                    ],
                    [
                        "Bm7(b5) 32 21 12 23 21 Am7"
                    ]
                ]
            }
        ],
        block: 1,
        id: 1
    },
    {
        title: "Hoje Tem - Exalta",
        tone: "C",
        artist: "GPC",
        stanzas: [
            {
                name: "intro - solo",
                chords: [
                    "Gsus4 Gsus4",
                    "30 32 35 35 35 32 35 35 -2x",
                    "30 32 35 35 35 32 Bb(4) A(4) Ab(4) Gsus(4)",
                    "15 17 15"
                ],
                audio: "hoje-tem-solo-inicio"
            },
            {
                name: "p1",
                chords: [
                    "C7+ Dm7",
                    "Em7 C7",
                    "F9 Dm7 G7"
                ],
                finalizations: [
                    [
                        "C7+ G7(4)"
                    ],
                    [
                        "C7+ C7(13) C7"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "F7+ Bb7+",
                    "A7+ C9",
                    "F7+ E"
                ],
                finalizations: [
                    [
                        "A7+ A9"
                    ],
                    [
                        "22 20 32 21 20 32"
                    ]
                ],
                audio: "hoje-tem-solo-pre-ref"
            },
            {
                name: "ref",
                chords: [
                    "C9 Dm7",
                    "Em7 C7",
                    "F7+ G7(4)"
                ],
                finalizations: [
                    [
                        "Em7 Dm7"
                    ],
                    [
                        "C9 G7(4)"
                    ]
                ]
            },
            {
                name: "final",
                chords: [
                    "32 35 15 13 12 10 21"
                ],
                audio: "hoje-tem-solo-fim"
            }
        ],
        block: 1,
        id: 1
    },
    {
        title: "Eu mereço ser feliz",
        tone: "C",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "110 19 110 18 18 110 17 17 110 16 16 110 15 26 25 37 35"
                ],
                audio: "eu-mereco-ser-feliz-solo"
            },
            {
                name: "intro",
                chords: [
                    "C9",
                    "%",
                    "C9/Bb",
                    "%",
                    "F7+",
                    "%",
                    "Fm6",
                    "G7(4)"
                ]
            },
            {
                name: "p1",
                chords: [
                    "C",
                    "C6(9)",
                    "C7(4)",
                    "F#7(#11)",
                    "F7+",
                    "F6"
                ],
                finalizations: [
                    [
                        "G7(4)",
                        "G7(b9)"
                    ],
                    [
                        "Eb6(9)",
                        "G7(4)"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "C9",
                    "%",
                    "C9/Bb",
                    "%",
                    "F7+",
                    "%",
                    "F6",
                    "G7(4)"
                ]
            },
            {
                name: "solo",
                chords: [
                    "mesmo do inicio"
                ]
            },
            {
                name: "ref",
                chords: [
                    "C9",
                    "%",
                    "C7(4)",
                    "F#7(#11)",
                    "F7+",
                    "%",
                    "Fm6",
                    "G7(4)",
                    "C6(9)",
                    "%",
                    "C/Bb",
                    "F#7(#11)",
                    "F7+",
                    "%",
                    "Fm6",
                    "G7(4)"
                ]
            }
        ],
        block: 1,
        id: 2
    },
    {
        title: "Que situação - Thiaguinho",
        tone: "",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "Gsus Bbsus"
                ]
            },
            {
                name: "oh oh",
                chords: [
                    "C7+",
                    "G7(4)",
                    "C7+",
                    "G7(4)"
                ]
            },
            {
                name: "p1",
                chords: [
                    "C7+",
                    "Am7",
                    "Ab7+"
                ],
                finalizations: [
                    [
                        "G7(4)"
                    ],
                    [
                        "G7(4) G#º"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "Am7",
                    "Fm6",
                    "C7+ G/B",
                    "Em7(b5) A7",
                    "Dsus D7(9)",
                    "Fm7 G7(4)",
                    "C9 G/C",
                    "Gm7 C7(9)"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "F7+",
                    "Fm7+",
                    "32 34 21 23 21 34",
                    "32 34 21 12 11",
                    "Dm7(9)",
                    "Fm6 Gsus4"
                ],
                finalizations: [
                    [
                        "C9 G/C",
                        "Gm7(9) Csus"
                    ],
                    []
                ]
            },
            {
                name: "final",
                chords: [
                    "volta no oh oh"
                ]
            }
        ],
        block: 1,
        id: 3
    },
    {
        title: "Vida inteira",
        artist: "Thiaguinho",
        tone: "",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "C6(9) Csus",
                    "F7+ F^G 30 21",
                    " - C7",
                    "F F^G",
                    "30 42 30 21 12 23 15 12",
                    "21 G7(4)",
                    "C G Am Am/G",
                    "D/F# Gsus"
                ]
            },
            {
                name: "solo",
                chords: [
                    "42^43 44^45 G7(4)",
                    "42^43 44^45 G7(4)"
                ]
            },
            {
                name: "p1",
                chords: [
                    "C6(9)",
                    "F13",
                    "C6(9)",
                    "D7(9)(#11)",
                    "F7+ C/E"
                ],
                finalizations: [
                    [
                        "Dm7 Db7+"
                    ],
                    [
                        "Dm7 G7(4)"
                    ]
                ]
            },
            {
                name: "refrao",
                chords: [
                    "C C7",
                    "F7+ G7(4)",
                    " [4x] ",
                    "C G Am Am/G",
                    "D/F# Gsus"
                ]
            },
            {
                name: "solo",
                chords: [
                    "42^43 44^45 G7(4)",
                    "42^43 44^45 G7(4)"
                ]
            }
        ],
        block: 1,
        id: 4
    },
    {
        title: "Bateu levou - Pxt",
        tone: "",
        stanzas: [
            {
                name: "intro-solo",
                chords: [
                    "30 21 23 12", "15 12 21 32 30", "30 21 23 12", "15 13 15"
                ],
                audio: "bateu-levou-solo"
            }, {
                name: "intro",
                chords: [
                    "C F#7(#11)",
                    "F7+ Bb9",
                    "C7+ F#7(#11)",
                    "F7+ G7(4)"
                ]
            },
            {
                name: "p1",
                chords: [
                    "C7+ F#7(#11)",
                    "F7+ Bb9",
                    "C7+ F#7(#11)",
                    "F7+ Bb9",
                    "Bm7(5b) E7",
                    "Am7+ Am7",
                    "Bm7(5b) E7",
                    "Am7+ Am7",
                    "Gm7 C7",
                    "F7+ F6(9)",
                    "Gm7 C7",
                    "F7+ F6(9)",
                    "G7(4) G13"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "C6(9) F#7(#11)",
                    "F7+ Bb9",
                    "C7+ F#7(#11)",
                    "F7+ Bb9",
                    "Bb7(4)",
                    "G7(4)",
                    "Bb7(4)",
                    "G7(4) G13"
                ]
            }
        ],
        block: 1,
        id: 5
    },
    {
        title: "50 vezes - Sorriso Maroto",
        blockLink: "https://youtu.be/caXYuG3TMsY?t=2231",
        link: "https://youtu.be/caXYuG3TMsY?t=2231",
        tone: "E",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "32 32 32 30 32 34 32 32 30 32 34",
                    "34 34 32 34 23"
                ],
                finalizations: [
                    [
                        "14 15 14 10"
                    ],
                    [
                        "14 10 32 30"
                    ]
                ]
            },
            {
                name: "p1",
                chords: [
                    "Am7",
                    "%",
                    "C",
                    "42 30",
                    "G9",
                    "%",
                    "D",
                    "42 30 32",
                    "Am7",
                    "%",
                    "C",
                    "-",
                    "G/B",
                    "G4 G/B",
                    "D",
                    "D4 D"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Am7",
                    "%",
                    "C",
                    "42 30",
                    "G9",
                    "%"
                ],
                finalizations: [
                    [
                        "D",
                        "Em D G"
                    ],
                    [
                        "12 10 10 21 21 10 10",
                        "30 44 40"
                    ],
                    [
                        "15 14 35 34 45 44"
                    ]
                ]
            },
            {
                name: "final",
                chords: [
                    "D",
                    "A",
                    "B"
                ]
            }
        ],
        block: 2,
        id: 6
    },
    {
        title: "É Natural",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "Db",
                    "%",
                    "A",
                    "B",
                    "(3x)",
                    "A B"
                ]
            },
            {
                name: "p2",
                chords: [
                    "A9",
                    "%",
                    "B/A",
                    "%",
                    "A7+",
                    "%",
                    "F#m7",
                    "B/A",
                    "Abm7",
                    "Ab7(b13)",
                    "A7+",
                    "%",
                    "F#",
                    "%",
                    "A",
                    "A   B",
                    "Db Ab",
                    "Db",
                    "Db"
                ]
            },
            {
                name: "ref",
                chords: [
                    "A",
                    "B",
                    "Db",
                    "%",
                    "(3x)"
                ]
            }
        ],
        block: 2,
        id: 7
    },
    {
        title: "Ouvi dizer",
        tone: "B",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "B",
                    "D#m",
                    "E7+",
                    "Em7"
                ]
            },
            {
                name: "p1",
                chords: [
                    "B",
                    "D#m",
                    "E7+",
                    "Em7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "C#m",
                    "D#m"
                ],
                finalizations: [
                    [
                        "G#m7",
                        "F#"
                    ],
                    [
                        "E7+",
                        "Em7"
                    ]
                ]
            },
            {
                name: "ref",
                chords: [
                    "E7+",
                    "D#m",
                    "C#m7",
                    "B7+"
                ]
            }
        ],
        block: 2,
        id: 8
    },
    {
        title: "Um dia para nós dois - travessos",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C",
                    "Em7",
                    "F",
                    "Dm G7",
                    "C",
                    "Em7",
                    "F",
                    "Dm G7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "C",
                    "Em7",
                    "F Em7",
                    "Dm G7"
                ]
            },
            {
                name: "ref",
                chords: [
                    "C",
                    "Am7",
                    "Dm",
                    "Gm C7",
                    "F",
                    "Em7",
                    "Dm",
                    "Dm G7"
                ]
            }
        ],
        block: 3,
        id: 9
    },
    {
        title: "[C] Coracao Radiante",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C",
                    "F",
                    "C",
                    "F G"
                ]
            },
            {
                name: "p1",
                chords: [
                    "C",
                    "G E7",
                    "Am",
                    "G G7"
                ]
            },
            {
                name: "P2",
                chords: [
                    "C",
                    "G E7",
                    "Am"
                ],
                finalizations: [
                    [
                        "F",
                        "G7"
                    ],
                    [
                        "F G7"
                    ]
                ]
            },
            {
                name: "refrao",
                chords: [
                    "C C7",
                    "F G7"
                ]
            }
        ],
        block: 3,
        id: 10
    },
    {
        title: "Compasso Do Amor - Quando a Gente Ama",
        tone: "",
        stanzas: [
            {
                name: "Refrao",
                chords: [
                    "C C7",
                    "F G7"
                ]
            },
            {
                name: "p1",
                chords: [
                    "C",
                    "G E7",
                    "Am",
                    "Dm G7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "C C7",
                    "F7+",
                    "G7",
                    "Em7",
                    "Am^Abm^Gm C7",
                    "F7+",
                    "G7"
                ]
            }
        ],
        block: 3,
        id: 11
    },
    {
        title: "Quem dera SPC",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C7+ G",
                    "Am7 B7",
                    "Em7 Ebº",
                    "Dm A7(-9)",
                    "Dm Dm7+",
                    "Dm7 Dm6",
                    "G7(9)(11) G7(9)",
                    "Gm7 C7(13)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "F7+",
                    "Bb7",
                    "Em7",
                    "Am7 Ebº",
                    "Dm Em7",
                    "F7+ G7",
                    "Gm7 C7(13)"
                ]
            },
            {
                name: "p2.1",
                chords: [
                    "F7+",
                    "Bb7",
                    "Em7",
                    "Bb7 A7",
                    "Dm",
                    "G7",
                    "C Bb7^A7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "Dm G7",
                    "C A7",
                    "D7 G7",
                    "C G7"
                ]
            }
        ],
        block: 3,
        id: 12
    },
    {
        title: "Fatalmente",
        tone: "",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "Tirar"
                ]
            },
            {
                name: "p1",
                chords: [
                    "C9 Ab7+",
                    "Fm7(9) Gsus4",
                    "4x"
                ]
            },
            {
                name: "p2",
                chords: [
                    "C9 Dm",
                    "Em7 C7",
                    "F",
                    "Fm G7"
                ]
            },
            {
                name: "Ref",
                chords: [
                    "C C7",
                    "F7+ G7"
                ]
            }
        ],
        block: 3,
        id: 13
    },
    {
        title: "Adivinha - Travessos",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "F7+",
                    "Em7 C7",
                    "F7+ G7",
                    "C C7",
                    "F E7",
                    "Am D7",
                    "Dm G7"
                ],
                finalizations: [
                    [
                        "C Gm C7"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "C Gm C7",
                    "F7+ G7",
                    "Em7 Am7",
                    "Dm7 G7",
                    "C C7",
                    "F E7",
                    "Am D7",
                    "Dm G7"
                ]
            },
            {
                name: "pre ref",
                chords: [
                    "C Gm C7",
                    "F7+ G7",
                    "Em7 Am7",
                    "Dm7 G7",
                    "C C7",
                    "F G7",
                    "Em7 Am7",
                    "Dm Em",
                    "Am G7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "F",
                    "Em7 Am7 C7"
                ]
            }
        ],
        block: 3,
        id: 14
    },
    {
        title: "Sorria",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C7+",
                    "Em7",
                    "Am7",
                    "Dm",
                    "C7+",
                    "Em7",
                    "F7+",
                    "Bm7(b5)^E7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Am7",
                    "Em7",
                    "F7+",
                    "Bm7(b5)^E7",
                    "Am7",
                    "Em7",
                    "F7+ G7",
                    "C C7"
                ]
            },
            {
                name: "ref",
                chords: [
                    "F7+",
                    "Em7 A7",
                    "Dm G7",
                    "Gm C7",
                    "F7+",
                    "Em7 A7",
                    "Dm G7"
                ],
                finalizations: [
                    [
                        "C C7"
                    ]
                ]
            }
        ],
        block: 3,
        id: 15
    },
    {
        title: "Preciso te amar - Eu estou apaixonado",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C",
                    "Em",
                    "Am",
                    "Em",
                    "F7+",
                    "Eb°",
                    "G7(4) G7"
                ],
                finalizations: [
                    [
                        "Dm G7"
                    ],
                    [
                        "Gm7 C7"
                    ]
                ]
            },
            {
                name: "P2",
                chords: [
                    "F7+",
                    "Bm7(5b) E7",
                    "Am7",
                    "Gm7 C7",
                    "F7+",
                    "G7"
                ],
                finalizations: [
                    [
                        "C7+ C5+",
                        "Gm7 C7"
                    ],
                    []
                ]
            },
            {
                name: "refrao",
                chords: [
                    "C C7",
                    "F7+ G7",
                    "C  C7",
                    "F7+ G7 E7",
                    "Am Abm Gm C7",
                    "F7+ G7",
                    "C G",
                    "D7 G7"
                ]
            }
        ],
        block: 3,
        id: 16
    },
    {
        title: "Fã de carteirinha",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C Dm7",
                    "Em7 Gm^C",
                    "F7+ C"
                ],
                finalizations: [
                    [
                        "Dm G7 (30 32 30)"
                    ],
                    [
                        "Dm Bm7(b5)^E7"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "Am7",
                    "Em7",
                    "F7+ D"
                ],
                finalizations: [
                    [
                        "Dm7 Bm7(b5)^E7"
                    ],
                    [
                        "C7"
                    ]
                ]
            },
            {
                name: "Ref",
                chords: [
                    "F7+",
                    "Ebm7^Em7 A7",
                    "F7+",
                    "Ebm7^Em7 A7",
                    "Dm7",
                    " G7(4)",
                    "C",
                    " Gm C7"
                ]
            }
        ],
        block: 3,
        id: 17
    },
    {
        title: "[Gm] Temporal",
        tone: "Gm",
        stanzas: [
            {
                name: "P1",
                chords: [
                    "Gm7",
                    "Cm7",
                    "F",
                    "Bb D7"
                ]
            },
            {
                name: "P2",
                chords: [
                    "Gm7 G7",
                    "Cm7 F7(9)",
                    "Bb7+ Eb7+",
                    "Cm7 Eb7",
                    "D7 Eb7^D7",
                    "Gm G7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "Cm7",
                    "Fsus7",
                    "Bb7+ D7",
                    "Gm7 G7",
                    "Cm7",
                    "Fsus7",
                    "Bb7+ D7",
                    "Gm7 D7",
                    "Gm7 C#º",
                    "D7"
                ]
            }
        ],
        block: 4,
        id: 18
    },
    {
        title: "Cheia de Manias",
        tone: "-",
        stanzas: [
            {
                name: "P1",
                chords: [
                    "tirar"
                ]
            }
        ],
        block: 4,
        id: 19
    },
    {
        title: "Deixa alagar",
        tone: "-",
        stanzas: [
            {
                name: "Intro",
                chords: [
                    "Gm7",
                    "C7",
                    "Gm7",
                    "C7"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Gm Gm7(11)",
                    "Fm7(11) Bbsus",
                    "Eb7+ Csus",
                    "Fsus D7(b13)",
                    "[2x]"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Gm 32 33 13 32 33 15 13 24 35 13",
                    "Fm7(11)",
                    "Em7(b5)",
                    "Am7(11) Ab7(13)"
                ]
            },
            {
                name: "p3",
                chords: [
                    "Gm",
                    "Fm7 Bb7",
                    "Eb7+",
                    "Cm7(9) D7(b9) D7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "F/G",
                    "Fm6 Bb7(13)",
                    "Ebadd9",
                    "Cm7(9) D/C [40 44 40 32]",
                    "F/G",
                    "Fm6 E7(#9)",
                    "Eb9",
                    "Cm7(9) Dsus"
                ]
            },
            {
                name: "final",
                chords: [
                    "Gm7",
                    "C7",
                    "Gm7",
                    "C7"
                ]
            }
        ],
        block: 4,
        id: 20
    },
    {
        title: "Só depois",
        tone: "-",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "24 23 35 33 45 43"
                ]
            },
            {
                name: "P1",
                chords: [
                    "Gm",
                    "Dm",
                    "Gm",
                    "Dm",
                    "Eb7+",
                    "Ab7+",
                    "Am7(b5)"
                ],
                finalizations: [
                    [
                        "D7(b13)"
                    ],
                    [
                        "D7(b13) G7"
                    ]
                ]
            },
            {
                name: "refrao",
                chords: [
                    "Cm",
                    "Bbm7 Eb7",
                    "Ab7+ Eb7+",
                    "Dm7(5-) G7"
                ],
                finalizations: [
                    [
                        "D7(b13)"
                    ],
                    [
                        "D7(b13) G7"
                    ]
                ]
            },
            {
                name: "solo-final",
                chords: [
                    "24 23 35 33 45 43"
                ]
            }
        ],
        block: 4,
        id: 21
    },
    {
        title: "Até que durou - Pericles",
        tone: "G",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "15 17 35 34",
                    "25 37 45 44",
                    "47 49 47 39 37",
                    "[34 35]"
                ]
            },
            {
                name: "P1",
                chords: [
                    "||: 23 32 45 32 (4x)",
                    "23 32 44 32 (4x) :||",
                    "C 15 14",
                    "20 32 21",
                    "15 14",
                    "20 32 21",
                    "G9",
                    "%",
                    "Em7",
                    "D9"
                ]
            },
            {
                name: "P2",
                chords: [
                    "C7+",
                    "B7"
                ],
                finalizations: [
                    [
                        "Em7",
                        "A9"
                    ],
                    [
                        "Em7",
                        "A7"
                    ]
                ]
            },
            {
                name: "Ref",
                chords: [
                    "C",
                    "C7+",
                    "D",
                    "D7",
                    "Em7",
                    "%"
                ],
                finalizations: [
                    [
                        "A7",
                        "A7(4)"
                    ],
                    [
                        "A D A",
                        "D"
                    ]
                ]
            },
            {
                name: "Pós-ref",
                chords: [
                    "C9",
                    "D",
                    "34 35 28",
                    "27 28 112",
                    "36 37 210",
                    "36 37 210"
                ]
            },
            {
                name: "P3",
                chords: [
                    "C",
                    "C/D",
                    "D/C",
                    "D/C",
                    "20 15 14",
                    "12 10",
                    "20 15 14",
                    "12 10"
                ]
            },
            {
                name: "Volta",
                chords: [
                    "P2",
                    "R"
                ]
            },
            {
                name: "P4",
                chords: [
                    "C",
                    "C7+",
                    "D",
                    "D7",
                    "Em7",
                    "%",
                    "A7",
                    "A7(4) A7",
                    "C",
                    "C7+",
                    "B C D",
                    "C B",
                    "Em7",
                    "Em7 A",
                    "D/A A",
                    "D/A G"
                ]
            },
            {
                name: "PR",
                chords: [
                    "C",
                    "D",
                    "E"
                ]
            }
        ],
        block: 5,
        id: 22
    },
    {
        title: "Melhor eu ir - Pericao",
        tone: "E",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "E E6 E7+ E6",
                    "E",
                    "E E6 E7+ E6",
                    "E",
                    "C C6 C7+ C6",
                    "C",
                    "C C6 C7+ C6",
                    "-"
                ]
            },
            {
                name: "p1",
                chords: [
                    "E7+(9)",
                    "%",
                    "A7+",
                    "G#m7 A7+",
                    "E7+(9)",
                    "%",
                    "A7+",
                    "42 24 23 22 21 42",
                    "44 E7+(9)",
                    "%",
                    "A7+",
                    "G#m7 A7+"
                ]
            },
            {
                name: "p2",
                chords: [
                    "C#m(11)",
                    "B4/D#",
                    "A7+",
                    "E/A"
                ]
            },
            {
                name: "p3",
                chords: [
                    "G#m7",
                    "%",
                    "F#m7(11)",
                    "%",
                    "G#m7",
                    "%",
                    "Am6 Am6",
                    "Am6 A7+",
                    "E E6",
                    "E7+ E6",
                    "F#m7(11)",
                    "%",
                    "G#m7",
                    "%",
                    "D7",
                    "D7 Db7 C7 B7"
                ]
            },
            {
                name: "pr - ref",
                chords: [
                    "E9",
                    "%",
                    "Am6",
                    "%",
                    "(8x)"
                ]
            },
            {
                name: "final",
                chords: [
                    "E E6 E7+ E6",
                    "E",
                    "C C6 C7+ C6"
                ]
            },
            {
                name: "volta",
                chords: [
                    "p2",
                    "p3",
                    "pr - r",
                    "final"
                ]
            }
        ],
        block: 5,
        id: 23
    },
    {
        title: "Ligando os fatos ",
        tone: "E",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "E7+",
                    "C#m7",
                    "A7+",
                    "F#m7 B7(4)",
                    "C#m",
                    "G#m7(11)",
                    "A7+",
                    "B7 Bm7 E7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "A7+ 17 16 17 16 17 19",
                    "B7(9)",
                    "G#m7",
                    "C#7(b13)",
                    "F#m7 B7(9)",
                    "G#m7 C#7",
                    "F#m7 B7",
                    "A7+ G#m7 F#m7 B7"
                ]
            },
            {
                name: "REF",
                chords: [
                    "E7+",
                    "F#/E",
                    "A7+ E/G#",
                    "F#m7 B7(4)",
                    "C#m7",
                    "G#m7",
                    "A7+ E/G#",
                    "C7+ B7"
                ]
            }
        ],
        block: 5,
        id: 24
    },
    {
        title: "Sonho de amor",
        tone: "E",
        artist: "Nosso Sentimento",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "E7+",
                    "A7+ B7(4sus)",
                    "E7+ E7(4sus) [0 2 5 6]",
                    "A7+ Cº",
                    "C#m7",
                    "F#7(9)",
                    "C#m6(9)",
                    "F#7(9)",
                    "A7+ B7(4)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "C7+",
                    "G7+",
                    "C7+",
                    "Am6 B7(4)",
                    "E7+ B7(4)"
                ]
            },
            {
                name: "REF",
                chords: [
                    "E7+ B",
                    "C#m7 G#m7",
                    "A7+ G#m7",
                    "F#m7 B7(4)"
                ]
            },
            {
                name: "POS-REF",
                chords: [
                    "C7+ B7(4)"
                ]
            }
        ],
        block: 5,
        id: 25
    },
    {
        title: "fulminante",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "E9",
                    "A9",
                    "E9",
                    "A9"
                ]
            },
            {
                name: "p1",
                chords: [
                    "E9",
                    "A9",
                    "E9",
                    "A9 Cº",
                    "C#m7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "E9",
                    "B/A",
                    "G#m7",
                    "C#m7 B9",
                    "(2x)",
                    "A9 E/G#^F#m7",
                    "Bm7 D/E"
                ]
            },
            {
                name: "REF",
                chords: [
                    "A9",
                    "B7",
                    "G#m7",
                    "C#m7 B9"
                ]
            }
        ],
        block: 5,
        id: 26
    },
    {
        title: "Tristinha",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "31 20 12 31 20 12",
                    "Bm7 E7(4)(9)"
                ]
            },
            {
                name: "intro",
                chords: [
                    "A7+",
                    "G#m7",
                    "F#m7"
                ],
                finalizations: [
                    [
                        "E7+ E Bm7 E7(4)(9)"
                    ],
                    [
                        "E7+ E B7(4)(9)"
                    ]
                ]
            },
            {
                name: "p1",
                chords: [
                    "E7+",
                    "A7+",
                    "E7+",
                    "A7+ 16 14 25 24",
                    "G#m7 C#m7",
                    "A7+ A9",
                    "G#m7 C#m7",
                    "A7+ Bsus C#sus"
                ]
            },
            {
                name: "p2",
                chords: [
                    "A7+",
                    "G#m7",
                    "A7+ A9",
                    "G#m7 C#m7",
                    "22 12 14  14  44 44 31 31 32 32 33 34",
                    "Bsus"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "A7+",
                    "G#m7",
                    "F#m7 Bsus",
                    "E7+ E4^E"
                ]
            },
            {
                name: "final",
                chords: [
                    "A7+ G#sus7(b13)"
                ]
            }
        ],
        block: 6,
        id: 27
    },
    {
        title: "Deixa tudo como tá",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "tirar"
                ]
            },
            {
                name: "p2",
                chords: [
                    "A7+ G#m7(11)",
                    "B C#m7(9)",
                    "D7+(b5) D7+",
                    "G#sus G#7"
                ]
            },
            {
                name: "p3",
                chords: [
                    "A9",
                    "Bsus",
                    "G#4 G#7",
                    "C#m7 B Esus E/G#",
                    "A7+",
                    "B",
                    "G#4 G#7",
                    "C#m7 B Esus E"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "A7+",
                    "B B9",
                    "G#4 G#7",
                    "C#m7 B Esus E/G#",
                    "A7+",
                    "B B9",
                    "G#4 G#7",
                    "C#m7 B Esus E/G#"
                ]
            },
            {
                name: "final",
                chords: [
                    "A7+",
                    "Bsus",
                    "C#sus Bsus Asus Csus 12 21 20 32"
                ]
            }
        ],
        block: 6,
        id: 28
    },
    {
        title: "Onze e pouquinho",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "F7+ G",
                    "Em7 Am7",
                    "F7+ G",
                    "Em7 Am7"
                ]
            },
            {
                name: "p1",
                chords: [
                    "F7+ G",
                    "Em7 Am7",
                    "F9 G",
                    "Em7 Am7^G^C^Dm7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "F7+ G",
                    "Em7 Am7",
                    "F7+ G",
                    "Em7 35 34 32 42 30 43 42 "
                ]
            },
            {
                name: "pre-ref",
                chords: [
                    "Dm7^Dm7 10 12 12",
                    "F7+^F7+ 13 15 15",
                    "F7+ Dm7",
                    "E F E"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "F7+ G",
                    "Em7 Am7",
                    "F7+ G"
                ],
                finalizations: [
                    [
                        "Em7 12 21 20 32 12 21 20 32"
                    ],
                    [
                        "Em7 Am7"
                    ]
                ]
            },
            {
                name: "Final",
                chords: [
                    "F7+ G",
                    "Em7 Am7"
                ]
            }
        ],
        block: 6,
        id: 29
    },
    {
        title: "Alucinado",
        tone: "Bbm",
        artist: "Doce Encontro",
        stanzas: [
            {
                name: "intro - base",
                chords: [
                    "Bbm",
                    "Gb7+",
                    "Bbm7(9)",
                    "Gb7+ Bbm6"
                ]
            },
            {
                name: "intro - solo",
                chords: [
                    "36 35 46",
                    "36 35 46 38 36 35 36",
                    "36 35 46 43 44 43"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Bbm7(9)",
                    "Ebm7(9) Gb/Ab",
                    "Db9^Db Db7+(9)",
                    "Cm7 F7(9)",
                    "Bbm7(9)",
                    "Ebm7(9) Gb^Ab",
                    "Db4^Db Db9^Db7",
                    "Cm7 F7(9)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Bbm7(9)",
                    "Gb7+",
                    "Db7+ G7(b5)",
                    "Gb7+ Fm7(9) [F7(9)]"
                ]
            },
            {
                name: "pre-refrao",
                chords: [
                    "Db9 Db9(#5)",
                    "Db9(6) Db7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "Gb7+",
                    "Gb/Ab",
                    "Fm7(b5)",
                    "Bb7(4) Bb7"
                ]
            },
            {
                name: "volta",
                chords: [
                    "Gb7+",
                    "36 35 46 43 44 43"
                ]
            }
        ],
        block: 7,
        id: 30
    },
    {
        title: "Perfume",
        tone: "",
        artist: "",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "Cm7  Dm7  Eb7+ 24 23 (4x) 35 33 23 35",
                    "26 28 17 18 17 28",
                    "37 38 26 28 26"
                ]
            },
            {
                name: "intro",
                chords: [
                    "Cm7  Dm7  Eb7+",
                    "Eb7+",
                    "Dm7",
                    "Cm7",
                    "Bb7+ Cm7  Dm7"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Eb7+",
                    "Dm7",
                    "Cm7",
                    "Bb7+ Eb7+^Dm7",
                    "Eb7+",
                    "Dm7",
                    "Cm7",
                    "Bb7+ D7(b13)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Eb7+",
                    "Bb/D",
                    "Am7(b5) D7(b9)",
                    "Gm7",
                    "Eb7+",
                    "Bb/D",
                    "Am7(b5) D7",
                    "G7+ Eb/F F/Eb"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "Dm7 Gm7",
                    "Eb7+",
                    "Dm7 Gm7",
                    "Ab7+ Eb/F F/Eb"
                ]
            }
        ],
        block: 7,
        id: 31
    },
    {
        title: "Desse Jeito é ruim pra mim",
        tone: "",
        artist: "",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "35 37 38 37 38 26 38 26 28",
                    "33 35 36 35 36 24 36 24 26",
                    "13^14^13 22 33 31 44 43 22 33"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Bbm7",
                    "F#7+ F#6(9)",
                    "D#m7(9) C#9",
                    "Cm7(4) F7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "F7+",
                    "Bbm7 G7(b5)",
                    "F# 13 14 16 22",
                    "G#7(4)(9)"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "C#9",
                    "Bbm7",
                    "F#",
                    "A9 B9"
                ]
            }
        ],
        block: 7,
        id: 32
    },
    {
        title: "Insegurança",
        tone: "-",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "43 13 11 23 21 21 23 43",
                    "43 13 11 23 21 21",
                    "33 21 23 11 13 22 21 11",
                    "14 13"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Bb7+ F",
                    "Gm7 Gm7/F",
                    "Eb7+ Bb9",
                    "Cm7 F7(4)",
                    "Bb7+ F",
                    "Gm7 Bb7(4)",
                    "Eb7+ Dm7",
                    "Cm7 F7 (30 32 33 23)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Eb7+  (30 32 33 23)",
                    "Gm7",
                    "Ab7+ F7(4)",
                    "Bb7+ F7(4)"
                ]
            },
            {
                name: "REF",
                chords: [
                    "Bb7+ Bb7(4)",
                    "Eb7+ Eb7+ Dm7"
                ],
                finalizations: [
                    [
                        "Cm7 Gm7",
                        "Gb7+ F7(4)"
                    ],
                    [
                        "Cm7 F7(4)",
                        "Bb7+ F7(4)"
                    ]
                ]
            },
            {
                name: "POS-REF",
                chords: [
                    "Eb7+ Dm7",
                    "Cm7 F7(4)"
                ]
            }
        ],
        block: 8,
        id: 33
    },
    {
        title: "Me espera - Sorriso Maroto",
        tone: "-",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "-"
                ]
            },
            {
                name: "intro",
                chords: [
                    "Bb7+",
                    "Bb7+ ^ F/A ^ Gm7 ",
                    "Cm7",
                    "F7(4)(9)"
                ]
            },
            {
                name: "P1",
                chords: [
                    "Bb7+",
                    "Gm7(11)"
                ],
                preview: "me desculpe se outro dia eu te fiz chorar ...",
                finalizations: [
                    [
                        "Cm7",
                        "F7(13)",
                        "F7(b13)"
                    ],
                    [
                        "Eb7+ Cm7",
                        "Fm7 Fm6 Ab/Bb Bb7"
                    ]
                ]
            },
            {
                name: "P2",
                chords: [
                    "Eb7+",
                    "F/Eb Gm7",
                    "Cm7",
                    "Fm7 Fm6 Ab/Bb Bb7",
                    "Eb7+ Cm7",
                    "Dm7 Gm7",
                    "Cm7 Eb/F",
                    "Bb6(9) Cm7 F7"
                ]
            },
            {
                name: "REF",
                chords: [
                    "Bb7+",
                    "Gm7",
                    "Cm7",
                    "F7(4) F7"
                ]
            }
        ],
        block: 8,
        id: 34
    },
    {
        title: "Tira ela de mim",
        tone: "Bb",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "Bb7+",
                    "Bb7+ ^ F/A ^ Gm7 ",
                    "Cm7 F7(4)(9)"
                ]
            },
            {
                name: "P1",
                chords: [
                    "Eb7+(9)",
                    "F/Eb",
                    "Dm7",
                    "Gm7",
                    "Cm7",
                    "Ab7+",
                    "Cm7",
                    "F7(4)(9) F7"
                ]
            },
            {
                name: "P2",
                chords: [
                    "Eb7+(9)",
                    "F/Eb",
                    "Dm7",
                    "G7(4) G7",
                    "Cm7 Dm7",
                    "Eb7+",
                    "F7(4)(9) F7"
                ]
            },
            {
                name: "REF",
                chords: [
                    "Bb7+ F/A",
                    "Gm7 Dm7",
                    "Eb7+ Cm7",
                    "F7(4)(9) F7"
                ]
            },
            {
                name: "final",
                chords: [
                    "Eb Dm Fm7 F",
                    "Bb7+"
                ]
            }
        ],
        block: 8,
        id: 35
    },
    {
        title: "[D] Pé na Areia",
        artist: "Diogo Nogueira",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "D7+(9)",
                    "D7(9)",
                    "G7+ G6",
                    "Gm7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Em7(9)",
                    "D7+(9)",
                    "Em7(9)",
                    "D7+(9)",
                    "Em7(9)",
                    "D7+(9)",
                    "Em7(9)",
                    "F#7(4) F#7"
                ]
            },
            {
                name: "ref",
                chords: [
                    "Em7(9) G7+",
                    "D7+ B7",
                    "Em7(9) G7+",
                    "D7+"
                ]
            }
        ],
        block: 9,
        id: 36
    },
    {
        title: "Deixa Acontecer",
        tone: "D",
        artist: "Revelação",
        stanzas: [
            {
                name: "Refrão",
                chords: [
                    "Bm D7",
                    "G7+ F#7",
                    "(3x)",
                    "Bm D7",
                    "C#m7(b5) F#7",
                    "Bm7 A7"
                ]
            },
            {
                name: "P1",
                chords: [
                    "(22 24 22 24 22 24 24) D ",
                    "F#m7",
                    "Em7 A7",
                    "G7+ F#m7 Em7 A7",
                    "D ",
                    "F#m7",
                    "Em7 Em7/D",
                    "C#m7(b5) F#7 14 15 14 15 14 15 14"
                ]
            },
            {
                name: "P2",
                chords: [
                    "Bm (17 19) 5x",
                    "F#m7",
                    "Em7 F#7",
                    "Bm",
                    "A7",
                    "D",
                    "C#m7(b5) F#7"
                ]
            }
        ],
        block: 9,
        id: 37
    },
    {
        title: "Eternamente Feliz",
        tone: "D",
        stanzas: [
            {
                name: "P1 - 3x",
                chords: [
                    "D6(9)",
                    "A Bbº",
                    "Bm7 F#m7",
                    "G7+ A7"
                ]
            },
            {
                name: "PR",
                chords: [
                    "Bm7 Bm7+",
                    "Bm7 A7",
                    "Bb7+ C7+"
                ]
            },
            {
                name: "Ref",
                chords: [
                    "D6(9)",
                    "A7(4) A7",
                    "D6(9)",
                    "A7(4) A7 F#7",
                    "Bm7",
                    "A9",
                    "E/G# G#º",
                    "Em7 A7"
                ]
            }
        ],
        block: 9,
        id: 38
    },
    {
        title: "(D) Para de pirraça - Imagina",
        tone: "G",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "D7+ F#m7(9)",
                    "G7+ A7",
                    "D7+ F#m7(9)",
                    "G7+ C#m7(b5) F#7(#5)",
                    "Bm7 Bm7+",
                    "G7+ F#m7(9)",
                    "Em7 F#m7(9)",
                    "G7+ A7"
                ],
                finalizations: [
                    [
                        "-"
                    ],
                    [
                        "Am7 D7"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "G7+ G6",
                    "F#m7(9) Am7 D7",
                    "G7+ F#7(#5)",
                    "Bm7 Bbm7",
                    "Am7 D7",
                    "G7+ G6",
                    "A#7 A7"
                ]
            },
            {
                name: "REF",
                chords: [
                    "D7+ D7",
                    "G7+ G6",
                    "F#m7(9) Bm7",
                    "[1ª] Em7 A7",
                    "[2ª] Em7 F#m7 G7+ A7"
                ]
            }
        ],
        block: 9,
        id: 39
    },
    {
        title: "O Beijo que me prometeu - Suel",
        tone: "-",
        stanzas: [
            {
                name: "refrao",
                chords: [
                    "D D7",
                    "G7+ A7",
                    "F#m7 Bm",
                    "Em7 A7"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Bm7 F#m7",
                    "G7+ A7",
                    "F#m7 Bm"
                ],
                finalizations: [
                    [
                        "Em7 A7"
                    ],
                    [
                        "Em7 Am7^D7"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "G7+ A7",
                    "F#m7 Bm",
                    "G7+ G6",
                    "C#m7(b5) F#7"
                ]
            },
            {
                name: "p3 - Agora...",
                chords: [
                    "Bm D7",
                    "G7+ A7",
                    "F#m Bm",
                    "Em7 A7"
                ]
            }
        ],
        block: 9,
        id: 40
    },
    {
        title: "Tchau e bença",
        tone: "-",
        artist: "Exaltasamba",
        link: "https://www.nandinhocavaco.com.br/2015/06/exaltasamba-tchau-e-benca-partitura.html",
        stanzas: [
            {
                name: "p1",
                chords: [
                    " D6(9)",
                    "Em7(5b) A7",
                    "D6(9)",
                    " Em7(5b) C7(9)"
                ],
                finalizations: [
                    [
                        "Bb7+  A7"
                    ],
                    [
                        "F7+ D7"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "G7+ F#7",
                    "Bm7 D7"
                ]
            },
            {
                name: "pre-refrao",
                chords: [
                    "G7+ A7"
                ]
            },
            {
                name: "Refrap",
                chords: [
                    "D D7",
                    "G7+ F#7",
                    "Bm7 D7",
                    "G7+ F#7",
                    "Bm7 D7",
                    "G7+ C7(9)",
                    "Bm7 D4sus",
                    "G7+ A7"
                ]
            }
        ],
        block: 9,
        id: 41
    },
    {
        title: "Loka Loka",
        tone: "-",
        artist: "Pura Cadência",
        stanzas: [
            {
                name: "loop",
                chords: [
                    "D",
                    "G7+ A7"
                ]
            }
        ],
        block: 9,
        id: 42
    },
    {
        title: "Mulher de Amigo meu",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "D F#m7",
                    "G7+ A7",
                    "D F#m7",
                    "G7+ F#7",
                    "Bm7 E7(9) (2x)",
                    "Em7 F#m7 G7+ A7 (4x)"
                ]
            },
            {
                name: "ref",
                chords: [
                    "D D7",
                    "G7+ F#7",
                    "Bm7 D7",
                    "G7+ A7"
                ]
            },
            {
                name: "le le le",
                chords: [
                    "D D7",
                    "G7+ F#7",
                    "Bm7 D7"
                ],
                finalizations: [
                    [
                        "G7+ F#7",
                        "G7+ A7"
                    ]
                ]
            }
        ],
        block: 9,
        id: 43
    },
    {
        title: "To amando você",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "D",
                    "E7(9)",
                    "Em A7",
                    "D A7",
                    "(3x)"
                ]
            },
            {
                name: "p1-4",
                chords: [
                    "D",
                    "E7(9)",
                    "Em A7",
                    "D F#7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Bm7 E7(9)",
                    "Bm E7(9)",
                    "Am7 D7"
                ]
            },
            {
                name: "ref",
                chords: [
                    "G7+ F#7",
                    "Bm D7",
                    "G7+ F#7",
                    "Bm"
                ]
            }
        ],
        block: 9,
        id: 44
    },
    {
        title: "Só no final - Turma do Pagode",
        tone: "-",
        stanzas: [
            {
                name: "loop",
                chords: [
                    "G7+",
                    "Gm6",
                    "F#m7",
                    "Fº",
                    "Em7",
                    "Gm6",
                    "Bm7",
                    "Am7 D7"
                ]
            }
        ],
        block: 9,
        id: 45
    },
    {
        title: "E laia (brilho no olhar - reinaldo)",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "D6(9)",
                    "F#m7 A7"
                ]
            },
            {
                name: "p1",
                chords: [
                    "D6(9) Bm7",
                    "F#m7 G7+^F#m7",
                    "Em7 A7(13)"
                ],
                finalizations: [
                    [
                        "D6(9) A7(9)"
                    ],
                    [
                        "Am7 D7"
                    ]
                ]
            },
            {
                name: "pr",
                chords: [
                    "G7 F#7",
                    "Bm D7"
                ]
            },
            {
                name: "REF",
                chords: [
                    "G7+ Gm6",
                    "F#m7 Fº",
                    "Em7 A7(13)",
                    "Am D7(13)",
                    "G7+ Gm6",
                    "F#m7 Fº",
                    "Em7^F#m7^G7+^A7(13)",
                    "D6(9)^D6(9)^Am7^D7"
                ]
            }
        ],
        block: 9,
        id: 46
    },
    {
        title: "Nossa escola (Dona Ivone Lara)",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "G7+ A7",
                    "D7+ D",
                    "G7+ A7",
                    "D7+ F#7"
                ]
            },
            {
                name: "REF",
                chords: [
                    "Bm7 E7(9)",
                    "Bm7 E7(9)",
                    "G7+ F#m",
                    "C F#7",
                    "Bm7 E7(9)",
                    "Bm7 E7(9)",
                    "G7+ Em7",
                    "Bm7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "G#m7(b5) A7",
                    "F#m7(b5) B7",
                    "E7 A7"
                ],
                finalizations: [
                    [
                        "D D7"
                    ],
                    [
                        "D F#7"
                    ]
                ]
            }
        ],
        block: 9,
        id: 47
    },
    {
        title: "Estonteante",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "D6(9)",
                    "G7+(b5)",
                    "D6(9)"
                ]
            },
            {
                name: "p1",
                chords: [
                    "D6(9)",
                    "G7+(b5)",
                    "D6(9)",
                    "D6(9)",
                    "G7+(b5)",
                    "Em7",
                    "%",
                    "Bm7",
                    "Bb7+",
                    "C7+"
                ]
            },
            {
                name: "pr",
                chords: [
                    "D6(9)",
                    "Am7 D7(13)"
                ]
            },
            {
                name: "REF",
                chords: [
                    "G7+",
                    "Gm6",
                    "F#m7",
                    "B7",
                    "Em7 F#m7",
                    "Gm6 A7",
                    "D6(9)",
                    "Am7 D7(13)"
                ]
            }
        ],
        block: 9,
        id: 48
    },
    {
        title: "Demoro",
        tone: "D",
        artist: "Exalta",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "A7",
                    "D6(9)",
                    "A7",
                    "D6(9)",
                    "G F#7",
                    "Bm7",
                    "E",
                    "G7+ F#m7 Em7 A7",
                    "%"
                ]
            },
            {
                name: "Refrão",
                chords: [
                    "D Dsus4",
                    "G7+ F#7",
                    "Bm7 D7 (Am7 2ª)",
                    "G7+ A7"
                ]
            }
        ],
        block: 9,
        id: 49
    },
    {
        title: "(F) A Gente bota Pra Quebrar",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "10 10 10 10 13 15",
                    "16 15 13 10 10 10 10 21 23",
                    "10 10 10 10 13 15 (3x)",
                    "16 15 13 10 10 10 10 21 23",
                    "17 (5x) 15 (5×) ",
                    "12 13 15 13 12 (5x) 13 "
                ]
            },
            {
                name: "le le le ",
                chords: [
                    "Dm7(9)",
                    "Em7(5b) A7(b5)"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Dm7",
                    "Gm7 C7(9)",
                    "F7+ B7+",
                    "Em7(b5) A7(-13) "
                ]
            },
            {
                name: "p2",
                chords: [
                    "Gm7 C7(9)",
                    "F9 Bb7+",
                    "Em7(b5) A7(-13)",
                    "Dm7"
                ]
            },
            {
                name: "Ref",
                chords: [
                    "Dm7(9)",
                    "Em7(5b) A7(b5)"
                ]
            }
        ],
        block: 10,
        id: 50
    },
    {
        title: "Som do tambor",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "F7+",
                    "%",
                    "Bb7+",
                    "%"
                ]
            },
            {
                name: "p1",
                chords: [
                    "F7+",
                    "%",
                    "Bb7+",
                    "%"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Gm7",
                    "%",
                    "Am7",
                    "%",
                    "Gm7",
                    "Gm7 C7",
                    "F7+",
                    "F7"
                ]
            },
            {
                name: "REF",
                chords: [
                    "Bb7+",
                    "Am7",
                    "Dm",
                    "|: Bb7+ C7",
                    "Am7 D7",
                    "Gm C7 :|",
                    "1ª[F7+ F7]",
                    "2ª[F7+]"
                ]
            }
        ],
        block: 10,
        id: 51
    },
    {
        title: "Domingo",
        tone: "-",
        stanzas: [
            {
                name: "loop",
                chords: [
                    "F7+",
                    "Am7",
                    "Cm F7",
                    "Bb7+",
                    "Bbm6",
                    "Am7 D7",
                    "G7(9)",
                    "Gm7 C7"
                ]
            }
        ],
        block: 10,
        id: 52
    },
    {
        title: "Me faz feliz",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "F7+",
                    "Cm F7(9)",
                    "Bb7+",
                    "C#7+ C7(9)",
                    "F7+",
                    "Cm F7(9)",
                    "Bb7+",
                    "Bbm7",
                    "G#7+ C#7+",
                    "C7"
                ]
            },
            {
                name: "REF",
                chords: [
                    "F7+ Am7",
                    "Bb7+ C7(4)(9)",
                    "Am7 Dm7",
                    "Bb7+ C7(4)(9)",
                    "G#7+ C#7+",
                    "C7(4)(9)"
                ]
            }
        ],
        block: 10,
        id: 53
    },
    {
        title: "(F) Ta escrito - Revela",
        tone: "F",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "F",
                    "C Bb",
                    "F Dm",
                    "Gm C7"
                ],
                finalizations: [
                    [
                        "-"
                    ],
                    [
                        "F F7 (13 12 11)"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "Bb",
                    "Bb",
                    "F Bb",
                    "Am",
                    "Gm",
                    "C7",
                    "F F7+",
                    "Cm F7",
                    "Bb",
                    "Bb",
                    "F Bb",
                    "Am D7(b)",
                    "Gm C7",
                    "F D7",
                    "Gm C7",
                    "F F7"
                ]
            },
            {
                name: "REF",
                chords: [
                    "Bb",
                    "Bb C7",
                    "F F7+",
                    "Dm",
                    "C7",
                    "Bb C7",
                    "F F7+",
                    "Cm F7"
                ]
            }
        ],
        block: 11,
        id: 54
    },
    {
        title: "Hoje eu vou pagodear (fundo de quintal)",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "F",
                    "F",
                    "Bb C7",
                    "F C7"
                ],
                finalizations: [
                    [
                        "F C7"
                    ],
                    [
                        "F 13 12 11"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "Bb",
                    "Bb",
                    "Am",
                    "Am C/D D7",
                    "Gm7 Am7",
                    "Gm7 C7"
                ],
                finalizations: [
                    [
                        "F C",
                        "Cm F7"
                    ],
                    [
                        "F F7"
                    ]
                ]
            },
            {
                name: "REF",
                chords: [
                    "Bb",
                    "Bb",
                    "F",
                    "F Eb7 D7",
                    "G7",
                    "Gm7 C7"
                ],
                finalizations: [
                    [
                        "F C",
                        "Cm F7"
                    ],
                    [
                        "F F7"
                    ]
                ]
            }
        ],
        block: 11,
        id: 55
    },
    {
        title: "Samba de Roda da Bahia",
        tone: "F",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "F",
                    "F",
                    "C",
                    "Bb"
                ],
                preview: "Quem não tem Cabelo"
            },
            {
                name: "p1",
                chords: [
                    "F",
                    "F",
                    "Gm",
                    "C7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "F Gm",
                    "Am Gm"
                ]
            }
        ],
        block: 11,
        id: 56
    },
    {
        title: "Quem não tem cabelo",
        preview: "Quem não tem cabelo não carrega trança",
        tone: "F",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "tirar"
                ]
            }
        ],
        block: 11,
        id: 57
    },
    {
        title: "Camarão que dorme",
        tone: "F",
        stanzas: [
            {
                name: "Refrão",
                chords: [
                    "F C7",
                    "F",
                    "F7",
                    "Bb",
                    "Bb C7",
                    "F D7",
                    "Gm C7",
                    "F F7"
                ]
            }
        ],
        block: 11,
        id: 58
    },
    {
        title: "Churrasco na brasa",
        tone: "F",
        stanzas: [
            {
                name: "Refrão",
                chords: [
                    "F B7",
                    "F D7",
                    "G7 C7",
                    "F C7"
                ]
            }
        ],
        block: 11,
        id: 59
    },
    {
        title: "Desengano",
        tone: "C",
        stanzas: [
            {
                name: "loop",
                chords: [
                    "C7+",
                    "Gm7 C7",
                    "F7+",
                    "Fm G7"
                ]
            }
        ],
        block: 12,
        id: 60
    },
    {
        title: "Só pro meu prazer",
        tone: "C",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C7+",
                    "F7+",
                    "[4x]"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "Am",
                    "Em",
                    "Am",
                    "Em",
                    "Dm",
                    "Em",
                    "F7+",
                    "Em Dm G7(4)"
                ]
            }
        ],
        block: 12,
        id: 61
    },
    {
        title: "Bem que se quis",
        tone: "-",
        artist: "Exaltassamba",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C7+",
                    "G7(4)",
                    "C7+",
                    "Bm7(b5) E7",
                    "Am7",
                    "Gm7 C7",
                    "F7+",
                    "Em7 Am7",
                    "G7(4)"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "C7+",
                    "Am7 G#m7 Gm7 C7",
                    "F7+ Am7",
                    "Dm7 G7(4)"
                ]
            }
        ],
        block: 12,
        id: 62
    },
    {
        title: "Quando a chuva passar",
        tone: "Am",
        stanzas: [
            {
                name: "P1",
                chords: [
                    "F G",
                    "Am",
                    "(3x)",
                    "Bb",
                    "G",
                    "Bb",
                    "G"
                ]
            },
            {
                name: "Ref",
                chords: [
                    "F G",
                    "Am",
                    "(2x)",
                    "F G",
                    "G#º Am",
                    "Bb",
                    "G"
                ]
            }
        ],
        block: 12,
        id: 63
    },
    {
        title: "Evidencias",
        tone: "-",
        artist: "Pericles",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C",
                    "G",
                    "Am7",
                    "C7(9) C7",
                    "F",
                    "A7",
                    "Dm",
                    "%",
                    "G7",
                    "G#º",
                    "Am7"
                ],
                finalizations: [
                    [
                        "Am/G",
                        "D  C",
                        "D",
                        "F",
                        "G"
                    ],
                    [
                        "Fm",
                        "C",
                        "F/A",
                        "C4 C C4 C G7?"
                    ]
                ]
            },
            {
                name: "refrao",
                chords: [
                    "C",
                    "%",
                    "E",
                    "%",
                    "F",
                    "Dm",
                    "G7",
                    "Dm",
                    "G7"
                ]
            },
            {
                name: "pos-refrao",
                chords: [
                    "C",
                    "C5+",
                    "F F^C^Dm",
                    "Dm7 G7"
                ]
            }
        ],
        block: 12,
        id: 64
    },
    {
        title: "Marra de durão",
        tone: "",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "D6(9) D6(9) D6(9)",
                    "C6(9) C6(9) C6(9)",
                    "Bb6(9) Bb6(9) Bb6(9)",
                    "D7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "G9(9)",
                    "Em7(11)",
                    "F#m7",
                    "Bm7(11)",
                    "G7+ F#m7",
                    "Em7 A7",
                    "D7+(9) 17 15 27 25 37 36 37"
                ]
            },
            {
                name: "p1",
                chords: [
                    "G6(9)",
                    "A/G",
                    "G6(9)",
                    "A/G",
                    "34 36 37 25"
                ]
            },
            {
                name: "p2",
                chords: [
                    "A7(4)(9)",
                    "%",
                    "D6(9)",
                    "B7(4)(9)",
                    "Em7(11)",
                    "D#7(9)(#11) A7(13) A7(4)(9)",
                    ""
                ]
            },
            {
                name: "p3",
                chords: [
                    "D6(9) A/C#",
                    "D/C D7(4)(9)"
                ]
            }
        ],
        block: 13,
        id: 65
    },
    {
        title: "Traição - Vitinho",
        tone: "",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "14 23 (8x)",
                    "12 22 (8x)",
                    "22 32 (8x)",
                    "30 | 44 30 32 | 30 32 34| 32 34 22 34 32 30"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Em7(9)",
                    "G9/A",
                    "Bm7 Bm7add(11)",
                    "D9",
                    "Em7(9)",
                    "G9/A",
                    "Bm7add(11)",
                    "Am7 Ab7(#11)"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "G7+",
                    "G9/A",
                    "D7+ A9/C#",
                    "Bm7 Ab7(#11)",
                    "Em7(9)",
                    "G9/A",
                    "Bm7(11) A9/C#",
                    "Am7/D"
                ]
            },
            {
                name: "solo",
                chords: [
                    "14 15 17",
                    "10 12 14",
                    "20 21 10 10 20 30 44"
                ]
            }
        ],
        block: 13,
        id: 66
    },
    {
        title: "Por Favor",
        tone: "",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "A D7+"
                ]
            },
            {
                name: "p1",
                chords: [
                    "A7+ D7+",
                    "F#m7 D/E",
                    "A7+ D7+",
                    "F#m7 D/E",
                    "A9 A9 D/A D/A",
                    "F#m7 F#m7 22 22 21 44 20 21 22",
                    "A/C# D6(9)",
                    "B/D# E7(4)(9)^C#7(b9)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "F#m F#m7+",
                    "F#m7 F#m6"
                ],
                finalizations: [
                    [
                        "D6(9) C#m7",
                        "Bm7 C#7(b9)"
                    ],
                    [
                        "D7+(9) A7+",
                        "Em7 10 17 15 10 27 25 20 10 25"
                    ]
                ]
            },
            {
                name: "Ref",
                chords: [
                    "A7+ E/G#",
                    "C#m7(b5) F#7(b13)"
                ],
                finalizations: [
                    [
                        "D/E Bm7",
                        "G7+ E/G#"
                    ],
                    [
                        "Dm6(9) Bm7",
                        "G7+ G7+^D/E"
                    ]
                ]
            },
            {
                name: "Final",
                chords: [
                    "A7+ D7+",
                    "A7+ 17 17 15 26 25 A7+"
                ]
            },
            {
                name: "Solo do refrão",
                chords: [
                    "47 36 39 17 11 19 17 19",
                    "16 17 19 25 27 29 36 37 39 47 49 411 45"
                ]
            }
        ],
        block: 13,
        id: 67
    },
    {
        title: "40 Graus de amor",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "Fm7 Bb7(13)",
                    "Fm7 Bb7",
                    "C7+ Am7",
                    "Fm7 G7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "C7+",
                    "F7+ Bb7",
                    "C7+",
                    "F7+ Bb7"
                ]
            },
            {
                name: "p3",
                chords: [
                    "Dm Em",
                    "Fm7 Bb7(13)",
                    "Ab7+",
                    "Bb7 G7(4)"
                ]
            },
            {
                name: "pr",
                chords: [
                    "C7+ C9",
                    "Fm7 Bb7(13)",
                    "Ab7+",
                    "Bb7",
                    "Dm",
                    "G7(4) G7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "C7+ G",
                    "Bb7+(b5) A7",
                    "Dm7 Bb7+",
                    "Fm7 G7"
                ]
            },
            {
                name: "Final",
                chords: [
                    "Fm7 Bb7(13)",
                    "Fm7 Bb7(13)",
                    "C"
                ]
            }
        ],
        block: 14,
        id: 68
    },
    {
        title: "Gamei",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "Cm",
                    "F7(9)",
                    "Bb7(4)(9)",
                    "Eb7+",
                    "Dm7(5b) G7(b13)",
                    "Cm",
                    "Aº",
                    "Dm7(b5) G7(13)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Fm",
                    "Bb",
                    "Fm",
                    "Bb",
                    "Fm",
                    "Bb",
                    "Cm C7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "F7+ F6",
                    "Bbm",
                    "Am7 D7(b9)",
                    "Gm C7(9)"
                ]
            },
            {
                name: "volta",
                chords: [
                    "Dm7(b5) G7(b13)"
                ]
            }
        ],
        block: 14,
        id: 69
    },
    {
        title: "Azul sem fim",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "tirar"
                ]
            },
            {
                name: "p1",
                chords: [
                    "E9 A7+",
                    "E9 A7+",
                    "G#m7 A9",
                    "G#m7 B7(4)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "A9",
                    "C#m7 G#m7",
                    "A9 D7+(9)",
                    "E9",
                    "Am6",
                    "C#m7 G#m7",
                    "A9 D7(9)"
                ]
            },
            {
                name: "ref",
                chords: [
                    "E9",
                    "E7(9)",
                    "A7+ A6",
                    "F#m7(11) B7",
                    "G#m7 C#m7",
                    "F7+ G7+"
                ]
            },
            {
                name: "final",
                chords: [
                    "E",
                    "E7(9)",
                    "A7+",
                    "D7(9) Am6"
                ]
            }
        ],
        block: 14,
        id: 70
    },
    {
        title: "Até o Sol quis ver",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "E B7"
                ]
            },
            {
                name: "p1",
                chords: [
                    "E9 A^B7",
                    "E9 C#m7",
                    "A7+ F#m7",
                    "B7(4) B7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "C7+",
                    "B7 Am9 C9 D7",
                    "G7+ C7+"
                ],
                finalizations: [
                    [
                        "A9"
                    ],
                    [
                        "B7 B7^F#m7^B7"
                    ]
                ]
            },
            {
                name: "ref",
                chords: [
                    "E9 B",
                    "C#m7 G#m7",
                    "A7+ F#m7",
                    "D7+ B7"
                ]
            }
        ],
        block: 14,
        id: 71
    },
    {
        title: "A Carta - Pericao",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "F#m7(5b)",
                    "F7(5b)",
                    "Em7",
                    "F#m7(5b) B7(b13)",
                    "G7+ C7+",
                    "F#m7(b5) F7(b5)",
                    "Em7 G7(13)",
                    "Am7(9) B7(b13)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "E7+",
                    "A7+",
                    "A7+",
                    "Am7 D/F#",
                    "G7+",
                    "C7+",
                    "G7+",
                    "Cm6",
                    "G7+ F#m7",
                    "B7..."
                ]
            },
            {
                name: "refrao",
                chords: [
                    "E7+ G#7(b13)",
                    "C#m7 C(#5)",
                    "Bm7(11) E/D",
                    "A7+ G#m7(11)",
                    "F#m7 Cº",
                    "C#m7 E",
                    "F#7(9)",
                    "A7+ F#m7"
                ]
            },
            {
                name: "pos-refrao",
                chords: [
                    "F#m7(5b)",
                    "F7(5b)..."
                ]
            }
        ],
        block: 14,
        id: 72
    },
    {
        title: "(Am) Retalhos de cetim",
        tone: "-",
        artist: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "Am7 B7",
                    "Em7",
                    "Am7 B7",
                    "Em7",
                    "Am",
                    "C C6(9)",
                    "F7+ F#º",
                    "E7"
                ]
            },
            {
                name: "Refrão",
                chords: [
                    "A E/G#",
                    "Em7/G F#7",
                    "Bm Bm5+",
                    "Bm6 E7",
                    "Am C7",
                    "F7+ Am",
                    "Dm E7",
                    "A E7"
                ]
            }
        ],
        block: 15,
        id: 73
    },
    {
        title: "Não deixe o samba morrer",
        tone: "",
        artist: "Alcione",
        stanzas: [
            {
                name: "tirar",
                chords: [
                    ""
                ]
            }
        ],
        block: 15,
        id: 74
    },
    {
        title: "O meu Lugar",
        tone: "",
        artist: "Arlindo Cruz",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "Am7(9)",
                    "D7(9)",
                    "Dm7(9) G7(11)",
                    "C7+ Bm7(b5) E7(b9)",
                    "Am7(9)",
                    "D7(9)",
                    "Dm7(9) G7(11)",
                    "Gm7 C7(9)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Fm7",
                    "C7+ Am7",
                    "D7(9)",
                    "Bm7(b5) E7(b9)",
                    "Am7(9)",
                    "D7(9)",
                    "Dm7(9) G7"
                ]
            },
            {
                name: "refrão",
                chords: [
                    "C7+ Ebº",
                    "Dm7(9) G7"
                ]
            },
            {
                name: "p3",
                chords: [
                    "Am7(9)",
                    "Em7",
                    "Bm7(b5) E7(b9)",
                    "Am7(9)",
                    "Bm7(b5) E7(b9)",
                    "Am7(9)",
                    "Em7",
                    "B7",
                    "Bm7 E7"
                ]
            },
            {
                name: "p4",
                chords: [
                    "A7+",
                    "D7",
                    "Bm7 E7",
                    "A",
                    "Em7 A7",
                    "Dm7 G7",
                    "C7+ Am7",
                    "Dm7 G7"
                ]
            },
            {
                name: "final",
                chords: [
                    "tirar"
                ]
            }
        ],
        block: 15,
        id: 75
    },
    {
        title: "(C) Vacilão - Zeca Pagodinho",
        tone: "C",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C",
                    "F G",
                    "C",
                    "F G",
                    "C",
                    "F F7",
                    "Bb Bb7",
                    "G7(4) G7",
                    "C"
                ]
            },
            {
                name: "p2",
                chords: [
                    "F F#m7(b5)",
                    "C",
                    "F F#m7(b5)",
                    "C",
                    "F G",
                    "C Am"
                ]
            },
            {
                name: "p3",
                chords: [
                    "Bm7(b5) E7",
                    "Am",
                    "Bm7(b5) E7",
                    "A7",
                    "Dm G7",
                    "C Gm C7",
                    "F G7",
                    "C C7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "F",
                    "Fm",
                    "C",
                    "A7",
                    "D7",
                    "Dm G7"
                ],
                finalizations: [
                    [
                        "C Gm C7"
                    ],
                    [
                        "C G7"
                    ]
                ]
            }
        ],
        block: 16,
        id: 76
    },
    {
        title: "(Dm) Do jeito que a vida quer",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "Dm D7",
                    "Gm",
                    "C7",
                    "F",
                    "Em7(b5) A7",
                    "Dm F",
                    "Bb"
                ],
                finalizations: [
                    [
                        "A7"
                    ],
                    [
                        "A7 D7"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "Gm C7",
                    "F Bb",
                    "Em7(b5) A7",
                    "Am7(b5) D7",
                    "Gm C7",
                    "F Bb7+",
                    "Bº",
                    "A7 D7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "Gm C7",
                    "F Bb",
                    "Em7(b5) A7"
                ],
                finalizations: [
                    [
                        "Cm D7"
                    ],
                    [
                        "Dm A7"
                    ]
                ]
            }
        ],
        block: 16,
        id: 77
    },
    {
        title: "(Dm) Como Dizia o Mestre - Valentia do Homem",
        tone: "",
        artist: "Benito de Paula",
        stanzas: [
            {
                name: "refrao",
                chords: [
                    "Dm",
                    "D7",
                    "Gm",
                    "C7",
                    "F A7",
                    "Dm D7",
                    "Gm",
                    "Bb7 A7"
                ],
                finalizations: [
                    [
                        "Dm A7"
                    ],
                    [
                        "Dm D7"
                    ]
                ]
            },
            {
                name: "p1",
                chords: [
                    "Gm C7",
                    "F",
                    "E",
                    "A7",
                    "Gm C7",
                    "F",
                    "Bb7",
                    "A7"
                ]
            },
            {
                name: "final",
                chords: [
                    "Bb7 A7",
                    "Dm",
                    "E",
                    "A7",
                    "Gm C7",
                    "F",
                    "Bb7",
                    "A7"
                ]
            }
        ],
        block: 16,
        id: 78
    },
    {
        title: "Esqueça-me se for capaz",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "F",
                    "G",
                    "Em",
                    "Am"
                ]
            }
        ],
        block: 17,
        id: 79
    },
    {
        title: "Graveto",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "Em D",
                    "C",
                    "4x",
                    "D"
                ]
            },
            {
                name: "refra",
                chords: [
                    "C",
                    "G",
                    "C",
                    "G",
                    "A",
                    "C",
                    "D",
                    "G"
                ]
            }
        ],
        block: 17,
        id: 80
    },
    {
        title: "Tem Cabaré essa Noite",
        tone: "",
        artist: "Nattan",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "F#m",
                    "%",
                    "D",
                    "E"
                ]
            },
            {
                name: "p2",
                chords: [
                    "D",
                    "E",
                    "A G#m",
                    "F#m E",
                    "D",
                    "E",
                    "F#m"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "D",
                    "E",
                    "F#m",
                    "%"
                ]
            }
        ],
        block: 17,
        id: 81
    },
    {
        title: "Brigadeiro de nutella - Grupo GPC",
        tone: "Eb",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "23 23 21 34 34 34 34 34 34 34",
                    "43 30 31 31 31 31 31 31 31",
                    "(2x)",
                    "23 23 21 34 34 34 34 34 34 34"
                ]
            },
            {
                name: "A",
                chords: [
                    "Bb7+",
                    "Bb7",
                    "Eb7+",
                    "Ebm6",
                    "(2x)"
                ]
            },
            {
                name: "B",
                chords: [
                    "Bb7+",
                    "Bb7",
                    "Eb7+",
                    "Gb7+ Ab7+",
                    "(2x)",
                    "Bb7+ Bb7"
                ]
            },
            {
                name: "REF",
                chords: [
                    "Gm6",
                    "F7",
                    "Dm7",
                    "G7 G7(b5)",
                    "Cm7 Dm7"
                ],
                finalizations: [
                    [
                        "Eb F",
                        "Bb7+ Dm7",
                        "Fm7 Bb7"
                    ],
                    [
                        "Eb F"
                    ]
                ]
            },
            {
                name: "retorno",
                chords: [
                    "Bb7+",
                    "Gb7+  Eb F Bb"
                ]
            }
        ],
        block: 18,
        id: 82
    },
    {
        title: "Abaixa essa guarda",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "tirar",
                    "C C6(9)",
                    "D#º Bm7",
                    "Am7 D/F#"
                ]
            },
            {
                name: "P1",
                chords: [
                    "C D G9",
                    "C7+",
                    "Am7 Am7(9)",
                    "Em7(9) 30 44 30 32 10 12 14",
                    "G^D/G",
                    "C7+",
                    "Am7 Am7(9)",
                    "Em7(9) D4sus"
                ]
            },
            {
                name: "p2",
                chords: [
                    "C C7+",
                    "G9",
                    "C D#º",
                    "Em7(9) Em7 Em7(9) Em7 G/B",
                    "C7+ Bm7(9)",
                    "Am7 G/B",
                    "C7+^Am7 G",
                    "solo",
                    "Am7 Bm7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "C7+ C6(9)",
                    "G7+ F/G",
                    "C7+ B7",
                    "Em7 D",
                    "A9/C# Eb7+",
                    "G7+ Em7",
                    "Am7 D/F#"
                ],
                finalizations: [
                    [
                        "G9 Am7 G F/G"
                    ],
                    [
                        "Solo final"
                    ]
                ]
            },
            {
                name: "final",
                chords: [
                    "G7+(#11)"
                ]
            }
        ],
        block: 18,
        id: 83
    },
    {
        title: "Pede Bis",
        tone: "Am",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "42 30 32 32",
                    "10 12 10 21 10 12 10 21",
                    "32 21 23 23",
                    "20 21 20 32 20 21 20 32",
                    "42 30 32 32",
                    "10 12 10 21 10 12 10 21",
                    "12 13 15 21 23 12 30 32 21",
                    "23 23 23 12 23 21 32"
                ]
            },
            {
                name: "A",
                chords: [
                    "Am7",
                    "D7",
                    "Am7",
                    "C7(13)",
                    "F7+",
                    "F6"
                ],
                finalizations: [
                    [
                        "Bm7(b5)",
                        "E7(b9)"
                    ],
                    [
                        "C7+",
                        "%",
                        "Bm7",
                        "E7"
                    ]
                ]
            },
            {
                name: "B",
                chords: [
                    "A7+",
                    "%",
                    "Dm7",
                    "G7",
                    "C7+",
                    "F7+"
                ],
                finalizations: [
                    [
                        "Bm7",
                        "E7"
                    ],
                    [
                        "Bm7(b5)",
                        "(E) 10 10 10 12 10 21 32"
                    ]
                ]
            },
            {
                name: "REF",
                chords: [
                    "Am7",
                    "(D7) 44 45 46 47",
                    "Am7",
                    "C7(13)",
                    "F7+",
                    "%",
                    "Bm7(b5)",
                    "E7"
                ]
            },
            {
                name: "POS-REF",
                chords: [
                    "Am7",
                    "Am7 42 30 32",
                    "32 32 32 12 10",
                    "42 30 32 32 32 32 30 32",
                    "42 30 32"
                ]
            }
        ],
        block: 18,
        id: 84
    },
    {
        title: "Foi nada",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "C7+(9) C7+(9)",
                    "F7+ F7+",
                    "Dm7 Dm7 Dm7",
                    "Em7 Em7 Em7",
                    "Fm Fm Fm",
                    "F/G"
                ]
            },
            {
                name: "p1",
                chords: [
                    "C6(9)",
                    "F7+",
                    "C6(9)",
                    "F7+",
                    "C6(9)",
                    "F7+",
                    "C6(9)",
                    "Fº G#7(b13)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Am7",
                    "F7+",
                    "Am7",
                    "F7+",
                    "Dm7",
                    "E7",
                    "F7+ D/F#",
                    "F/G"
                ]
            },
            {
                name: "REF",
                chords: [
                    "C6(9)",
                    "Em7",
                    "F7+ F6",
                    "Fm6 F/G"
                ]
            },
            {
                name: "POS-REF-1",
                chords: [
                    "Dm",
                    "Em",
                    "F7+",
                    "G7(4)"
                ]
            },
            {
                name: "POS-REF-2",
                chords: [
                    "Dm",
                    "Em",
                    "F7+",
                    "A7(4) Ab7(4) G7(4)"
                ]
            }
        ],
        block: 19,
        id: 85
    },
    {
        title: "Porradão - Tiee",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "G7(4)",
                    "%"
                ],
                finalizations: [
                    [
                        "A7(4)",
                        "%"
                    ],
                    [
                        "C6(9)",
                        "%"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "G7(4)",
                    "%",
                    "A7(4)",
                    "%",
                    "F7+ Bm7(b5)",
                    "Dm7 G7(4)"
                ]
            },
            {
                name: "pr",
                chords: [
                    "C6(9)",
                    "G7(4)"
                ]
            },
            {
                name: "REF",
                chords: [
                    "C6(9)",
                    "Am7",
                    "F7+ Bm7(b5)",
                    "Dm7 G7(4)"
                ]
            }
        ],
        block: 19,
        id: 86
    },
    {
        title: "Nem de graça",
        tone: "-",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "45 33 33 33 43",
                    "45 33 33 33 45 33 35 43",
                    "45 33 35 23 13 15 35",
                    "23 33 21 32",
                    "45 33 33 33 43",
                    "45 33 33 33 45 33 35 43 F7(4)"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Eb9",
                    "F9",
                    "Gm9",
                    "F9"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Eb9",
                    "F9",
                    "Dm7",
                    "Gm7",
                    "F Eb9 F Gm7",
                    "F F Fm Bb7"
                ]
            },
            {
                name: "REF",
                chords: [
                    "Eb",
                    "F",
                    "Dm7"
                ],
                finalizations: [
                    [
                        "Gm7 F"
                    ],
                    [
                        "Gm7 Gm/F"
                    ]
                ]
            },
            {
                name: "POS-REF",
                chords: [
                    "C7(9)",
                    "C4 C",
                    "Eb Ebm",
                    "45 33 33 33 43",
                    "45 33 33 33 45 33 35 43 F7(4)"
                ]
            }
        ],
        block: 19,
        id: 87
    },
    {
        title: "Empoeirado Violão",
        tone: "-",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "F#m7 F#m7",
                    "16 14 25 24 36",
                    "G#m7 G#m7",
                    "19 18 29 27 38",
                    "(A7+) 16 25 36 46 25 16",
                    "(D/A) 17 27 37 47 37 17",
                    "22 24 25"
                ]
            },
            {
                name: "intro",
                chords: [
                    "E7+",
                    "F#m7",
                    "G#m7",
                    "A7+"
                ]
            },
            {
                name: "P1",
                chords: [
                    "A7+",
                    "F#m7",
                    "G#m7"
                ],
                finalizations: [
                    [
                        "C#m7"
                    ],
                    [
                        "B"
                    ]
                ]
            },
            {
                name: "P2",
                chords: [
                    "A7+ A6",
                    "F#m7",
                    "G#m7",
                    "C#m7"
                ]
            }
        ],
        block: 20,
        id: 88
    },
    {
        title: "Meu abrigo - Melin",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "G#",
                    "C",
                    "Fm",
                    "C#9"
                ]
            },
            {
                name: "P1",
                chords: [
                    "G#",
                    "D#9",
                    "Fm",
                    "C#9"
                ]
            },
            {
                name: "P2",
                chords: [
                    "Fm",
                    "D#9",
                    "C#9",
                    "G#"
                ]
            },
            {
                name: "REF",
                chords: [
                    "C#9 G#",
                    "Fm",
                    "D#9"
                ]
            },
            {
                name: "final",
                chords: [
                    "C# D#",
                    "G#"
                ]
            }
        ],
        block: 20,
        id: 89
    },
    {
        title: "Ausência - Marilha",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "C#",
                    "D# Fm",
                    "D# G#"
                ]
            },
            {
                name: "p1",
                chords: [
                    "C#",
                    "D#",
                    "Fm D#",
                    "C#"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Bbm7",
                    "G#",
                    "D#"
                ],
                finalizations: [
                    [
                        "Fm"
                    ],
                    [
                        "D#"
                    ]
                ]
            },
            {
                name: "REF",
                chords: [
                    "C#",
                    "D# Fm G#"
                ]
            },
            {
                name: "POS-REF",
                chords: [
                    "C# D#"
                ]
            }
        ],
        block: 20,
        id: 90
    },
    {
        title: "(G) Beijo doce - Namorar aonde (Pixote)",
        tone: "G",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "G7+ G7 | C7+ D7(4) | G7+ G7 | C7+ D7(4) | G7(4) G7 | C7+ B7 | Em7 A7 | Am7 D/C"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Gm7 Eb7+ | Am7(5b) D7(b9) | Gm7 Eb7+ Dm| Cm F7(4)| Bb7+ D7(4)"
                ]
            },
            {
                name: "ref",
                chords: [
                    "G7+ G7 | C7+ D7(4) | G7+ G7 | C7+ F7(4) | Bb7+ Gm7 | Am7(b5) D7(4) D7 | Bm7 Em7 | Am7 D7"
                ]
            },
            {
                name: "final",
                chords: [
                    "G7+ G7 | C7+ D7(4)"
                ]
            }
        ],
        block: 21,
        id: 91
    },
    {
        title: "Valeu pra aprender",
        tone: "-",
        stanzas: [
            {
                name: "Solo",
                chords: [
                    "tirar"
                ]
            },
            {
                name: "intro",
                chords: [
                    "G7+ D/F#",
                    "C7+(9) D7(4)"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Em7",
                    "Bm7",
                    "(3x)",
                    "C9",
                    "D7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "C",
                    "D4 D",
                    "C",
                    "D4 D",
                    "Bm7",
                    "G7(4) G7"
                ]
            },
            {
                name: "REF",
                chords: [
                    "C",
                    "D4 D9 D D9",
                    "C",
                    "D4 D9 D D9",
                    "Bm7",
                    "G7(4) G7"
                ]
            }
        ],
        block: 21,
        id: 92
    },
    {
        title: "Eu vacilei (Sorriso Maroto)",
        tone: "G",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "G7+  D  Bm  E7  Am  D7"
                ]
            },
            {
                name: "p1",
                chords: [
                    "G7+ G6 G7+ G5+ | A7(9) | Am7(9) D7(13)"
                ],
                finalizations: [
                    [
                        "G7+ G6 | C D7"
                    ],
                    [
                        "B7(4) B7"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "Em7 | Bm | C D7"
                ],
                finalizations: [
                    [
                        "G7+ B7"
                    ],
                    [
                        "Dm G7"
                    ]
                ]
            },
            {
                name: "ref",
                chords: [
                    "C | D7 | Bm | E7(9) E7 | Am D7 | Dm G7"
                ]
            }
        ],
        block: 21,
        id: 93
    },
    {
        title: "Preciso viver - Chega de felicidade (Sorriso Maroto)",
        tone: "G",
        stanzas: [
            {
                name: "loop",
                chords: [
                    "G7+ G6 | C7+ D7 | G7+ G6 | Am7 F7 | Bb | Eb | Bb | Eb | Am7 Bm7 | Am7 D7 |"
                ]
            }
        ],
        block: 21,
        id: 94
    },
    {
        title: "Presentinho - Guga Nandes",
        tone: "-",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "-"
                ]
            },
            {
                name: "P1",
                chords: [
                    "D9",
                    "Am7",
                    "G9",
                    "Gm6"
                ]
            },
            {
                name: "P2",
                chords: [
                    "Bm7",
                    "F#m7",
                    "Em7",
                    "Gm6 A7(4)"
                ]
            },
            {
                name: "R",
                chords: [
                    "D9 (A/D D/F#)",
                    "Am7(9) Ab7(#11)",
                    "G6(9) Em7(9)",
                    "Gm6 A7(4)"
                ]
            },
            {
                name: "pos",
                chords: [
                    "D9",
                    "Am7",
                    "G9",
                    "Gm6"
                ]
            }
        ],
        block: 22,
        id: 95
    },
    {
        title: "Playlist",
        tone: "-",
        artist: "Mumuzinho",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "F7+(9) F/Eb",
                    "Bb7+ Bbm6 40 41",
                    "F7+(9) F/Eb",
                    "Bb7+ Bbm6 22 21 33 32"
                ]
            },
            {
                name: "p1",
                chords: [
                    "F7+(9)",
                    " F/Eb",
                    "Bb7+(9)",
                    "Bbm6(9)",
                    "F7+(9)",
                    "F/Eb 23 21 33 32",
                    "Bb7+"
                ]
            },
            {
                name: "p2",
                chords: [
                    "43 30 32 33 30",
                    "Gm7",
                    "C7(4)(9) C/Bb",
                    "Am7",
                    "Dm7",
                    "Gm11 18 15 33 13 21",
                    "C7(4)(9)",
                    "F7+ F7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "Bb7+",
                    "C7(4)(9) C/Bb",
                    "Am7",
                    "Abº",
                    "Gm11",
                    "C7(4)(9)",
                    "F7+ C",
                    "F7 F7(4)(9)",
                    "Bb7+",
                    "C7(4)(9) C7(4)(9)^Db7(4)(9)^D7(4)(9)",
                    "D7(4)(9)",
                    "Dº Abº",
                    "Gm11",
                    "Bbm6"
                ]
            },
            {
                name: "final",
                chords: [
                    "Bbm6 23 21 33",
                    "F7+"
                ]
            }
        ],
        block: 22,
        id: 96
    },
    {
        title: "Manda Audio",
        tone: "-",
        artist: "Di Propósito",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "30 30 32 32 34 ",
                    "34 23 23 22 44 30",
                    "30 32 32 34",
                    "Bm7(11)"
                ]
            },
            {
                name: "p1",
                chords: [
                    "G9 A9",
                    "Bm7(11)",
                    "G9 A9",
                    "Bm7(11)",
                    "G9 A9",
                    "Bm7(11) 17 15 27 25 37 36 34",
                    "G7+",
                    "A7(4)(9)"
                ]
            },
            {
                name: "ref",
                chords: [
                    "G7+",
                    "A7(4)",
                    "F#m7 F#m7^Bm7",
                    "Am7 D7(4)(9)"
                ]
            },
            {
                name: "pos-ref",
                chords: [
                    "G9 A9",
                    "Bm7(11)"
                ]
            },
            {
                name: "final",
                chords: [
                    "||: D9",
                    "G9 :||",
                    "D..."
                ]
            }
        ],
        block: 23,
        id: 97
    },
    {
        title: "Atrasadinha",
        tone: "-",
        artist: "Felipe Araujo",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "G9",
                    "C9",
                    "G9",
                    "C9"
                ]
            },
            {
                name: "p1",
                chords: [
                    "C9",
                    "D9",
                    "Bm7",
                    "Em7"
                ]
            },
            {
                name: "PR",
                chords: [
                    "C9",
                    "D9"
                ]
            },
            {
                name: "ref",
                chords: [
                    "C9",
                    "D9",
                    "Bm7",
                    "Em7",
                    "(2x)",
                    "Am7",
                    "C9"
                ]
            },
            {
                name: "solo final",
                chords: [
                    "110 19 15 10 21 20 30"
                ]
            }
        ],
        block: 23,
        id: 98
    },
    {
        title: "Dor que não passa mais",
        tone: "",
        artist: "",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "D9 D7+(9)"
                ]
            },
            {
                name: "p1",
                chords: [
                    "||: D9",
                    "Bm7",
                    "G7+",
                    "A7(4) :||",
                    "D9",
                    "B7(4) B7(#5)"
                ]
            },
            {
                name: "pre-ref",
                chords: [
                    "Em7 F#m7",
                    "Em7 A7(4)"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "D9 B7(4) B7(#5)",
                    "Em7",
                    "A7(4)",
                    "D9",
                    "D"
                ]
            }
        ],
        block: 24,
        id: 99
    },
    {
        title: "Cachorrinho",
        tone: "",
        artist: "",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "Bm",
                    "G A",
                    "Bm",
                    "G A"
                ]
            },
            {
                name: "p1",
                chords: [
                    "G",
                    "Bm7",
                    "G",
                    "Bm7",
                    "G",
                    "Bm7",
                    "G",
                    "A",
                    "%"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "G A",
                    "Bm7"
                ]
            },
            {
                name: "pos-refrao",
                chords: [
                    "G A",
                    "Bm",
                    "20 22 23 25 22 23 20"
                ]
            }
        ],
        block: 24,
        id: 100
    },
    {
        title: "Show Fechou",
        tone: "",
        artist: "",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "F G",
                    "Em Am"
                ]
            },
            {
                name: "p1",
                chords: [
                    "F",
                    "G",
                    "Em7",
                    "Am7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "F",
                    "Am7 G",
                    "F",
                    "Dm F",
                    "G"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "F G",
                    "Em Am"
                ]
            },
            {
                name: "pos-refrao",
                chords: [
                    "F G",
                    "Am"
                ]
            }
        ],
        block: 24,
        id: 101
    },
    {
        title: "(A) Caju pra baixo - Eu e voce tudo a ver",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "tirar"
                ]
            }
        ],
        block: 25,
        id: 102
    },
    {
        title: "Ela Mexe Comigo",
        tone: "A",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "A7+",
                    "F#m7",
                    "Bm7 Bm7+",
                    "G#m7(b5) C#7",
                    "F#m F#m7+",
                    "F#m7 F#m6",
                    "Bm C#m7",
                    "Cº",
                    "Bm7 E7 (Em7 A7)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "D",
                    "E7(9)",
                    "C#m7(b5)",
                    "F#7",
                    "Bm7 C#m7",
                    "D7+ E7(9)",
                    "A E",
                    "Em F#7"
                ]
            },
            {
                name: "ref",
                chords: [
                    "Bm",
                    "E7(9)",
                    "C#m7",
                    "F#7",
                    "Bm7 C#m7",
                    "Dm7 E7(9)",
                    "A E",
                    "Em F#7"
                ]
            }
        ],
        block: 25,
        id: 103
    },
    {
        title: "(A) Se a fila andar - Toninho Cruz",
        tone: "A",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "A",
                    "%",
                    "B7",
                    "%",
                    "Bm",
                    "E7",
                    "A"
                ],
                finalizations: [
                    [
                        "Bm E7"
                    ],
                    [
                        "Em A7"
                    ]
                ]
            },
            {
                name: "ref",
                chords: [
                    "D",
                    "Dm",
                    "C#m",
                    "F#7",
                    "Bm7 C#m7",
                    "Dm7 E7",
                    "A7+ A6"
                ],
                finalizations: [
                    [
                        "Em7 A7"
                    ],
                    [
                        "Em A7"
                    ],
                    [
                        "Bm7 E7"
                    ]
                ]
            }
        ],
        block: 25,
        id: 104
    },
    {
        title: "Será que é amor",
        artist: "Arlindo Cruz",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "A7+ E/G#",
                    "C#m7(b5) F#7",
                    "B7(9) E7(9)",
                    "A A7 (F#7)"
                ],
                preview: "La lalaiala lalaia"
            },
            {
                name: "p1",
                chords: [
                    "C#m7 F#7",
                    "C#m7 F#7",
                    "B7(9)",
                    "%",
                    "D7(9) C#7(9)",
                    "F#m7 A7(13)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "C#7 A7(13)",
                    "D7+ A/C#",
                    "Bm7",
                    "G#m7(5b) C#7",
                    "F#m7 A7",
                    "D7+ A",
                    "Bm7 E7",
                    "A E7"
                ]
            },
            {
                name: "ref",
                chords: [
                    "A7+ E/G#",
                    "Em7 F#7",
                    "B7(9) E7",
                    "A7+ E7"
                ]
            }
        ],
        block: 25,
        id: 105
    },
    {
        title: "Sabor do teu Beijo - Sensação",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "A7+",
                    "G7+",
                    "F7+",
                    "E7"
                ]
            },
            {
                name: "p1",
                chords: [
                    "A7+",
                    "Em A7",
                    "D7+",
                    "G#m7(b5) C#7",
                    "F#m7",
                    "Dm E7",
                    "A7+ F#7",
                    "Bm7 E7(9)"
                ]
            },
            {
                name: "pr",
                chords: [
                    "A7+",
                    "Em7 A7",
                    "D7+ Bm",
                    "G#m7(b5) C#7"
                ]
            },
            {
                name: "REF",
                chords: [
                    "F#m7 (2ªD7+)",
                    "Dm6",
                    "C#m7",
                    "G7 F#7",
                    "Bm7",
                    "E7(9) E7(b9)",
                    "A7+(#5)",
                    "Em7 A7"
                ]
            }
        ],
        block: 25,
        id: 106
    },
    {
        title: "Som na sala",
        tone: "-",
        artist: "senzala",
        stanzas: [
            {
                name: "refrao - ",
                chords: [
                    "G7+",
                    "C9",
                    "(3x)"
                ]
            },
            {
                name: "p1 - deixa de..",
                chords: [
                    "G7+",
                    "%",
                    "C9",
                    "%",
                    "G7+",
                    "%",
                    "C9",
                    "%",
                    "G7+",
                    "%"
                ]
            },
            {
                name: "p3 - dessa esse pelorinho",
                chords: [
                    "Am",
                    "Bm",
                    "(Até a volta)"
                ]
            }
        ],
        block: 26,
        id: 107
    },
    {
        title: "Senzala - Festa",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C7+",
                    "F7+",
                    "C7+",
                    "F7+ B7+",
                    "C7+",
                    "Gm7 C7(9)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "F7+",
                    "Fm7",
                    "Em7",
                    "A7",
                    "Dm",
                    "G/A",
                    "C7+",
                    "Gm7 C7(9)"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "F7+",
                    "Fm7",
                    "Em7",
                    "A7",
                    "Dm Em",
                    "F G/A",
                    "C7+"
                ]
            }
        ],
        block: 26,
        id: 108
    },
    {
        title: "Sem vestigios - Mumuzinho ",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "tirar"
                ]
            }
        ],
        block: 27,
        id: 109
    },
    {
        title: "Interessante - Ferrugem",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "tirar"
                ]
            }
        ],
        block: 27,
        id: 110
    },
    {
        title: "Sou o Cara Pra Voce",
        tone: "",
        artist: "GPC",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "E7+ C#m7",
                    "D#m7 G#m7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "E7+",
                    "C#m7",
                    "D#m7 G#m7",
                    "F#m7 B7"
                ]
            },
            {
                name: "ref",
                chords: [
                    "E7+ C#m7",
                    "D#m7 G#m7",
                    "2x"
                ],
                finalizations: [
                    [
                        "F#m7 B7"
                    ]
                ]
            }
        ],
        block: 28,
        id: 113
    },
    {
        title: "Abandonado",
        tone: "C",
        artist: "GPC",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "D7+ D6(9)",
                    "D7+ D6(9)",
                    "A7+ A6",
                    "A7+ A6"
                ]
            },
            {
                name: "p1",
                chords: [
                    "A7+ A6",
                    "Dm6",
                    "A7+ A6",
                    "C#m7(b5) F#7",
                    "Bm7",
                    "D/E",
                    "F#7(4)",
                    "C#m7(b5) F#7",
                    "Bm7 C#m7",
                    "D6(9) D/E"
                ]
            },
            {
                name: "Ref",
                chords: [
                    "D",
                    "Db^D",
                    "A7+ A6",
                    "A7+ A6"
                ]
            },
            {
                name: "final",
                chords: [
                    "A7+ A6",
                    "Dm6",
                    "A9"
                ]
            }
        ],
        block: 28,
        id: 114
    },
    {
        title: "Só penso no lar",
        tone: "-",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "43 33 35 37 26 18 110 18 18",
                    "21 11 11 12 12 13 (3x)",
                    "Db/Eb"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Am7(b5)",
                    "Abm6",
                    "Gm7",
                    "Db/Eb Eb7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Ab7+",
                    "Bb7",
                    "Gm7",
                    "Cm7 Fm7",
                    "Gm7^Abm7",
                    "43 33 35 37 26 18 110 18 18"
                ]
            },
            {
                name: "p3",
                chords: [
                    "Ab7+",
                    "%",
                    "Gm7",
                    "%"
                ]
            },
            {
                name: "REF",
                chords: [
                    "Fm Fm7(9)",
                    "Fm7",
                    "Gm7",
                    "Gm7 C7(b13)"
                ]
            },
            {
                name: "POS-REF",
                chords: [
                    "21 11 11 12 12 13",
                    "Db/Eb"
                ]
            }
        ],
        block: 29,
        id: 115
    },
    {
        title: "Pura Adrenalina",
        tone: "-",
        stanzas: [
            {
                name: "solo",
                chords: [
                    "16 17 16 25",
                    "14 15 14 23",
                    "16 17 16 25"
                ]
            },
            {
                name: "intro",
                chords: [
                    "A7+ G#7(b13)",
                    "C#m7 E7(9)",
                    "A7+ B7(4)"
                ],
                finalizations: [
                    [
                        "E7+ E7(9)"
                    ]
                ]
            },
            {
                name: "p1",
                chords: [
                    "C#m7 G#7(9)",
                    "A7+ B7(4)",
                    "E7+ A7+",
                    "D#m7(b5) G#7(b13)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "A7+ G#7(9)",
                    "C#m7 E7(9)"
                ],
                finalizations: [
                    [
                        "A7+ B7(4)",
                        "E7+ E7(9)"
                    ],
                    [
                        "A7+ G#7(b13)",
                        "C#m7"
                    ]
                ]
            },
            {
                name: "REF",
                chords: [
                    "A7+",
                    "Aº",
                    "G#m7 C#m7",
                    "Bm7 E7(9)"
                ]
            },
            {
                name: "POS-REF",
                chords: [
                    "A7+ B7(4)",
                    "16 17 16 25"
                ]
            }
        ],
        block: 29,
        id: 116
    },
    {
        title: "Pinpolho",
        tone: "-",
        stanzas: [
            {
                name: "tirar",
                chords: [
                    "G",
                    "D B7",
                    "Em7",
                    "Am Am^G",
                    "D"
                ]
            },
            {
                name: "refrão",
                chords: [
                    "Gm",
                    "Am7(b5) D7"
                ]
            },
            {
                name: "pos-ref",
                chords: [
                    "Gm",
                    "%...",
                    "D"
                ]
            }
        ],
        block: 30,
        id: 117
    },
    {
        title: "Fricote",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "G",
                    "D7",
                    "G",
                    "D7",
                    "G",
                    "D7 B7",
                    "Em7",
                    "D7"
                ]
            },
            {
                name: "vem aqui",
                chords: [
                    "G",
                    "%",
                    "D7",
                    "%",
                    "G",
                    "G G7"
                ]
            },
            {
                name: "eu te gosto assim",
                chords: [
                    "C G",
                    "D7 G",
                    "C G",
                    "D7 G"
                ]
            },
            {
                name: "fofa vou fazer",
                chords: [
                    "G7",
                    "C",
                    "G",
                    "D7",
                    "G"
                ]
            },
            {
                name: "sou seu namorado",
                chords: [
                    "D7",
                    "%",
                    "G"
                ]
            }
        ],
        block: 30,
        id: 118
    },
    {
        title: "Céu da Boca",
        tone: "-",
        stanzas: [
            {
                name: "loop",
                chords: [
                    "G E7",
                    "Am D7"
                ]
            }
        ],
        block: 30,
        id: 119
    },
    {
        title: "Ensaboado - Ferrugem",
        tone: "",
        stanzas: [
            {
                name: "intro-solo",
                chords: [
                    "17 17 17 15 15 15 13 13 13 12 12 12",
                    "12 32 21 32 12 32 21 32 12 12 12"
                ]
            },
            {
                name: "intro e p1",
                chords: [
                    "Dm9",
                    "G7(4) G7",
                    "Em7",
                    "Em7(b5) A7(b13)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Ab7+",
                    "Fm7(9)",
                    "Em7",
                    "Em7(b5) A7(b13)"
                ]
            },
            {
                name: "ref",
                chords: [
                    "Dm9",
                    "G7(4) G7",
                    "Em7",
                    "Em7(b5) A7(b13)",
                    "Dm9",
                    "Ab7+ G7(4)",
                    "Em7",
                    "Em7(b5) A7(b13)"
                ]
            }
        ],
        block: 31,
        id: 120
    },
    {
        title: "Chopp Garotinho - Ferrugem",
        tone: "",
        stanzas: [
            {
                name: "intro-solo",
                chords: [
                    "A7(4) Ab7(4) G7(4) Gb7(4)"
                ]
            },
            {
                name: "intro",
                chords: [
                    "Bm7 E7",
                    "C#m7(5b) F#7",
                    "Bm7 E7"
                ],
                finalizations: [
                    [
                        "22 23 25 22 23 25 22 23 25 F#7 F#7"
                    ],
                    [
                        "A",
                        "F#7"
                    ]
                ]
            },
            {
                name: "p1",
                chords: [
                    "D#m7(5b) E7",
                    "C#m7(5b) F#7",
                    "D#m7(5b) E7",
                    "A7 G7 F#7"
                ]
            },
            {
                name: "Ref",
                chords: [
                    "Bm7 E7",
                    "C#m7(5b) F#7",
                    "Bm7 E7"
                ],
                finalizations: [
                    [
                        "A7 G7 F#7"
                    ],
                    [
                        "A",
                        "F#7"
                    ]
                ]
            },
            {
                name: "final e entrada ",
                chords: [
                    "Bm7 E7",
                    "C#m7(5b) F#7",
                    "Bm7 E7"
                ],
                finalizations: [
                    [
                        "22 23 25 22 23 25 22 23 25 F#7 F#7"
                    ],
                    [
                        "22 23 25 22 23 25 22 23 25",
                        "23 24 26 23 24 26 23 24 26"
                    ]
                ]
            }
        ],
        block: 31,
        id: 121
    },
    {
        title: "Casa Azul",
        tone: "",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "F7(4)",
                    "G7(4)",
                    "F7(4)"
                ],
                finalizations: [
                    [
                        "Bb7+"
                    ],
                    [
                        "37 28 18 37 28 112"
                    ]
                ]
            },
            {
                name: "p1",
                chords: [
                    "Eb/F",
                    "F/G",
                    "Gb/Ab",
                    "Gb7+",
                    "Bb7+",
                    "C/Bb",
                    "Cm7 Eb/F",
                    "Gm7(add11)"
                ]
            },
            {
                name: "p2 - minha namorada...",
                chords: [
                    "Eb/F",
                    "%",
                    "F/G",
                    "Eb/F C/D Db/Eb D/E Eb/F",
                    "Eb/F",
                    "Em7(add11)"
                ]
            },
            {
                name: "Ref",
                chords: [
                    "Eb/F",
                    "%",
                    "F/G",
                    "G7(9)"
                ],
                finalizations: [
                    [
                        ""
                    ],
                    [
                        "Eb7+ Cm7",
                        "Gm7"
                    ]
                ]
            },
            {
                name: "parte final - ooo",
                chords: [
                    "Eb/F",
                    "F/G Gm7",
                    "Eb/F",
                    "Bb7+",
                    "(4x)"
                ]
            },
            {
                name: "Solo",
                chords: [
                    "37 28 18",
                    "37 28 112 18 28 37"
                ]
            }
        ],
        block: 31,
        id: 122
    },
    {
        title: "Climatizar",
        tone: "",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "C/D Db/Eb D/E Eb/F",
                    "F7(4)",
                    "%",
                    "G7(4)",
                    "%"
                ]
            },
            {
                name: "p1",
                chords: [
                    "F7(4)",
                    "%",
                    "G7(4)",
                    "%",
                    "F7(4)",
                    "%",
                    "G7(4)",
                    "%"
                ],
                finalizations: [
                    [
                        ""
                    ],
                    [
                        "Ab7sus4"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "Bb7+",
                    "Cm9",
                    "Dm9",
                    "Ebm9",
                    "(2x)"
                ],
                finalizations: [
                    [],
                    [
                        "Bb7+"
                    ]
                ]
            },
            {
                name: "Ref",
                chords: [
                    "Gb7+ Ab7+",
                    "Bb7+",
                    "(6X)"
                ]
            }
        ],
        block: 31,
        id: 123
    },
    {
        title: "Por tão pouco",
        tone: "-",
        artist: "Pericles",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C7+ G",
                    "Am7(9) Em7"
                ],
                finalizations: [
                    [
                        "F7+ C",
                        "Dm7 G7"
                    ],
                    [
                        "F7+ Em7^Am7^Ab7+",
                        "Ab7+ Ab7+ F/G"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "C7+ D/C",
                    "G C7",
                    "F/A G7(4)",
                    "C7+ A7(b9)(b13)",
                    "Dm7 G7",
                    "C7+ C7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "F9",
                    "G G7",
                    "Bm7(b5) E7",
                    "Am7 C",
                    "D7(9) D7",
                    "C/D E/D",
                    "F7+",
                    "Fm6 G7(4)",
                    "C7+ C7"
                ]
            }
        ],
        block: 32,
        id: 124
    },
    {
        title: "Separação - Exalta",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "Dm",
                    "G G7",
                    "Em7",
                    "Am",
                    "Dm",
                    "G7"
                ],
                finalizations: [
                    [
                        "Em7(b5)",
                        "A7"
                    ],
                    [
                        "C",
                        "C7"
                    ]
                ]
            },
            {
                name: "Ref",
                chords: [
                    "F7+",
                    "F#º",
                    "Em7",
                    "Am7",
                    "Dm",
                    "G7"
                ],
                finalizations: [
                    [
                        "C",
                        "C7"
                    ],
                    [
                        "C",
                        "Em7(b5) A7"
                    ]
                ]
            }
        ],
        block: 32,
        id: 125
    },
    {
        title: "Marra de Durão",
        tone: "",
        artist: "",
        stanzas: [
            {
                name: "intro - base",
                chords: [
                    "C#7+(9)",
                    "F#9 B9^C#7(4)"
                ]
            },
            {
                name: "intro - solo",
                chords: [
                    "16",
                    "33 36 16 14 13",
                    "16 33 36 16 14 16"
                ]
            },
            {
                name: "p1",
                chords: [
                    "F#6",
                    "G#/F#",
                    "F#6",
                    "G#/F#",
                    "33...35...36...35"
                ]
            },
            {
                name: "p2",
                chords: [
                    "F#7+",
                    "%",
                    "C#7+(9)",
                    "Bb7(4)",
                    "Ebm9",
                    "Aº",
                    "C#7+(9) G#",
                    "G#m7(11) C#7(13)"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "F#7+",
                    "Ebm9",
                    "Fm7",
                    "G#m7(11) C#7(13)",
                    "F#7+ Fm7",
                    "Ebm9 G#7(4)",
                    "C#7+(9) G#m7(11) C#7(13)"
                ],
                finalizations: [
                    [
                        "A9"
                    ],
                    [
                        "C#7+(9)"
                    ]
                ]
            }
        ],
        block: 32,
        id: 126
    },
    {
        title: "O Bem",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "tirar"
                ]
            },
            {
                name: "p1",
                chords: [
                    "Bm7(9)",
                    "Em7",
                    "A7(4)(9)",
                    "D6(9) F#7(b13)",
                    "Bm7(9)",
                    "Em7(9)",
                    "A7(4)(9)",
                    "D6(9)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "B7(4) B7(b13)",
                    "Em7(9)",
                    "A7(13)",
                    "D6(9)",
                    "B7(4) B7(b13)",
                    "Em7(9) F#m7",
                    "G7+ A7(13)",
                    "D6(9) 14 15 16 17 16 15 14 25"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "G7+",
                    "A/G",
                    "F#m7",
                    "Fº^Abº^Am^C/D",
                    "G7+ D9",
                    "Em7 G/A",
                    "D6(9) A/C#",
                    "C6 C/D"
                ]
            }
        ],
        block: 32,
        id: 127
    },
    {
        title: "Será que é amor",
        artist: "Arlindo Cruz",
        tone: "-",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "A7+ E/G#",
                    "C#m7(b5) F#7",
                    "B7(9) E7(9)",
                    "A A7 (F#7)"
                ],
                preview: "La lalaiala lalaia"
            },
            {
                name: "p1",
                chords: [
                    "C#m7 F#7",
                    "C#m7 F#7",
                    "B7(9)",
                    "%",
                    "D7(9) C#7(9)",
                    "F#m7 A7(13)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "C#7 A7(13)",
                    "D7+ A/C#",
                    "Bm7",
                    "G#m7(5b) C#7",
                    "F#m7 A7",
                    "D7+ A",
                    "Bm7 E7",
                    "A E7"
                ]
            },
            {
                name: "ref",
                chords: [
                    "A7+ E/G#",
                    "Em7 F#7",
                    "B7(9) E7",
                    "A7+ E7"
                ]
            }
        ],
        block: 32,
        id: 128
    },
    {
        title: "O meu Lugar",
        tone: "",
        artist: "Arlindo Cruz",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "Am7(9)",
                    "D7(9)",
                    "Dm7(9) G7(11)",
                    "C7+ Bm7(b5) E7(b9)",
                    "Am7(9)",
                    "D7(9)",
                    "Dm7(9) G7(11)",
                    "Gm7 C7(9)"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Fm7",
                    "C7+ Am7",
                    "D7(9)",
                    "Bm7(b5) E7(b9)",
                    "Am7(9)",
                    "D7(9)",
                    "Dm7(9) G7"
                ]
            },
            {
                name: "refrão",
                chords: [
                    "C7+ Ebº",
                    "Dm7(9) G7"
                ]
            },
            {
                name: "p3",
                chords: [
                    "Am7(9)",
                    "Em7",
                    "Bm7(b5) E7(b9)",
                    "Am7(9)",
                    "Bm7(b5) E7(b9)",
                    "Am7(9)",
                    "Em7",
                    "B7",
                    "Bm7 E7"
                ]
            },
            {
                name: "p4",
                chords: [
                    "A7+",
                    "D7",
                    "Bm7 E7",
                    "A",
                    "Em7 A7",
                    "Dm7 G7",
                    "C7+ Am7",
                    "Dm7 G7"
                ]
            },
            {
                name: "final",
                chords: [
                    "tirar"
                ]
            }
        ],
        block: 32,
        id: 129
    },
    {
        title: "Por tão pouco",
        tone: "-",
        artist: "Pericles",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C7+ G",
                    "Am7(9) Em7"
                ],
                finalizations: [
                    [
                        "F7+ C",
                        "Dm7 G7"
                    ],
                    [
                        "F7+ Em7^Am7^Ab7+",
                        "Ab7+ Ab7+ F/G"
                    ]
                ]
            },
            {
                name: "p2",
                chords: [
                    "C7+ D/C",
                    "G C7",
                    "F/A G7(4)",
                    "C7+ A7(b9)(b13)",
                    "Dm7 G7",
                    "C7+ C7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "F9",
                    "G G7",
                    "Bm7(b5) E7",
                    "Am7 C",
                    "D7(9) D7",
                    "C/D E/D",
                    "F7+",
                    "Fm6 G7(4)",
                    "C7+ C7"
                ]
            }
        ],
        block: 33,
        id: 130
    },
    {
        title: "Separação - Exalta",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "Dm",
                    "G G7",
                    "Em7",
                    "Am",
                    "Dm",
                    "G7"
                ],
                finalizations: [
                    [
                        "Em7(b5)",
                        "A7"
                    ],
                    [
                        "C",
                        "C7"
                    ]
                ]
            },
            {
                name: "Ref",
                chords: [
                    "F7+",
                    "F#º",
                    "Em7",
                    "Am7",
                    "Dm",
                    "G7"
                ],
                finalizations: [
                    [
                        "C",
                        "C7"
                    ],
                    [
                        "C",
                        "Em7(b5) A7"
                    ]
                ]
            }
        ]
    },
    {
        title: "Linda Voz",
        tone: "-",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C9",
                    "F7+",
                    "(3x)",
                    "C7+",
                    "Fm G7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "C9",
                    "F7+",
                    "C9",
                    "F7+ E/G#",
                    "Am7(9)",
                    "G#7+ G#6",
                    "Dm7",
                    "F/G G7"
                ]
            },
            {
                name: "p3",
                chords: [
                    "Am7",
                    "Em7 C7(9)",
                    "F7+ Fm7",
                    "C",
                    "Dm7",
                    "Em7 Am7",
                    "G#7+ G#6",
                    "Dm7 G7(4)^G7"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "C G",
                    "C7(9)",
                    "D7",
                    "Dm7",
                    "Em7 Am7(9)",
                    "Dm7",
                    "Em7 Am7(9)",
                    "Dm7",
                    "Em7 Am7(9)",
                    "Dm7",
                    "Fm6 G7(4)",
                    "C"
                ]
            }
        ]
    },
    {
        title: "[F#] Instinto - Chuva de Arroz",
        tone: "F#",
        stanzas: [
            {
                name: "intro",
                chords: [
                    "Gb7+(9)",
                    "Ebm7(9)",
                    "Badd9",
                    "Ab7(sus4)(9)"
                ]
            },
            {
                name: "p1 - entra voz",
                chords: [
                    "Gb9 (4x + 4x)",
                    "Gb7+(9) (4x + 4x)",
                    "13 16 13 24 13 16 13 24 Gb9 (4x + 4x)",
                    "12 11 23 21 44 43 41"
                ],
                audio: "instinto-solo-p1"
            },
            {
                name: "p2",
                chords: [
                    "Gb7+(9)",
                    "Db(9)",
                    "Gb7+(9)",
                    "12 11 23 21 44 43 41",
                    "Gb7+(9)",
                    "Db(9) Bbm7",
                    "B9 Gb",
                    "Dbadd9 B9(3x) Db(4x)"
                ]
            },
            {
                name: "refrao",
                chords: [
                    "Gb7+(9)",
                    "Ebm7(9)",
                    "Dbadd9",
                    "Bbm7 Bbm7(11)",
                    "Gb7+(9)",
                    "Ebm7(9)",
                    "Dbadd9",
                    "Bbm7",
                    "Badd(9) Dbadd(9)"
                ]
            },
            {
                name: "(Final) Vou levar a vida sem... ",
                chords: [
                    "Badd(9) Gb",
                    "Dbadd9 Bbm7",
                    "Badd(9) Gb",
                    "12 11 23 21 44 43 41",
                    "12 11 23 21 44 43 41",
                    "Dbadd9"
                ]
            }
        ]
    },
    {
        title: "Final de Tarde",
        tone: "-",
        artist: "Péricles",
        stanzas: [
            {
                name: "solo-1",
                chords: [
                    "tirar..."
                ]
            }
        ]
    },
    {
        title: "Cachaceira - Thiago Soares",
        tone: "Tom",
        stanzas: [
            {
                name: "Loop",
                chords: [
                    "Gm7 Ab9",
                    "Eb D7"
                ]
            }
        ]
    },
    {
        title: "Nao Tem Pra Ninguem - Que fecha que cola cmg",
        tone: "Tom",
        stanzas: [
            {
                name: "Loop",
                chords: [
                    "Cm",
                    "Bbm Eb7",
                    "Ab",
                    "Fm G7"
                ]
            }
        ]
    },
    {
        title: "Radar - Gloria Groove",
        tone: "Tom",
        stanzas: [
            {
                name: "Loop",
                chords: [
                    "Em",
                    "Bm"
                ]
            }
        ]
    },
    {
        title: "Ser Feliz Dnv - Belo",
        tone: "Tom",
        stanzas: [
            {
                name: "P1",
                chords: [
                    "A",
                    "Bm",
                    "C#m",
                    "Bm E7"
                ]
            },
            {
                name: "P2",
                chords: [
                    "F#m",
                    "C#m",
                    "D",
                    "E7",
                    "F#m",
                    "C#m",
                    "D",
                    "E7",
                    "Em A7"
                ]
            },
            {
                name: "Refrão",
                chords: [
                    "D",
                    "C#m",
                    "Bm",
                    "E7",
                    "Em A7"
                ]
            }
        ]
    },
    {
        title: "Vou Querer Dnv - Thiaguinho",
        tone: "Tom",
        stanzas: [
            {
                name: "P1",
                chords: [
                    "D7+(9)",
                    "%",
                    "G7+",
                    "%",
                    "Bb7+",
                    "C7+"
                ]
            },
            {
                name: "P2",
                chords: [
                    "D7+(9)",
                    "Am7",
                    "G9",
                    "Bb7+",
                    "C7+"
                ]
            },
            {
                name: "Refrao",
                chords: [
                    "D7+(9)",
                    "Am7 D7",
                    "G7+",
                    "Bb7+",
                    "C7+"
                ]
            }
        ]
    },
    {
        title: "Daquele Jeitão",
        tone: "Tom",
        artist: "Pericles",
        link: "https://www.youtube.com/watch?v=Mcuzy0Vzp2Q",
        stanzas: [
            {
                name: "-",
                chords: ["410 38 28 18 19", "48 36 26 16 18", "46 35 24 15 16", "Fm7", "35 15 26 24 35 15 26"]
            },
            {
                name: "P1",
                chords: ["Fm7 Ab7+", "C7(4)(9) 21 21 33 21 11", "Fm7 Ab7+", "Cm7 Gm7(11) 21 33 30 41"]
            },
            {
                name: "P2",
                chords: ["Fm7(11) Bb7(4)(9)", "Cm7 Gm7", "Fm7(11) Bb7(4)(9)", "Cm7 Gm7", "Ab7+ Fm7", "G7 G7(4) 15 30"]
            },
            {
                name: "Refrão",
                chords: ["Cm7(11) Gm7(11)", "Dm7(11) Dm7(11)/G", "Ab7+ F/A", "15 26 15 30 - 15 26 - 15 30"]
            },
            {
                name: "Final",
                chords: ["Cm7 Bbm7", "Ab7+"]
            }
        ]
    },
    {
        title: "Raggae Power",
        tone: "F#m",
        artist: "Natiruts",
        link: "https://www.youtube.com/watch?v=UNNOHk60ojk",
        stanzas: [
            {
                name: "Loop",
                chords: ["F#m7 C#m7", "Bm7 E"]
            }
        ]
    },
    {
        title: "Sorria (DR)",
        versao: "diResenha",
        tone: "",
        stanzas: [
            {
                name: "p1",
                chords: [
                    "C7+",
                    "Em7",
                    "Am7",
                    "Dm",
                    "C7+",
                    "Em7",
                    "F7+",
                    "Bm7(b5)^E7"
                ]
            },
            {
                name: "p2",
                chords: [
                    "Am7",
                    "Em7",
                    "F7+",
                    "Bm7(b5)^E7",
                    "Am7",
                    "Em7",
                    "F7+ G7",
                    "C C7"
                ]
            },
            {
                name: "ref",
                chords: [
                    "F7+",
                    "Em7 A7",
                    "Dm G7",
                    "Gm C7",
                    "F7+",
                    "Em7 A7",
                    "Dm G7"
                ],
                finalizations: [
                    [
                        "C C7"
                    ]
                ]
            }
        ]
    },
    {
        title: "Adivinha (DR)",
        tone: "Tom",
        versao: "diResenha",
        artist: "Travessos",
        stanzas: [
            {
                name: "-",
                chords: ["TIRAR...."]
            }
        ]
    },
    {
        title: "Livre pra Voar (DR)",
        tone: "Tom",
        versao: "diResenha",
        artist: "Travessos",
        stanzas: [
            {
                name: "Pre-Intro",
                chords: ["C6(9)  Am7", "D7(9) Ab7^G7"]
            },{
                name: "Intro",
                chords: ["C7", "F6 G7(4)", "C7+ Am7", "D7(9)(Shape Am6 ou F#m7(b5)) G7(4)", "(2x)"]
            },
            {
                name: "P1",
                chords: ["C6(9)  C7", "F7+ G7(4)", "(3x)", "C7+ C7", "F7+ Bm7(b5)^E7"]
            },
            {
                name: "P2",
                chords: ["Am7(9) Am7/G", "F#m7(b5) Bm7(b5)^E7", "(3x)", "Am7(9) Am7", "F#m7(b5) Dm7^G7"]
            },
            {
                name: "Refrão",
                chords: ["C7M  C7", "F7+ G7(4)", "C7+ Am7", "Dm7 G7(4)"]
            }
        ]
    },
    {
        title: "Para de Falar tanta besteira (DR)",
        tone: "C",
        versao: "diResenha",
        artist: "Travessos",
        stanzas: [
            {
                name: "Solo Intro",
                chords: ["47 35 37 38 37 35 25 17 25 38 37 35 47 45 35 47", "47 35 25 37 35 47 45 35 47", "25 25 17 17 38 37 35 47 45 35 47", "47 35 25 37 35 47 45 35 47 E7(#9) "]
            },
            {
                name: "P1",
                chords: ["Am7 G/B C7+ Bm7", "Am7 G/B C7+ Bm7"]
            },
            {
                name: "P2",
                chords: ["Dm7 Em7", "Amadd(9) Amadd(9)/G", "F7+ Dm7", "Bb7(#11) 25 25 17 38 37 35 47 45"]
            },
            {
                name: "Refrão",
                chords: ["35 47 Dm7 Em7", "Am7 G C7+ Bm", "Am7 G/B C7+ Bm7", ],
                finalizations: [["Am7 G/B 25 25 17 38 37 35 47 45"], ["Am7 G/B Asus4 D#7(9)#11"]]
            },
            {
                name: "Pos ref",
                chords: ["Dm7 Amadd(9)", "Bm7(b5) E7(b9)^A7(#5)", "Dm7 Amadd(9)", "Bm7(b5) E7(b9)^A7(#5)", "Dm7 Amadd(9)", "Bm7(b5) E7(b9)^A7(#5)", "Dm7 Amadd(9)", "Bm7(b5) 25 25 17 38 37 35 47 45"]
            }

        ]
    },
    {
        title: "Por Voce (DR)",
        tone: "F",
        versao: "diResenha",
        artist: "Sorriso Maroto",
        stanzas: [
            {
                name: "Intro",
                chords: ["32 33 10 13 12 10 13 21 32", "18 17 15 18 17 15 16 17 26 35 47", "13 12 10 13 12 10 11 12 13 21 32 43 C7"]
            },
            {
                name: "P1",
                chords: ["F Bb", "F F7", "Eb Db", "Eb F", " C7(4)"]
            },
            {
                name: "P2 - deixaria de viver",
                chords: ["F/A Bb", "F/A Csus^C", "F/A Bb", "F/A C", "Bb F/A", "Eb/F Bb", "C F/A", "C Bb", "A7 Dm7", "C (2t)"]
            },
            {
                name: "Pos refrão",
                chords: ["F Bb"]
            },
            {
                name: "Solo",
                chords: ["31 32 21 23 11 12 13 10 33 13 10 33 13 10 33 32","12 13 15 11"]
            }
        ]
    },
    {
        title: "Febre (DR)",
        tone: "-",
        versao: "diResenha",
        artist: "Thiaguinho e Liniker",
        link: "https://www.youtube.com/watch?v=XToPjFLPc9s&list=RDXToPjFLPc9s&start_radio=1",
        stanzas: [
            {
                name: "solo inicial",
                chords: ["29 19 18 29 27", "29 27 38 39", "27 38 36 38"]
            },
            {
                name: "P1",
                chords: ["E7+", "B7+ B7(13)", "E7+ D#7", "G#m7 B7(9)", "E7+(9) D#7", "G#m7(11) Bsus B7", "E9 D#", "G#sus B7(13)"]
            },
            {
                name: "Refrao",
                chords: ["E7+(9) F#sus", "Badd9 Bsus", "(3x)", "E7+(9) D#"],
                finalizations: [["G#sus B7(13)"], ["G#sus G#m7(11)"]]
            },
            {
                name: "P1",
                chords: ["E7+", "B7+ B7(13)", "E7+ D#7", "G#7+", "E7+ D#7", "G#m7(11) Bsus B7", "E9 D#", "G#sus B7(13)"]
            },
            {
                name: "Refrao",
                chords: ["Volta no refrão pro fim"]
            }
        ]
    },
    {
        title: "Quem de Nós Dois",
        tone: "Tom",
        versao: "diResenha",
        artist: "-",
        stanzas: [
            {
                name: "Intro",
                chords: ["Cm7", "F", "Cm7", "F"]
            },
            {
                name: "P1",
                chords: ["Cm7", "F", "Bb7+", "Eb7+", "(4x)", "Bb7+", "Eb7+"]
            },
            {
                name: "P1",
                chords: ["Bb7+", "F", "Ab", "Gm7", "Eb7+ F", "Bb7+", "F", "Ab", "Gm7", "Eb7+ D Gm7"]
            }
        ]
    },
    {
        title: "192",
        tone: "Tom",
        versao: "diResenha",
        artist: "DiResenha",
        link: "https://www.youtube.com/watch?v=qj8aUPL_X6Y",
        stanzas: [
            {
                name: "Solo intro",
                chords: ["TIRAR...."]
            },
            {
                name: "P1",
                chords: ["Db", "Bbm", "Cm", "Fm", "(2x)"]
            },
            {
                name: "P2",
                chords: ["Fm", "Db", "Eb", "Ab", "Db", "Ab Bbm", "Eb Cm", "Ab (rever divisão!!!)"]
            },
            {
                name: "Refrãp",
                chords: ["Db", "Bbm", "Cm", "Ab", "Db", "Bbm", "Cm", "Ab"]
            },
            {
                name: "Preludio antes do 2º Refrão",
                chords: ["Gb", "%", "Ab", "Do Bb Lab Sol"]
            },
            {
                name: "Refrão final",
                chords: ["Db", "Bbm", "Cm", "Fm","Db", "Bbm", "Cm", "Bm7->Fm Lab Sol Mib Fa", "(REFRAO)"]
            },
            {
                name: "Final",
                chords: ["Db", "Cm (Não Toca)", "Fm"]
            }
        ]
    },
    {
        title: "Prefixo DiResenha",
        tone: "C",
        versao: "diResenha",
        artist: "DiResenha",
        stanzas: [
            {
                name: "solo inicial",
                chords: ["Si Do# La Fa# Mi Fa# La Si Do# Re Mi", "D G", "A B"]
            },
            {
                name: "segundo solo",
                chords: ["Sol Fa# Re#? Mi Fa# Sol", "La Sol Fa# Mi", "La->Si La Fa# Mi Re"]
            },
            {
                name: "Pagodinho",
                chords: ["G", "C", "F#m", "B", "G", "C"]
            },
            {
                name: "Solo final",
                chords: ["La Sol# Mi La Sol#", "La Sol# Mi La Sol# Sol#", "La Sol# Mi La Sol# La Sol# Mi La Sol# La Sol#"]
            }
        ]
    },
    {
        title: "Aurora Boreal",
        tone: "C",
        versao: "diResenha",
        artist: "Rael",
        link: "https://www.cifraclub.com.br/rael-da-rima/aurora-boreal/",
        stanzas: [
            {
                name: "Refrão",
                chords: ["Dm7(9) F/G", "C7+"]
            },
            {
                name: "P1",
                chords: ["Dm7(9) F/G", "C7+"]
            },
            {
                name: "P2",
                chords: ["Dm7(9) G#º", "C7+"]
            },
            {
                name: "Solo",
                chords: ["Do Do Re Re Mi Mi"]
            }
        ]
    },
    {
        title: "Só Agradecer",
        tone: "-",
        versao: "diResenha",
        artist: "Ah. Mr. Dan",
        link: "https://www.youtube.com/watch?v=ZZ5RF6VOCjI&list=RDZZ5RF6VOCjI&start_radio=1",
        stanzas: [
            {
                name: "Refrão",
                chords: ["Ebm7", "Bbm7 Bbm7^Am7", "Abm7", "Bbm7", "Ebm7", "Bbm7 Bbm7^Am7", "Abm7", "C#?"]
            },
            {
                name: "P1",
                chords: ["Ebm7", "Bbm7", "Abm7", "Bbm7"]
            },
            {
                name: "P2",
                chords: ["B7+", "C#", "Ebm7", "%"]
            },
            {
                name: "P3",
                chords: ["B7+", "B^Abm7", "Abm7^Bbm7", "Bbm7"]
            },
            {
                name: "volta refrão",
                chords: ["B7+", "F#"]
            }
        ]
    },
    {
        title: "Ela",
        tone: "-",
        versao: "diResenha",
        artist: "-",
        stanzas: [
            {
                name: "Intro",
                chords: ["46 45 35 48 26 38 16 15", "Bb9 Db(9) Bb^Eb", "16 15 26 35 33 26 24", "Bb9 Db(9) Bb^Eb", "16 15 26 24 35 33 46 45 Eb"]
            }, 
            {
                name: "P1",
                chords: ["Eb Eb4^Eb", "Eb Eb4^Eb", "Cm7", "%", "Bb/D 33 13 32 13 33", "Ab/C 46 26 45 26 46", "Eb Eb4^Eb", "Eb Eb4^Eb Bb/D", "Cm7 Cm(#5)^Cm7", "Cm7 Cm(#5)^Cm7", "Bb/D", "Ab/C 35 37 38"]
            }, 
            {
                name: "P2",
                chords: ["Ebm7 Db4", "B7+(9) Db4", "(2x)"]
            }, 
            {
                name: "Refrão",
                chords: ["Ebm7 Db4", "B7+(9) Db4","Ebm7 Db4", "Ab7 Bb7" ]
            }, 
            {
                name: "(só 1ª) Solo da volta ao P2",
                chords: ["46 45 35 33 26 24 16 15" ]
            }, 
            {
                name: "Refrão-2",
                chords: ["Ebm7 Ebm7 33 34 36", "B7+(9) B7+(9) 33 34 36 36","Ebm7 Ebm7 13 14 22", "Ab7 Bb7", "Ebm7 Db4", "B7+(9) Db4", "Ebm7 Db4", "B7+(9) Db4", "Eb"]
            }, 
            {
                name: "Solo do fim",
                chords: ["46 45 35 33 26 24 16 15", "B9 Db9","Bb^Eb 16 15 26 24 33 26 24", "B9 Db9","Bb^Eb 16 15 26 24 35 33 46 Eb"]
            }
        ]
    },
    {
        title: "Clichê",
        tone: "-",
        versao: "diResenha",
        artist: "-",
        link: "https://www.youtube.com/watch?v=Nq9pInaKUY0&list=RDNq9pInaKUY0&start_radio=1",
        stanzas: [
            {
                name: "Intro",
                chords: ["15 17 15 35 15 17 15 35"]
            },
            {
                name: "P1",
                chords: ["C/E", "F9", "C/E", "F9"]
            },
            {
                name: "P2",
                chords: ["Dm7", "Em7", "Fm6(2x) Fm6(2x)", "C4 C", "[2x]"]
            },
            {
                name: "Pre Refrão",
                chords: ["Dm7 G7(4)(9)", "C4 C C4 C C4"]
            },
            {
                name: "Refrão",
                chords: ["F7+", "G7(4)(9)", "C9 C9 12 10", "G G 12 10", "Am7(11) Am7(11) 12 10", "C7", "F7+(9)", "G7(4)(9)", "C9 C9 12 10", "G G 12 10", "Am7(11) Am7(11) 12 10", "C4 C", "F9 C/F", "Fm6 G7(4)(9)" ]
            },
            {
                name: "Final",
                chords: ["Solo inicio"]
            }
        ]
    },
    {
        title: "Fica Light",
        tone: "-",
        versao: "diResenha",
        artist: "-",
        link: "https://www.youtube.com/watch?v=pNrnYPhHrVU&list=RDXToPjFLPc9s&index=4",
        stanzas: [
            {
                name: "Intro",
                chords: ["Fsus", "15 12 33 32 30 43 41", "Fsus 30 43", "21 11 23"]
            },
            {
                name: "P1",
                chords: ["Eb7+ Eb7+ Eb6(9)^Eb7+", "Eb7+ Eb7+ Eb7+ Eb6(9)^Eb7+", "Bb7+ Bb6(9)", "Bb7+ Fb7(9)(#11)"]
            },
            {
                name: "P2",
                chords: ["Eb7+", "Cm7(9) Cm7", "Dm7", "Gm7 Bb7"]
            },
            {
                name: "Refrão",
                chords: ["Eb7+(9)", "Fsus", "Dm7 Gm7^Dm7^Gm7", "Fm6 Fb7(9)(#11)", "Eb7+(9) Dsus^Ebsus^Esus", "Fsus", "Dm7 Gm7", "Fm6 Fb7(9)(#11)"]
            },
            {
                name: "Pos refrao",
                chords: ["Eb7+ Eb7+ Eb6(9)^Eb7+", "Cm7(9)", "Bb6(9)", "Gm7 Fb7(9)(#11)"]
            },
            {
                name: "Final",
                chords: ["Gm7 D/G D/G^Eb/Ab^E/A^F/Bb"]
            }
        ]
    },
    {
        title: "1 Metro e 65 (DR)",
        tone: "D",
        versao: "diResenha",
        artist: "Sorriso Maroto",
        stanzas: [
            {
                name: "P1",
                chords: ["G7+", "Em7", "D7+(9) A/C#", "Bm7 Bm/A", "G7+", "Em7", "D7+(9) A/C#", "Bm7 Bm/A"]
            },
            {
                name: "Pre ref",
                chords: ["G9", "Gm6", "G7+ D/F#", "Em7 D"]
            },
            {
                name: "Refrão",
                chords: ["G7+", "Em7", "D7+(9) A/C#", "Bm7(11) Bm7(11)^A9","G7+", "Em7", "D7+(9) A/C#", "Bm7(11) Bm/A", "Em7(11)"]
            },
            {
                name: "Pos ref",
                chords: ["Gm6 D9 Em7 G/A", "D Em7 D9/F# G7+ D/A Bm7(11)"]
            }
        ]
    },
    {
        title: "Um Amor Puro (DR)",
        tone: "C",
        versao: "diResenha",
        artist: "Djavan",
        stanzas: [
            {
                name: "Solo Intro",
                chords: ["32 32 32 34 21 23 12 23 12 23 12", "32 32 32 34 21 23 12 23 12 23 12", "12^13^12 23 32 30 32 30 32", "23 21 12 23 21 32"]
            },
            {
                name: "P1",
                chords: ["F7+", "D/E", "Dm Dm7(9)", "C(9)", "F7+", "Bm7(b5) Dadd(9)", "2/4 Am7", "4/4 D 23 30 44 30 32"]
            },
            {
                name: "P2",
                chords: ["F7+", "D/E", "Dm7", "C(9) E7(b13)", "F7+", "Bm7(b5) Dadd(9)", "2/4 Am7", "4/4 D"]
            },
            {
                name: "Refrão",
                chords: ["F7+", "Dm7(9)", "G7(9) G7", "C9", "F7+", "Dm7(9)", "G7(9)", "C7+"]
            },
            {
                name: "Pos-ref",
                chords: ["Am7","Em7", "Dm7 Dm7(9)", "F Dm6 G7(9)"]
            },
            {
                name: "P3 pra voltar no refrão",
                chords: ["F7+","Dm7 G7", "(4x)"]
            }
        ]
    },
    {
        title: "Vamo de pagodin",
        tone: "-",
        versao: "diResenha",
        artist: "MC Daniel",
        stanzas: [
            {
                name: "Loop",
                chords: ["Fm", "Cm", "Bbm", "C7"],
                audio: "vamo-de-pagodinho-levada"
            },
            {
                name: "solo",
                chords: ["16 16 16 15 13", "24 24 24 26 28", "26 26 26 24 22", "24 24 24 22 21 22 21 33 21"],
                audio: "vamo-de-pagodinho-solo"
            }
        ]
    },
    {
        title: "Maliciosa",
        tone: "-",
        versao: "diResenha",
        artist: "Ludimila",
        stanzas: [
            {
                name: "Intro - Arpejos",
                chords: ["C7+", "B7", "Em7 A7(9)", "Dm7 Dm7^G7(9)"]
            },
            {
                name: "P1 - Arpejos",
                chords: ["C7+", "B7", "Em7 A7(9)", "Dm7 Dm7^G7(9)"]
            },
            {
                name: "P1 - Arpejos",
                chords: ["C7+", "B7", "Em7 Em7^Ebm7", "Dm7 23 34 32 30 42 32 30"]
            },
            {
                name: "Refrão (Loop)",
                chords: ["C7+", "B7", "Em7", "Dm7 G7(9)", "C7+", "B7", "Em7", "Dm7 Dm7^G7(9)"]
            }
        ]
    },
    {
        title: "Falta de mim",
        tone: "-",
        versao: "diResenha",
        artist: "Ludimila",
        stanzas: [
            {
                name: "Intro - Solo",
                chords: [""]
            },
            {
                name: "P1 - Saiu pra me es..",
                chords: ["Bbm7 Db", "Ab Eb7", "Bbm7 Db", "Ab Eb7 ()"]
            },
            {
                name: "P2 - Sem mim",
                chords: ["Bbm7 Db", "Ab Eb7", "Bbm7 Db", "Db/F Db", "Ab Eb7"]
            },
            {
                name: "Refrão (Loop)",
                chords: ["Bbm7 Db", "Ab Eb7", "Bbm7 Db", "Ab Eb7"]
            }
        ]
    },
    {
        title: "Felina",
        tone: "Fm",
        versao: "diResenha",
        artist: "-",
        stanzas: [
            {
                name: "Loop",
                chords: ["Fm", "Cm"]
            }
        ]
    },
    {
        title: "Zero a Cem",
        tone: "Em",
        versao: "diResenha",
        artist: "-",
        stanzas: [
            {
                name: "Solo",
                chords: ["42 45 34 25 42 45 34 25", "10 12 14 23 34 32 34 42^44 42 B7(b13)"]
            },
            {
                name: "Loop",
                chords: ["Em7(9)", "%", "D7+(9)","D7+(9) B7(b13)"]
            },
            {
                name: "To querendo ter vc de madrugada....",
                chords: ["A7(4)(9)", "B7(4)(9)", "A7(4)(9)", "B7(4)(9)"]
            }
        ]
    },
    {
        title: "Caju",
        tone: "Am",
        versao: "diResenha",
        artist: "-",
        stanzas: [
            {
                name: "Loop...",
                chords: ["Am7", "Em7"]
            }
        ]
    },
    {
        title: "Desabafo",
        tone: "Am",
        versao: "diResenha",
        artist: "-",
        stanzas: [
            {
                name: "Refrão",
                chords: ["F#m7 E F#m7 E", "Bm Bm7/A G#m7(b5) C#7(b9)", "F#m7 C#7(b13)"]
            },
            {
                name: "P1",
                chords: ["F#m7", "C#m"]
            }
        ]
    },
    {
        title: "Teu Cheiro",
        tone: "C",
        versao: "diResenha",
        artist: "Claus e Vanessa",
        stanzas: [
            {
                name: "intro",
                chords: ["Em", "Am", "Aº", "Em"]
            },
            {
                name: "P1",
                chords: ["Em", "Am", "Aº", "Em", "(4x)", "E7(9)"]
            },
            {
                name: "Refrão",
                chords: ["C7+", "B7", "Em", "G7", "C7+", "B7", "Em", "E7(9)", "(2x)", "C7+ B7", "(intro)"]
            }

        ]
    },
    {
        title: "Olha o que o amor me faz",
        tone: "G",
        versao: "diResenha",
        artist: "Sandy e Junior",
        stanzas: [
            {
                name: "intro",
                chords: ["-"]
            },
            {
                name: "P1",
                chords: ["G D", "Em7 G7", "C Am", "D7(4)(9) D7", "G D", "Em7 G7", "C", "D7(4)(9) D7", "G9 G7"]
            },
            {
                name: "P2",
                chords: ["C D", "C G9 D/F#", "Em C", "D7(4) D7", "G9 D/F#"]
            },
            {
                name: "Refrão",
                chords: ["Em C", "D G9^D/F#", "(3x)", "Em C", "D G9"]
            }

        ]
    },
    {
        title: "Céu Azul",
        tone: "Em",
        versao: "diResenha",
        artist: "Charlie Brown Jr.",
        stanzas: [
            {
                name: "intro",
                chords: ["Em  D5(9)  Bm7(11)  A5(9)"]
            },
            {
                name: "P1",
                chords: ["Em  D5(9)  Bm7(11)  A5(9)"]
            },
            {
                name: "Pre Refrão",
                chords: ["Em", "Bm7(11)", "A5(9)", "G", "(2x)"]
            },
            {
                name: "Refrão",
                chords: ["Em  D5(9)  Bm7(11)  A5(9)"]
            }

        ]
    },
    {
        title: "Sozinho",
        tone: "D",
        versao: "diResenha",
        artist: "Caetano Veloso",
        stanzas: [
            {
                name: "Intro",
                chords: ["F7M  Em7(9)  A7(4)"]
            },
            {
                name: "P1",
                chords: ["D6(9) A7", "Bm7", "Em Em/D", "A7", "(2x)"]
            },
            {
                name: "P2",
                chords: ["Bm F#m7", "G7+"]
            },
            {
                name: "Refrão",
                chords: ["D6(9) A7", "Bm7", "Em Em/D", "C C/G", "D6(9) A7", "Bm", "G G/A", "D6(9) A7(4)"]
            }

        ]
    },
    {
        title: "Mó Paz",
        tone: "Db",
        versao: "diResenha",
        artist: "Iza",
        stanzas: [
            {
                name: "Loop",
                chords: ["Dbm7", "%", "Ebm", "Abm B"]
            }
        ]
    },
    {
        title: "Quem não quer sou eu",
        tone: "-",
        versao: "diResenha",
        artist: "Seu Jorge",
        stanzas: [
            {
                name: "Loop",
                chords: ["Am7", "F7+ E7(b9)"]
            }
        ]
    },
    {
        title: "Ta virando vicio",
        tone: "-",
        versao: "diResenha",
        artist: "Dilsinho e Ah. Mr Dan",
        stanzas: [
            {
                name: "Intro",
                chords: ["F", "Eb"]
            },
            {
                name: "P1",
                chords: ["F", "Eb", "Bb", "A7"]
            },
            {
                name: "P2",
                chords: ["Bb7+", "Dm7", "C", "Bb", "Dm7 Eb", "Bb A7"]
            },
            {
                name: "Refrão",
                chords: ["Bb7+", "A7", "Dm7", "G7"]
            }
        ]
    }
]