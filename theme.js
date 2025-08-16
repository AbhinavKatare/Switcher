import { createContext, useContext} from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    darktheme: () => {},
    lightTheme: () => {}, 

})

export const Themeprovider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext); 
} 