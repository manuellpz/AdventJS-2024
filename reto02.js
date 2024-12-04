let names = ["midu", "madeval", "educalvolpz"];

let longest = Math.max(...names.map(n => n.length))

let template = "*".repeat(longest + 4) + "\n";

names.forEach((n) => {
  template += "* " + n + " ".repeat(longest - (n.length-1)) + "*\n";
});

template += "*".repeat(longest + 4);

console.log(template);