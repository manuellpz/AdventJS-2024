const createXmasTree = (height, ornament) => {
  const width = height * 2 - 1;
  let tree = "";
  let spaces = (width - 1) / 2;
  let trunk = "_".repeat(spaces) + "#" + "_".repeat(spaces);

  for (let i = 1; i <= width; i += 2) {
    tree += "_".repeat(spaces) + ornament.repeat(i) + "_".repeat(spaces) + "\n";
    spaces--;
  }

  tree += trunk + "\n" + trunk;

  return tree;
};

const tree = createXmasTree(6, "@");
console.log(tree);
