import {useCallback, useEffect, useState} from "react";
import {useThrottle} from "./throttle";

const GET_WIDTH_TIME = 500;

type WidthCallback = (width: number) => boolean;

export const useWidth = (widthCallback: WidthCallback) : boolean => {
    const widthCallbackMemo = useCallback(widthCallback, [widthCallback]);

    const [width, setWidth] = useState(window.innerWidth);
    const widthCallbackIsTrue = widthCallbackMemo(width);

    const throttledWidthCallback = useThrottle(
        (width: number) => setWidth(width),
        GET_WIDTH_TIME
    );

    const onResizeCallback = () => throttledWidthCallback(window.innerWidth);

    useEffect(
        () => {
            window.addEventListener("resize", onResizeCallback);

            return () => window.removeEventListener("resize", onResizeCallback);
        }
    );

    return widthCallbackIsTrue;
}