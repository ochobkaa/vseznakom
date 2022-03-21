import useToken from "../../../../../hooks/token";
import VkApi from "../../../../../api/vkApi";

const useUserData = () => {
    const token = useToken();

    const {currentData} = VkApi.useUserGetQuery({
        access_token: token,
        fields: "photo_100"
    });

    if (currentData) {
        const userData = currentData[0];

        return {
            avatarSrc: userData.photo_100 ?? "",
            lastName: userData.last_name
        }
    }
    else {
        return null;
    }
}

export default useUserData;