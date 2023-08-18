import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Switch } from "@mui/material";

export default function NavBar(props) {
  const handleToggle = () => {
    props.onChange({ target: { checked: !props.checked } });
  };

  // const theme = props.darkTheme;
  // console.log(props.checked);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Api / Dark Mode
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            {props.checked ? "Light Mode" : "Dark Mode"}
          </Typography>
          <IconButton
            sx={{ ml: 1 }}
            checked={props.checked}
            onClick={handleToggle}
            color="inherit"
          >
            {props.checked ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
