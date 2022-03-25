import {SxProps, Theme} from "@mui/material";

export const DatingGroupSx: SxProps<Theme> = {
    height: "180px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden"
}

export const GroupAvatarSx: SxProps<Theme> = {
    width: "100px",
    height: "100px"
}

export const GroupNameSx: SxProps<Theme> = {
    width: "150px",
    height: "2em",

    textAlign: "center",
    wordWrap: "break-word",
    textOverflow: "ellipsis"
}