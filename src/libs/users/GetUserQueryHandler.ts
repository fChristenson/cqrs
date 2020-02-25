import { IQueryHandler } from "../taskRunner/Tasks";
import { IGetUserQuery } from "./GetUserQuery";
import { IUser } from "./User";
import { users } from "../db/users";

export class GetUserQueryHandler implements IQueryHandler<IUser> {
  task: IGetUserQuery;

  constructor(q: IGetUserQuery) {
    this.task = q;
  }

  runQuery() {
    return Promise.resolve(users.find(u => u.id === this.task.id));
  }
}
