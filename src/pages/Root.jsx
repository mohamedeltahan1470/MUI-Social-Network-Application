import * as React from "react";
import Appbar from "Mui-Commponent/Appbar";
import Drawerr from "Mui-Commponent/Drawerr";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { grey } from "@mui/material/colors";
import Side from "./Side/Side";

const drawerWidth = 240;

const Root = () => {
  const [mode, setmymode] = React.useState(
    localStorage.getItem("currentTheme") === null
      ? "light"
      : localStorage.getItem("currentTheme") === "light"
      ? "light"
      : "dark"
  );

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            ali: {
              main: "#647488",
            },
            favColor: {
              main: grey[300],
            },
          }
        : {
            ali: {
              main: "teal",
            },
            favColor: {
              main: grey[800],
            },
          }),
    },
  });

  const [noneBlock, setnonBlock] = React.useState("none");
  const [drawertype, setdrawertype] = React.useState("permanent");

  const showDrawer = () => {
    setnonBlock("block");
    setdrawertype("temporary");
  };

  const hideDrawer = () => {
    setnonBlock("none");
    setdrawertype("permanent");
  };

  const [showlist, setShowlist] = React.useState("none");

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Appbar {...{ drawerWidth, showDrawer, setShowlist, showlist }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Drawerr
            {...{
              drawerWidth,
              setmymode,
              noneBlock,
              drawertype,
              setnonBlock,
              setdrawertype,
              hideDrawer,
              setShowlist,
              showlist,
            }}
          />
          <Box
            component="main"
            sx={{
              mt: "64px",
              ml: { xs: "0px", md: "200px" },
            }}
          >
            <Outlet />
          </Box>
          <Box>
            <Side />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Root;
