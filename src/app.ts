import * as express from "express";
import { TaskRunner } from "./libs/taskRunner";
import { GetAllUsersQueryHandler } from "./libs/users/GetAllUsersQueryHandler";
import { GetAllUsersQuery } from "./libs/users/GetAllUsersQuery";
import { GetUserQuery } from "./libs/users/GetUserQuery";
import { GetUserQueryHandler } from "./libs/users/GetUserQueryHandler";
import { UpdateUserCommandHandler } from "./libs/users/UpdateUserCommandHandler";
import { UpdateUserCommand } from "./libs/users/UpdateUserCommand";
import { CreateUserCommand } from "./libs/users/CreateUserCommand";
import { CreateUserCommandHandler } from "./libs/users/CreateUserCommandHandler";

export const app = express();

app.use(express.json());

const runner = new TaskRunner();

app.use(express.json());

app.get("/api/v1/users", async (req, res) => {
  const q = new GetAllUsersQueryHandler(GetAllUsersQuery());
  const users = await runner.run(q);

  res.json(users);
});

app.get("/api/v1/users/:id", async (req, res) => {
  const q = new GetUserQueryHandler(GetUserQuery(req.params.id));
  const user = await runner.run(q);

  res.json(user);
});

app.put("/api/v1/users/:id", async (req, res) => {
  const c = new UpdateUserCommandHandler(
    UpdateUserCommand(req.params.id, req.body.name)
  );
  await runner.run(c);

  res.json();
});

app.post("/api/v1/users", async (req, res) => {
  const c = new CreateUserCommandHandler(CreateUserCommand(req.body.name));
  await runner.run(c);

  res.json();
});
