const getPronoun = (n: number) => {
    if (n % 100 >= 10 && n % 100 <= 20)
        return "";

    if (n % 10 === 1) {
        return "a";
    }
    else if (n % 10 >= 2 && n % 10 <= 4) {
        return "ы";
    }

    return "";
}

export default getPronoun;