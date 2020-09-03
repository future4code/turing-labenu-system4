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
