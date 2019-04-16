export default class Todo {
  private id: number;
  private title: string;
  private isCompleted: boolean;

  constructor(id: number, title: string, isCompleted: boolean) {
    this.id = id;
    this.title = title;
    this.isCompleted = isCompleted;
  }
}
