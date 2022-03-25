import useAppSelector from "../../../../hooks/appSelector";
import {GroupsGroup} from "@vkontakte/api-schema-typescript";

const searchGroup = (groups: GroupsGroup[]) => {
    const query = useAppSelector(state => state.datingsGroups.searchQuery);

    if (query)
        return groups.filter(
            group => {
                const filteredQuery = query.replace(/[^a-z0-9а-я\s]/gi, '');
                const exp = new RegExp(filteredQuery, "i");
                return group.name.search(exp) !== -1
            }
        )
    else
        return groups;
}

export default searchGroup;