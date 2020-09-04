import moment from 'moment'
import { FileManager } from './FileManager'
import { Teacher } from './Teacher'
import { Student } from './Student'

const whatPrint: string = process.argv[2]

class ReadAndPrint {
    private fileManager: FileManager = new FileManager(`${whatPrint}.txt`)
    private data: any[] = this.fileManager.readFile()

    getData() : any[] {
        return this.data
    }
}

const read: ReadAndPrint = new ReadAndPrint()
 
switch (whatPrint) {
  case 'teachers':
    const dataTeachers: Teacher[] = read.getData() 
    dataTeachers.forEach((teacher: Teacher) => {
        console.log(`
            id: ${teacher.id}
            Nome: ${teacher.name}
            Email: ${teacher.email}
            Data de Nascimento: ${teacher.birthDate}
            Especialiadades: ${teacher.specialties}
        `)
    })  
    break;
  case 'students':
    const dataStudents: Student[] = read.getData()
    dataStudents.forEach((student: Student) => {
        console.log(`
            id: ${student.id}
            Nome: ${student.name}
            Email: ${student.email}
            Data de nascimento: ${moment(student.birthDate).format("DD/MM/YYYY")}
            Hobbies: ${student.hobbies}
        `)
    })  
    break;
  default:
    console.log("Não podemos realizar está operação");
}