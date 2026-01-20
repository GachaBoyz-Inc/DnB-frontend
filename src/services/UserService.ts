import type User from "../model/User";
import AbstractApiService from "./AbstractApiService";

class UserService extends AbstractApiService<User> {
  constructor() {
    super("/user");
  }
}

export default new UserService();