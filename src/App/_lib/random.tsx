let seed = 1;
function random() {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export default random;