import { Mission } from './Mission'
import { Student } from './Student'
import { Teacher } from './Teacher'

import moment from 'moment'

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