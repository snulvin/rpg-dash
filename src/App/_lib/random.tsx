let seed = 1;
function random() {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export function setSeed(seedSetter: number) {
  seed = seedSetter;
}

export default random;