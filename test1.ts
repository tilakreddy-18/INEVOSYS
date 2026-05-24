export function averageScore(ratings: number[]) {
  let sum = 0;
  let average = 0;
  if (ratings.length === 0) {
    return 0;
  }
  for (let i = 0; i < ratings.length; i++) {
    sum += ratings[i];
  }
  return (average = sum / ratings.length);
}
console.log(averageScore([10, 20, 30, 40]));