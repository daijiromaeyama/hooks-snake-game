export const initFields = (fieldSize) => {
  const fields = []; // 新しい配列を作成
  // フィールドの縦の長さを作る分だけループ
  for (let i = 0; i < fieldSize; i++) {
    // フィールドの列の長さ分の配列を作成
    const cols = new Array(fieldSize).fill('');
    // フィールドの列を配列の追加
    fields.push(cols);
  }
  fields[17][17] = 'snake'

  return fields; // 作成した配列を返却
};
