import { Mission } from './Mission'

export class FullTimeMission extends Mission {
    constructor (
        name: string,
        id: string, 
        startDate: moment.Moment, 
        endDate: moment.Moment, 
        teachers: any[],
        students: any[],
        currentModule?: number | undefined
        ) {
        super(id, startDate, endDate, teachers, students, currentModule)
    }

    setNameMission(name: string) : void {
        super.setNameMission(name)
    }
}