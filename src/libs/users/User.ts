export interface IUser {
  id: string;
  name: string;
  createdAt: string;
}

export const User = (name: string) => {
  return {
    id: Math.floor(Math.random() * 100).toString(),
    name,
    createdAt: new Date().toISOString()
  };
};
