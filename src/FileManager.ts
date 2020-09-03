import fs from "fs"
import {Student} from "./Student";
import {Teacher} from "./Teacher";
import {Mission} from "./Mission";


export class FileManager {
  constructor(private filePath: string) {}

  public setFilePath(path: string): void {
    this.filePath = path;
  }

  public writeFile(data: any[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 3));
  }

  public readFile(): any {
    const data = fs.readFileSync(this.filePath);
    return JSON.parse(data.toString());
  }

  public registerInJson(classInstance: Student | Teacher | Mission) {
    let classI: (Student | Teacher | Mission)[] = [];
    try {
      classI = this.readFile();
    } catch (e) {
      if(e) {
        this.writeFile(classI)
      }
    }
    classI.push(classInstance);
    return this.writeFile(classI)
  }
}