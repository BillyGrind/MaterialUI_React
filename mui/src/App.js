// import TestAPi from "./TestApi";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DataTable from "./DataGrid";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <DataTable />
      </ThemeProvider>
    </>
  );
}

export default App;

// ex API
// http://universities.hipolabs.com/search?country=Belgium
// https://www.boredapi.com/api/activity

//install npm
// install base
// install npm install @mui/x-data-grid
