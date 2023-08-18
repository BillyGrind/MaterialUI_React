import * as React from "react";
import { useState } from "react";
import { useTheme ,ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { Switch } from "@mui/material";
import DataTable from "./DataTable";
import NavBar from "./NavBar";

function App() {
  const [theme, settheme] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: theme ? "dark" : "light",
    },
  });
  const handleChange = (event) => {
    settheme(event.target.checked);
  };
  return (
    <>
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <label>Dark Mode</label>
          <Switch checked={theme} color="success" onChange={handleChange} />
          <NavBar />
          <DataTable />
        </ThemeProvider>
      </div>
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
