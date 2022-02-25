import React from 'react';
import {Paper} from "@mui/material";
import {PageSx} from "./Page.SxStyled";
import {Routes, Route} from "react-router-dom"
import MainPage from "../../../pages/desktop/MainPage";
import SearchDatings from "../../../pages/desktop/SearchDatings";
import MyDatings from "../../../pages/desktop/NewDating";
import DatingsGroups from "../../../pages/desktop/DatingsGroups";
import UserInfo from "../../../pages/desktop/UserInfo";
import About from "../../../pages/desktop/About";
import Feedback from "../../../pages/desktop/Feedback/Feedback";
import Page404 from "../../../pages/desktop/Page404";
import {
    AboutLink,
    DatingsGroupsLink,
    FeedbackLink,
    MainPageLink,
    MyDatingsLink,
    SearchDatingsLink,
    UserInfoLink
} from "../../../etc/links";
import LoginOnly from "./LoginOnly";
import useAuthState from "../../../hooks/authState";

const Page = () => {
    const isAuth = useAuthState();

    return (
        <Paper sx={PageSx}>
            <Routes>
                <Route
                    path={MainPageLink}
                    element={<MainPage/>}
                />

                <Route
                    path={SearchDatingsLink}
                    element={<LoginOnly isAuth={isAuth} page={<SearchDatings/>}/>}
                />

                <Route
                    path={MyDatingsLink}
                    element={<LoginOnly isAuth={isAuth} page={<MyDatings/>}/>}
                />

                <Route
                    path={DatingsGroupsLink}
                    element={<LoginOnly isAuth={isAuth} page={<DatingsGroups/>}/>}
                />

                <Route
                    path={UserInfoLink}
                    element={<LoginOnly isAuth={isAuth} page={<UserInfo/>}/>}
                />

                <Route
                    path={AboutLink}
                    element={<About/>}
                />

                <Route
                    path={FeedbackLink}
                    element={<Feedback/>}
                />

                <Route
                    path="*"
                    element={<Page404/>}
                />
            </Routes>
        </Paper>
    );
};

export default Page;