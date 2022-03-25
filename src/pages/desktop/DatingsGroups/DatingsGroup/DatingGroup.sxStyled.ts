import {SxProps, Theme} from "@mui/material";

export const DatingGroupSx: SxProps<Theme> = {
    margin: "12px",

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
    height: "3em",
    mt: "8px",

    textAlign: "center",
    wordWrap: "break-word",
    textOverflow: "ellipsis"
}