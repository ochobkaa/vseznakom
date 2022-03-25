import {GroupsGetByIdResponse, GroupsGroup} from "@vkontakte/api-schema-typescript";
import useAppDispatch from "./appDispatch";
import datingsGroupsSlice from "../store/datingsGroupsSlice";
import {useEffect} from "react";
import VkApi from "../api/vkApi";
import VK_API_VERSION from "../etc/vkApiVersion";
import {GROUP_IDS} from "../etc/groups";
import useAppSelector from "./appSelector";

const useDatingsGroups = () => {
    const dispatch = useAppDispatch();
    const actions = datingsGroupsSlice.actions;

    const groups = useAppSelector(state => state.datingsGroups.datingsGroups);

    useEffect(
        () => {
            const groupIdsStr = GROUP_IDS.join(",")
            VkApi.call(
                "groups.getById",
                dispatchDatingsGroups,
                {
                    group_ids: groupIdsStr,
                    v: VK_API_VERSION
                }
            );
        },
        []
    )

    const dispatchDatingsGroups = (groups: { response: GroupsGroup[] }) => {
        dispatch(actions.setDatingsGroups(groups.response));
    }

    return groups;
}

export default useDatingsGroups;