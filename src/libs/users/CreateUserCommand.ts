import { ITask } from "../taskRunner/Tasks";
import { User, IUser } from "./User";

export interface ICreateUserCommand extends ITask {
  user: IUser;
}

export const CreateUserCommand = (name: string): ICreateUserCommand => {
  return {
    taskName: "createUser",
    user: User(name)
  };
};
