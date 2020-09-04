import * as fs from 'fs';
import moment from 'moment';
import { Student } from './Student';
import { Teacher } from './Teacher';
import { Mission } from './Mission'
import { FileManager } from './FileManager'

export class MainTaskManager {
  public printStudents = (): void => {
    const dataStudents: Student[] = JSON.parse(
      fs.readFileSync('./students.json').toString(),
    );

    for (let data of dataStudents) {
      let nameMission: string = ""

      const dataMissions: any[] = this.getDataMissions()
      dataMissions.forEach((mission) => {
        const studentsMission: any[] = mission.students
        studentsMission.forEach((student: any) => {
          if (student.id === data.id) {
            nameMission = mission.name
          }
        })
      })

      console.log(
        `
          NOME: ${data.name}
          E-MAIL: ${data.email}
          CURSO: Web Full Stack
          TURMA: ${nameMission}
          IDADE: ${moment().diff(data.birthDate, 'years')} anos
        `,
      );
    }
  };

  public printTeachers = (): void => {
    const dataTeachers: Teacher[] = JSON.parse(
      fs.readFileSync('./teachers.json').toString(),
    );

    for (let data of dataTeachers) {
      console.log(
        `
          NOME: ${data.name}
          E-MAIL: ${data.email}
          IDADE: ${moment().diff(data.birthDate, 'years')} anos
          ESPECIALIDADES: ${data.specialties}

        `,
      );
    }
  };

  public getDataMissions() : Mission[] {
    const fileManager = new FileManager('missions.json')
    const dataMissions: Mission[] = fileManager.readFile()
    return dataMissions
  }
}
