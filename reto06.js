function inBox(box) {
  let valid = true;

  if (
    box.join("").indexOf("*") === -1 ||
    box[0].indexOf("*") !== -1 ||
    box[box.length - 1].indexOf("*") !== -1
  )
    return false;

  for (let id = 1; id < box.length - 1; id++) {
    if (box[id][0] === "*" || box[id][box[id].length - 1] === "*") valid = false;
  }

  return valid;
}

console.log(inBox(["###", "#*#", "###"]));

console.log(inBox(["####", "#* #", "#  #", "####"])); // ➞ true

console.log(inBox(["#####", "#   #", "#  #*", "#####"])); // ➞ false

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false
