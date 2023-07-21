import { createContext } from "react";

export const GetInfoContext = createContext({
    info: {},
    setInfo: () => {},
    setPage: () => {}
})
