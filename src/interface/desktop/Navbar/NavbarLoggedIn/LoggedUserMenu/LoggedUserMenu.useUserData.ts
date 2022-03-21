import useToken from "../../../../../hooks/token";
import VkApi from "../../../../../api/vkApi";

const useUserData = () => {
    const token = useToken();

    const {currentData} = VkApi.useUserGetQuery({
        access_token: token,
        fields: "photo_100"
    });

    return currentData;
}

export default useUserData;