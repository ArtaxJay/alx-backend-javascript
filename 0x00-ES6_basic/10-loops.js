export default function appendToEachArrayValue(array, appendString) {
  const endOfArr = [];
  for (const idx of array) {
    endOfArr.push(`${appendString}${idx}`);
  }

  return endOfArr;
}
