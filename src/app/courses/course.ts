import { UUID } from 'angular2-uuid';

export class Course {
  id: string;

  constructor(
    public name: string,
    public date: string,
    public duration: number,
    public teacher: number
  ) {
    this.id = UUID.UUID();
  }
}
