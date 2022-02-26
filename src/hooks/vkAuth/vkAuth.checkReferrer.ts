const checkReferrer = () => {
    return document.referrer.search("oauth.vk.com") != -1;
}

export default checkReferrer;