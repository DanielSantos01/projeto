import HandleNavigation from './HandleNavigation';

export const editLocaleName = (loc: number, name: string, elements: any) => {
  HandleNavigation.navigate('Edit', {
    loc,
    name,
    elements,
  });
};
