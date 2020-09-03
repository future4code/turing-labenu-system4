import { User } from './User';
import moment from 'moment';
moment.locale("pt-br");

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
