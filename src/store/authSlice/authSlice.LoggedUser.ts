import {UsersUser, UsersUserFull} from "@vkontakte/api-schema-typescript";

type LoggedUser = Pick<UsersUserFull, "id" | "first_name" | "last_name" | "city" | "status" | "photo_50" | "photo_400">;

export default LoggedUser;