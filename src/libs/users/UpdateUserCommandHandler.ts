import { ICommandHandler } from "../taskRunner/Tasks";
import { users } from "../db/users";
import { IUpdateUserCommand } from "./UpdateUserCommand";

export class UpdateUserCommandHandler implements ICommandHandler {
  task: IUpdateUserCommand;

  constructor(q: IUpdateUserCommand) {
    this.task = q;
  }

  runCommand() {
    const user = users.find(u => u.id === this.task.id);
    user.name = this.task.name;

    return Promise.resolve();
  }
}
