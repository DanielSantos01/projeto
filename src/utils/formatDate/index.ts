import moment from 'moment';
import { months } from './months';

export const getTime = () => {
  moment.updateLocale('pt-br', { months });
  const date: string = new Date().toLocaleString('pt-BR');
  const formatedDate = moment(date).format('DD-MMMM-YYYY HH:mm:ss');
  formatedDate.replace('-', ' ');
  const splittedDate = formatedDate.split(' ');
  splittedDate[0] = splittedDate[0].split('-').join(' de ');
  return splittedDate.join(' às ');
};
