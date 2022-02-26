const checkHash = () => {
    const urlStr = window.location.href;
    const url = new URL(urlStr);
    return Boolean(url.hash);
}

export default checkHash;