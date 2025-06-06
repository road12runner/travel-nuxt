import type { User } from "better-auth";

declare module "h3" {

  type H3EventContext = {
    user?: Omit<User, "id"> & {
      id: number;
    };
  };
}
