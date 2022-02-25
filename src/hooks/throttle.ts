import {useCallback, useRef} from "react";

type Callback<Arg> = (arg: Arg) => void

export const useThrottle = <CallbackArg>(callback: Callback<CallbackArg>, delay: number) => {
    const isThrottled = useRef(false);

    return useCallback(
        (arg: CallbackArg) => {
            if (isThrottled.current) return;

            callback(arg);

            isThrottled.current = true;
            setTimeout(
                () => isThrottled.current = false,
                delay
            )
        },
        [callback, delay]
    )
}