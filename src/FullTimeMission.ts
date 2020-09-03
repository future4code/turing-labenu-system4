import { Mission } from './Mission'
import { Student } from './Student'
import { Teacher } from './Teacher'

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

    setNameMission(name: string) : void {
        super.setNameMission(name)
    }
}