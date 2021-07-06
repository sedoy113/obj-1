export default function orderByProps(objectSort, arrSort = []) {
  let arrAllKey = [];
  for (const key in objectSort) {
    if (!arrSort.includes(key)) {
      arrAllKey.push(key);
    }
  }
  arrAllKey = [...arrSort, ...arrAllKey.sort()];

  const result = [];
  for (const key of arrAllKey) {
    result.push({ key, value: objectSort[key] });
  }
  return result;
}
