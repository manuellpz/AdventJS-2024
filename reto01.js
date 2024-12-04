let gifts = [];

let orderedGifts = gifts.sort((a, b) => a - b);

console.log(Array.from(new Set(orderedGifts)));
