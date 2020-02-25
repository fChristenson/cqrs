import { ITask } from "../taskRunner/Tasks";

export interface IGetUserQuery extends ITask {
  id: string;
}

export const GetUserQuery = (id: string): IGetUserQuery => {
  return {
    taskName: "getUser",
    id
  };
};
