export const handleNewLocale = (params: any, items: any) => {
  if (params && items[0]) {
    if ((params.newLocal !== items[items.length - 1]) && params.newLocal.change === '1') {
      const data = items;
      data.unshift(params.newLocal);
      return data;
    }
    if (params.newLocal.change === '2') {
      const data = items;
      data[params.newLocal.loc].title = params.newLocal.name;
      return data;
    }
  } else if (params) {
    const data = [params.newLocal];
    return data;
  }
};
