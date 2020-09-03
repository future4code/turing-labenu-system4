import { Mission } from './Mission'
import { Student } from './Student'
import { Teacher } from './Teacher'
import moment from 'moment'

export class FullTimeMission extends Mission {
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
  
    setNameMission(name: string): void {
      super.setNameMission(name);
    }
}

export const startDateTuring: moment.Moment = moment("18/05/2020", "DD/MM/YYYY")
export const endDateTuring: moment.Moment = moment("13/05/2020", "DD/MM/YYYY")
export const teachers: Teacher[] = []
export const students: Student[] = []

export const missionTuring: FullTimeMission = new FullTimeMission("1", startDateTuring, endDateTuring, teachers, students)