// inventário Alpha
let inventarioAlpha =  [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];
  
  // inventário Beta 
  let inventarioBeta =  [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];

  // 01 
  // Removendo o ultimo item 

let itemRemovido = inventarioAlpha.pop();

console.table(inventarioAlpha);
console.log("Item removido: ", itemRemovido);

// 02 
// Removendo o ultimo item 

itemRemovido = inventarioBeta.pop();

console.table(inventarioBeta);
console.log("Item removido: ", itemRemovido);

// 03 
// Adicionando tres novos artefatos 

inventarioAlpha.push(["Artefato 01", "planetas", 12345]);
inventarioAlpha.push(["Artefato 02", "estrelas", 67890]);
inventarioAlpha.push(["Artefato 01", "galaxias", 24680]);

console.table(inventarioAlpha);

// 04 
// Adicionando dois novos artefatos 

inventarioBeta.push(["Artefato 01", "Aneis de saturno", 24680]);
inventarioBeta.push(["Artefato 02", "Buraco de minhoca", 24680]);

console.table(inventarioBeta);

// 05
// Adicionando item no inicio 
let itemDestacado = inventarioAlpha[22];
inventarioAlpha.unshift(itemDestacado);

// Removendo conforme o indice 
inventarioAlpha.splice(23, 1)

console.table(inventarioAlpha);

// 06 
// Adicionando item no inicio 
 itemDestacado = inventarioBeta[5];
inventarioBeta.unshift(itemDestacado);

// Removendo conforme o indice 
inventarioBeta.splice(6, 1)

console.table(inventarioBeta);
