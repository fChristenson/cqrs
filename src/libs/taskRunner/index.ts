import { ITaskHandler } from "./Tasks";

export class TaskRunner {
  async run<T>(handler: ITaskHandler<T>): Promise<T> {
    console.log(`Running ${handler.task.taskName}`, handler.task);

    console.time(handler.task.taskName);
    let result;
    if (handler.runCommand) {
      result = await handler.runCommand();
    } else {
      result = await handler.runQuery();
    }
    console.timeEnd(handler.task.taskName);

    return result;
  }
}
