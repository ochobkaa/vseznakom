import useAppSelector from "../../../../hooks/appSelector";
import {GroupsGroup} from "@vkontakte/api-schema-typescript";

const searchGroup = (groups: GroupsGroup[]) => {
    const query = useAppSelector(state => state.datingsGroups.searchQuery);

    if (query)
        return groups.filter(
            group => group.name.search(query) !== -1
        )
    else
        return groups;
}

export default searchGroup;