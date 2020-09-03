import { User } from './User';
import moment from 'moment';
moment.locale('pt-br');

export class Student implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    private birthDate: moment.Moment,
    private hobbies: string[],
  ) {}

  //Pelo id do estudante pegar a idade
  //diff é a diferença o momento da data de nacimento para o dia hoje, a diferença vai ser em anos
  public getAge() {
    return moment().diff(this.birthDate, 'years');
  }
}

export const student1 = new Student(
  '1',
  'Chaves',
  'chaves@gmail.com',
  moment('02/02/1980', 'DD/MM/YYYY'),
  ['Jorgar bola', 'comer'],
);
export const student2 = new Student(
  '2',
  'kico',
  'kico@gmail.com',
  moment('03/08/1981', 'DD/MM/YYYY'),
  ['Dançar', 'Dormir'],
);
export const student3 = new Student(
  '3',
  'Chiquinha',
  'chiquinha@gmail.com',
  moment('28/11/1985', 'DD/MM/YYY'),
  ['estudar', 'ler'],
);
export const student4 = new Student(
  '4',
  'Nhonho',
  'nhonho@gmail.com',
  moment('01/12/1989', 'DD/MM/YYYY'),
  ['comer', 'cozinhar'],
);
