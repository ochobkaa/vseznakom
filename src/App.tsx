import React, {useEffect} from 'react';
import {useWidth} from "./hooks/width";
import Content from "./Content";
import ContentMobile from "./ContentMobile";
import {ThemeProvider} from "@mui/material";
import Palette from "./palette";
import {BrowserRouter} from "react-router-dom";

const MAX_MOBILE_WIDTH = 800

function App() {
    const isMobile = useWidth(
      width => width < MAX_MOBILE_WIDTH
    );

    return (
        <BrowserRouter>
            <ThemeProvider theme={Palette}>
                {isMobile
                  ? <ContentMobile/>
                  : <Content/>
                }
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
