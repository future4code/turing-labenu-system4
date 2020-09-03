import { User } from './User';
import moment from 'moment';

export class Teacher implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    private specialties: TEACHER_SPECIALTY[],
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

export const teacher1 = new Teacher('1', 'Florinda', 'florinda@gmail.com', [
  TEACHER_SPECIALTY.TESTES,
  TEACHER_SPECIALTY.CSS,
  TEACHER_SPECIALTY.REDUX,
]);
export const teacher2 = new Teacher('2', 'Madruga', 'madruga@gmail.com', [
  TEACHER_SPECIALTY.REACT,
  TEACHER_SPECIALTY.BACKEND,
  TEACHER_SPECIALTY.REDUX,
]);
export const teacher3 = new Teacher('3', 'Girafales', 'girafales@gmail.com', [
  TEACHER_SPECIALTY.TESTES,
  TEACHER_SPECIALTY.OOP,
]);
