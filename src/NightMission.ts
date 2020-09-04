import moment from 'moment'
import { Mission } from './Mission'
import { Student } from './Student'
import { Teacher } from './Teacher'

export class NightMission extends Mission {
    constructor (
        id: string, 
        startDate: moment.Moment, 
        endDate: moment.Moment, 
        teachers: Teacher[],
        students: Student[],
        currentModule?: number | undefined
        ) {
        super(id, startDate, endDate, teachers, students, currentModule)
    }

    public setNameMission(name: string) {
        if(name.indexOf("na-night") !== -1) {
            super.setNameMission(name)
        } else {
            console.log("A turma notura tem que terminar com na-night")
        }
    }
}

export const startDateTang: moment.Moment = moment("18/05/2020", "DD/MM/YYYY")
export const endDateTang: moment.Moment = moment("13/05/2020", "DD/MM/YYYY")
export const teachers: Teacher[] = []
export const students: Student[] = []

export const missionTang: NightMission = new NightMission("2", startDateTang, endDateTang, teachers, students)