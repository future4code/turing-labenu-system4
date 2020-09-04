import { FileManager } from './FileManager';
import { student1, student2, student3, student4 } from './Student';
import { teacher1, teacher2, teacher3 } from './Teacher';
import { Mission } from './Mission'
import { FullTimeMission, missionTuring } from './FullTimeMission'
import { NightMission, missionTang } from './NightMission'

const final = new FileManager('students.json');

final.registerInJson(student1);
final.registerInJson(student2);
final.registerInJson(student3);
final.registerInJson(student4);

final.setFilePath('students.txt')

final.registerInJson(student1);
final.registerInJson(student2);
final.registerInJson(student3);
final.registerInJson(student4)

final.setFilePath('teachers.json');

final.registerInJson(teacher1);
final.registerInJson(teacher2);
final.registerInJson(teacher3);

final.setFilePath('teachers.txt')
final.registerInJson(teacher1);
final.registerInJson(teacher2);
final.registerInJson(teacher3)

final.getStudentId("1")

final.setFilePath('missions.json')

missionTuring.setNameMission("Turing")
missionTuring.addStudent(student1)
missionTuring.addStudent(student2)
missionTuring.addTeacher(teacher1)

missionTang.setNameMission("Tang")
missionTang.addStudent(student3)
missionTang.addStudent(student4)
missionTang.addTeacher(teacher2)

final.registerInJson(missionTuring)
final.registerInJson(missionTang)

final.setFilePath('missions.txt')

final.registerInJson(missionTuring)
final.registerInJson(missionTang)