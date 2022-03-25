import {SxProps, Theme} from "@mui/material";

export const GroupsListSx: SxProps<Theme> = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, 1fr)",
    gridAutoRows: "1fr",
    gridAutoFlow: "dense",
}