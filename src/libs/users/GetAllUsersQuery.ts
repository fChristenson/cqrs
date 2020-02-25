import { ITask } from "../taskRunner/Tasks";

export interface IGetAllUsersQuery extends ITask {}

export const GetAllUsersQuery = (): IGetAllUsersQuery => {
  return {
    taskName: "getAllUsers"
  };
};
