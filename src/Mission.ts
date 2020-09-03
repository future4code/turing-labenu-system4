import moment from 'moment'

export abstract class Mission {
    private name: string = ""

    constructor (
        private id: string,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: any[] = [],
        private students: any[] = [],
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

    public getTeachers(): any[] {
        return this.teachers
    }

    public getStudents(): any[] {
        return this.students
    }

    public getCurrentModule(): number | undefined {
        return this.currentModule
    }

    public addTeacher(teacher: any[]): void {
        this.teachers.push(teacher)
    }

    public addStudent(student: any[]): void {
        this.students.push(student)
    }

    public setNameMission(name: string): void {
        this.name = name
    }
}