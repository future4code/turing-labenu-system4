import moment from 'moment'
import { Student } from './Student'
import { Teacher } from './Teacher'

export abstract class Mission {
    private name: string = ""

    constructor (
        private id: string,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: Teacher[] = [],
        private students: Student[] = [],
        private currentModule: number | undefined = undefined
    ) {}

    public getId(): string {
        return this.id
    }

    public getstartDate(): moment.Moment {
        return this.startDate
    }

    public getEndDate(): moment.Moment {
        return this.endDate
    }

    public getTeachers(): Teacher[] {
        return this.teachers
    }

    public getStudents(): Student[] {
        return this.students
    }

    public getCurrentModule(): number | undefined {
        return this.currentModule
    }

    public addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher)
    }

    public addStudent(student: Student): void {
        this.students.push(student)
    }

    public setNameMission(name: string): void {
        this.name = name
    }
}