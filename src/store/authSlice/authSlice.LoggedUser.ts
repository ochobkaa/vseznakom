import {UsersUser} from "@vkontakte/api-schema-typescript";

type LoggedUser = Pick<UsersUser, "first_name" | "photo_50">;

export default LoggedUser;