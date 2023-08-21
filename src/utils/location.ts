export const findMostFrequent = (arr: any[], n: number) => {
  const countMap = new Map();
  for (const item of arr) {
    if (item !== null) {
      countMap.set(item, (countMap.get(item) || 0) + 1);
    }
  }

  const sortedCounts = [...countMap.entries()].sort((a, b) => b[1] - a[1]);

  const topResults = sortedCounts
    .slice(0, n)
    .map(([value, count]) => ({ value, count }));
  return topResults;
};
