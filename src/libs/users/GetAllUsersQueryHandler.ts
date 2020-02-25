import { IQueryHandler } from "../taskRunner/Tasks";
import { IGetAllUsersQuery } from "./GetAllUsersQuery";
import { IUser } from "./User";
import { users } from "../db/users";

export class GetAllUsersQueryHandler implements IQueryHandler<IUser[]> {
  task: IGetAllUsersQuery;

  constructor(q: IGetAllUsersQuery) {
    this.task = q;
  }

  runQuery() {
    return Promise.resolve(users);
  }
}
