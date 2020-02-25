export interface ITask {
  taskName: string;
}

export interface ITaskHandler<T> {
  task: ITask;
  runCommand?(): Promise<void>;
  runQuery?(): Promise<T>;
}

export interface ICommandHandler {
  task: ITask;
  runCommand(): Promise<void>;
}

export interface IQueryHandler<T> {
  task: ITask;
  runQuery(): Promise<T>;
}
