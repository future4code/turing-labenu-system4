import { Mission } from './Mission' 
import moment from 'moment'

export class NightMission extends Mission {
    constructor (
        id: string, 
        startDate: moment.Moment, 
        endDate: moment.Moment, 
        teachers: any[],
        students: any[],
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