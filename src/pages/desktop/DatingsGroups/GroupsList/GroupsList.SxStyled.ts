import {SxProps, Theme} from "@mui/material";

export const GroupsCountSx: SxProps<Theme> = {
    mb: "12px",

    color: "text.secondary"
}

export const GroupsListSx: SxProps<Theme> = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(172px, auto))",
}