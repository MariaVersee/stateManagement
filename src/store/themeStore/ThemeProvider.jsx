import { useState } from "react";
import { ThemeContext } from "./themeContext";

export default function ThemeProvider({ children }) {

const [theme,setTheme]=useState("light")


  return <ThemeContext.Provider value={{theme,setTheme}} >
          {children}
    </ThemeContext.Provider>;
}
