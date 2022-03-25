import {GroupsGroup, GroupsGroupsArray} from "@vkontakte/api-schema-typescript";

interface DatingsGroupsSliceState {
    datingsGroups: GroupsGroup[];
    searchQuery: string;
}

export default DatingsGroupsSliceState;