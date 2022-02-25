import React from 'react';
import {Divider, List} from "@mui/material";
import {MenuDividerSx} from "./UserLeftMenu.SxStyled";
import Search from "@mui/icons-material/Search";
import PostAdd from "@mui/icons-material/PostAdd";
import Person from "@mui/icons-material/Person";
import Groups from "@mui/icons-material/Groups";
import Home from "@mui/icons-material/Home";
import LeftMenuLink from "../LeftMenuLink";
import {
    AboutLink,
    DatingsGroupsLink, FeedbackLink,
    MainPageLink,
    MyDatingsLink,
    SearchDatingsLink,
    UserInfoLink
} from "../../../../etc/links";

const UserLeftMenu = () => {
    return (
        <>
            <List component="nav">
                <LeftMenuLink
                    to={MainPageLink}
                    icon={<Home/>}
                    text="Главная"
                />

                <Divider sx={MenuDividerSx}/>

                <LeftMenuLink
                    to={SearchDatingsLink}
                    icon={<Search/>}
                    text="Поиск анкет"
                />

                <LeftMenuLink
                    to={MyDatingsLink}
                    icon={<PostAdd/>}
                    text="Мои анкеты"
                />

                <LeftMenuLink
                    to={DatingsGroupsLink}
                    icon={<Groups/>}
                    text="Группы"
                />

                <LeftMenuLink
                    to={UserInfoLink}
                    icon={<Person/>}
                    text="Информация о пользователе"
                />

                <Divider sx={MenuDividerSx}/>

                <LeftMenuLink
                    to={AboutLink}
                    text="О сайте"
                />

                <LeftMenuLink
                    to={FeedbackLink}
                    text="Обратная связь"
                />
            </List>
        </>
    );
};

export default UserLeftMenu;