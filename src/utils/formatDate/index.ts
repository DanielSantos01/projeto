import moment from 'moment';

import { months } from './months';

moment.updateLocale('pt-br', { months });

export const getTime = (): string => {
  const currentDate: Date = new Date();
  const formatedDate: string = moment(currentDate).format('DD-MMMM-YYYY HH:mm:ss');
  const splittedDate: string[] = formatedDate.split(' ');
  splittedDate[0] = splittedDate[0].split('-').join(' de ');
  return splittedDate.join(' às ');
};
