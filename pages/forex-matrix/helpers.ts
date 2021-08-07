interface ICells {
  primary_currency: string;
  secondary_currency: string;
  primary_country: string;
  secondary_country: string;
  change_1d: number;
  price: number;
  is_opposite: boolean;
  ws_ticker: string;
}

export const matrixMapping = (cells: ICells[]) => {
  let pos: number = 0;
  let curred: number = 0;
  return cells.reduce((prev, cur, index, arr) => {
    curred++;
    if (arr[curred] && cur.primary_currency === arr[curred].primary_currency) {
      return prev;
    }
    const _arr = prev.concat([arr.slice(pos, curred)]);
    pos = curred;
    return _arr;
  }, []);
};
