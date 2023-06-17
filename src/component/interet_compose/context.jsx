import { createContext} from "react";

export const GetValueContext = createContext({
    value: 0,
    getValue: () => {}
})
