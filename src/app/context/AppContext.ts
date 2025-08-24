import { createContext } from "react";

export const AppContext = createContext<{ headerType: 'back' | 'none', setHeaderType: (value: 'back' | 'none') => void }>({ headerType: 'none', setHeaderType: () => { } })