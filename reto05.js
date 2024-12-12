function organizeShoes(shoes) {
  let boots = [];
  let counter = 0;
  let left = [];
  let right = [];

  const isPair = (shoe, right) => {
    let pair = false;

    right.forEach((r) => {
      if (r.size === shoe.size) pair = true;
    });
    return pair;
  };

  shoes.forEach((shoe) => {
    let { type } = shoe;
    if (type === "I") left.push(shoe);
    else right.push(shoe);
  });

  left.forEach((l) => {
    if (counter < right.length) {
      if (isPair(l, right)) {
        counter++;
        boots.push(l.size);
      }
    }
  });

  return boots;
}

// const shoes = [
//   { type: "I", size: 38 },
//   { type: "R", size: 38 },
//   { type: "R", size: 42 },
//   { type: "I", size: 41 },
//   { type: "I", size: 42 },
// ];
// const shoes = [
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 },
//   { type: 'I', size: 38 },
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 }
// ]
const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes));
