import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import DataTable from "./DataTable";
import NavBar from "./NavBar";
import DarkMode from "./DarkMode";

function App() {
  return (
    <>
      {/* <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}> */}
      <NavBar />
      <DarkMode />
      <DataTable />
      {/* </ThemeProvider>
      </ColorModeContext.Provider> */}
    </>
  );
}

export default App;

// ex API
// http://universities.hipolabs.com/search?country=Belgium
// https://www.boredapi.com/api/activity

//install npm
// install base
//  npm install @mui/x-data-grid
