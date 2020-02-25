import { ITask } from "../taskRunner/Tasks";

export interface IUpdateUserCommand extends ITask {
  id: string;
  name: string;
}

export const UpdateUserCommand = (
  id: string,
  name: string
): IUpdateUserCommand => {
  return {
    taskName: "updateUser",
    id,
    name
  };
};
