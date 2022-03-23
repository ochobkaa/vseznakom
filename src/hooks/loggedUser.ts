import useAppSelector from "./appSelector";

const useLoggedUser = () => {
    return useAppSelector(state => state.auth.loggedUser)
}

export default useLoggedUser;