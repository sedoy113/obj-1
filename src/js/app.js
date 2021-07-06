export default function orderByProps(objectSort, arrSort = []) {
  let arrKey = [];
  for (const key in objectSort) {
    if (!arrSort.includes(key)) {
      arrKey.push(key);
    }
  }
  arrKey = [...arrSort, ...arrKey.sort()];

  const result = [];
  for (const key of arrKey) {
    result.push({ key, value: objectSort[key] });
  }
  return result;
}
