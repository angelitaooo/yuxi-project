import { UUID } from 'angular2-uuid';

export class Teacher {
  id: string;

  constructor(
    public firstName: string,
    public lastName: string
  ) {
    this.id = UUID.UUID();
  }
}
