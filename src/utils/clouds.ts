export function randomizeValue(min: number, max: number) {
  const rand = Math.random() * (max - min) + min;
  return rand.toString();
}

export const makeClouds = (count: number) => {
  let res = [];
  for (let i = 0; i < count; i++) {
    res.push(i);
  }
  return res;
};
