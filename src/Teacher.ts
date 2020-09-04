import { User } from './User';
import moment from 'moment';

export class Teacher implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public birthDate: moment.Moment,
    public specialties: TEACHER_SPECIALTY[],
  ) {}
}

// enun para numerar coisas
export enum TEACHER_SPECIALTY {
  REACT = 'REACT',
  REDUX = 'REDUX',
  CSS = 'CSS',
  TESTES = 'TESTES',
  TYPESCRIPT = 'TYPESCRIPT',
  OOP = 'OOP',
  BACKEND = 'BACKEND',
}

export const teacher1 = new Teacher('1', 'Florinda', 'florinda@gmail.com',  moment('03/08/1981', 'DD/MM/YYYY'), [
  TEACHER_SPECIALTY.TESTES,
  TEACHER_SPECIALTY.CSS,
  TEACHER_SPECIALTY.REDUX,
]);
export const teacher2 = new Teacher('2', 'Madruga', 'madruga@gmail.com', moment('03/08/1980', 'DD/MM/YYYY'), [
  TEACHER_SPECIALTY.REACT,
  TEACHER_SPECIALTY.BACKEND,
  TEACHER_SPECIALTY.REDUX,
]);
export const teacher3 = new Teacher('3', 'Girafales', 'girafales@gmail.com', moment('03/08/1989', 'DD/MM/YYYY'), [
  TEACHER_SPECIALTY.TESTES,
  TEACHER_SPECIALTY.OOP,
]);

export const teacher4 = new Teacher('4', 'Clotilde', 'clotilde@gmail.com', moment('03/08/1985', 'DD/MM/YYYY'), [
  TEACHER_SPECIALTY.TESTES,
  TEACHER_SPECIALTY.OOP,
]);
