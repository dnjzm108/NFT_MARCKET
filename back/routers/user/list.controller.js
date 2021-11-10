







const makePageBlock = (cnt, obj) => {
  const { rows } = obj;
  let { page } = obj;
  const totalPage = Math.ceil(cnt / rows);
  if (page > totalPage) page = totalPage;
  let block = 10;
  while (page > block) {
      block += 10;
  }
  const pageblock = [];
  for (let i = block - 9; i <= block; i++) {
      pageblock.push(i);
      if (i === totalPage) break;
  }
  return { page: page, rows: rows, pageblock: pageblock, totalPage: totalPage, }
}