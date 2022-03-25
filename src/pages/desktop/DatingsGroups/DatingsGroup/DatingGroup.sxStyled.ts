import {SxProps, Theme} from "@mui/material";

export const DatingGroupSx: SxProps<Theme> = {
    width: "150px",
    height: "200px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "hidden"
}

export const GroupAvatarSx: SxProps<Theme> = {
    width: "100px",
    height: "100px"
}

export const GroupNameSx: SxProps<Theme> = {
    textAlign: "center"
}