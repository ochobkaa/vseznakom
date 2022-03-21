import CurrentDomain from "../currentDomain";
import VK_API_VERSION from "../../etc/vkApiVersion";

export const AuthLink = `https://oauth.vk.com/authorize?client_id=8085643&display=page&redirect_uri=${CurrentDomain}&display=page&scope=wall,groups&response_type=token&v=${VK_API_VERSION}`;