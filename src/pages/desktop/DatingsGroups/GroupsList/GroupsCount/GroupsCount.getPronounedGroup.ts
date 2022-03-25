const getPronounedGroup = (n: number) => {
    if (n % 100 >= 10 && n % 100 <= 20)
        return "групп";

    if (n % 10 === 1) {
        return "группа";
    }
    else if (n % 10 >= 2 && n % 10 <= 4) {
        return "группы";
    }

    return "групп";
}

export default getPronounedGroup;