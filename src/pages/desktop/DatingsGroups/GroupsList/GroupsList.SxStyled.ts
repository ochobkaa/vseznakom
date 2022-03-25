import {SxProps, Theme} from "@mui/material";

export const GroupsListSx: SxProps<Theme> = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(172px, auto))",
}

export const GroupsLoadingSx: SxProps<Theme> = {
    display: "flex",
}

export const GroupsSpinnerSx: SxProps<Theme> = {
    width: "150px",
    height: "150px",
    ml: "auto",
    mr: "auto",
    mt: "100px"
}