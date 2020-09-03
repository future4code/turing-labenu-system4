import { FileManager } from './FileManager';
import { student1, student2, student3, student4 } from './Student';
import { teacher1, teacher2, teacher3 } from './Teacher';

const final = new FileManager('students.json');

final.registerInJson(student1);
final.registerInJson(student2);
final.registerInJson(student3);
final.registerInJson(student4);

final.setFilePath('teachers.json');

final.registerInJson(teacher1);
final.registerInJson(teacher2);
final.registerInJson(teacher3);
