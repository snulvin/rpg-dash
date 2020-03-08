let counter = 1;
function generateKey(): number {
  return counter++;
}

export default generateKey;