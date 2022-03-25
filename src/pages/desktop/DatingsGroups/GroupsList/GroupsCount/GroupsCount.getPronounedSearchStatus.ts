import useAppSelector from "../../../../../hooks/appSelector";

const getPronounedSearchStatus = (n: number) => {
    const query = useAppSelector(state => state.datingsGroups.searchQuery);

    if (query) {
        if (n % 10 === 1 && n % 100 !== 11) {
            return "Найдена";
        }
        else {
            return "Найдено";
        }
    }

    return "Всего";
}

export default getPronounedSearchStatus;