import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {UsersGetParams, UsersGetResponse} from "@vkontakte/api-schema-typescript";
import VK_API_VERSION from "../../etc/vkApiVersion";

interface AccessToken {
    access_token: string
}

const vkApi = createApi({
    reducerPath: "vkApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.vk.com/method/"}),
    endpoints: (build) => ({
        userGet: build.query<UsersGetResponse, UsersGetParams & AccessToken>({
            query: (params ) => ({
                url: "/user.get",
                params: {...params, "v": VK_API_VERSION}
            })
        })
    })
})

export default vkApi;