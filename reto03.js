const inventory = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' },
];

let organized = {};
let aux = [];
let items = {};

inventory.forEach((el) => {
  let { category } = el;
  
    organized = { ...organized, [category]: {} };
});

inventory.forEach((el) => {
  let { name, quantity, category } = el;

  items = organized[category];

  organized = {
    ...organized,
    [category]: aux.includes(name)
      ? {
          ...items,
          [name]: quantity + items[name],
        }
      : {
          ...items,
          [name]: quantity,
        },
  };

  aux.push(name);
});

console.log(organized);
