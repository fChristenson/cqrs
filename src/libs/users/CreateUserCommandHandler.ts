import { ICommandHandler } from "../taskRunner/Tasks";
import { users } from "../db/users";
import { ICreateUserCommand } from "./CreateUserCommand";

export class CreateUserCommandHandler implements ICommandHandler {
  task: ICreateUserCommand;

  constructor(q: ICreateUserCommand) {
    this.task = q;
  }

  runCommand() {
    users.push(this.task.user);
    return Promise.resolve();
  }
}
