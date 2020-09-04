import moment from 'moment';
moment.locale('pt-br');

export interface User {
  id: string;
  name: string;
  email: string;
  birthDate: moment.Moment
}


// criei uma interface User pois o professor e aluno tem algumas propriedades em comum